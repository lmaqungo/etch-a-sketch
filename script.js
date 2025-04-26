

const board = document.querySelector(".container");
const boardWidth = board.clientWidth;
const boardHeight = board.clientHeight;


let size = 24;
let numberOfCells = size ** 2;
let boardArea = boardWidth * boardHeight;
let cellSize = Math.round(((boardArea / numberOfCells) ** 0.5) * 10)/ 10;

for(let i = 0; i< size; i++){
    let row = document.createElement("div");
    row.setAttribute("class", "row");

    for(let j = 0;  j< size; j++){
        let cell = document.createElement("div");
        cell.setAttribute("style", `width: ${cellSize}px; height: ${cellSize}px; opacity: 1;`);
        cell.setAttribute("class", "cell color");
        row.appendChild(cell);
    }
    board.appendChild(row);
}

let cells = document.querySelectorAll(".cell");
cells.forEach(sketch);

function sketch(cell){
    cell.addEventListener("mouseenter", (e) =>{
        let random = randomColor();
        e.target.style.backgroundColor = random;
    })
}

function randomNumberGen(){
    return Math.round(Math.random() * 255);
}

function randomColor(){
    return `rgb(${randomNumberGen()}, ${randomNumberGen()}, ${randomNumberGen()})`
}

const resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click", () =>{
    cells.forEach((cell) =>{
        cell.style.backgroundColor = "rgb(9, 9, 97)";
    });
})

const editBtn = document.querySelector(".edit");
editBtn.addEventListener("click", () =>{
    let inputSize = prompt("Enter a number between 12 and 64");
    editBoard(Number(inputSize));
})

function editBoard(boardSize){
    if (boardSize >= 12 && boardSize <= 64){
        eraseBoard();
        numberOfCells = boardSize ** 2;
        boardArea = boardWidth * boardHeight;
        cellSize = Math.round(((boardArea / numberOfCells) ** 0.5) * 10)/ 10;
        for(let i = 0; i< boardSize; i++){
            let row = document.createElement("div");
            row.setAttribute("class", "row");
        
            for(let j = 0;  j< boardSize; j++){
                let cell = document.createElement("div");
                cell.setAttribute("style", `width: ${cellSize}px; height: ${cellSize}px; opacity: 1;`);
                cell.setAttribute("class", "cell color");
                row.appendChild(cell);
            }
            board.appendChild(row);
        }
    }

    cells = document.querySelectorAll(".cell");
    cells.forEach(sketch);

}

function eraseBoard(){
    let rows = document.querySelectorAll(".row");
    rows.forEach((row)=>{
        board.removeChild(row);
    })
}
