// Purpose: Fetch user profile from server and display it on the home page
// Description: This script is used to fetch a user profile from the server and display it on the home page.
const urlParts = window.location.pathname.split("/");
const username = urlParts[urlParts.length - 1]; 

// Fetch user profile
async function fetchUserProfile() {
    try {
        const response = await fetch(`http://localhost:3000/users/${username}`);
        const user = await response.json();

        if (response.ok) {
            console.log("Användarprofil hämtad");
        } else {
            console.error("Fel vid hämtning av profil:", user.message);
        }
    } catch (error) {
        console.error("Serverfel:", error);
    }
}

fetchUserProfile();

