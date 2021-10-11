let numRows = 0;
let numCols = 0;
let colorSelected;

function addR() {
    alert("Clicked Add Row")
    let grid = document.getElementById("grid");
    let newRow = document.createElement("tr");
    newRow.classList.add("grid-row");
    grid.appendChild(newRow);

    for (let i = 0; i < numCols.length; i++) {
        newRow.appendChild(createCell("grid-cell"));
    }
}
function addC() {
    alert("Clicked Add Col")
    numRows++;
    let grid = document.getElementById("grid");
    let rows = grid.getElementsByClassName("grid-row");

    for (let i = 0; i < rows.length; i++) {
        rows[i].appendChild(createCell("grid-cell"));
    }
}


function removeR() {
    alert("Clicked Remove Row")
    let grid = document.getElementById("grid");
    let lastRow = grid.rows.length - 1;

    for (let i = lastRow; i > 0; i--) {
        grid.deleteRow(i);
    }
}
function removeC() {
    alert("Clicked Remove Col")
    numRows = 1;
    let grid = document.getElementById("grid");
    let lastColumn = grid.rows[0].cells.length - 1;

    for (let i = 0; i < grid.rows.length; i++) {
        for (let j = lastColumn; j > 0; j--) {
            grid.rows[i].deleteCell(j);
        }
    }
}