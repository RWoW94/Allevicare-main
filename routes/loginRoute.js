document.getElementById('login-button').addEventListener('click', async (event) => {
  event.preventDefault(); // Prevent the default form submission

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Send a POST request to the server for login
  const response = await fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  });

  const home = await response.json();

  if (response.ok) {
    console.log("Login successful!");
    console.log("JWT token:", home.token); // If you want to log the token to the console
    // Save JWT token in localStorage or sessionStorage for later use
    localStorage.setItem('token', home.token);

    // Redirect the user to /Home
    window.location.href = `/${username}`;
  } else {
    console.log("Login failed:", home.message);
  }
});
  