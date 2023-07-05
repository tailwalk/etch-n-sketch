let color = 'black'


//make a function that takes in a size, and decides the size of each box based on th value from my input
const addToBoard = (size) =>{
    //defines the board(the sketchpad)
    const board = document.getElementById('screen')
    //defines the squares
    let squares = board.querySelectorAll('div')

    squares.forEach((div) => div.remove())
    //defines the varying changes in size
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`
    //so the grid is always a perfect square
    let amount = size * size
    for(i = 0; i< amount; i++){
        //creates the divs and loops the size * size amount to fill the whole sketch area with divs
        let square = document.createElement('div')
        //currently hardcoded to be blue, but will change to white
        square.style.backgroundColor = 'white'
        //add eventlistener for the hover movement that changes that background color of each div that is in the sketch area
        square.addEventListener('mouseover', colorSquare)
        board.insertAdjacentElement('beforeend', square)
    }
}
//default sizing
addToBoard(16)
//function used to grab the input from the input area that outlines my conditions for what grid size is valid
function changeSize(input){
    if(input >= 2 && input <= 100){
    addToBoard(input)
    }else{
        alert('error: input a valid number between 2 and 100')
    }
}
function colorSquare(){
        this.style.backgroundColor = color
        if(color == 'random'){
            this.style.backgroundColor = `hsl(${Math.random()* 360}, 100%, 50%)`
        }else{
            this.style.backgroundColor = color
        }
}
function choiceColor(choice){

    color = choice
}

const reset = () =>{
    const board = document.getElementById('screen')
    let squares = board.querySelectorAll('div')
    squares.forEach((div) => div.style.backgroundColor = 'white')
}