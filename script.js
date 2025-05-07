const csvString = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

let cell = "";
let cells = [];
for (let i = 0; i < csvString.length; i++) {
    let char = csvString[i];

    if (char === ",") {
        cells.push(cell);
        cell = "";
    } else if (char === "\n") {
        cells.push(cell);
        console.log(cells[0], cells[1], cells[2], cells[3]);
        cells = [];
        cell = "";
    } else {
        cell += char;
    }
}
// Print last row if not followed by \n
if (cell !== "") {
    cells.push(cell);
    console.log(cells[0], cells[1], cells[2], cells[3]);
    

const csvString = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

    let cell = "";
    let cells = [];
    let columnCount = 0;
    let isFirstRow = true;
    
    for (let i = 0; i < csvString.length; i++) {
        let char = csvString[i];
    
        if (char === ",") {
            cells.push(cell);
            cell = "";
        } else if (char === "\n") {
            cells.push(cell);
            if (isFirstRow) {
                columnCount = cells.length;
                isFirstRow = false;
            }
            console.log(...cells);
            cells = [];
            cell = "";
        } else {
            cell += char;
        }
    }
    
    // Print final row if not followed by newline
    if (cell !== "") {
        cells.push(cell);
        console.log(...cells);
    }


const csvString = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

let cell = "";
let cells = [];
let isFirstRow = true;
let columnCount = 0;
let table = [];

for (let i = 0; i < csvString.length; i++) {
    let char = csvString[i];

    if (char === ",") {
        cells.push(cell);
        cell = "";
    } else if (char === "\n") {
        cells.push(cell);
        if (isFirstRow) {
            columnCount = cells.length;
            isFirstRow = false;
        }
        table.push([...cells]);  // Stores a copy of the current row
        cells = [];
        cell = "";
    } else {
        cell += char;
    }
}

// Programs last row (if not followed by \n)
if (cell !== "") {
    cells.push(cell);
    table.push([...cells]);
}

// Log all rows
for (let row of table) {
    console.log(...row);
}

// PART 3
const csvString = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

let cell = "";
let cells = [];
let isFirstRow = true;
let columnCount = 0;
let table = [];

for (let i = 0; i < csvString.length; i++) {
    let char = csvString[i];

    if (char === ",") {
        cells.push(cell);
        cell = "";
    } else if (char === "\n") {
        cells.push(cell);
        if (isFirstRow) {
            columnCount = cells.length;
            isFirstRow = false;
        }
        table.push([...cells]);
        cells = [];
        cell = "";
    } else {
        cell += char;
    }
}

if (cell !== "") {
    cells.push(cell);
    table.push([...cells]);
}

// Converts rows to array of objects
let headers = table[0].map(h => h.toLowerCase());
let rowObjects = [];

for (let i = 1; i < table.length; i++) {
    let row = table[i];
    let obj = {};
    for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = row[j];
    }
    rowObjects.push(obj);
}

// Logs each object
console.log(rowObjects);


// PART 4
// Previous Array of row objects
let rowObjects = [
    { id: '42', name: 'Bruce', occupation: 'Knight', age: '41' },
    { id: '57', name: 'Bob', occupation: 'Fry Cook', age: '19' },
    { id: '63', name: 'Blaine', occupation: 'Quiz Master', age: '58' },
    { id: '98', name: 'Bill', occupation: 'Doctor’s Assistant', age: '26' }
  ];
  
  // Sort by id numerically (for consistent operation)
  rowObjects.sort((a, b) => parseInt(a.id) - parseInt(b.id));
  
  // Remove last element
  rowObjects.pop();
  
  // Insert new object at index 1
  rowObjects.splice(1, 0, {
    id: "48", name: "Barry", occupation: "Runner", age: "25"
  });
  
  // Add new object to end
  rowObjects.push({
    id: "7", name: "Bilbo", occupation: "None", age: "111"
  });
  
  // Log result
  console.log(rowObjects);
  
// Average Age
  const rowObjects = [
    { id: '42', name: 'Bruce', occupation: 'Knight', age: '41' },
    { id: '48', name: 'Barry', occupation: 'Runner', age: '25' },
    { id: '57', name: 'Bob', occupation: 'Fry Cook', age: '19' },
    { id: '63', name: 'Blaine', occupation: 'Quiz Master', age: '58' },
    { id: '7', name: 'Bilbo', occupation: 'None', age: '111' }
  ];
  
  let totalAge = 0;
  
  for (let i = 0; i < rowObjects.length; i++) {
    totalAge += parseInt(rowObjects[i].age);
  }
  
  let averageAge = totalAge / rowObjects.length;
  
  console.log("Average Age:", averageAge);
  