import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function PostDetail() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    type Post = {
        judul: string;
        caption: string;
        img: string;
        size: string;
        cardSize: string;
        id: string;
    };
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        fetch("http://localhost:5174/api/post")
            .then((res) => res.json())
            .then((data) => {
                console.log("Fetched posts");
                setPosts(data);
            });
    }, []); // <- hanya jalan sekali saat mount

    if (!posts.length) return <p className="pt-[80px]">gagal fetch...</p>;
    const post = posts.find((p: Post) => p.id === id);
    if (!post)
        return (
            <p className="pt-[100px] z-100 w-full bg-amber-800">
                Post tidak ditemukan
            </p>
        );

    const handleDelete = () => {
        fetch(`http://localhost:5174/api/post/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then(() => navigate("/news"))
            .catch((err) => console.error("Gagal delete:", err));
        console.log("Deleting post with ID:", id);
    };

    return (
        <div className="h-screen w-full relative bg-zinc-800">
            {/* main */}
            <div className="z-20 absolute w-full h-full pt-[80px] flex justify-center items-center border-b border-white">
                {/* left */}
                <div className="w-2/5 h-full box-border py-[50px]">
                    <div className="w-full h-full bg-zinc-900 flex items-center justify-center">
                        <div className="rounded-xl overflow-hidden w-[400px] h-[400px] relative border-2">
                            <img
                                src={post?.img}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
                {/* right */}
                <div className="p-[70px] h-full flex flex-col justify-start items-center flex-1">
                    {/* Top */}
                    <div className="w-full flex flex-col justify-start bg-zinc-700 px-2 h-[300px] border-box mb-2">
                        {/* judul/header */}
                        <div className="w-full h-[60px] p-3 relative overflow-hidden flex justify-start border-b border-gray-500">
                            <h1 className="text-2xl font-bold text-white font-sans">
                                {post.judul}
                            </h1>
                        </div>
                        {/* caption */}
                        <div className="flex-1 flex  w-full p-3">
                            <p className="text-white">{post.caption}</p>
                        </div>
                    </div>

                    
                    {/* bottom/Comment */}
                    <div className="h-[200px] w-full overflow-y-scroll custom-scrollbar flex flex-col items-center">
                        <h2 className="font-semibold text-white w-full text-center">Comments:</h2>
                        <div className="space-y-2 pt-4 w-full">
                            <div className="bg-zinc-600 p-2 rounded">
                                <h1 className="text-zinc-200">
                                    dafeelatte_: i wanna eat her...
                                </h1>
                            </div>
                            <div className="bg-zinc-600 p-2 rounded">
                                <h1 className="text-zinc-200">
                                    khadafii_inf: pls call me "Good Boy"
                                </h1>
                            </div>
                            <div className="bg-zinc-600 p-2 rounded">
                                <h1 className="text-zinc-200">
                                    khadafii_inf: pls call me "Good Boy"
                                </h1>
                            </div>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex pt-2 gap-4 justify-between w-full">
                        <div className="flex gap-4">
                            <button
                                onClick={handleDelete}
                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">
                                Delete
                            </button>
                            <button
                                onClick={() => navigate(`/postEdit/${post.id}`)}
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                                Edit
                            </button>
                            <button
                                onClick={() => navigate(`/news`)}
                                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-500">
                                Back
                            </button>
                        </div>
                    </div>
                    
                </div>
            </div>

            {/* border */}
            <div className="z-10 absolute w-full h-full pt-[80px] flex flex-col justify-between">
                <div className="h-[50px] w-full bg-black"></div>
                <div className="h-[50px] w-full bg-black"></div>
            </div>
        </div>
    );
}
