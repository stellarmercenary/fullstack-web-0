const express = require("express"); //manggil modul express buat buka jalan dan nangkep post dari frontend
const fs = require("fs"); //manggil modul bawaan node js yang punya fitur read and write server(buat nulis datanya di json)
const cors = require("cors"); //ngasih izin request dari front end
const bodyParser = require("body-parser"); //buat ngerubah data yang dikiim jadi objek

const app = express(); //Membuat instance aplikasi Express yang bisa menggunakan fungsi-fungsi seperti app.get(), app.post(), dll.
const PORT = 5174; //port backend

app.use(cors()); //pasang fitur perizinan ke aplikasi
app.use(bodyParser.json()); //pasang  fitur translate ke aplikasi

//ini handler post(data) yang dikirm dari frontend
//api/post itu url endpoint buat frontend ngirim request
app.post("/api/post", (req, res) => {
  const newPost = req.body; //ambil data dari client

  fs.readFile("posts.json", "utf8", (err, data) => {
    let posts = []; //bikin array buat nyimpen data

    if (!err && data) {
      posts = JSON.parse(data); //isi file json diubah ke array javascript sekalian masukin data file ke array posts ini
    }

    posts.push(newPost); //nambahin isi request ke aray posts jadi data yang udah ada di json dan data dari user diatuin?

    fs.writeFile("posts.json", JSON.stringify(posts, null, 2), (err) => {
      if (err) return res.status(500).json({ message: "Gagal simpan" }); //buat ngasih pesan error
      res.status(200).json({ message: "Berhasil disimpan" }); //buat ngasih pesan selesai diwrite
    });
  });

});

app.get("/api/post", (req, res) => {
  fs.readFile("posts.json", "utf8", (err, data) => {
    if (err) return res.status(500).json({ message: "Gagal baca file" });

    const posts = JSON.parse(data || "[]");
    res.status(200).json(posts);
  });
});

app.listen(PORT, () => { //jalanin server
  console.log(`Server ready di http://localhost:${PORT}`);
});



