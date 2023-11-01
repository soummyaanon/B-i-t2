// Function to perform temperature conversion
function temperature() {
    // Get user input values
    var inputValue = parseFloat(document.getElementById("inputValue").value);
    var type1 = document.getElementById("type1").value;
    var type2 = document.getElementById("type2").value;

    // Check if the input value is a valid number
    if (isNaN(inputValue)) {
        alert("Please enter a valid number for the temperature value.");
        return;
    }

    // Perform the temperature conversion
    var result;

    if (type1 === "celcius" && type2 === "fahrenheit") {
        result = (inputValue * 9/5) + 32;
    } else if (type1 === "fahrenheit" && type2 === "celcius") {
        result = (inputValue - 32) * 5/9;
    } else if (type1 === "celcius" && type2 === "kelvin") {
        result = inputValue + 273.15;
    } else if (type1 === "kelvin" && type2 === "celcius") {
        result = inputValue - 273.15;
    } else if (type1 === "fahrenheit" && type2 === "kelvin") {
        result = (inputValue - 32) * 5/9 + 273.15;
    } else if (type1 === "kelvin" && type2 === "fahrenheit") {
        result = (inputValue - 273.15) * 9/5 + 32;
    } else {
        // The "From" and "To" units are the same
        result = inputValue;
    }

    // Display the result
    document.getElementById("result").textContent = result.toFixed(2);
}

// Add an event listener to the "Convert" button
document.getElementById("convertButton").addEventListener("click", temperature);
