// let boxes = document.querySelectorAll(".box");
// let resetBtn = document.querySelector("#reset-btn");
// let newGameBtn = document.querySelector("#new-btn");
// let msgContainer = document.querySelector(".msg-container");
// let msg = document.querySelector("#msg")
// let turn0 = true;

// const winPattern = [
//     [0,1,2],
//     [0,3,6],
//     [0,4,8],
//     [1,4,7],
//     [2,5,8],
//     [2,4,6],
//     [3,4,5],
//     [6,7,8],
// ];

// const resetgame = () =>{
//     turn0 = true;
//     enableBoxes();
//     msgContainer.classList.add("hide");
// }     

// boxes.forEach( (box) => {
//     box.addEventListener("click", () => {
//         console.log("Box was click")
//         box.innerText="abcd";
//         if(turn0 === true){
//             box.innerText="O";
//             turn0 = false;
//         }else{
//             box.innerText="X";
//             turn0 = true;
//         }
//         box.disabled = true;
//         ckeackWin();
//     });
// });

//     const disableBoxes = () =>{
//         for(let box of boxes){
//             box.disabled = true;
//         }
//     }

//     const enableBoxes = () =>{
//         for(let box of boxes){
//             box.disabled = false;
//             box.innerText ="";
//         }
//     }

//     const showWinner = (winner) => {
//         msg.innerText = `Congratulation, Winner is ${winner}`;
//         msgContainer.classList.remove("hide");
//         disableBoxes();
//     }

//     const ckeackWin = () => {
//         for(let pattern of ckeackWin){
//            let pos1Val = boxes[pattern[0]].innerText;
//            let pos2Val = boxes[pattern[1]].innerText;
//            let pos3Val = boxes[pattern[2]].innerText;

//            if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
//             if(pos1Val === pos2Val && pos2Val === pos3Val){
//                 console.log("winner",pos1Val);
//                 showWinner(pos1Val);
//             }
//            }
//           } 
//       };
//       newGameBtn.addEventListener("click", resetgame);
//       resetBtn.addEventListener("click", resetgame);

// ---------------------------------------------------
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turn0 = true;

// Winning patterns
const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

// Reset game function
const resetgame = () => {
    turn0 = true; // Reset turn to 'O'
    enableBoxes(); // Re-enable all boxes
    msgContainer.classList.add("hide"); // Hide the winner message
};

// Disable all boxes
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

// Enable all boxes and clear their text
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = ""; // Clear text
    }
};

// Show winner message
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide"); // Show the winner message
    disableBoxes(); // Disable all boxes after a win
};

// Check for a win
const ckeackWin = () => {
    for (let pattern of winPattern) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("Winner:", pos1Val);
                showWinner(pos1Val); // Show the winner
                return; // Exit function after finding a winner
            }
        }
    }
};

// Box click handler
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "O"; // Set 'O' for turn0
        } else {
            box.innerText = "X"; // Set 'X' for the other turn
        }
        turn0 = !turn0; // Switch turn
        box.disabled = true; // Disable the clicked box
        ckeackWin(); // Check for a win after every move
    });
});

// Attach reset button functionality
newGameBtn.addEventListener("click", resetgame);
resetBtn.addEventListener("click", resetgame);
