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


// Detech touches -----------------------------------------------------------
document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     
                                                                         
function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                
                                                                         
function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
                                                                         
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* right swipe */ 
            moveRight()
        } else {
            /* left swipe */
            moveLeft()
        }                       
    } else {
        if ( yDiff > 0 ) {
            /* down swipe */ 
            moveDown()
        } else { 
            /* up swipe */
            moveUp()
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};
// Done detect touches -----------------------------------------------