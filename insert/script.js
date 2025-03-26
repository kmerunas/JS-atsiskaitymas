import { insertListing } from "../utils/fetch.js";
import { listingValidation } from "../utils/validation.js";

const titleInput = document.getElementById("title-input");
const priceInput = document.getElementById("price-input");
const imgInput = document.getElementById("img-input");
const descriptionInput = document.getElementById("description-input");
const locationInput = document.getElementById("location-input");
const submitButton = document.getElementById("submit-btn");
const form = document.getElementById("form");

submitButton.addEventListener("click", async () => {
  const isValidationPassed = listingValidation(
    titleInput,
    priceInput,
    imgInput,
    descriptionInput,
    locationInput
  );

  const listing = {
    title: titleInput.value,
    price: priceInput.value,
    img: imgInput.value,
    description: descriptionInput.value,
    location: locationInput.value,
  };
  const response = await insertListing(listing);

  if (response.status === 201) {
    const successMessage = document.createElement("p");
    successMessage.setAttribute("class", "success-message");
    successMessage.textContent = "Skelbimas sėkmingai patalpintas";
    form.append(successMessage);
    setTimeout(() => {
      document.location.href = "../index.html";
    }, 2000);
  }
});
