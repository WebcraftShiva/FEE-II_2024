// Selectors
const profileName = document.querySelector("#profile-name");
const profileBio = document.querySelector("#profile-bio");
const profilePic = document.querySelector("#profile-pic");

const nameInput = document.querySelector("#name-input");
const bioInput = document.querySelector("#bio-input");
const picInput = document.querySelector("#pic-input");
const updateButton = document.querySelector("#update-button");

// Event Listener for update button
updateButton.addEventListener("click", () => {
  // Update profile name
  if (nameInput.value !== "") {
    profileName.innerText = nameInput.value;
  }

  // Update profile bio
  if (bioInput.value !== "") {
    profileBio.textContent = bioInput.value;
  }

  // Update profile picture
  if (picInput.value !== "") {
    profilePic.setAttribute("src", picInput.value);
  }

  // Clear inputs
  nameInput.value = "";
  bioInput.value = "";
  picInput.value = "";
});
