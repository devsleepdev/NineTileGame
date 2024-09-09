export default class Tile {
    #tileElement
    #x
    #y
    #value

    constructor(tileContainer, index, value) {
        this.#tileElement = document.createElement("div")
        this.#tileElement.classList.add("tile")
        tileContainer.append(this.#tileElement)
        this.#value = value
        this.x = index % 4
        this.y = Math.floor(index/4)
        this.value = value
    }

    // setter for x
    set x(value) {
        this.#x = value
        this.#tileElement.style.setProperty("--x", value)
    }

    // setter for y
    set y(value) {
        this.#y = value
        this.#tileElement.style.setProperty("--y", value)
    }

    // setter for value
    set value(v) {
        this.#value = v                         // set to the private var
        this.#tileElement.textContent = v 
    }
}