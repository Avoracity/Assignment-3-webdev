
let numRows = 0;
let numCols = 0;
let colorSelected;

//Adds a row
function addR() 
{
    // Gets table element from the DOM
    let currGrid = document.getElementById("grid");
    // Stores row that will be appended to table element
    let addRow = document.createElement("tr");

    // Assuming no table(grid) has been created (considering the variables 
    // above I just made it a condition)
    if (numRows === 0 && numCols === 0)
    {
        var box = document.createElement("td");
        box.onclick = function()
        {
            this.style.backgroundColor = document.getElementById("selectedID").value;
        };
        addRow.appendChild(box);
        numCols++;
    }
    else
    {
        for (let i = 0; i < numCols; i++)
        {
            var box = document.createElement("td");
            box.onclick = function()
            {
                this.style.backgroundColor = document.getElementById("selectedID").value;
            };
            addRow.appendChild(box);
        }
    }

    currGrid.appendChild(addRow);
    numRows++;

    console.log("Add Row has been pressed successfully.")
}
//Adds a column
function addC() 
{
    // Gets table element from the DOM
    let currGrid = document.getElementById("grid");
    // Stores Column that will be appended to the table element
    let addColumn = document.querySelectorAll("tr");

    //  Amount of rows
    let currNumOfRows = 0;

    // Global variable is set to 0 so this is needed
    if (numRows === 0)
    {
        addR();
        currNumOfRows++;
    }

    for (let i = 0; i < numRows; i++)
    {
        var box =  document.createElement("td");
        box.onclick = function()
        {
            this.style.backgroundColor = document.getElementById("selectedID").value;
        };
        addColumn[currNumOfRows].appendChild(box);

        currNumOfRows++;
    }
    numCols++;

    console.log("Add Column has been pressed successfully.")

}

//Removes a row
function removeR() 
{
    // Gets table element from the DOM
    let currGrid = document.getElementById("grid");

    // Delete last inserted row
    currGrid.deleteRow(numRows-1);

    numRows--;

    if (numRows < 1)
    {
        numCols = 0;
        numRows = 0;
    }

    console.log("Remove Row has been pressed successfully.")

}
//Remove a column
function removeC() 
{
    // Gets all rows from the grid
    let currNumOfRowsInGrid = document.querySelectorAll("tr");

    let currNumOfRows = 0;

    for (let i = 0; i < numRows; i++)
    {
        currNumOfRowsInGrid[currNumOfRows].removeChild(currNumOfRowsInGrid[currNumOfRows].lastChild);
        // amount of rows deleted
        currNumOfRows++;
    }

    numCols--;

    console.log("Remove Column has been pressed successfully.")

}
//sets global var for selected color
function selected() 
{
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill() 
{
    // Gets current grid and goes through all boxes and fills them with selected color
    currGrid = document.querySelectorAll('td').forEach(td => td.style.backgroundColor = document.getElementById("selectedID").value);
    console.log("Fill has been used successfully.")
}

function clearAll() 
{
    // Gets current grid and goes through all boxed and fills them with white (in other words resetting them)
    document.querySelectorAll('td').forEach(td => td.style.backgroundColor = "white");
    console.log("Clear has been used successfully.")
}

function fillU() 
{
    // Gets grid from the DOM 
    let currGrid = document.querySelectorAll("td").forEach(td => {
        if (td.style.backgroundColor === "" || td.style.backgroundColor === "white")
        {
            // Gets currently selected color and sets all unfilled boxes to said color
            td.style.backgroundColor = document.getElementById("selectedID").value;
        }
    });
    console.log("Fill Uncolored has been used successfully.")
}
