//Function for changing username and password
function createUser() {
    const username = document.getElementById("reg_username").value;
    const password = document.getElementById("reg_password").value;
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const age = document.getElementById("age").value;
    const socialnumber = document.getElementById("socialnumber").value;
    const address = document.getElementById("address").value;
    const zipcode = document.getElementById("zipcode").value;
    const phone = document.getElementById("phone").value;
  
    console.log("Extracted current username:", username, password, firstname, lastname, age, socialnumber, address, zipcode, phone);
  
    fetch('http://localhost:3000/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password, firstname, lastname, age, socialnumber, address, zipcode, phone })
    })
    .then(response => response.json())
    .then(data => {
      if (data.message) {
        console.error("Error:", data.message);
      } else {
        console.log("User created successfully:", data);
      }
    })
    .catch(error => {
      console.error("Error:", error);
    });
  }

  function createHealthform() {

    const socialnumber = document.getElementById("socialnumber").value;
    const healthTitle = document.getElementById("title1").innerText;
    const healthInfo = document.getElementById("info1").options[document.getElementById("info1").selectedIndex].text;
    const level = document.getElementById("info1").value;
    /* const answer = document.getElementById("answer1").value; */

    let container = [[socialnumber, healthTitle, healthInfo, level]];

  
    console.log("Extracted variables:", container[0]);
  
    fetch('http://localhost:3000/healthform', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({socialnumber, healthTitle, healthInfo, level})
    })
    .then(response => response.json())
    .then(data => {
      if (data.message) {
        console.error("Error:", data.message);
      } else {
        console.log("User created successfully:", data);
      }
    })
    .catch(error => {
      console.error("Error:", error);
    });
  }