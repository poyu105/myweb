import React from "react";

export default function About(){
    return(
        <section id="about" className="mt-2">
            <h1 className="text-4xl text-center border-t-2 border-b-2">關於我</h1>
            <div className="flex items-center gap-5 p-2">
                <img className="w-48 h-auto rounded" alt="myPhoto" src="./image/myPhoto.jpg"></img>
                <p>
                    &emsp;&emsp;我的程式之旅起源於我的高中時期，當時的資訊課接觸到了python，透過遊戲解謎的方式讓我開始慢慢了解程式的語法並且產生了興趣。<br/>
                    &emsp;&emsp;剛開始的我還很迷惘，不知道程式能運用在哪裡，或是甚麼樣的應用程式要用甚麼語言撰寫，不知道該從何著手。因此我決定從學習C++開始，透過安排學習計畫、解題，讓我對程式設計慢慢有了基礎<br/>
                    &emsp;&emsp;上了大學後，我接觸了網頁程式設計，讓我獲得了第一個不是由terminal印出結果的作品，因此我也對網頁開發產生了興趣，從靜態網頁到有後端資料庫的動態網頁，讓我對這個領域的熱情更上一層樓。
                </p>
            </div>
        </section>
    )
}