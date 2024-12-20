let gameSeq =[]
let userSeq =[]
let start = false;
let level =0;
let btncol = ["red","green","yellow","purple"]
let h2 = document.querySelector("h2")

document.addEventListener("keypress", function(){
    if(start == false){
        console.log("Game Started")
        start= true
    }
    levelUp()
})


function gameFlash(btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash")
    }, 250)
}

function userFlash(btn){
    btn.classList.add("userflash")
    setTimeout(function(){
        btn.classList.remove("userflash")
    }, 250)
}



function levelUp(){
    userSeq=[]
    level++
    h2.innerText =` Level ${level}`
    let randIdx = Math.floor(Math.random()*3)
    let randCol = btncol[randIdx]
    let randbtn = document.querySelector(`.${randCol}`)
    gameSeq.push(randCol)
    console.log(gameSeq)
    gameFlash(randbtn)

    // console.log(randIdx)
    // console.log(randCol)
    // console.log(randbtn)
}


function checkAns(idx){
    // console.log("curent : ",level)
    // let idx = level-1;
    if (userSeq[idx]=== gameSeq[idx]){
        if(userSeq.length === gameSeq.length){
            setTimeout(levelUp,1000)
        }
    }
    else
    {
      h2.innerHTML=`Your Score :<b> ${level}<b> <br>Game Over! Press any Key to start`
      document.querySelector("body").style.backgroundColor= "red"
      setTimeout(function(){
        document.querySelector("body").style.backgroundColor= "white"

      },150)
      reset()
      
    }
}
function btnPress(){
    console.log(" btn is press")
    console.log(this)
    let btn = this
    userFlash(btn)
    usercol = btn.getAttribute("id")
    console.log(usercol)
    userSeq.push(usercol)
    checkAns(userSeq.length-1)

}
let allbtns = document.querySelectorAll(".btn")

for (btn of allbtns){
    btn.addEventListener("click", btnPress)
     
}

function reset(){
    start = false
    gameSeq = []
    userSeq= []
    level =0
}


