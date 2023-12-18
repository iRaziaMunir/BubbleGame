
var timer =60;
var hit = 0;
var score = 0;
var ranNum;
var clickedNum =" ";
var panel_bottom = document.querySelector("#panelBottom");

panel_bottom.addEventListener("click", function(details){
    clickedNum = Number(details.target.textContent);
    if (clickedNum === hit) {

        increaseScore();
        makebubbles();
        getNewHit();  
    }
} );


function increaseScore() {
    score += 10;
    document.querySelector(".scoreval").textContent = score;
}

function makebubbles() {
    var store = " ";
    for (let i = 1; i <=100; i++) {
        ranNum= Math.floor(Math.random()*10);
        store +=`<div id="bubble">${ranNum}</div> `;
    }
    document.querySelector("#panelBottom").innerHTML = store;
}


function timerFun() {

    setInterval(() => {
        if (timer>0) {
            timer--;
        document.querySelector(".timerval").textContent=timer;      
            }
        else{
            clearInterval(timer);

            document.querySelector("#panelBottom").innerHTML =
            `<div id ="endGame">
             <h1>Game Over</h1>
             <button class="btn" onclick="refreshPage()">Start New Game</button>
            </div>`;
        }
    }, 1000);
}

 function getNewHit() {
    hit = Math.floor(Math.random()*10);
        document.querySelector(".hitval").textContent = hit;
 }
 function refreshPage() {
    location.reload();
 }

    timerFun();
    getNewHit();  
    makebubbles();

    let a =[1,2,3];
    let b = a;
    
    b.push(4);

    console.log(a);
    console.log(b);