import React from "react";

export default function Skill(){
    return(
        <section id="skill">
            <h1 className="text-4xl text-center border-t-2 border-b-2">我的技能</h1>
            <div className="ms-3 p-2">
                <p className="my-2">目前的我主要專注在網頁開發，不過偶爾也會使用其他程式撰寫一寫小專案，以下是我所擁有的技能:</p>
                <div>
                    <h2 className="text-2xl font-bold border-b-2 border-gray-500 inline-block">網頁開發</h2>
                    <ul className="list-disc ps-5">
                        <li>
                            <h3 className="text-xl inline-block">前端:</h3>
                            <p>熟悉HTML、CSS、Javascript、JQuery進行網頁開發，能夠使用Bootstrap和TailwindCss進行前端的設計，並且擁有React框架的使用經驗。</p>
                        </li>
                        <li>
                            <h3 className="text-xl inline-block">後端:</h3>
                            <p>擁有ASP.NET Core進行後端開發的經驗，並且能夠在Node.js環境中使用Express.js框架進行後端開發。在開發過程中能夠使用MVC架構維持良好的後端結構。</p>
                        </li>
                        <li>
                            <h3 className="text-xl inline-block">資料庫:</h3>
                            <p>能夠使用SQL進行關聯式資料庫的開發和管理，使用過包含MSSQL和MySQL。也曾使用過NoSQL進行開發，像是MongoDB。</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl font-bold border-b-2 border-gray-500 inline-block">程式能力</h2>
                </div>
                <div>
                    <h2 className="text-2xl font-bold border-b-2 border-gray-500 inline-block">其他技能</h2>
                </div>
            </div>
        </section>
    )
}