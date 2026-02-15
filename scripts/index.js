console.log("script connected");

// Select Edit Profile button
const editProfileButton = document.querySelector(".profile__edit-btn");

// Select Edit Profile modal
const editProfileModal = document.querySelector("#edit-profile-modal");

// Select Edit Profile modal's close button
const editProfileCloseButton =
  editProfileModal.querySelector(".modal__close-btn");

// Select New Post button
const newPostButton = document.querySelector(".profile__add-btn");

// Select New Post modal
const newPostModal = document.querySelector("#new-post-modal");

// Select New Post modal's close button
const newPostCloseButton = newPostModal.querySelector(".modal__close-btn");

// Reusable function to open a modal
function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

// Reusable function to close a modal
function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

// Add click event listener to Edit Profile button
editProfileButton.addEventListener("click", () => {
  openModal(editProfileModal);
});

// Add click event listener to Edit Profile close button
editProfileCloseButton.addEventListener("click", () => {
  closeModal(editProfileModal);
});

// Add click event listener to New Post button
newPostButton.addEventListener("click", () => {
  openModal(newPostModal);
});

// Add click event listener to New Post close button
newPostCloseButton.addEventListener("click", () => {
  closeModal(newPostModal);
});
