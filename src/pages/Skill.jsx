import React from "react";

export default function Skill(){
    return(
        <section id="skill">
            <h1 className="lg:text-4xl md:text-3xl text-xl text-center border-t-2 border-b-2 sticky top-0 bg-slate-800">我的技能</h1>
            <div className="ms-3 p-2">
                <p className="my-2">目前的我主要專注在網頁開發，不過偶爾也會使用其他程式撰寫一寫小專案，以下是我所擁有的技能:</p>
                <div className="my-2">
                    <h2 className="lg:text-2xl md:text-xl text-lg font-bold border-b-2 border-gray-500 inline-block my-2">網頁開發</h2>
                    <ul className="list-disc ps-5">
                        <li>
                            <h3 className="lg:text-xl md:text-lg text-base inline-block">前端:</h3>
                            <p className="my-2">熟悉HTML、CSS、Javascript、JQuery進行網頁開發，能夠使用Bootstrap和TailwindCss進行前端的設計，並且擁有React框架的使用經驗。</p>
                        </li>
                        <li>
                            <h3 className="lg:text-xl md:text-lg text-base inline-block">後端:</h3>
                            <p className="my-2">擁有ASP.NET Core進行後端開發的經驗，並且能夠在Node.js環境中使用Express.js框架進行後端開發。在開發過程中能夠使用MVC架構維持良好的後端結構。</p>
                        </li>
                        <li>
                            <h3 className="lg:text-xl md:text-lg text-base inline-block">資料庫:</h3>
                            <p className="my-2">能夠使用SQL進行關聯式資料庫的開發和管理，使用過包含MSSQL和MySQL。也曾使用過NoSQL進行開發，像是MongoDB。</p>
                        </li>
                    </ul>
                </div>
                <div className="my-2">
                    <h2 className="lg:text-2xl md:text-xl text-lg font-bold border-b-2 border-gray-500 inline-block my-2">程式能力</h2>
                    <ul className="list-disc ps-5">
                        <li>
                            <h3 className="lg:text-xl md:text-lg text-base inline-block">C#</h3>
                            <p className="my-2">熟悉使用C#進行Web App的開發，能夠在.NET環境下開發應用。</p>
                        </li>
                        <li>
                            <h3 className="lg:text-xl md:text-lg text-base inline-block">Javascript</h3>
                            <p className="my-2">熟悉Javascript語法，能夠進行前後端以及網頁動態內容開發，使用過包含React、Node.js、Express.js進行開發。</p>
                        </li>
                        <li>
                            <h3 className="lg:text-xl md:text-lg text-base inline-block">C/C++/Java</h3>
                            <p className="my-2">了解C/C++/Java程式語法，能夠進行物件導向設計或算法設計的工作，具備清晰的邏輯思考能力和編碼能力。</p>
                        </li>
                        <li>
                            <h3 className="lg:text-xl md:text-lg text-base inline-block">Python</h3>
                            <p className="my-2">擁有Python基礎，能夠進行簡單的機器學習、深度學習、影像辨識、網路爬蟲的專案開發。</p>
                        </li>
                    </ul>
                </div>
                <div className="my-2">
                    <h2 className="lg:text-2xl md:text-xl text-lg font-bold border-b-2 border-gray-500 inline-block my-2">其他技能</h2>
                    <ul className="list-disc ps-5">
                        <li>
                            <h3 className="lg:text-xl md:text-lg text-base inline-block">版本控制和協作</h3>
                            <p className="my-2">使用過git進行版本控制，確保專案的可回復性。也能夠使用git進行協同工作，確保專案開發順利進行。</p>
                        </li>
                        <li>
                            <h3 className="lg:text-xl md:text-lg text-base inline-block">Unix/Linux環境</h3>
                            <p className="my-2">擁有Unix/Linux系統的使用經驗，可以使用基本的命令進行開發和系統管理。</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}