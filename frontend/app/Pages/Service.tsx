import React from "react";

const Service: React.FC = () => {
    return (
        <>
        <div className="flex justify-center items-center min-h-screen pt-[80px] gap-20 bg-black">
            <div className="w-52 h-52 rounded-b-full border-1 border-white overflow-hidden">
                <img
                    src="/Asset/icon/janecute-02.jpeg"
                    alt="satrex"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex items-center justify-start w-52 h-52">
                <h1 className="text-white font-extrabold text-4xl">
                    Under Construction
                </h1>
            </div>
        </div>
        </>
    );
};

export default Service;
