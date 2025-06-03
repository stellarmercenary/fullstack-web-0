const Sidebar = () => {
    return (
        <div
            id="sidebar"
            className="min-h-screen w-64 bg-black border-gray-800 border-r text-white fixed pt-[80px] top-0 left-0 z-30 hidden animate-slide-out shadow-[0_0_10px_rgba(255,255,255,0.2)] overflow-y-auto custom-scroll">
            <div className="w-full h-full relative flex flex-col justify-start items-center gap-3 pt-5">
                <div className="border border-zinc-700 bg-gradient-to-br from-zinc-800 to-black p-5 rounded-[5px] w-56 shadow-[0_0_10px_rgba(255,255,255,0.2)] hover:border hover:border-zinc-500 transition-all duration-300 ease-in-out">
                    <h1 className="text-2xl font-extrabold text-center">
                        Sunbringer
                    </h1>
                </div>
                <div className="border border-zinc-700 bg-gradient-to-br h-[200px] from-zinc-600 to-black p-5 rounded-[5px] w-56 shadow-[0_0_10px_rgba(255,255,255,0.2)] hover:border hover:border-zinc-500 transition-all duration-300 ease-in-out">
                    <div className="w-full h-full overflow-hidden border border-zinc-500 relative">
                        <img
                            src="/Asset/lady-sunbribger-01.jpeg"
                            className="w-full object-cover absolute"
                        />
                    </div>
                </div>
                <div className="border border-zinc-700 bg-gradient-to-br from-zinc-800 to-black p-5 rounded-[5px] w-56 shadow-[0_0_10px_rgba(255,255,255,0.2)] hover:border hover:border-zinc-500 transition-all duration-300 ease-in-out">
                    <p className="text-left text-[12px]">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Perspiciatis sit. shes a baddie but kinda cute
                        too, perfect.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
