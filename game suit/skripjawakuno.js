// DOM
const selectionButton = document.querySelectorAll("[data-selection]");
const SELECTION = [{
        name: "r",
        beats: "s",
    },
    {
        name: "p",
        beats: "r",
    },
    {
        name: "s",
        beats: "p",
    },
];

selectionButton.forEach((selectionButton) => {
    selectionButton.addEventListener("click", (e) => {
        const selectionName = selectionButton.dataset.selection;
        const selection = SELECTION.find((selection) => selection.name === selectionName);
        makeSelection(SELECTION);
    });
});

function randomSelection() {
    const randomIndex = Math.floor(Math.random() * SELECTION.length);
    return SELECTION[randomIndex];
}

function isWinner(selection, opponentSelection) {
    return selection.beats === opponentSelection.name;
}

function makeSelection(selection) {
    const computerSelection = randomSelection();
    const yourWinner = isWinner(selection, computerSelection);
    const computerWinner = isWinner(computerSelection, selection);

    addSelectionResult(computerSelection, computerWinner);
    addSelectionResult(selection, yourWinner);
    console.log(selection)
    console.log(computerSelection)

    if (yourWinner) {
        document.getElementById("Versus").src = "../assets/images/You Win.png";
    }
    if (computerWinner) {
        document.getElementById("Versus").src = "../assets/images/You Lose.png";
    }

    function addSelectionResult(selection, winner) {
        if (yourWinner) {
            document.getElementById("Versus").src = "../assets/images/You Win.png";
        } else {
            document.getElementById("Versus").src = "../assets/images/You Lose.png";
        }
    }
}

function isWinner(selection, opponentSelection) {
    return selection.beats === opponentSelection.name;
}

function randomSelection() {
    const randomIndex = selectionMath.floor(Math.random() * SELECTION.length);
    return SELECTION[randomIndex];
}