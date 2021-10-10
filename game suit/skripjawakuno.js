const selectionButtons = document.querySelectorAll('[data-selection]')
const BtnEle = document.querySelectorAll('.selection')
const BtnEleCom = document.querySelectorAll('.pilihanKomputer')
var test = ''
const middle = document.getElementById('Versus')
const SELECTIONS = [{
        id: '0',
        name: 'b',
        mengalahkan: 'g'
    },
    {
        id: '1',
        name: 'k',
        mengalahkan: 'b'
    },
    {
        id: '2',
        name: 'g',
        mengalahkan: 'k'
    }
]

function makeSelection(selection) {
    // logic untuk pilihan komputer
    const pilihanKomputer = randomSelection()
        // document.getElementById('pilihanKomputer').classList.toggle('selected')
    BtnEleCom[pilihanKomputer.id].classList.toggle('comSelected')
    test = pilihanKomputer.id
        // menentukan pilihan dan compare hasil
    const kamuMenang = isWinner(selection, pilihanKomputer)
    const komputerMenang = isWinner(pilihanKomputer, selection)
    console.log(selection)
    console.log(pilihanKomputer)
        // scorebox
    if (kamuMenang) {
        middle.src = "../assets/images/You Win.png";
        middle.classList.toggle('Hasil')

    } else if (komputerMenang) {
        middle.src = "../assets/images/You Lose.png";
        middle.classList.toggle('Hasil')
    } else {
        middle.src = "../assets/images/Draw.png";
        middle.classList.toggle('Hasil')
    }
}
// pengubahan untuk menentukan pilihan
selectionButtons.forEach(selectionButtons => {
        selectionButtons.addEventListener('click', e => {
                const selectionName = selectionButtons.dataset.selection
                const selection = SELECTIONS.find(selection => selection.name === selectionName)
                const refreshButton = document.querySelector("#refresh")
                makeSelection(selection)
                selectionButtons.classList.toggle('selected')
                refreshButton.style.pointerEvents = "auto"
                BtnEle[0].style.pointerEvents = "none"
                BtnEle[1].style.pointerEvents = "none"
                BtnEle[2].style.pointerEvents = "none"

            })
            // tombol refresh
        document.getElementById("refresh").addEventListener('click', e => {
            selectionButtons.classList.remove('selected')
            BtnEleCom[test].classList.remove('comSelected')
            middle.src = "../assets/images/VERSUS.png";
            middle.classList.remove('Hasil')
            BtnEle[0].style.pointerEvents = "auto"
            BtnEle[1].style.pointerEvents = "auto"
            BtnEle[2].style.pointerEvents = "auto"
            document.getElementById("refresh").style.pointerEvents = ("none")

        })
    })
    // menentukan pemenang
function isWinner(selection, opponentSelection) {
    // parameter selection.mengalahkan harus identik dengan pilihan yang akan di compare
    return selection.mengalahkan === opponentSelection.name
}
// fungsi pilihan komputer
function randomSelection() {
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
    return SELECTIONS[randomIndex]

}