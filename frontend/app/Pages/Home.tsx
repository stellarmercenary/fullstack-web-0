import React from "react";

const HomePage: React.FC = () => {
    return (
        <div className="bg-zinc-950 relative">
            {/* Section 1 - Hero */}
            <div className="w-full h-[600px] flex justify-center mb-[40px] pt-[100px] sidebar-mark transition-all duration-300 ease-in-out">
                <section className="hover:border-zinc-400 hover:border-[0.5px] shadow-[0_0_10px_rgba(255,255,255,0.2)] homecard w-[1000px] h-full bg-black flex flex-col justify-start rounded-[10px] overflow-hidden border-[0.5px] border-gray-400 relative transition-all duration-300 ease-in-out">
                    {/* Film frame */}
                    <div className="absolute top-[-30%] left-0 z-10 down">
                        <img src="/Asset/film.png" className="opacity-100" />
                    </div>
                    <div className="absolute top-[-30%] right-0 z-10 down">
                        <img src="/Asset/film.png" className="opacity-100" />
                    </div>

                    {/* Title */}
                    <div className="z-0 w-full rounded-t-[10px] h-[50%] pt-[20px] flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 to-black relative overflow-hidden transition-all duration-100">
                        <h1
                            className="z-10 text-7xl font-extrabold font-[jura] text-white transition-all"
                            data-text="PHAETHON">
                            PHAETHON
                        </h1>
                        <p className="text-lg text-gray-500 mt-2 font-jura">
                            Beyond the unseen, where no one else to tread
                        </p>
                        <h1 className="z-0 hover:text-transparent opacity-20 absolute bg-gradient-to-br from-gray-600 to-black text-transparent bg-clip-text font-extrabold text-8xl top-5 left-[50%] animate-shift">
                            PHAETHON
                        </h1>
                    </div>

                    {/* 3 Content Boxes */}
                    <div className="z-20 w-full h-[50%] rounded-b-[10px] flex items-center justify-center gap-5 flex-wrap relative">
                        {[
                            {
                                src: "Miyabi-00.jpeg",
                                title: "Miyabi Showcase!!!",
                                color: "bg-gray-700",
                            },
                            {
                                src: "Jane-00.png",
                                title: "Jane Doe Showcase!!!",
                                color: "bg-gray-700",
                            },
                            {
                                src: "Evelyn-00.jpg",
                                title: "Evelyn Showcase!!!",
                                color: "bg-gray-700",
                            },
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="hover:border-1 hover:border-white border-[0.5px] border-gray-400 h-[120px] w-[200px] relative overflow-hidden rounded-[5%]">
                                <div className="absolute h-full w-full inset-0 flex overflow-hidden">
                                    <img
                                        src={`/Asset/Content/${item.src}`}
                                        alt="content"
                                        className="h-full object-cover"
                                    />
                                    <div className="absolute h-full w-full inset-0 z-20 flex items-center justify-end flex-col bg-gradient-to-b from-transparent to-black">
                                        <div
                                            className={`flex justify-center items-center w-full bg-black`}>
                                            <h1 className="text-white font-bold text-[10px]">
                                                <i>{item.title}</i>
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* Section 2 */}
            <div className="w-full h-[600px] flex justify-center pb-[40px] sidebar-mark transition-all duration-300 ease-in-out">
                <section className="hover:border-[0.5px] hover:border-zinc-400 homecard relative w-[1000px] h-full flex justify-between rounded-[10px] bg-[url('/Asset/ruanmei01.png')] bg-no-repeat bg-cover p-7 border-[0.5px] border-gray-400 overflow-hidden">
                    <div className="absolute inset-0 z-10 bg-gradient-to-r from-transparent via-transparent to-gray-900"></div>
                    <div className="h-full w-[40%] flex flex-col">
                        <img
                            src="/Asset/logo/Logo-09.png"
                            alt="phaethon"
                            className="w-[100px]"
                        />
                    </div>
                    <div className="w-[40%] h-full justify-start flex flex-col z-20">
                        <div className="w-full bg-gradient-to-br from-gray-900 to-black rounded-[5px] flex items-center justify-center h-[10%] text-white font-extrabold border-[0.5px] border-gray-400 mb-[20px]">
                            <h1>Proxy Agreement</h1>
                        </div>
                        <div className="text-white pb-[40px] text-justify">
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit...
                            </p>
                        </div>
                        <div className="w-full bg-gradient-to-br from-gray-900 to-black rounded-[5px] flex items-center justify-center h-[10%] text-white font-extrabold border-[0.5px] border-gray-500 mb-[20px]">
                            <h1>How to Make Contract</h1>
                        </div>
                        <div className="text-white text-justify">
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit...
                            </p>
                            <br />
                            <h6 className="text-purple-200">See More...</h6>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default HomePage;
