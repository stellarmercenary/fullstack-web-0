import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import InputCard from "~/Components/Post/InputCard";

const News: React.FC = () => {
    const [showInputCard, setShowInputCard] = useState(false);
    const [posts, setPosts] = useState([]);

    const fetchPosts = (retry = 1) => {
        fetch("http://localhost:5174/api/post")
            .then((res) => res.json())
            .then((data) => {
                setPosts(data);

                if (retry > 0) {
                    setTimeout(() => fetchPosts(retry - 1), 1500);
                }
            })
            .catch((err) => console.error(err));
    };

    useEffect(() => {
        fetchPosts();
    }, [showInputCard]);

    const cols = [[], [], [], []];
    if (Array.isArray(posts)) {
        posts.forEach((post, idx) => {
            if (post && typeof post === "object") {
                cols[idx % 4].push(post);
            }
        });
    }

    return (
        <div className="relative bg-amber-50">
            {/* News Eridu Logo */}
            <div className="absolute z-50 left-[-5%] top-5 w-[30%]">
                <img src="/Asset/news ridu.png" alt="News Eridu" />
            </div>

            {/* News Section */}
            <div className="min-h-[480px] w-full bg-black text-white pt-[80px] relative">
                {/* Header */}
                <div className="z-40 flex justify-center items-center h-[60px] relative bg-black">
                    <h1 className="text-4xl font-bold">News Eridu</h1>
                    <div className="z-40 w-full h-[60px] flex justify-end gap-2 items-center px-10 absolute top-0 right-0">
                        {/* Search bar */}
                        <div className="border-b border-gray-300 w-[200px] bg-gradient-to-br h-[40px] flex justify-between gap-2 items-center overflow-hidden">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="bg-transparent text-white italic placeholder-white focus:outline-none w-full"
                            />
                            <img
                                src="/Asset/icon/search-1.png"
                                alt="search"
                                className="h-full w-auto object-cover p-1 rounded-full"
                            />
                        </div>

                        {/* Filter */}
                        <div className="z-40 border-2 border-gray-400 w-[150px] bg-[#2f2f2f] rounded-4xl h-[40px] flex justify-center items-center relative">
                            <h1 className="text-white font-bold">
                                <i>Filter</i>
                            </h1>
                            <img
                                src="/Asset/icon/upsidedown-triangle-1.png"
                                alt="filter"
                                className="h-full w-auto object-cover p-2 rounded-full absolute right-1"
                            />
                            <div className="z-40 absolute top-full mt-1 left-0 w-full bg-[#3a3a3a] rounded-xl shadow hidden opacity-0 scale-95 transition-all duration-300">
                                <ul className="text-white p-2 space-y-1">
                                    <li className="hover:bg-zinc-600 px-2 py-1 rounded cursor-pointer">
                                        Latest
                                    </li>
                                    <li className="hover:bg-zinc-600 px-2 py-1 rounded cursor-pointer">
                                        Popular
                                    </li>
                                    <li className="hover:bg-zinc-600 px-2 py-1 rounded cursor-pointer">
                                        Archived
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* post */}
                <div className="min-h-[0] h-[490px] w-[100%] flex px-[10%] justify-evenly items-start overflow-y-auto [scrollbar-gutter:stable] relative pb-[60px]">
                    {cols.map((colPosts, idx) => (
                        <div key={idx} className="flex flex-col justify-start items-center w-[250px] min-h-[100px] py-[20px] gap-[20px]">
                            {colPosts.map(
                                (
                                    posts: {
                                        img: string;
                                        judul: string;
                                        caption: string;
                                        size: string;
                                        cardSize: string;
                                        id: number;
                                    },
                                    index
                                ) => (
                                    <Link
                                        key={index}
                                        to={`/postDetail/${posts.id}`}
                                        state={{ posts }}
                                        className={`relative z-20 w-full min-h-[200px]`}>
                                        <div
                                            className={`hover:border-white w-full flex flex-col justify-between items-center border-2 rounded-2xl rounded-br-none overflow-hidden relative border-gray-400 shadow-[0_0_10px_rgba(255,255,255,0.2)]`}
                                            style={{ height: posts.cardSize }}>
                                            {/*  Bagian 1 */}
                                            <div
                                                className={`overflow-hidden w-full relative`}
                                                style={{ height: posts.size }}>
                                                <img
                                                    src={posts.img}
                                                    alt="img"
                                                    className="w-full h-full object-cover transition-opacity duration-300"
                                                />
                                            </div>
                                            {/* Bagian 2 */}
                                            <div className="relative w-full h-[100px]">
                                                <div className="w-full h-full flex flex-col justify-start  p-2 pt-0 bg-[#1e1e1e] text-white">
                                                    {/* profile prototype*/}
                                                    <div className="relative w-full h-[20px] ">
                                                        <h1 className="absolute left-11 bottom-0 h-full text-[12px] font-bold text-gray-400 underline">
                                                            ur_daff
                                                        </h1>
                                                        <div className="w-[40px] h-[40px] rounded-[100%] absolute bottom-0 z-100 overflow-hidden border-2 border-[#2f2f2f]">
                                                            <img
                                                                src="/app/Components/Post/Img/eous-00.jpeg"
                                                                alt="profile picture prototype"
                                                                className="w-full h-[auto] object-cover"
                                                            />
                                                        </div>
                                                    </div>
                                                    {/* Judul & Capions */}
                                                    <div className="flex flex-col items-start justify-start h-[70px] overflow-y-hidden pb-10 ">
                                                        <h1 className="font-extrabold text-white text-start font-sans">
                                                            {posts.judul}
                                                        </h1>
                                                        <p className="text-[10px] text-justify text-gray-400 font-bold">
                                                            {posts.caption}
                                                        </p>
                                                    </div>
                                                </div>
                                                {/* like, comment*/}
                                                <div className="absolute top-0 h-[20px] w-full  flex justify-end items-center px-2">
                                                    <div className="h-full flex gap-1">
                                                        <div className="w-[20px]">
                                                            <img
                                                                src="/Asset/icon/favorite-1.png"
                                                                alt="prototype"
                                                                className="w-full h-full"
                                                            />
                                                        </div>
                                                        <h1 className="h-full text-[10px] flex items-center">
                                                            Likes
                                                        </h1>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            )}
                        </div>
                    ))}
                </div>

                {/* Post Button*/}
                <button
                    className="absolute bottom-20 right-10 z-30 w-[100px] h-[40px] bg-gradient-to-br from-teal-700 rounded-2xl border-[1px] border-neutral-500 to-black flex justify-evenly items-center hover:from-white "
                    onClick={() => setShowInputCard(true)}>
                    <img
                        src="app/Components/Post/Icon/file-plus.svg"
                        alt="Post"
                        className="w-[25px] h-[25px] object-cover bg-white rounded-full"
                    />
                    <h1 className="">add</h1>
                </button>

                {/* InputCard */}
                {showInputCard && (
                    <InputCard onClose={() => setShowInputCard(false)} />
                )}
                {/* BG */}
                <div className="w-full h-full">
                    <div className="absolute z-0 left-[2%] top-[40%] text-8xl font-extrabold opacity-20 down1">
                        <div className="flex flex-col justify-center items-center">
                            <h1>R</h1>
                            <h1>A</h1>
                            <h1>I</h1>
                            <h1>D</h1>
                            <h1>E</h1>
                            <h1>N</h1>
                        </div>
                    </div>
                    <div className="absolute z-0 left-[8%] top-[60%] text-8xl font-extrabold opacity-20 down2">
                        <div className="flex flex-col justify-center items-center">
                            <h1>C</h1>
                            <h1>A</h1>
                            <h1>N</h1>
                            <h1>T</h1>
                            <h1>I</h1>
                            <h1>K</h1>
                        </div>
                    </div>
                    <div className="absolute z-0 right-[2%] top-[10%] text-8xl font-extrabold opacity-20 down2">
                        <h1>NEWST</h1>
                        <h1>NEWST</h1>
                        <h1>NEWST</h1>
                    </div>
                    <div className="absolute z-0 right-[50%] top-[10%] text-8xl font-extrabold opacity-20 down2">
                        <h1>1101</h1>
                        <h1>1110</h1>
                        <h1>0010</h1>
                    </div>
                </div>
            </div>
            {/* Page Navigation */}
            <div className="w-full border-y-gray-500 border-y h-[60px] z-40 bg-black absolute bottom-0 flex justify-center gap-3 items-center text-white">
                <div className="h-[40px] w-[45px] border border-white flex justify-center items-center text-[#2f2f2f] np-hover">
                    <a href="#">prev</a>
                </div>
                <div className="h-[40px] w-[40px] border border-white flex justify-center items-center bg-blue-500 np-hover">
                    <a href="#">1</a>
                </div>
                <div className="h-[40px] w-[40px] border border-white flex justify-center items-center np-hover">
                    <a href="#">2</a>
                </div>
                <div className="h-[40px] w-[40px] border border-white flex justify-center items-center np-hover">
                    <a href="#">3</a>
                </div>
                <div className="h-[40px] w-[20px] flex justify-center items-end">
                    <a href="#">...</a>
                </div>
                <div className="h-[40px] w-[40px] border border-white flex justify-center items-center np-hover">
                    <a href="#">5</a>
                </div>
                <div className="h-[40px] w-[45px] border border-white flex justify-center items-center np-hover">
                    <a href="#">next</a>
                </div>
            </div>
        </div>
    );
};

export default News;
