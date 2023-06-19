class Person {
  constructor(myName, height, weight) {
    this.myName = myName;
    this.height = height;
    this.weight = weight;
  }

  bmiCalculator() {
    return this.weight / this.height ** 2;
  }
}

let person = null;
document.querySelector("#btn").onclick = function (event) {
  event.preventDefault(); // Prevent form submission
  let myName = document.getElementById("myName").value;
  let weight = parseFloat(document.getElementById("myWeight").value);
  let height = parseFloat(document.getElementById("myHeight").value);
  person = new Person(myName, height, weight);
  let personBmi = person.bmiCalculator();
  let bmi = personBmi.toFixed(1)

  let resultElement = document.getElementById("result");
  let paraElement = document.getElementById("para");
  paraElement.textContent = `Hello ${myName},  your BMI is ${bmi}`;
  let comment = document.getElementById("comments");

  if (bmi < 18.5) {
    comment.textContent = `and hey ${myName}, you are underweight, please see a doctor<span class="red"> !!!!</span>`;
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    comment.textContent = `Hurray ${myName}, your weight is normal!! please keep it up`;
  } else if (bmi >= 25.0 && bmi <= 29.9) {
    comment.textContent = `and hey ${myName}, you are overweight, please see a doctor<span class="red">!!</span>`;
  }else if (bmi >= 30){
    comment.textContent = `ohh wow ${myName},this is a red alert<span class="red">!!!</span> you are obese, please see a doctor<span class="red">!!!!</span>`;
  }
  resultElement.style.display = "block";
}
document.querySelector("#clearBtn").onclick = function (event) {
  event.preventDefault(); // Prevent form submission
  document.getElementById("myName").value = "";
  document.getElementById("myWeight").value = "";
  document.getElementById("myHeight").value = "";
  document.getElementById("result").style.display = "none";
  document.getElementById("para").textContent = "";
  document.getElementById("comments").textContent = "";
}