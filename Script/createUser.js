// Purpose: Create a new user and healthform in the database
function createHealthform() {

  let labels = document.querySelectorAll(".card_flex label");

  for (let i = 0; i < labels.length; i++) {
  let socialnumber = document.getElementById("socialnumber").value;

  let healthTitle = labels[i].innerText; 
  let selects = document.querySelectorAll(".card_flex select");
  let healthInfo = selects[i].options[selects[i].selectedIndex].text;
  let optionElement = selects[i];

  let value = optionElement ? optionElement.value : null;
  let level = !isNaN(value) ? value : null;
  let answer = isNaN(value) ? value : null;

  console.log("Extracted variables:", socialnumber, healthTitle, healthInfo, level, answer);

  fetch('http://localhost:3000/healthform', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({socialnumber, healthTitle, healthInfo, level, answer})
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
}

// Purpose: Create a new user in the database
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
        console.log("User created successfully:", data)
        createHealthform();
      }
    })
    .catch(error => {
      console.error("Error:", error);
    });
  }

