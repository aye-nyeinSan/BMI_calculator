console.log("Problem2: Finding BMI Color");

const BMIColor = [
  {
    condition: "Obesity",
    color: "red",
  },
  {
    condition: "Overweight",
    color: "orange",
  },
  {
    condition: "Normal weight",
    color: "yellow",
  },
  {
    condition: "Underweight",
    color: "green",
  },
];

function Person(weight, height) {
  if (weight && height) {
    this.weight = weight;
    this.height = height;
    this.bmi = this.weight / Math.pow(this.height, 2);
  } else {
    alert("insert weight and height!!");
    return;
  }

  const BMIColor = [
    { category: "obesity", color: "red" },
    { category: "Overweight", color: "orange" },
    { category: "Normal weight", color: "yellow" },
    { category: "Underweight", color: "green" },
  ];

  this.findBMIColor = function () {
    if (this.bmi > 30) {
      return BMIColor[0].color;
    } else if (this.bmi >= 25 && this.bmi <= 29.9) {
      return BMIColor[1].color;
    } else if (this.bmi >= 18.6 && this.bmi <= 24.9) {
      return BMIColor[2].color;
    } else {
      return BMIColor[3].color;
    }
  };
}

console.log(new Person(90, 1.68).findBMIColor());
// → red
console.log(new Person(75, 1.68).findBMIColor());
// → orange
console.log(new Person(55, 1.68).findBMIColor());
// → yellow
console.log(new Person(45, 1.68).findBMIColor());
// → green
