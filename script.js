const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const deleteBtn = document.getElementById("deleteBtn");
const displayedAccounts = document.getElementById("displayedAccounts");
const loading = document.getElementById("loading");

async function searchGitHubUser() {
  const username = searchInput.value.trim();

  // Validate input before showing loading
  if (username === "") {
    alert("Please enter a GitHub username!");
    return;
  }

  const API_URL = `https://api.github.com/users/${encodeURIComponent(username)}`;

  try {
    // Show loading only when a valid search starts
    loading.textContent = "loading GitHub profile...";

    displayedAccounts.innerHTML = "";

    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("GitHub user not found!");
    }

    const data = await response.json();

    displayedAccounts.innerHTML = `
      <div class="profile-card">
        <img src="${data.avatar_url}" alt="${data.login}">
        <h2>${data.name || data.login}</h2>
        <p>@${data.login}</p>
        <p>${data.bio || "No bio available."}</p>
        <span>Followers: ${data.followers}</span>
        <span>Following: ${data.following}</span>
        <span>Repos: ${data.public_repos}</span>
        <br><br>
        <a href="${data.html_url}" target="_blank"
           rel="noopener noreferrer">
          View GitHub Profile
        </a>
      </div>
    `;
  } catch (error) {
    alert(error.message);
  } finally {
    // Always hide loading after the request finishes
    loading.style.display = "none";
  }
}

searchBtn.addEventListener("click", searchGitHubUser);

searchInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    searchGitHubUser();
  }
});

deleteBtn.addEventListener("click", function () {
  searchInput.value = "";
  displayedAccounts.innerHTML = "";
  loading.style.display = "none";
});
