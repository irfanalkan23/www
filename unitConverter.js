const units = {
    length: {
        "meters": 1,
        "kilometers": 0.001,
        "centimeters": 100,
        "millimeters": 1000,
        "inches": 39.3701,
        "feet": 3.28084,
        "yards": 1.09361,
        "miles": 0.000621371
    },
    weight: {
        "grams": 1,
        "kilograms": 0.001,
        "milligrams": 1000,
        "pounds": 0.00220462,
        "ounces": 0.035274,
        "stones": 0.000157473
    }
};

function updateUnits() {
    const unitType = document.getElementById('unit-type').value;
    const fromUnit = document.getElementById('from-unit');
    const toUnit = document.getElementById('to-unit');

    fromUnit.innerHTML = '';
    toUnit.innerHTML = '';

    for (const unit in units[unitType]) {
        const option1 = document.createElement('option');
        option1.value = unit;
        option1.textContent = unit;

        const option2 = document.createElement('option');
        option2.value = unit;
        option2.textContent = unit;

        fromUnit.appendChild(option1);
        toUnit.appendChild(option2);
    }

    // Pre-select default units based on type
    if (unitType === 'length') {
        fromUnit.value = 'kilometers';
        toUnit.value = 'meters';
    } else if (unitType === 'weight') {
        fromUnit.value = 'kilograms';
        toUnit.value = 'grams';
    }

    // Trigger conversion
    convert();
}

function convert() {
    const unitType = document.getElementById('unit-type').value;
    const fromUnit = document.getElementById('from-unit').value;
    const toUnit = document.getElementById('to-unit').value;
    const inputValue = document.getElementById('input-value').value;
    const resultBox = document.getElementById('result');

    // Check if inputValue is valid
    if (!inputValue || isNaN(inputValue)) {
        resultBox.textContent = '0.00';
        return;
    }

    // If From and To units are the same, set the result to the input value
    if (fromUnit === toUnit) {
        resultBox.textContent = `${parseFloat(inputValue).toFixed(2)}`;
        return;
    }

    const conversionFactor = units[unitType][toUnit] / units[unitType][fromUnit];
    const resultValue = inputValue * conversionFactor;

    resultBox.textContent = `${resultValue.toFixed(2)}`;
}

// Initialize with default values
updateUnits();
