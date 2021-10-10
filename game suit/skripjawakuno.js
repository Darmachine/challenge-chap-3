const selectionButtons = document.querySelectorAll('[data-selection]')
const BtnEle = document.querySelectorAll('.selection')
const computerSelection = document.querySelectorAll('.pilihanKomputer')
const middle = document.getElementById('Versus')
const refresh = document.querySelectorAll('.refresh')
const SELECTIONS = [{
        name: 'b',
        beats: 'g'
    },
    {
        name: 'k',
        beats: 'b'
    },
    {
        name: 'g',
        beats: 'k'
    }
]

selectionButtons.forEach(selectionButtons => {
    selectionButtons.addEventListener('click', e => {
        const selectionName = selectionButtons.dataset.selection
        const selection = SELECTIONS.find(selection => selection.name === selectionName)
        makeSelection(selection)
        selectionButtons.classList.toggle('selected')
        BtnEle[0].style.pointerEvents = "none"
        BtnEle[1].style.pointerEvents = "none"
        BtnEle[2].style.pointerEvents = "none"
    })
})

function makeSelection(selection) {
    const pilihanKomputer = randomSelection()
    const kamuMenang = isWinner(selection, pilihanKomputer)
    const komputerMenang = isWinner(pilihanKomputer, selection)
    console.log(pilihanKomputer)

    if (kamuMenang) {
        middle.src = "../assets/images/You Win.png";
        middle.classList.toggle('Hasil')

    } else if (komputerMenang) {
        middle.src = "../assets/images/You Lose.png";
        middle.classList.toggle('Hasil')
        computerSelection.classList.toggle('selection')
    } else {
        middle.src = "../assets/images/Draw.png";
        middle.classList.toggle('Hasil')
        middle.style.removeProperty
    }


}

function isWinner(selection, opponentSelection) {
    return selection.beats === opponentSelection.name
}

function randomSelection() {
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
    return SELECTIONS[randomIndex]

}

refresh.addEventListener('click', e => {
    BtnEle[0].style.pointerEvents = "auto";
    BtnEle[1].style.pointerEvents = "auto";
    BtnEle[2].style.pointerEvents = "auto";
})