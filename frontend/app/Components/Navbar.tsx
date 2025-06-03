import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const navlinks = [
        { name: "Home", to: "/" },
        { name: "News", to: "/news" },
        { name: "Service", to: "/service" },
        { name: "Agent", to: "/agent" },
        { name: "Grace", to: "/grace" },
    ];
    useEffect(() => {
        const sidebarTrigger = document.getElementById("logo");
        const sidebar = document.getElementById("sidebar");
        const sections = document.getElementsByClassName("sidebar-mark");

        sidebarTrigger?.addEventListener("click", () => {
            const condition = sidebar?.classList.contains("hidden");
            if (condition) {
                sidebar?.classList.remove("animate-slide-out");
                sidebar?.classList.remove("hidden");
                sidebar?.classList.add("animate-slide-in");
                Array.from(sections).forEach((section) => {
                    section.classList.remove("sidebar-effect");
                    section.classList.add("sidebar-effect");
                });
            } else {
                sidebar?.classList.remove("animate-slide-in");
                sidebar?.classList.add("animate-slide-out");
                Array.from(sections).forEach((section) => {
                    section.classList.remove("sidebar-effect");
                });

                setTimeout(() => {
                    sidebar?.classList.add("hidden");
                }, 300);
            }
        });
    });

    return (
        <nav className="w-full h-[80px] mb-[20px] z-60 bg-black flex items-center fixed border-b border-gray-500">
            {/* logo */}
            <div
                id="logo"
                className="border-gray-500 w-64 h-full flex justify-center items-center text-zinc-500 font-extrabold gap-2 hover:text-white hover:bg-zinc-900 hover:border-white">
                <img
                    src="/Asset/logo/logo-00.svg"
                    alt="PH"
                    className="h-[40px] w-auto"
                />
                <h1>PHAETHON</h1>
            </div>

            {/* nav links */}
            <div className="flex-1 h-full text-gray-500 font-bold">
                <ul className="flex items-center justify-center gap-4 w-full h-full">
                    {navlinks.map((link) => {
                        return (
                            <li
                                key={link.name}
                                className="rounded-[5px] w-22 h-8">
                                <NavLink
                                    to={link.to}
                                    className={({ isActive }) =>
                                        `rounded-[5px] w-full h-full flex justify-center items-center nav-hover transition-colors duration-200 ease-in-out ${
                                            isActive
                                                ? "text-black bg-white"
                                                : "text-gray-500"
                                        }`
                                    }>
                                    {link.name}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
            </div>

            {/* login */}
            <div className="w-64 h-full flex items-center justify-end pr-10 gap-4 text-white font-bold">
                <Link
                    to="#"
                    target="_blank"
                    className="animate-wiggle bg-gradient-to-r from-blue-700 to-purple-600 w-22 h-8 flex items-center justify-center rounded-[5px] transition-all hover:from-purple-700 hover:to-pink-700 hover:transform hover:scale-105 hover:border-1 hover:border-white">
                    Join us
                </Link>
                <div className="overflow-hidden rounded-full w-12 h-12 border border-white">
                    <img alt="" id="janedoe" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
