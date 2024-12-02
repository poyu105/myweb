import React from "react";

export default function Protfolio(){
    return(
        <section id="protfolio" className="mt-2">
            <h1 className="lg:text-4xl md:text-3xl text-xl text-center border-t-2 border-b-2 sticky top-0 bg-slate-800">作品集</h1>
            <div className="ms-3 p-2">
                <p className="my-2">以下是我的作品集，可以選取相關項目來瀏覽。</p>
                <nav className="flex justify-center">
                    <ul className="hidden sm:flex flex-row gap-10 bg-slate-900 opacity-80 text-center text-slate-900 font-bold border rounded">
                        <li>
                            <button className="bg-gray-200 w-14 hover:bg-gray-600 hover:text-white">ALL</button>
                        </li>
                        <li>
                            <button className="bg-gray-200 w-14 hover:bg-gray-600 hover:text-white">Web</button>
                        </li>
                        <li>
                            <button className="bg-gray-200 w-14 hover:bg-gray-600 hover:text-white">Python</button>
                        </li>
                        <li>
                            <button className="bg-gray-200 w-14 hover:bg-gray-600 hover:text-white">C/C++</button>
                        </li>
                        <li>
                            <button className="bg-gray-200 w-14 hover:bg-gray-600 hover:text-white">Java</button>
                        </li>
                    </ul>
                    <select className="sm:hidden w-2/3 opacity-80 text-center text-slate-900 font-bold">
                        <option className="bg-gray-400 w-14 hover:bg-gray-600 hover:text-white">ALL</option>
                        <option className="bg-gray-400 w-14 hover:bg-gray-600 hover:text-white">Web</option>
                        <option className="bg-gray-400 w-14 hover:bg-gray-600 hover:text-white">Python</option>
                        <option className="bg-gray-400 w-14 hover:bg-gray-600 hover:text-white">C/C++</option>
                        <option className="bg-gray-400 w-14 hover:bg-gray-600 hover:text-white">Java</option>
                    </select>
                </nav>
            </div>
        </section>
    )
}