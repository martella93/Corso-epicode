const dataURL = "https://striveschool-api.herokuapp.com/api/product/";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZDU5ZTJkN2IxMTAwMTkwZTZkY2QiLCJpYXQiOjE3MDk4ODg5MjYsImV4cCI6MTcxMTA5ODUyNn0.5cMzW148MllRx_wsriGeodbK_f-7X0c-RA0BOzeHaqk";
lista = [];
const cards = document.getElementById("cards");
const fetchProducts = async () => {
  try {
    const response = await fetch(dataURL, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZDU5ZTJkN2IxMTAwMTkwZTZkY2QiLCJpYXQiOjE3MDk4ODg5MjYsImV4cCI6MTcxMTA5ODUyNn0.5cMzW148MllRx_wsriGeodbK_f-7X0c-RA0BOzeHaqk",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    lista = await response.json();
    createCards();
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

const createCards = () => {
  cards.innerHTML = "";
  lista.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card", "ms-3");

    const immagine = document.createElement("img");
    immagine.src = product.imageUrl;
    immagine.alt = product.name;
    card.appendChild(imageUrl);

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const title = document.createElement("h3");
    title.classList.add("card-title");
    title.textContent = product.name;
    cardBody.appendChild(title);

    const brand = document.createElement("p");
    brand.classList.add("card-text");
    brand.textContent = `Brand: ${product.brand}`;
    cardBody.appendChild(brand);

    const price = document.createElement("p");
    price.classList.add("card-text");
    price.textContent = `Price: $${product.price}`;
    cardBody.appendChild(price);

    const description = document.createElement("p");
    description.classList.add("card-text");
    description.textContent = product.description;
    cardBody.appendChild(description);

    const editButton = document.createElement("button");
    editButton.textContent = "Modifica";
    editButton.classList.add("btn", "btn-success", "me-2");
    editButton.addEventListener("click", () => {
      window.location.href = `edit.html?id=${product._id}`;
    });
    cardBody.appendChild(editButton);

    const detailsButton = document.createElement("button");
    detailsButton.textContent = "Scopri di più";
    detailsButton.classList.add("btn", "btn-primary", "me-2");
    detailsButton.addEventListener("click", () => {
        window.location.href = "details.html";
    });
    cardBody.appendChild(detailsButton);

    card.appendChild(cardBody);

  });
};
createCards();
