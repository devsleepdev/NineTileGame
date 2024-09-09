const BOARD_SIZE = 3
const CELL_SIZE = 25
const CELL_GAP = 2

export default class Board {

    #gameDiv
    #cells
    #tiles
    #emptyIndex

    constructor(gameDiv, tilepattern) {
        this.#gameDiv = gameDiv
        gameDiv.style.setProperty("--board-size", BOARD_SIZE)
        gameDiv.style.setProperty("--cell-size", `${CELL_SIZE}vmin`)
        gameDiv.style.setProperty("--cell-gap", `${CELL_GAP}vmin`)

        this.#cells = createCellElements(gameDiv).map((cellElement, index)=> {
            return new Cell(cellElement, index % BOARD_SIZE, Math.floor(index/BOARD_SIZE))
        })


        //this.CHR = ['A','B','C','D','E','F','G','H']

        this.#tiles = createTileElements(gameDiv).map((tileElement, index)=> {
            //return new Tile(tileElement, index % BOARD_SIZE, Math.floor(index/BOARD_SIZE), index + 1)
            //return new Tile(tileElement, index % BOARD_SIZE, Math.floor(index/BOARD_SIZE), this.CHR[index])
            return new Tile(tileElement, index % BOARD_SIZE, Math.floor(index/BOARD_SIZE), tilepattern[index])
        })

        for(let i = 0; i < BOARD_SIZE * BOARD_SIZE; i++) {
            this.#cells[i].isEmpty = false;
            this.#cells[i].tileObject = this.#tiles[i]
        }
        this.removeTile(8)
    }

    foo() {
        let theCell = this.#cells[14]
        let theTile =theCell.tileObject
        theTile.x=3
    }

    removeTile(index) {
        this.#tiles[index].tileElement.remove()
        this.#cells[index].isEmpty = true
        this.#cells[index].tileObject = null
        this.#emptyIndex = index
    }

    get emptyIndex() {
        return this.#emptyIndex
    }

    set emptyIndex(value) {
        this.#emptyIndex = value
    }

    get cells() {
        return this.#cells
    }  

    get tiles() {
        return this.#tiles
    }

    leftIndex() {
        if(this.#emptyIndex % BOARD_SIZE == 0) {
            return -1
        } else {
            return this.#emptyIndex-1
        }
    }
    rightIndex() {
        if(this.#emptyIndex % BOARD_SIZE ==BOARD_SIZE-1) {
            return -1
        } else {
            return this.#emptyIndex+1
        }
    }
    upIndex(){
        if(Math.floor(this.#emptyIndex/BOARD_SIZE)==0) {
            return -1
        } else {
            return this.#emptyIndex-BOARD_SIZE
        }
    }
    downIndex(){
        if(Math.floor(this.#emptyIndex/BOARD_SIZE)==BOARD_SIZE-1) {
            return -1
        } else {
            return this.#emptyIndex+BOARD_SIZE
        }
    }

}

class Cell {
    #cellElement
    #x
    #y
    #isEmpty
    #tileObject

    constructor(cellElement, x, y) {
        this.#cellElement = cellElement
        this.#x = x
        this.#y = y
    }

    get tileObject() {
        return this.#tileObject
    }
    set tileObject(value) {
        this.#tileObject = value
    }

    get x() {
        return this.#x
    }
    
    get y() {
        return this.#y
    }

    set isEmpty(value) {
        this.#isEmpty = value
    }
}

// this will return array of elements
function createCellElements(gameDiv) {
    const cells = []
    for(let i = 0; i < BOARD_SIZE * BOARD_SIZE; i++) {
        const cell = document.createElement("div")
        cell.classList.add("cell")
        cells.push(cell)
        gameDiv.append(cell)
    }
    return cells
}

class Tile {
    #tileElement
    #x
    #y
    #value

    constructor(tileElement, xval, yval, value) {
        this.#tileElement = tileElement
        this.x = xval
        this.y = yval
        this.value = value
    }

    // setter for x
    set x(value) {
        this.#x = value
        this.#tileElement.style.setProperty("--x", value)
    }

    get x() {
        console.log(this.#x)
        return this.#x
    }

    // setter for y
    set y(value) {
        this.#y = value
        this.#tileElement.style.setProperty("--y", value)
    }

    get y(){
        return this.#y
    }

    // setter for value
    set value(v) {
        this.#value = v                         // set to the private var
        this.#tileElement.textContent = v 
    }

    get tileElement() {
        return this.#tileElement
    }
}

// this will return array of elements
function createTileElements(gameDiv) {
    const mytiles = []
    for(let i = 0; i < BOARD_SIZE * BOARD_SIZE; i++) {
        const tile = document.createElement("div")
        tile.classList.add("tile")
        mytiles.push(tile)
        gameDiv.append(tile)
    }
    return mytiles
}