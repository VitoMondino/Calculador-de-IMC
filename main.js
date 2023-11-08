function calculateIMC() {
    var weightInput = document.getElementById("weight");
    var heightInput = document.getElementById("height");
    var resultDiv = document.getElementById("result");
  
    var weight = parseFloat(weightInput.value);
    var height = parseFloat(heightInput.value) / 100; // Convertir cm a m
    
    if (weight && height) {
      var bmi = weight / (height * height);
      resultDiv.textContent = "Tu IMC es: " + bmi.toFixed(2);
    } else {
      resultDiv.textContent = "Por favor, introduce tu peso y altura.";
    }
  }
  