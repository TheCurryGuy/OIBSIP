function convertTemperature() {
    // Get user input
    var temperatureInput = parseFloat(document.getElementById("temperatureInput").value);
    
    // Check if input is a valid number
    if (isNaN(temperatureInput)) {
        alert("Please enter a valid number for temperature.");
        return;
    }

    // Get selected input and output units
    var inputUnitSelector = document.getElementById("inputUnit");
    var inputUnit = inputUnitSelector.options[inputUnitSelector.selectedIndex].value;

    var outputUnitSelector = document.getElementById("outputUnit");
    var outputUnit = outputUnitSelector.options[outputUnitSelector.selectedIndex].value;

    // Perform conversion
    var result = convertToOutputUnit(temperatureInput, inputUnit, outputUnit);

    // Display result
    document.getElementById("result").innerText = "Converted Temperature: " + result.toFixed(2) + "°" + outputUnit;
}

function convertToOutputUnit(temperature, inputUnit, outputUnit) {
    if (inputUnit === outputUnit) {
        return temperature; // No conversion needed
    }

    switch (inputUnit) {
        case "celsius":
            return convertCelsius(temperature, outputUnit);

        case "fahrenheit":
            return convertFahrenheit(temperature, outputUnit);

        case "kelvin":
            return convertKelvin(temperature, outputUnit);

        default:
            return temperature;
    }
}

function convertCelsius(temperature, outputUnit) {
    switch (outputUnit) {
        case "fahrenheit":
            return (temperature * 9/5) + 32;

        case "kelvin":
            return temperature + 273.15;

        default:
            return temperature;
    }
}

function convertFahrenheit(temperature, outputUnit) {
    switch (outputUnit) {
        case "celsius":
            return (temperature - 32) * 5/9;

        case "kelvin":
            return (temperature - 32) * 5/9 + 273.15;

        default:
            return temperature;
    }
}

function convertKelvin(temperature, outputUnit) {
    switch (outputUnit) {
        case "celsius":
            return temperature - 273.15;

        case "fahrenheit":
            return (temperature - 273.15) * 9/5 + 32;

        default:
            return temperature;
    }
}
