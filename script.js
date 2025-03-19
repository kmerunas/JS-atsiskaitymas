const cardsWrapper = document.getElementById("cards-wrapper");

const fetchData = async () => {
  const response = await fetch(
    "https://67daefd51fd9e43fe472e9e9.mockapi.io/listings"
  );
  const data = await response.json();

  return data;
};

const buildCards = (items) => {
  items.forEach((item) => {
    const card = document.createElement("a");
    card.setAttribute("class", "card");
    card.href = `./listing/index.html?listingsId=${item.id}`;

    const img = document.createElement("img");
    img.src = item.img;

    const title = document.createElement("h3");
    title.textContent = item.title;

    const price = document.createElement("h4");
    price.textContent = `${item.price} €`;

    card.append(img);
    card.append(title);
    card.append(price);

    cardsWrapper.append(card);
  });
};

const startApp = async () => {
  const listings = await fetchData();

  listings.sort((a, b) => a.price - b.price);

  buildCards(listings);
};
startApp();
