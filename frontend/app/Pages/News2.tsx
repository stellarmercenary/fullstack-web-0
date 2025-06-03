import React from "react";

const News: React.FC = () => {
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

                <div className="min-h-[0] h-[490px] w-[100%] flex px-[10%] justify-evenly items-start overflow-y-auto [scrollbar-gutter:stable] relative pb-[60px]">
                    <div className="kolom">
                        {/* Postingan trigger */}
                        <div className="card-wrapper h-[400px]">
                            {/* img box */}
                            <div className="card-img">
                                <img
                                    src="/Asset/Trigger-ngeker.jpg"
                                    alt="sat rex"
                                />
                            </div>
                            {/* cap box */}
                            <div className="card-caption">
                                {/* profile */}
                                <div className="profile-box">
                                    <h1>pacarei_431</h1>
                                    <div className="profilepic">
                                        <img
                                            src="/Asset/icon/stelle (2).jpeg"
                                            alt="profile"
                                        />
                                    </div>
                                </div>
                                {/* content */}
                                <div className="content">
                                    <h1 className="font-extrabold text-gray-100 text-start">
                                        The real Eye of Void!!
                                    </h1>
                                    <p className="text-[10px] text-justify text-gray-400 font-bold">
                                        BENARKAH? seorang sniper tanpa '...'!?
                                        Pasti kalian pernah dengan codename
                                        "Trigger" ya dia salah satu penembak
                                        jitu terhebat di new Eridu...
                                    </p>
                                </div>

                                {/* interactions */}
                                <div className="interaction">
                                    <div className="likes">
                                        <img src="/Asset/icon/favorite-1.png" />
                                        <h1>1.2m likes</h1>
                                    </div>
                                    <div>
                                        <img
                                            src="/Asset/icon/comment.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Postingan */}
                        <div className="card-wrapper h-[300px]">
                            {/* img box */}
                            <div className="card-img">
                                <img src="/Asset/HAND.jpg" alt="sat rex" />
                            </div>

                            {/* cap box */}
                            <div className="card-caption">
                                {/* profile */}
                                <div className="profile-box">
                                    <h1>Tsukishiro_Yanagi</h1>
                                    <div className="profilepic">
                                        <img
                                            src="/Asset/icon/Yanagi.jpeg"
                                            alt="profile"
                                        />
                                    </div>
                                </div>

                                {/* content */}
                                <div className="content">
                                    <h1 className="font-extrabold text-gray-100 text-start">
                                        Kunjungan Section 6
                                    </h1>
                                    <p className="text-[10px] text-justify text-gray-400 font-bold">
                                        [12/03/2026] Kunjungan resmi HAND
                                        section-6 ke HIA untuk melakukan
                                        pengujian teknologi
                                    </p>
                                </div>

                                {/* interactions */}
                                <div className="interaction">
                                    <div className="likes">
                                        <img src="/Asset/icon/favorite-1.png" />
                                        <h1>2m likes</h1>
                                    </div>
                                    <div>
                                        <img
                                            src="/Asset/icon/comment.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Postingan */}
                        <div className="card-wrapper h-[400px]">
                            {/* img box */}
                            <div className="card-img">
                                <img
                                    src="/Asset/zhu-yuan-1.jpg"
                                    alt="sat rex"
                                />
                            </div>
                            {/* cap box */}
                            <div className="card-caption">
                                {/* profile */}
                                <div className="profile-box">
                                    <h1>ZhuYuan_fanbase</h1>
                                    <div className="profilepic">
                                        <img
                                            src="/Asset/icon/zhu-yuan.jpeg"
                                            alt="profile"
                                        />
                                    </div>
                                </div>
                                {/* content */}
                                <div className="content">
                                    <h1 className="font-extrabold text-gray-100 text-start">
                                        Mission Complete!
                                    </h1>
                                    <p className="text-[10px] text-justify text-gray-400 font-bold">
                                        miss zhu yuan akhir-akhir ini
                                        benar-benar luar biasa! tak hanya
                                        menyelesaikan kasus gangster tapi dia
                                        juga...
                                    </p>
                                </div>

                                {/* interactions */}
                                <div className="interaction">
                                    <div className="likes">
                                        <img src="/Asset/icon/favorite-1.png" />
                                        <h1>704k likes</h1>
                                    </div>
                                    <div>
                                        <img
                                            src="/Asset/icon/comment.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Postingan */}
                        <div className="card-wrapper h-[300px]">
                            {/* img box */}
                            <div className="card-img">
                                <img
                                    src="/Asset/miyabi-cute.jpeg"
                                    alt="sat rex"
                                />
                            </div>

                            {/* cap box */}
                            <div className="card-caption">
                                {/* profile */}
                                <div className="profile-box">
                                    <h1>bububua</h1>
                                    <div className="profilepic">
                                        <img
                                            src="/Asset/icon/kucing-imut.jpeg"
                                            alt="profile"
                                        />
                                    </div>
                                </div>

                                {/* content */}
                                <div className="content">
                                    <h1 className="font-extrabold text-gray-100 text-start">
                                        Miyabi fanart
                                    </h1>
                                    <p className="text-[10px] text-justify text-gray-400 font-bold">
                                        #fyp #masih pemula
                                    </p>
                                </div>

                                {/* interactions */}
                                <div className="interaction">
                                    <div className="likes">
                                        <img src="/Asset/icon/favorite-1.png" />
                                        <h1>10k likes</h1>
                                    </div>
                                    <div>
                                        <img
                                            src="/Asset/icon/comment.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="kolom">
                        {/* Postingan Astra */}
                        <div className="card-wrapper h-[300px]">
                            {/* img box */}
                            <div className="card-img">
                                <img
                                    src="/Asset/astra-yao.jpeg"
                                    alt="sat rex"
                                />
                            </div>
                            {/* cap box */}
                            <div className="card-caption">
                                {/* profile */}
                                <div className="profile-box">
                                    <h1>Starloop_official</h1>
                                    <div className="profilepic">
                                        <img
                                            src="/Asset/icon/astra-1.jpeg"
                                            alt="profile"
                                        />
                                    </div>
                                </div>
                                {/* content */}
                                <div className="content">
                                    <h1 className="font-extrabold text-gray-100 text-start">
                                        [NEW ALBUM] Stars of Lyra - ft.Astra Yao
                                    </h1>
                                    <p className="text-[10px] text-justify text-gray-400 font-bold">
                                        ...
                                    </p>
                                </div>

                                {/* interactions */}
                                <div className="interaction">
                                    <div className="likes">
                                        <img src="/Asset/icon/favorite-1.png" />
                                        <h1>4m likes</h1>
                                    </div>
                                    <div>
                                        <img
                                            src="/Asset/icon/comment.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Postingan Outer Ring */}
                        <div className="card-wrapper h-[300px]">
                            {/* img box */}
                            <div className="card-img">
                                <img
                                    src="/Asset/hollow-gurun.jpg"
                                    alt="sat rex"
                                />
                            </div>

                            {/* cap box */}
                            <div className="card-caption">
                                {/* profile */}
                                <div className="profile-box">
                                    <h1>pemburu_milf</h1>
                                    <div className="profilepic">
                                        <img
                                            src="/Asset/icon/stelle (3).jpeg"
                                            alt="profile"
                                        />
                                    </div>
                                </div>

                                {/* content */}
                                <div className="content">
                                    <h1 className="font-extrabold text-gray-100 text-start">
                                        pemandangan outer ring
                                    </h1>
                                    <p className="text-[10px] text-justify text-gray-400 font-bold">
                                        percaya deh kalian sekali-kali beraniin
                                        diri buat ke sini, aku baru sampe udah
                                        disambut sama mommy-mommy yg ada di sini
                                        cuy (see more..)
                                    </p>
                                </div>

                                {/* interactions */}
                                <div className="interaction">
                                    <div className="likes">
                                        <img src="/Asset/icon/favorite-1.png" />
                                        <h1>12k likes</h1>
                                    </div>
                                    <div>
                                        <img
                                            src="/Asset/icon/comment.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Postingan Cicada */}
                        <div className="card-wrapper h-[300px]">
                            {/* img box */}
                            <div className="card-img">
                                <img src="/Asset/cicada.jpeg" alt="sat rex" />
                            </div>
                            {/* cap box */}
                            <div className="card-caption">
                                {/* profile */}
                                <div className="profile-box">
                                    <h1>anonymous</h1>
                                    <div className="profilepic">
                                        <img
                                            src="/Asset/icon/anonim.jpeg"
                                            alt="profile"
                                        />
                                    </div>
                                </div>
                                {/* content */}
                                <div className="content">
                                    <h1 className="font-extrabold text-gray-100 text-start">
                                        [DICARI]
                                    </h1>
                                    <p className="text-[10px] text-justify text-gray-400 font-bold">
                                        Pembersih WC berpengalaman, Siap untuk
                                        ditempatkan di mana saja, berpenampilan
                                        menarik
                                    </p>
                                </div>

                                {/* interactions */}
                                <div className="interaction">
                                    <div className="likes">
                                        <img src="/Asset/icon/favorite-1.png" />
                                        <h1>821k likes</h1>
                                    </div>
                                    <div>
                                        <img
                                            src="/Asset/icon/comment.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Postingan Tungtung */}
                        <div className="card-wrapper h-[400px]">
                            {/* img box */}
                            <div className="card-img">
                                <img
                                    src="/Asset/icon/tungtungtung.jpeg"
                                    alt="sat rex"
                                />
                            </div>

                            {/* cap box */}
                            <div className="card-caption">
                                {/* profile */}
                                <div className="profile-box">
                                    <h1>TungTung_Based</h1>
                                    <div className="profilepic">
                                        <img
                                            src="/Asset/icon/tungtungtung.jpeg"
                                            alt="profile"
                                        />
                                    </div>
                                </div>

                                {/* content */}
                                <div className="content">
                                    <h1 className="font-extrabold text-gray-100 text-start">
                                        Tung tung sahur
                                    </h1>
                                    <p className="text-[10px] text-justify text-gray-400 font-bold">
                                        tung-tung sahur tralaleo tralala
                                    </p>
                                </div>

                                {/* interactions */}
                                <div className="interaction">
                                    <div className="likes">
                                        <img src="/Asset/icon/favorite-1.png" />
                                        <h1>101k likes</h1>
                                    </div>
                                    <div>
                                        <img
                                            src="/Asset/icon/comment.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="kolom">
                        {/* Postingan miyabi */}
                        <div className="card-wrapper h-[400px]">
                            <div className="card-img">
                                <img
                                    src="/Asset/miyabi-cool.jpeg"
                                    alt="sat rex"
                                />
                            </div>
                            <div className="card-caption">
                                <div className="profile-box">
                                    <h1>she_is_170centimeter</h1>
                                    <div className="profilepic">
                                        <img
                                            src="/Asset/icon/miyabi-1.jpeg"
                                            alt="profile"
                                        />
                                    </div>
                                </div>
                                <div className="content">
                                    <h1 className="font-extrabold text-gray-100 text-start">
                                        Captain Miyabi
                                    </h1>
                                    <p className="text-[10px] text-justify text-gray-400 font-bold">
                                        Ujung Tombak New Eridu, siapa lagi yang
                                        akan menghancurkan gelapnya Hollow jika
                                        bukan
                                    </p>
                                </div>
                                <div className="interaction">
                                    <div className="likes">
                                        <img src="/Asset/icon/favorite-1.png" />
                                        <h1>2.3m likes</h1>
                                    </div>
                                    <div>
                                        <img
                                            src="/Asset/icon/comment.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Postingan */}
                        <div className="card-wrapper h-[300px]">
                            <div className="card-img">
                                <img
                                    src="/Asset/jane-doe-sexy.jpeg"
                                    alt="sat rex"
                                />
                            </div>
                            <div className="card-caption">
                                <div className="profile-box">
                                    <h1>hairy_nigga505</h1>
                                    <div className="profilepic">
                                        <img
                                            src="/Asset/icon/hairy-nigga.jpeg"
                                            alt="profile"
                                        />
                                    </div>
                                </div>
                                <div className="content">
                                    <h1 className="font-extrabold text-gray-100 text-start">
                                        SAT REX
                                    </h1>
                                    <p className="text-[10px] text-justify text-gray-400 font-bold">
                                        Hell yeah!! mrs. jane udah resmi jadi
                                        agen Phaethon, awalnya aku udah gak
                                        tahan(bikin kontrak), pas lihat harga
                                        nya bjir (see more...)
                                    </p>
                                </div>
                                <div className="interaction">
                                    <div className="likes">
                                        <img src="/Asset/icon/favorite-1.png" />
                                        <h1>304k likes</h1>
                                    </div>
                                    <div>
                                        <img
                                            src="/Asset/icon/comment.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Postingan not found */}
                        <div className="card-wrapper h-[300px]">
                            <div className="card-img">
                                <img
                                    src="/Asset/not-found.jpeg"
                                    alt="sat rex"
                                />
                            </div>
                            <div className="card-caption">
                                <div className="profile-box">
                                    <h1>user_notfound</h1>
                                    <div className="profilepic">
                                        <img
                                            src="/Asset/not-found.jpeg"
                                            alt="profile"
                                        />
                                    </div>
                                </div>
                                <div className="content">
                                    <h1 className="font-extrabold text-gray-100 text-start">
                                        ...
                                    </h1>
                                    <p className="text-[10px] text-justify text-gray-400 font-bold">
                                        ...
                                    </p>
                                </div>
                                <div className="interaction">
                                    <div className="likes">
                                        <img src="/Asset/icon/favorite-1.png" />
                                        <h1>???</h1>
                                    </div>
                                    <div>
                                        <img
                                            src="/Asset/icon/comment.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Postingan anby */}
                        <div className="card-wrapper h-[400px]">
                            <div className="card-img">
                                <img src="/Asset/anby.jpeg" alt="sat rex" />
                            </div>
                            <div className="card-caption">
                                <div className="profile-box">
                                    <h1>TOKOPEDIA</h1>
                                    <div className="profilepic">
                                        <img
                                            src="/Asset/icon/tokopedia.jpeg"
                                            alt="profile"
                                        />
                                    </div>
                                </div>
                                <div className="content">
                                    <h1 className="font-extrabold text-gray-100 text-start">
                                        [IKLAN]
                                    </h1>
                                    <p className="text-[10px] text-justify text-gray-400 font-bold">
                                        Checkout Sekarang!!
                                    </p>
                                </div>
                                <div className="interaction">
                                    <div className="likes">
                                        <img src="/Asset/icon/favorite-1.png" />
                                        <h1>2k like</h1>
                                    </div>
                                    <div>
                                        <img
                                            src="/Asset/icon/comment.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="kolom">
                        {/* Postingan 1 */}
                        <div className="card-wrapper h-[300px]">
                            <div className="card-img">
                                <img src="/Asset/nillou.jpeg" alt="sat rex" />
                            </div>
                            <div className="card-caption">
                                <div className="profile-box">
                                    <h1>sajad_kunn</h1>
                                    <div className="profilepic">
                                        <img
                                            src="/Asset/icon/sajad-kun.jpeg"
                                            alt="profile"
                                        />
                                    </div>
                                </div>
                                <div className="content">
                                    <h1 className="font-extrabold text-gray-100 text-start">
                                        Oh
                                    </h1>
                                    <p className="text-[10px] text-justify text-gray-400 font-bold">
                                        suatu hari
                                    </p>
                                </div>
                                <div className="interaction">
                                    <div className="likes">
                                        <img src="/Asset/icon/favorite-1.png" />
                                        <h1>34k likes</h1>
                                    </div>
                                    <div>
                                        <img
                                            src="/Asset/icon/comment.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Postingan 2 */}
                        <div className="card-wrapper h-[400px]">
                            <div className="card-img">
                                <img src="/Asset/zhu-yuan.jpeg" alt="sat rex" />
                            </div>
                            <div className="card-caption">
                                <div className="profile-box">
                                    <h1>king_Brian0822</h1>
                                    <div className="profilepic">
                                        <img
                                            src="/Asset/nigga-2.jpg"
                                            alt="profile"
                                        />
                                    </div>
                                </div>
                                <div className="content">
                                    <h1 className="font-extrabold text-gray-100 text-start">
                                        MY WIFE
                                    </h1>
                                    <p className="text-[10px] text-justify text-gray-400 font-bold">
                                        hari ini aku dan zhu yuan resmi...
                                    </p>
                                    <p className="text-[10px] text-justify text-gray-400 font-bold">
                                        #fyp #zhuyuanistriku
                                    </p>
                                </div>
                                <div className="interaction">
                                    <div className="likes">
                                        <img src="/Asset/icon/favorite-1.png" />
                                        <h1>2.5m dislikes</h1>
                                    </div>
                                    <div>
                                        <img
                                            src="/Asset/icon/comment.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Postingan 3 */}
                        <div className="card-wrapper h-[300px]">
                            <div className="card-img">
                                <img src="/Asset/rispek.jpg" alt="sat rex" />
                            </div>
                            <div className="card-caption">
                                <div className="profile-box">
                                    <h1>dontol</h1>
                                    <div className="profilepic">
                                        <img
                                            src="/Asset/icon/dontol.jpeg"
                                            alt="profile"
                                        />
                                    </div>
                                </div>
                                <div className="content">
                                    <h1 className="font-extrabold text-gray-100 text-start">
                                        Rispek
                                    </h1>
                                    <p className="text-[10px] text-justify text-gray-400 font-bold">
                                        #prabowo
                                    </p>
                                </div>
                                <div className="interaction">
                                    <div className="likes">
                                        <img src="/Asset/icon/favorite-1.png" />
                                        <h1>3k likes</h1>
                                    </div>
                                    <div>
                                        <img
                                            src="/Asset/icon/comment.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Postingan 4 */}
                        <div className="card-wrapper h-[300px]">
                            <div className="card-img">
                                <img
                                    src="/Asset/miyabi-cool1.jpeg"
                                    alt="sat rex"
                                />
                            </div>
                            <div className="card-caption">
                                <div className="profile-box">
                                    <h1>AryakSIMP</h1>
                                    <div className="profilepic">
                                        <img
                                            src="/Asset/icon/stelle (7).jpeg"
                                            alt="profile"
                                        />
                                    </div>
                                </div>
                                <div className="content">
                                    <h1 className="font-extrabold text-gray-100 text-start">
                                        Wangy wangy wangy
                                    </h1>
                                    <p className="text-[10px] text-justify text-gray-400 font-bold">
                                        #segs
                                    </p>
                                </div>
                                <div className="interaction">
                                    <div className="likes">
                                        <img src="/Asset/icon/favorite-1.png" />
                                        <h1>1 like</h1>
                                    </div>
                                    <div>
                                        <img
                                            src="/Asset/icon/comment.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tombol Share */}
                        <div className="w-[150px] h-[150px] border-[0.5px] border-white rounded-br-2xl flex justify-center items-center">
                            <img src="/Asset/shape/share.png" alt="" />
                        </div>
                    </div>

                    {/* BG */}
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
            <div className="w-full border-y-grayAC-500 border-y h-[60px] z-40 bg-black absolute bottom-0 flex justify-center gap-3 items-center text-white">
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
