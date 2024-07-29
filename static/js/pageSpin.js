const downArrow = document.getElementById("down-arrow")
const containers = Array.from(document.getElementsByClassName("container"))
let currentPage = 0
downArrow.onclick = () => {
    currentPage = (currentPage + 1) % containers.length
    containers.forEach(each => {
        each.style.transform = `translateY(-${100 * currentPage}%)`
    });
}

export default this;