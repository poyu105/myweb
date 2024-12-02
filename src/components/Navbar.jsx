import React, { useEffect, useState } from "react";

export default function Navbar(){
    // 最後更新日期
    const [lastModifiedDate, setLastModifiedDate] = useState('');
    useEffect(() => {
    const date = new Date(document.lastModified);
    setLastModifiedDate(formatDate(date));
    }, []);
    const formatDate = (date) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = months[date.getMonth()];
    const dayOfMonth = date.getDate();
    const year = date.getFullYear();
    return `${month} ${dayOfMonth}, ${year}`;
    };
    return(
        <header>
            <nav className="flex flex-row justify-between items-center md:p-4 p-2 text-neutral-200 bg-slate-900">
                <a href="#" className="lg:text-4xl md:text-3xl text-xl">我的網頁</a>
                <ul className="flex flex-row items-center gap-4 lg:text-lg md:text-base text-sm">
                    <li>
                        <a href="#top">Home</a>
                    </li>
                    <li>
                        <a href="#about">關於我</a>
                    </li>
                    <li>
                        <a href="#skill">技能</a>
                    </li>
                    <li>
                        <a href="#protfolio">作品集</a>
                    </li>
                </ul>
            </nav>
            <div className="flex justify-center items-center sm:flex-row flex-col sm:text-base customer-ssm:text-sm text-xs font-bold bg-amber-200 drop-shadow">
                <span>個人網頁更新中... &emsp;最後更新日期:{lastModifiedDate} &emsp;</span>
                <small>&copy;2024 <a className="text-center border-b-2 border-black hover:text-gray-600 hover:border-gray-600" href="https://poyu105.github.io/myweb" target="_blank">Poyu webDev.</a></small>
            </div>
        </header>
    )
}