function convertTemperature() {
    const celsius = parseFloat(document.getElementById("celsius").value);
    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("result").textContent = `Result: ${fahrenheit.toFixed(2)}°F`;
}
