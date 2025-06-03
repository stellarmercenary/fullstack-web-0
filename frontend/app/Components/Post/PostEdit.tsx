import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const PostEdit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [judul, setTitle] = useState("");
    const [caption, setDesc] = useState("");

    useEffect(() => {
        fetch(`http://localhost:5174/api/post/${id}`)
            .then((res) => res.json())
            .then((post) => {
                setTitle(post.judul);
                setDesc(post.caption);
                console.log(post);
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
        <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center p-6">
            <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
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
                <div className="flex justify-between">
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
