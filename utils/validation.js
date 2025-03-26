export const listingValidation = (
  titleInput,
  priceInput,
  imgInput,
  descriptionInput,
  locationInput
) => {
  if (
    !titleInput.value ||
    !priceInput.value ||
    !imgInput.value ||
    !descriptionInput.value ||
    !locationInput.value
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
  if (locationInput.value.length < 4) {
    console.log("minimum of 4 symbols");
    return;
  }
};
