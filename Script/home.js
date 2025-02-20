// Hämta användarnamnet från URL
const urlParts = window.location.pathname.split("/");
const username = urlParts[urlParts.length - 1]; // Exempel: "Bertil123"

// Hämta användarens profil från servern
async function fetchUserProfile() {
    try {
        const response = await fetch(`http://localhost:3000/users/${username}`);
        const user = await response.json();

        if (response.ok) {
            document.getElementById("profile-name").innerText = user.name;
        } else {
            console.error("Fel vid hämtning av profil:", user.message);
        }
    } catch (error) {
        console.error("Serverfel:", error);
    }
}

fetchUserProfile();
