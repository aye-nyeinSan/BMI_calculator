console.log("Problem3: Interactive BMI calculation page");

// Write your code here
const submitBtn = document.querySelector(".submitBtn");
const resetBtn = document.querySelector(".resetBtn");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var bmiresult = document.getElementById("BmiResult");

submitBtn.addEventListener("click", (event) => {
  weightValue = parseFloat(weight.value);
  heightValue = parseFloat(height.value);
  const person = new Person(weightValue, heightValue);

//   sessionStorage.setItem("weight", weightValue);
//   sessionStorage.setItem("height", heightValue);
//   sessionStorage.setItem("Bmi", person.bmi);
    if(person.bmi != undefined){
        var resultH1 = document.createElement("h1");
        resultH1.innerText = person.bmi;
        resultH1.style.color = "orange";
        bmiresult.appendChild(resultH1);
      
        var img = document.createElement("img");
        img.src = "image.png";
        bmiresult.appendChild(img);
    }
   
  
});

resetBtn.addEventListener("click", () => {
  height.value = "";
  weight.value = "";
  var resultH1 = bmiresult.querySelector("h1");
  var img = bmiresult.querySelector("img");
  if (resultH1 || img) {
    bmiresult.removeChild(resultH1);
    bmiresult.removeChild(img);
  }
//   sessionStorage.removeItem('weight');
//   sessionStorage.removeItem('height');
//   sessionStorage.removeItem('Bmi');
  console.log("reset");
});
