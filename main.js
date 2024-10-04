function appendToDisplay(val ){
    let display = document.getElementById("displayInput").value += val
}

function clearDisplay() {
    let display = document.getElementById("displayInput").value = ""
}

function Calculate() {
    // Get the input element
    let displayInput = document.getElementById("displayInput");
    let displayValue = displayInput.value;

    try {
        
        let y = eval(displayValue); 
        displayInput.value = y; 
    } catch (error) {
        
        displayInput.value = "Invalid expression!";
    }
}
