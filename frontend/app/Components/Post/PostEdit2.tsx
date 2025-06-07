import {
    Crop,
    Filter,
    FlipHorizontal,
    Minus,
    RotateCcw,
    Settings,
    Trash,
    X,
    ZoomIn,
    ZoomOut,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const PostEdit2 = () => {
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

    const buttonLayout = [
        [
            { icon: Crop, label: "Crop", index: "0" },
            { icon: RotateCcw, label: "Rotate", index: "1" },
            { icon: FlipHorizontal, label: "Flip", index: "2" },
        ],
        [
            { icon: Filter, label: "Filter", index: "3" },
            { icon: ZoomIn, label: "Zoom In", index: "4" },
            { icon: ZoomOut, label: "Zoom Out", index: "5" },
            { icon: Trash, label: "Delete", index: "6" },
            { icon: Settings, label: "Settings", index: "7" },
        ],
    ];

    const dragRef = useRef<HTMLDivElement>(null);

    // posisi offset (translate)
    const [position, setPosition] = useState({ x: 0, y: 0 });
    // posisi awal mouse waktu mulai drag
    const [dragStart, setDragStart] = useState<{ x: number; y: number } | null>(
        null
    );

    // event mouse down: mulai drag
    const onMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();
        setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    };

    // event mouse move: drag
    const onMouseMove = (e: MouseEvent) => {
        if (!dragStart) return;
        setPosition({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
    };

    // event mouse up: selesai drag
    const onMouseUp = () => {
        setDragStart(null);
    };

    // pasang dan cabut event listener global untuk mouse move dan up
    useEffect(() => {
        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", onMouseUp);
        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseup", onMouseUp);
        };
    }, [dragStart]); // tiap dragStart berubah, pasang ulang listener
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
        <div className="min-h-screen bg-blue-400 text-white flex flex-col justify-center items-center pt-[80px]">
            <div className="relative">
                <div
                    ref={dragRef}
                    onMouseDown={onMouseDown}
                    style={{
                        transform: `translate(${position.x}px, ${position.y}px)`,
                    }}
                    className="absolute w-[500px] bg-zinc-300 h-[400px] border-2 border-white shadow-lg flex flex-col items-center gap-3">
                    {/* header */}
                    <div className="w-full h-8 bg-[#000080] flex justify-between p-1">
                        <div className="">
                            <h1>Edit Your Post</h1>
                        </div>
                        <div className="w-[100px] flex gap-1 h-full  justify-end">
                            <button
                                onClick={() => navigate(`/postDetail/${id}`)}
                                className="h-full bg-gray-300 hover:border border-2 border-b-black border-r-black text-center grid place-items-center leading-none hover:bg-red-600">
                                <Minus className="text-black w-full h-full"></Minus>
                            </button>
                            <button
                                onClick={() => navigate(`/News`)}
                                className="h-full bg-gray-300 hover:border border-2 border-b-black border-r-black text-center grid place-items-center leading-none hover:bg-red-600">
                                <X className="text-black w-full h-full"></X>
                            </button>
                        </div>
                    </div>
                    {/* i dont know what is it*/}
                    <div className="w-full h-18 flex">
                        {/* left */}
                        <div className="w-1/2 px-4 h-full">
                            <div className="border w-full h-full overflow-hidden border-white bg-black">
                                <img
                                    src={image}
                                    className="w-full h-full object-cover [object-position:50%_20%]"
                                />
                            </div>
                        </div>
                        {/* right */}
                        <div className="w-1/2 h-full flex flex-col px-4">
                            {buttonLayout.map((baris, layout) => (
                                <div
                                    key={layout}
                                    className={`w-full flex h-1/2`}>
                                    {baris.map(({ icon, index }, wrapper) => {
                                        const Icon = icon;
                                        return (
                                            <div
                                                key={wrapper}
                                                className={`p-[2px] ${
                                                    index === "0"
                                                        ? "w-3/5"
                                                        : "w-1/5"
                                                }`}>
                                                <button
                                                    onClick={() => {
                                                        alert(
                                                            "belum ada fiturnya"
                                                        );
                                                    }}
                                                    className={`p-1 w-full h-full hover:border border-r-black border-b-black border-2 hover:bg-white`}>
                                                    <Icon className="text-black w-full h-full"></Icon>
                                                </button>
                                            </div>
                                        );
                                    })}
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* kolom input perubahan */}
                    <div className="w-full border-y flex felx-col flex-1"></div>
                    {/* footer */}
                    <div className="w-full border-t flex felx-col h-8"></div>
                </div>
            </div>
        </div>
    );
};

export default PostEdit2;
