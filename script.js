const calculateTemp = () => {
  const numberTemp = document.getElementById("temp").value;
  //   console.log(numberTemp);
  const tempSelected = document.getElementById("temp_diff").value;

  //   console.log(valueTemp);

  const celToFah = (cel) => {
    let Fahrenheit = Math.round((cel * 9) / 5 + 32);
    return Fahrenheit;
  };
  const fahToCel = (fah) => {
    let celsius = Math.round(((fah - 32) * 9) / 5);
    return celsius;
  };

  let result;

  if (tempSelected === "cel") {
    result = celToFah(numberTemp);
    document.getElementById("resultContainer").innerHTML = `${result} Celsius`;
  } else {
    result = fahToCel(numberTemp);
    document.getElementById(
      "resultContainer"
    ).innerHTML = `${result} Fahrenheit`;
  }
};
