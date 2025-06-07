import { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

const PostEdit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [judul, setTitle] = useState("");
    const [caption, setDesc] = useState("");
    const [image, setImage] = useState("");

    useEffect(() => {
        fetch(`http://localhost:5174/api/post/${id}`)
            .then((res) => res.json())
            .then((post) => {
                setTitle(post.judul);
                setDesc(post.caption);
                setImage(post.img);
            });
    }, [id]);
    

    const handleEdit = () => {
        fetch(`http://localhost:5174/api/post/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ judul, caption }),
        })
            .then((res) => res.json())
            .then(() => {
                navigate(`/postDetail/${id}`);
            })
            .catch((err) => console.error("Gagal update:", err));
    };

    return (
        <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center pt-[80px]">
                <div className="absolute bg-zinc-800 w-[500px] h-[300px] rounded-md p-5 flex flex-col items-center justify-center gap-2" >
                    <h2 className="text-2xl font-bold mb-4">Edit Post</h2>
                    <input
                        value={judul}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Judul"
                        className="w-full mb-3 p-2 rounded bg-zinc-700 text-white"
                    />
                    <textarea
                        value={caption}
                        onChange={(e) => setDesc(e.target.value)}
                        placeholder="Deskripsi"
                        className="w-full mb-3 p-2 rounded bg-zinc-700 text-white"
                    />
                    <div className="flex justify-between w-full">
                        <button
                            onClick={() => navigate(`/postDetail/${id}`)}
                            className="bg-gray-500 hover:bg-gray-600 px-4 py-2 rounded">
                            Batal
                        </button>
                        <button
                            onClick={handleEdit}
                            className="bg-teal-500  hover:bg-teal-600 px-4 py-2 rounded">
                            Simpan
                        </button>
                    </div>
                </div>
        </div>
    );
};

export default PostEdit;

// [
    //         { icon: Play, label: "Play", index: "0" },
    //         { icon: Repeat, label: "Repeat", index: "1" },
    //         { icon: Shuffle, label: "Shuffle", index: "2" },
    //     ],
    //     [
    //         { icon: SkipBack, label: "Prev", index: "3" },
    //         { icon: Pause, label: "Pause", index: "4" },
    //         { icon: SkipForward, label: "Next", index: "5" },
    //         { icon: Maximize, label: "Maximize", index: "6" },
    //         { icon: Settings, label: "Settings", index: "7" },
    //     ],
