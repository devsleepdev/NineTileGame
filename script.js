import Board from "./Board.js"

var pattern1 = ['A','B','C','D','E','F','G','H'] // demo
var pattern2 = ['G','D','F','C','E','B','A','H'] // reachable
var pattern3 = ['D','G','H','E','B','C','F','A'] // unreachable
var pattern4 = ['A','B','C','D','E','F','H','G'] // the starting position of pattern3

var selected_pattern
switch(tile_pattern) {
    case 1:
        selected_pattern = pattern1
        break
    case 2:
        selected_pattern = pattern2
        break
    case 3:
        selected_pattern = pattern3
        break
    case 4:
        selected_pattern = pattern4
        break
    default:
        selected_pattern = pattern2
}


const gameDiv = document.getElementById("game-div")


var gameBoard = new Board(gameDiv, selected_pattern)
setupInput()

function setupInput() {
    window.addEventListener("keydown", handleInput, {once: true})
}

function handleInput(e) {
    console.log(e.key)
    switch(e.key) {
        case "ArrowUp":
            moveUp()
            break
        case "ArrowDown":
            moveDown()
            break
        case "ArrowLeft":
            moveLeft()
            break
        case "ArrowRight":
            moveRight()
            break
        default:
            setupInput()
            return
    }

    setupInput()
}

function moveDown()
{
    let movingTileIndex = gameBoard.upIndex()
    if(movingTileIndex==-1) return null
    console.log(movingTileIndex)

    let theCell = gameBoard.cells[movingTileIndex]
    let theTile = theCell.tileObject
    let theSpaceCell = gameBoard.cells[gameBoard.emptyIndex]

    theSpaceCell.tileObject = theCell.tileObject
    theCell.tileObject = null
    theTile.x = theSpaceCell.x
    theTile.y = theSpaceCell.y
    gameBoard.emptyIndex=movingTileIndex
}

function moveUp()
{
    let movingTileIndex = gameBoard.downIndex()
    if(movingTileIndex==-1) return null
    console.log(movingTileIndex)

    let theCell = gameBoard.cells[movingTileIndex]
    let theTile = theCell.tileObject
    let theSpaceCell = gameBoard.cells[gameBoard.emptyIndex]

    theSpaceCell.tileObject = theCell.tileObject
    theCell.tileObject = null
    theTile.x = theSpaceCell.x
    theTile.y = theSpaceCell.y
    gameBoard.emptyIndex=movingTileIndex
}



function moveLeft()
{
    let movingTileIndex = gameBoard.rightIndex()
    if(movingTileIndex==-1) return null
    console.log(movingTileIndex)

    let theCell = gameBoard.cells[movingTileIndex]
    let theTile = theCell.tileObject
    let theSpaceCell = gameBoard.cells[gameBoard.emptyIndex]

    theSpaceCell.tileObject = theCell.tileObject
    theCell.tileObject = null
    theTile.x = theSpaceCell.x
    theTile.y = theSpaceCell.y
    gameBoard.emptyIndex=movingTileIndex
}

function moveRight()
{
    let movingTileIndex = gameBoard.leftIndex()
    if(movingTileIndex==-1) return null
    console.log(movingTileIndex)

    let theCell = gameBoard.cells[movingTileIndex]
    let theTile = theCell.tileObject
    let theSpaceCell = gameBoard.cells[gameBoard.emptyIndex]

    theSpaceCell.tileObject = theCell.tileObject
    theCell.tileObject = null
    theTile.x = theSpaceCell.x
    theTile.y = theSpaceCell.y
    gameBoard.emptyIndex=movingTileIndex
}


