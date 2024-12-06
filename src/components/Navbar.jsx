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
                <a href="https://poyu105.github.io/myweb/" className="lg:text-4xl md:text-3xl text-xl">
                    <img className="bg-slate-200 hover:bg-slate-300 opacity-80 rounded-md" src="./image/logo.png" alt="Logo"/>
                </a>
                <ul className="flex flex-row items-center md:gap-4 gap-1 lg:text-lg md:text-base text-sm">
                    <li className="hover:bg-slate-400 p-2 rounded-lg">
                        <a href="#top">Home</a>
                    </li>
                    <li className="hover:bg-slate-400 p-2 rounded-lg">
                        <a href="#about">關於我</a>
                    </li>
                    <li className="hover:bg-slate-400 p-2 rounded-lg">
                        <a href="#skill">技能</a>
                    </li>
                    <li className="hover:bg-slate-400 p-2 rounded-lg">
                        <a href="#portfolio">作品集</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}