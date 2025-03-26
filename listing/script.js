import { fetchListingById, deleteListingById } from "../utils/fetch.js";

const title = document.getElementById("title");
const description = document.getElementById("description");
const price = document.getElementById("price");
const listingLocation = document.getElementById("location");
const img = document.getElementById("listing-img");
const deleteButton = document.getElementById("delete-btn");
const successMessage = document.getElementById("success-message");

const buildScreen = (data) => {
  title.textContent = data.title;
  description.textContent = data.description;
  price.textContent = `${data.price} €`;
  listingLocation.textContent = data.location;
  img.src = data.img;
};

const startApp = async () => {
  const data = await fetchListingById();
  buildScreen(data);
};
startApp();

deleteButton.addEventListener("click", async () => {
  const data = await deleteListingById();

  if (data) {
    successMessage.textContent = "Skelbimas buvo sėkmingai ištrintas";
    setTimeout(() => {
      document.location.href = "../index.html";
    }, 2000);
  }

  console.log(data);
});
