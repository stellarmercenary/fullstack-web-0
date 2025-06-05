import { Play } from "lucide-react";
import { useEffect, useState } from "react";
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
        <div className="min-h-screen bg-blue-400 text-white flex flex-col justify-center items-center p-6">
            <div className="w-[500px] bg-zinc-300 h-[300px] border-2 border-white shadow-lg flex flex-col items-center gap-3">
                {/* header */}
                <div className="w-full h-8 bg-[#000080] flex justify-end p-1">
                    <h1 className="h-full bg-gray-300 aspect-square border text-center grid place-items-center leading-none hover:bg-red-600">
                        x
                    </h1>
                </div>
                {/* i dont know what is it*/}
                <div className="w-full h-18 flex">
                    {/* left */}
                    <div className="w-1/2 px-4 h-full">
                        <div className="border w-full h-full overflow-hidden border-white bg-black">
                            <img
                                src={image}
                                alt=""
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                    </div>
                    {/* right */}
                    <div className="w-1/2 h-full flex flex-col px-4">
                        <div className="w-full h-1/2 flex">
                            <div className="w-3/5 h-full p-1">
                                <button className="w-full h-full border border-b-black border-r-black hover:border-2">
                                    <Play className="w-full h-full" />
                                </button>
                            </div>
                            <div className="w-1/5 h-full border"></div>
                            <div className="w-1/5 h-full border"></div>
                        </div>
                        <div className="w-full h-1/2 flex">
                            <div className="w-1/5 h-full border"></div>
                            <div className="w-1/5 h-full border"></div>
                            <div className="w-1/5 h-full border"></div>
                            <div className="w-1/5 h-full border"></div>
                            <div className="w-1/5 h-full border"></div>
                        </div>
                    </div>
                </div>
                {/* kolom input perubahan */}
                <div className="w-full border-y flex felx-col flex-1"></div>
                <div className="w-full border-t flex felx-col h-8"></div>
            </div>
        </div>
    );
};

export default PostEdit;

{
    /* <h2 className="text-2xl font-bold mb-4">Edit Post</h2>
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
                </div>*/
}
