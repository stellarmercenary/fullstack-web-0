import { useState } from "react";

interface prop {
    onClose: () => void;
}

export default function InputCard({ onClose }: prop) {
    const [defaultMenu, setDefault] = useState(true);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [size, setSize] = useState("300px");
    const [cardSize, setCardSize] = useState("400px");
    const [selectedImage, setSelectedImage] = useState<string | File>(
        "/app/Components/Post/Img/jane-01.jpeg"
    );
    const [hidden, setHidden] = useState(true);
    const [file, setFile] = useState<File | null>(null);

    const handleSubmit = () => {
        const id = Date.now().toString();
        if (file) {
            // User upload image dari local storage
            const formData = new FormData();
            formData.append("img", file);
            formData.append("judul", title);
            formData.append("caption", description);
            formData.append("size", size);
            formData.append("cardSize", cardSize);
            formData.append("id", id);

            fetch("http://localhost:5174/api/upload", {
                method: "POST",
                body: formData,
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log("Respon upload:", data);
                    onClose();
                })
                .catch((err) => {
                    console.error("Gagal upload file:", err);
                });
        } else {
            // User pilih image dari default URL
            const postData = {
                judul: title,
                caption: description,
                img: selectedImage,
                size: size,
                cardSize: cardSize,
                id: id,
            };

            fetch("http://localhost:5174/api/post", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(postData),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log("Respon JSON:", data);
                    onClose(); // Tutup input card
                })
                .catch((err) => {
                    console.error("Gagal kirim JSON:", err);
                    console.log(postData);
                });
        }
    };

    const images = [
        "/app/Components/Post/Img/jane-00.jpeg",
        "/app/Components/Post/Img/jane-01.jpeg",
        "/app/Components/Post/Img/jane-02.jpeg",
        "/app/Components/Post/Img/jane-03.jpeg",
        "/app/Components/Post/Img/jane-04.jpeg",
        "/app/Components/Post/Img/jane-05.jpeg",
        "/app/Components/Post/Img/jane-06.jpeg",
        "/app/Components/Post/Img/jane-07.jpeg",
        "/app/Components/Post/Img/jane-08.jpeg",
        "/app/Components/Post/Img/jane-09.jpeg",
        "/app/Components/Post/Img/jane-10.jpeg",
        "/app/Components/Post/Img/jane-11.jpeg",
    ];

    const sizeofImage = [
        { name: "hrz", value: "100px", value2: "200px" },
        { name: "box", value: "200px", value2: "300px" },
        { name: "vrt", value: "300px", value2: "400px" },
    ];

    return (
        <div
            onClick={onClose}
            className="absolute w-full h-screen z-50 top-0 bg-black/5 bg-opacity-10 backdrop-blur-sm flex justify-center items-center pt-[80px]">
            {defaultMenu && (
                <div
                    onClick={(e) => e.stopPropagation()}
                    className="relative w-[800px] h-[500px]">
                    <div className="w-full h-full p-10 bg-neutral-900 border-[1px] border-neutral-500 rounded-2xl flex flex-col justify-start items-center gap-5">
                        {/* header */}
                        <h1 className="w-full h-[50px] align-middle text-center text-2xl">
                            Your Post
                        </h1>

                        {/* content */}
                        <div className="flex w-full justify-evenly">
                            {/* image preview*/}
                            <div className="relative w-[250px] h-[300px] flex items-start">
                                <div
                                    className={`relative overflow-hidden w-full border-[1px] border-neutral-500 rounded-2xl`}
                                    style={{ height: size }}
                                    onClick={() => setDefault(false)}>
                                    <img
                                        src={`${selectedImage}`}
                                        alt="jane officer"
                                        className={`z-30 w-full h-full object-cover`}
                                    />
                                </div>
                            </div>

                            {/* Judul dan Captions  dan kategori*/}
                            <div className="w-[400px] h-[300px]  flex flex-col justify-start items-center gap-5">
                                <input
                                    type="text"
                                    placeholder="Judul"
                                    className="w-full h-[50px] p-2 bg-neutral-800 border-[1px] border-neutral-500 rounded-[10px]"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                                <textarea
                                    placeholder="Ketikkan sesuatu"
                                    className="w-full h-[120px] p-2 bg-neutral-800 border-[1px] border-neutral-500 rounded-[10px] customs-scrollbar"
                                    value={description}
                                    onChange={(e) =>
                                        setDescription(e.target.value)
                                    }
                                />
                                {/* kategori */}
                                <div className="w-full h-[40px] flex items-center justify-start">
                                    <div className="w-[80px] h-full flex items-center justify-evenly">
                                        <button className="h-full w-full">
                                            Categories:
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tombol POst */}
                    <div className="absolute bottom-5 right-5 w-full h-[50px] flex items-center justify-end">
                        <button
                            onClick={() => {
                                handleSubmit();
                                onClose();
                            }}
                            className="h-[40px] w-[80px] rounded-[10px] bg-blue-600 text-white hover:bg-white transition-all hover:text-black text-[15px] hover:text-[17px] flex items-center justify-center">
                            <b>POST</b>
                        </button>
                    </div>

                    {/* Tombol ubah ukuran dan upload images*/}
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="absolute top-0 w-full h-[100px] z-20 px-10 flex items-end justify-evenly">
                        <div className="w-[250px]">
                            {hidden ? (
                                <div className="flex justify-start items-center h-[30px] w-full gap-2">
                                    {/* upload */}
                                    <label className="cursor-pointer rounded-2xl flex items-center justify-center h-full w-[80px] bg-blue-400 border border-white hover:bg-white text-white hover:text-black">
                                        <div className=" inline-block ">
                                            Upload
                                        </div>
                                        <input
                                            type="file"
                                            className="hidden"
                                            onChange={(e) => {
                                                if (
                                                    e.target.files &&
                                                    e.target.files[0]
                                                ) {
                                                    const file =
                                                        e.target.files[0];
                                                    setFile(file); // simpan file
                                                    setSelectedImage(
                                                        URL.createObjectURL(
                                                            file
                                                        )
                                                    ); // update preview
                                                }
                                            }}
                                        />
                                    </label>
                                    {/* crop */}
                                    <button
                                        onClick={() => setHidden(false)}
                                        className="flex items-center justify-center h-full w-[60px] border-1 border-white rounded-2xl hover:bg-white hover:text-black transition-colors">
                                        Crop
                                    </button>
                                </div>
                            ) : (
                                <div className="h-[30px] w-full flex justify-between">
                                    {sizeofImage.map((key, idx) => (
                                        <button
                                            key={idx}
                                            className={`h-full w-[60px] border-1 border-white rounded-2xl hover:bg-white hover:text-black`}
                                            onClick={() => {
                                                setSize(key.value);
                                                setCardSize(key.value2);
                                            }}>
                                            {key.name}
                                        </button>
                                    ))}
                                    <button
                                        className="w-[30px] h-full border-1 border-white rounded-2xl p-1 flex items-center justify-center bg-white text-black hover:border-black transition-all"
                                        onClick={() => setHidden(true)}>
                                        OK
                                    </button>
                                </div>
                            )}
                        </div>

                        <div className="w-[400px]"></div>
                    </div>
                </div>
            )}

            {!defaultMenu && (
                <div
                    onClick={(e) => e.stopPropagation()}
                    className="relative overflow-hidden w-[800px] h-[500px] p-10 gap-5 bg-neutral-900 border-[1px] border-neutral-500 rounded-2xl flex flex-col justify-start items-center">
                    <h1 className="w-full h-[50px]  text-2xl flex items-center justify-center font-serif font-bold">
                        SELECT YOUR JANE
                    </h1>
                    {/* Button */}
                    <div className="absolute top-10 right-10 w-full h-[50px] flex items-center justify-end">
                        <button
                            className="font-sans font-thin right-12 h-[30px] w-[70px] rounded-[10px] bg-[#2f2f2f] border-[1px] border-zinc-400 text-white hover:bg-gradient-to-br hover:to-black hover:from-[#2f2f2f] transition-all hover:text-white text-[15px] flex items-center justify-center"
                            onClick={() => setDefault(true)}>
                            <b>OK</b>
                        </button>
                    </div>

                    {/* Gambar */}
                    <div className="w-full h-auto grid grid-cols-4 gap-2 overflow-y-auto">
                        {images.map((img, idx) => (
                            <div
                                key={idx}
                                onClick={() => setSelectedImage(img)}
                                className={`h-[100px] hover:border-zinc-400 hover:border-[1px] w-full cursor-pointer rounded-lg overflow-hidden  ${
                                    selectedImage === img
                                        ? "border-blue-400 border-[2px]"
                                        : "border-zinc-600 border-[0.2px]"
                                }`}>
                                <img
                                    src={img}
                                    alt={"img-${idx}"}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
