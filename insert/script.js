const titleInput = document.getElementById("title-input");
const priceInput = document.getElementById("price-input");
const imgInput = document.getElementById("img-input");
const descriptionInput = document.getElementById("description-input");
const submitButton = document.getElementById("submit-btn");
const form = document.getElementById("form");

const insertListing = async (data) => {
  const response = await fetch(
    "https://67daefd51fd9e43fe472e9e9.mockapi.io/listings",
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    }
  );
  return response;
};

submitButton.addEventListener("click", async () => {
  if (
    !titleInput.value ||
    !priceInput.value ||
    !imgInput.value ||
    !descriptionInput.value
  ) {
    console.log("Please fill all the data");
    return;
  }
  if (titleInput.value.length < 4) {
    console.log("minimum of 4 symbols");
    return;
  }
  const priceRegex = /^\d+$/;
  if (!priceRegex.test(priceInput.value)) {
    console.log("please only enter numbers");
    return;
  }
  const imgRedex =
    /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp|svg))(?:\?.*)?$/i;
  if (!imgRedex.test(imgInput.value)) {
    console.log("bad img address");
    return;
  }
  if (descriptionInput.value.length < 10) {
    console.log("minimum of 10 symbols");
    return;
  }
  const listing = {
    title: titleInput.value,
    price: priceInput.value,
    img: imgInput.value,
    description: descriptionInput.value,
  };
  const response = await insertListing(listing);

  if (response.status === 201) {
    const successMessage = document.createElement("p");
    successMessage.setAttribute("class", "success-message");
    successMessage.textContent = "Skelbimas sėkmingai patalpintas";
    form.append(successMessage);
  }
});
