export const fetchData = async () => {
  const response = await fetch(
    "https://67daefd51fd9e43fe472e9e9.mockapi.io/listings"
  );
  const data = await response.json();

  return data;
};

export const fetchListingById = async () => {
  const url = new URL(window.location.href);
  const id = url.searchParams.get("listingsId");

  const response = await fetch(
    `https://67daefd51fd9e43fe472e9e9.mockapi.io/listings/${id}`
  );

  const data = await response.json();

  return data;
};

export const deleteListingById = async () => {
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

export const insertListing = async (data) => {
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
