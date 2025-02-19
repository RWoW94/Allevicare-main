document.getElementById('login-form').addEventListener('submit', async (event) => {
  event.preventDefault(); // Förhindra att formuläret skickas automatiskt

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Skicka en POST-förfrågan till servern för inloggning
  const response = await fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  });

  const home = await response.json();

  if (response.ok) {
 console.log("Inloggning lyckades!");
 console.log("JWT-token:", home.token); // Om du vill skriva ut token i konsolen
 // Spara JWT-token i localStorage eller sessionStorage för att använda senare
 localStorage.setItem('token', home.token);

 // Omdirigera användaren till /Home
 window.location.href = '/Home';
} else {
 console.log("Inloggning misslyckades:", home.message);
}

});
  