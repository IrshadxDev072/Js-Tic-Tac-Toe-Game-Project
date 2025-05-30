let boxes = document.querySelectorAll(".box");
let rstBtn = document.querySelector("#rst-Button");
let newGamebtn = document.querySelector("#new-Button");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")


let turnO = true; //player O;

const winPattern = [  //2D Array ;
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]

];
const resetGame = ()=>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {  //Player O;
            box.innerHTML = "O";
            turnO = false;
        } else {  //Player X;
            box.innerHTML = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })
})
let disableBoxes = ()=>{
    for (const box of boxes) {
        box.disabled = true;
        
    }
}
let enableBoxes = ()=>{
    for (const box of boxes) {
        box.disabled = false;
        box.innerText = "";
        
    }
}

const showWinner = (winner)=>{
 msg.innerText = `Congratulation The Winner is ${winner}`;
 msgContainer.classList.remove("hide");
 disableBoxes();
}


const checkWinner = () => {
    for (let pattern of winPattern) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val===pos2val && pos2val===pos3val){
                showWinner(pos1val);
            }
        }
    }
}

newGamebtn.addEventListener("click", resetGame);
rstBtn.addEventListener("click", resetGame);

