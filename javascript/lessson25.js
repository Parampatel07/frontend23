function getData() {
     var name = document.getElementById("username").value;
     var age = document.getElementById("age").value;
     var roll_no = document.getElementById("roll_no").value;
     var marks = document.getElementById("marks").value;

     console.log(`Name is ${name} Roll no is ${roll_no} and age is ${age} and marks are ${marks}`);

     if (marks <= 50) {
          var tr = `  <tr style='background-color:red;'>
          <td>${name}</td>
          <td>${age}</td>
          <td>${roll_no}</td>
          <td>${marks}</td>
          </tr>`;
     }
     else {
          var tr = `  <tr style='background-color:green;'>
          <td>${name}</td>
          <td>${age}</td>
          <td>${roll_no}</td>
          <td>${marks}</td>
     </tr>`;
     }


     document.getElementById("data").innerHTML += tr;
}