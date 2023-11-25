class Weight {
     constructor() {
          this.weight = 0;
     }
     getWeight() {
          this.weight = parseFloat(document.getElementById("weight").value);
          if (isNaN(this.weight)) {
               alert("weight must be in numbers ");
               document.getElementById("weight").value = '';
          }
          else {
               return this.weight;
          }
          console.log("The value of weight is " + this.weight);
     }
}


class Height extends Weight {
     constructor() {
          super();
          this.foot = 0;
          this.inch = 0;
          this.meter = 0;
     }
     getMeter() {
          this.foot = parseInt(document.getElementById("foot").value);
          this.inch = parseInt(document.getElementById("inch").value);
          if (isNaN(this.foot) || isNaN(this.inch)) {
               alert("weight must be in numbers ");
               document.getElementById("foot").value = '';
               document.getElementById("inch").value = '';
          }
          else {
               let foot_meter = this.foot / 3.281;
               let inch_meter = this.inch / 39.37;
               this.meter = foot_meter + inch_meter;
               console.log("The value of meter is " + this.meter);
               return this.meter;
          }
     }
}

class BMI extends Height {
     constructor() {
          super();
          this.bmi;
     }
     getBmi(weight, meter) {
          this.bmi = weight / (meter * meter);
          console.log("the value of bmi is " + this.bmi);
          document.getElementById("answer").value = this.bmi.toFixed(2);
     }
}


function findBmi() {
     var bmi = new BMI();
     let weight = bmi.getWeight();
     let height = bmi.getMeter();
     let answer = bmi.getBmi(weight, height);
}


let button = document.getElementById("calulate");
button.addEventListener("click", findBmi, true);
