const Footer = () => {
    return (
        <footer className="z-60 w-full h-[400px] bg-black flex flex-col justify-start items-center">
            <div className="h-[40px] w-full border-y-gray-700 border-[0.2px] flex items-center justify-evenly">
                <h1 className="text-white">Contact Us:</h1>
            </div>
            <div className="w-full border-y-gray-700 flex flex-col items-center justify-center">
                <h1 className="text-gray-700 font-bold pt-3">Copyright | ZZZ</h1>
                <img src="/Asset/ZZZ.png" alt="ZZZ Logo" className="pt-8" />
            </div>
        </footer>
    );
};

export default Footer;