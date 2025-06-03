const express = require("express"); // Modul express untuk menangani request
const fs = require("fs"); // Modul bawaan Node.js untuk read/write file
const cors = require("cors"); // Mengizinkan request dari frontend
const multer = require("multer"); // Middleware untuk menangani file upload
const path = require("path"); // Modul untuk menangani path file
const PORT = 5174; // Port backend
const app = express(); // Membuat instance aplikasi Express
app.use(cors()); // Mengaktifkan CORS
app.use(express.json()); // Menggunakan middleware untuk parsing JSON

// Set penyimpanan untuk multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/"); // Folder tempat menyimpan gambar
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, uniqueSuffix + path.extname(file.originalname)); // Menyimpan dengan nama unik
    },
});
const upload = multer({ storage }); // Inisialisasi multer dengan storage yang telah ditentukan
// Endpoint untuk mengupload gambar
app.post("/api/upload", upload.single("img"), (req, res) => {
    const file = req.file;
    const { judul, caption, size, cardSize, id } = req.body;

    if (!file) {
        return res.status(400).json({ message: "No file uploaded" });
    }

    const imgUrl = `http://localhost:${PORT}/uploads/${file.filename}`; // URL gambar
    console.log(imgUrl);
    const newPost = {
        judul,
        caption,
        img: imgUrl,
        size,
        cardSize,
        id,
    };

    fs.readFile("posts.json", "utf8", (err, data) => {
        let posts = [];
        if (!err && data) posts = JSON.parse(data); // Parse data JSON jika ada

        posts.push(newPost); // Tambahkan post baru ke array
        fs.writeFile("posts.json", JSON.stringify(posts, null, 2), (err) => {
            if (err) return res.status(500).json({ message: "Gagal simpan" });
            res.status(200).json({
                message: "Berhasil disimpan",
                post: newPost,
            });
        });
    });
});
// Middleware untuk mengakses file statis di folder uploads
app.use("/uploads", express.static("uploads"));
// Endpoint untuk mengirim data post
app.post("/api/post", (req, res) => {
    const { judul, caption, img, size, cardSize, id } = req.body;
    // const newpost1 = req.body;
    // const imgUrl1 = `http://localhost:5173/${img}`;
    const newpost1 = {
        judul,
        caption,
        img,
        size,
        cardSize,
        id,
    };

    fs.readFile("posts.json", "utf8", (err, data) => {
        let posts = [];
        if (!err && data) {
            posts = JSON.parse(data); // Parse data JSON jika ada
        }

        posts.push(newpost1); // Tambahkan post baru ke array
        fs.writeFile("posts.json", JSON.stringify(posts, null, 2), (err) => {
            if (err) return res.status(500).json({ message: "Gagal simpan" });
            res.status(200).json({
                message: "Berhasil disimpan dengan api post",
                post: newpost1,
            });
        });
    });
});
// Endpoint untuk hapus post
app.delete("/api/post/:id", (req, res) => {
    const { id } = req.params;

    fs.readFile("posts.json", "utf8", (err, data) => {
        if (err) return res.status(500).json({ message: "Gagal baca data" });

        let posts = [];
        if (data) posts = JSON.parse(data);

        // Cari index post dengan ID yang cocok
        const index = posts.findIndex((post) => post.id.toString() === id);
        if (index === -1)
            return res.status(400).json({ message: "Post tidak ditemukan" });

        const postToDelete = posts[index];

        if (
            postToDelete.img &&
            postToDelete.img.includes(`http://localhost:${PORT}/uploads/`)
        ) {
            const fileName = path.basename(postToDelete.img);
            const filePath = path.join(__dirname, "uploads", fileName);

            fs.unlink(filePath, (err) => {
                if (err) console.error("Gagal hapus file gambar:", err);
            });
        }

        posts.splice(index, 1);

        fs.writeFile("posts.json", JSON.stringify(posts, null, 2), (err) => {
            if (err)
                return res.status(500).json({ message: "Gagal simpan data" });

            res.json({ message: "Post berhasil dihapus" });
        });
    });
});
// Endpoint untuk mendapatkan semua post
app.get("/api/post", (req, res) => {
    fs.readFile("posts.json", "utf8", (err, data) => {
        if (err) return res.status(500).json({ message: "Gagal baca file" });

        const posts = JSON.parse(data || "[]"); // Parse data JSON atau gunakan array kosong
        res.status(200).json(posts);
    });
});
// GET post by ID
app.get("/api/post/:id", (req, res) => {
    const { id } = req.params;

    fs.readFile("posts.json", "utf8", (err, data) => {
        if (err) return res.status(500).json({ message: "Gagal baca data" });

        const posts = JSON.parse(data);
        const post = posts.find((p) => p.id.toString() === id);
        if (!post)
            return res.status(404).json({ message: "Post tidak ditemukan" });

        res.json(post);
    });
});
// PUT update post
app.put("/api/post/:id", (req, res) => {
    const { id } = req.params;
    const { judul, caption } = req.body;

    fs.readFile("posts.json", "utf8", (err, data) => {
        if (err) return res.status(500).json({ message: "Gagal baca data" });
        let posts = JSON.parse(data);
        const index = posts.findIndex((post) => post.id.toString() === id);
        if (index === -1)
            return res.status(404).json({ message: "Post tidak ditemukan" });
        if (judul) posts[index].judul = judul;
        if (caption) posts[index].caption = caption;

        fs.writeFile("posts.json", JSON.stringify(posts, null, 2), (err) => {
            if (err)
                return res.status(500).json({ message: "Gagal simpan data" });
            res.json({ message: "Post berhasil diupdate" });
        });
    });
});
// Menjalankan server
app.listen(PORT, () => {
    console.log(`Server ready di http://localhost:${PORT}`);
});
