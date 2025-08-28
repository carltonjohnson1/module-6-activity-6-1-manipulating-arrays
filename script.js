let array = [];

// Function to display array
function displayInput() {
    const outputText = document.querySelector(".output-text");
    outputText.innerHTML = ""; // Clearing previous text

    array.forEach((element, index) => {
        const elementP = document.createElement("p");
        elementP.textContent = `Item ${index + 1}: ${element}`;
        outputText.appendChild(elementP);
    });
}


// Add Element to Array
function addElement() {
    const input = document.querySelector("#elementInput").value;
    if (input !== "") {
        array.push(input);
        displayInput();
        // Clear the input field after adding
        document.querySelector("#elementInput").value = "";
    } else {
        alert("Please type something in the input field");
    }
}

// Function to remove element from beginning or end of array
function removeElement(type) {
    if (array.length === 0) {
        alert("Array is empty.");
        return;
    }

    switch (type) {
        case "first":
            array.shift();
            break;
        case "last":
            array.pop();
            break;
        default:
            alert("Invalid");
    }
    displayInput();
}

// Adding event listeners

// listener for adding an element
const addEl = document.querySelector(".add-el");
addEl.addEventListener("click", addElement);

// listener for removing the first element
const removeFirstEl = document.querySelector(".remove-first-el");
removeFirstEl.addEventListener("click", () => removeElement("first"));

// listener for removing the last element
const removeLastEl = document.querySelector(".remove-last-el");
removeLastEl.addEventListener("click", () => removeElement("last"));