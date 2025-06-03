import { useState } from "react";

interface Card {
    cover: string;
    alt: string;
    card: string;
    judul: string;
}
const cards = [
    {
        cover: "cover-belobog.svg",
        alt: "Grace",
        card: "grace-card-06.svg",
        judul: "Grace",
    },
    {
        cover: "cover-neps.svg",
        alt: "Jane",
        card: "card-janedoe-00.svg",
        judul: "Jane Doe",
    },
    {
        cover: "cover-hollow.svg",
        alt: "Sunbringer",
        card: "card-sunbringer.svg",
        judul: "Sunbringer",
    },
];

export default function Agent() {
    const [activeCard, setActiveCard] = useState<Card | null>(null);

    return (
        <>
            <div
                id="SectionAgent"
                className="h-screen w-full bg-zinc-600 flex justify-center pt-[80px] relative overflow-hidden">
                {/* background */}
                <img
                    src="/Asset/bg-hollow.jpg"
                    alt="Bg"
                    className="w-full object-cover absolute z-0 blur-lg "
                />
                {/* Judul */}
                <div className="absolute top-0 mt-[80px] min-h-20 min-w-20 left-0 z-10 gap-2 flex items-center pl-2 pt-2">
                    <img
                        src="/Asset/icon/dontol.jpeg"
                        alt="DOntol"
                        className="h-16 w-16 object-cover rounded-[100%] border-2 border-white"
                    />
                    <h1 className="border-white border-1 bg-gray-800 text-white text-[16px] p-2 rounded-2xl rounded-bl-none">
                        Hi, Im Dontol, your AI Asssitant!
                    </h1>
                </div>
                {cards.map((card) => (
                    <div className="h-full w-[300px] flex flex-col justify-center items-center group">
                        <div className="w-full h-[400px] relative">
                            <img
                                src={`/Asset/shape/${card.cover}`}
                                alt={`${card.alt}`}
                                className="object-contain h-full absolute z-20 right-1/2 translate-x-1/2 transition-all group-hover:translate-x-1/4"
                            />
                            <img
                                onClick={() => setActiveCard(card)}
                                src={`/Asset/shape/${card.card}`}
                                alt={`${card.alt}`}
                                className="object-contain h-[85%] absolute z-10 right-1/2 translate-x-1/2 bottom-1/2 translate-y-1/2 transition-all group-hover:translate-x-1/1"
                            />
                        </div>
                    </div>
                ))}
                {activeCard !== null && (
                    // wrapper utama
                    <div
                        onClick={() => setActiveCard(null)}
                        className="absolute z-30 w-full  h-screen top-0">
                        {/* wrapper content(blur) */}
                        <div className="w-full h-full backdrop-blur-lg opacity-100 flex flex-col items-center pt-[80px]">
                            {/* main content */}
                            <div className="h-full w-full flex text-white items-center justify-center gap-10">
                                {/* button */}
                                <div className="absolute w-full flex justify-end items-end px-10 top-0 pt-[80px] h-[150px]">
                                    <div className="w-[200px] overflow-hidden h-[40px] bg-black rounded-[5px] border border-white flex items-center justify-center">
                                        <button className="w-full h-full hover:bg-red-600">
                                            close
                                        </button>
                                        <a
                                            href={`/Asset/Shape/${activeCard.card}`}
                                            className="w-full h-full
                                        hover:bg-blue-600">
                                            <button className="w-full h-full hover:bg-blue-600">
                                                open
                                            </button>
                                        </a>
                                    </div>
                                </div>
                                {/* image */}
                                <img
                                    src={`/Asset/Shape/${activeCard.card}`}
                                    alt={`${activeCard.alt}`}
                                    className="h-2/3"
                                    onClick={(e) => e.stopPropagation}
                                />
                                {/* text */}
                                <div className="w-1/4 h-2/3 flex flex-col items-start justify-start gap-5 p-5">
                                    <h1 className="font-bold text-4xl">My Wifeee</h1>
                                    <p className="text-justify">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. In accusantium a
                                        culpa, possimus quibusdam, tempore quod,
                                        officia neque architecto quam distinctio
                                        explicabo voluptas facilis? Quam tenetur
                                        quis officiis harum fugiat!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <section></section>
            </div>
        </>
    );
}
