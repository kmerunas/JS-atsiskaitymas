const title = document.getElementById("title");
const description = document.getElementById("description");
const price = document.getElementById("price");
const listingLocation = document.getElementById("location");
const img = document.getElementById("listing-img");
const deleteButton = document.getElementById("delete-btn");
const successMessage = document.getElementById("success-message");

const fetchListingById = async () => {
  const url = new URL(window.location.href);
  const id = url.searchParams.get("listingsId");

  const response = await fetch(
    `https://67daefd51fd9e43fe472e9e9.mockapi.io/listings/${id}`
  );

  const data = await response.json();

  return data;
};

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

const deleteListingById = async () => {
  const url = new URL(window.location.href);
  const id = url.searchParams.get("listingsId");

  const response = await fetch(
    `https://67daefd51fd9e43fe472e9e9.mockapi.io/listings/${id}`,
    {
      method: "DELETE",
    }
  );

  const data = await response.json();

  return data;
};

deleteButton.addEventListener("click", async () => {
  const data = await deleteListingById();

  if (data) {
    successMessage.textContent = "Skelbimas buvo sėkmingai ištrintas";
    setTimeout(() => {
      document.location.href = "../index.html";
    }, 1000);
  }

  console.log(data);
});
