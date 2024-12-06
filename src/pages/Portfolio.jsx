import React, { useEffect, useState } from "react";
import portfolios from "/src/assets/portfolio/portfolio.json";
import Slider from "../components/Slider";

export default function Portfolio(){
    const [portfolio, setPortfolio] = useState([]);
    const [filter, setFilter] = useState('ALL');

    useEffect(()=>{
        filter == "ALL" ? setPortfolio(portfolios.portfolios): setPortfolio(portfolios.portfolios.filter((item)=>item.type.toLowerCase() == filter.toLowerCase()))
    },[filter])

    return(
        <section id="portfolio" className="mt-2">
            <h1 className="z-50 lg:text-4xl md:text-3xl text-xl text-center border-t-2 border-b-2 sticky top-0 bg-slate-800">作品集</h1>
            <div className="ms-3 p-2">
                <p className="my-2">以下是我的作品集，可以選取相關項目來瀏覽。</p>
                <nav className="flex justify-center">
                    <ul className="hidden sm:flex flex-row gap-10 bg-slate-900 opacity-80 text-center text-base text-slate-900 font-bold border rounded">
                        {["ALL", "Web", "Python", "C/C++", "Java"].map((type)=>(
                            <li key={type}>
                                <button className={`w-14 hover:bg-gray-600 hover:text-white rounded 
                                                    ${
                                                        filter.toLowerCase() === type.toLowerCase() ? 'bg-gray-600 text-white ':'bg-gray-200 '
                                                    }`} onClick={()=>setFilter(type)}>{type}</button>
                            </li>
                        ))}
                    </ul>
                    <select className="sm:hidden w-2/3 opacity-80 text-center text-slate-900 font-bold" onChange={(e)=>setFilter(e.target.value)}>
                        {["ALL", "Web", "Python", "C/C++", "Java"].map((type)=>(
                            <option value={type} key={type}
                                className={`w-14 hover:bg-gray-600 hover:text-white rounded 
                                ${
                                    filter.toLowerCase() === type.toLowerCase() ? 'bg-gray-600 text-white ':'bg-gray-400 '
                                }`}>
                                {type}
                            </option>
                        ))}
                    </select>
                </nav>
                <p className="text-base font-bold">搜尋結果: 共{portfolio.length}筆資料</p>
                {portfolio.map((item, index)=>(
                    <div key={index} className="flex justify-center lg:flex-row flex-col lg:gap-5 gap-0 my-3 border-b-2 border-gray-500">
                        <div className="flex items-center lg:w-5/12 w-full lg:h-auto h-3/6">
                            <div className="container">
                                {Array.isArray(item.images) && item.images[0] !== "NONE" ? (
                                    <Slider images={item.images} />
                                ) : (
                                    <p className="text-center">此專案暫無圖片</p>
                                )}
                            </div>
                        </div>
                        <div className="flex flex-col justify-between lg:w-6/12 w-full px-2">
                            <h3 className="lg:text-xl md:text-lg text-base my-2">{item.name}</h3>
                            <p className="break-words">{item.describe}</p>
                            <p className="text-sm mt-2">
                                {item.tag.map((tag)=>{
                                    return "#"+tag+" "
                                })}
                            </p>
                            <div className="my-2 flex gap-3">
                                <button
                                    className={`bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 rounded ${item.link === "NONE" ? 'cursor-not-allowed' : ''}`}
                                    disabled={item.link === "NONE"}
                                >
                                    <a 
                                        className={`p-2 text-sm ${item.link === "NONE" ? 'pointer-events-none' : ''}`} 
                                        href={item.link !== "NONE" ? item.link : "#"} 
                                        target={item.link !== "NONE" ? "_blank" : ""} 
                                        rel="noopener noreferrer"
                                    >
                                        檢視網頁
                                    </a>
                                </button>
                                <button className="bg-gray-600 hover:bg-gray-700 rounded">
                                    <a className="p-2 text-sm" href={item.source_link} target="_blank">檢視原始碼</a>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}