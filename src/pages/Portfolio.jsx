import React, { useEffect, useState } from "react";
import portfolios from "/src/assets/portfolio/portfolio.json";
import Slider from "../components/Slider";

export default function Portfolio(){
    const [filter, setFilter] = useState('ALL');

    return(
        <section id="portfolio" className="mt-2">
            <h1 className="z-50 lg:text-4xl md:text-3xl text-xl text-center border-t-2 border-b-2 sticky top-0 bg-slate-800">作品集</h1>
            <div className="ms-3 p-2">
                <p className="my-2">以下是我的作品集，可以選取相關項目來瀏覽。</p>
                <nav className="flex justify-center">
                    <ul className="hidden sm:flex flex-row gap-10 bg-slate-900 opacity-80 text-center text-base text-slate-900 font-bold border rounded">
                        {["ALL", "Web", "Python", "C/C++", "Java"].map((type)=>(
                            <li key={type}>
                                <button className="bg-gray-200 w-14 hover:bg-gray-600 hover:text-white rounded" onClick={()=>setFilter(type)}>{type}</button>
                            </li>
                        ))}
                    </ul>
                    <select className="sm:hidden w-2/3 opacity-80 text-center text-slate-900 font-bold">
                        <option className="bg-gray-400 w-14 hover:bg-gray-600 hover:text-white">ALL</option>
                        <option className="bg-gray-400 w-14 hover:bg-gray-600 hover:text-white">Web</option>
                        <option className="bg-gray-400 w-14 hover:bg-gray-600 hover:text-white">Python</option>
                        <option className="bg-gray-400 w-14 hover:bg-gray-600 hover:text-white">C/C++</option>
                        <option className="bg-gray-400 w-14 hover:bg-gray-600 hover:text-white">Java</option>
                    </select>
                </nav>
                <div>
                    {filter == "ALL" ? (
                        portfolios.portfolios.map((item, index)=>(
                            <div key={index} className="flex justify-center gap-5 my-3 border-b-2 border-gray-500">
                                <div className="flex items-center w-5/12">
                                    <div className="container">
                                        {Array.isArray(item.images) && item.images[0] !== "NONE" ? (
                                            <Slider images={item.images} />
                                        ) : (
                                            <p className="text-center">此專案暫無圖片</p>
                                        )}
                                    </div>
                                </div>
                                <div className="w-6/12 flex flex-col justify-between">
                                    <h4 className="text-2xl my-2">{item.name}</h4>
                                    <p className="px-2">{item.describe}</p>
                                    <p className="text-sm px-2 mt-2">
                                        {item.tag.map((tag)=>{
                                            return "#"+tag+" "
                                        })}
                                    </p>
                                    <div className="px-2 my-2 flex gap-3">
                                        <button className="bg-blue-600 hover:bg-blue-700 rounded">
                                            <a className="p-2" href={item.link} target="_blank">檢視網頁</a>
                                        </button>
                                        <button className="bg-gray-600 hover:bg-gray-700 rounded">
                                            <a className="p-2" href={item.source_link} target="_blank">檢視原始碼</a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ):<></>}
                </div>
            </div>
        </section>
    )
}