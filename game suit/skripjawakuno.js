const selectionButton = document.querySelectorAll('[data-selection]')
const SELECTION = [{
    {
        name: 'r'
        beats: 's'
    },
    {
        name: 'p'
        beats: 'r'
    },
    {
        name: 's'
        beats: 'p'
    }
}]

selectionButton.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection
        const selection = SELECTION.find(selection => selection.name === selectionName)
        makeSelection(SELECTION)
    })
})

function makeSelection(selection) {
    console.log(selection)
}