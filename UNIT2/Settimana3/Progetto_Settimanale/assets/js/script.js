const dataURL = "https://striveschool-api.herokuapp.com/api/product/";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZDU5ZTJkN2IxMTAwMTkwZTZkY2QiLCJpYXQiOjE3MDk4ODg5MjYsImV4cCI6MTcxMTA5ODUyNn0.5cMzW148MllRx_wsriGeodbK_f-7X0c-RA0BOzeHaqk";
lista = [];
const cards = document.getElementById("cards");
const loadProducts = async () => {
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


  
const createCardsProducts = (products) => {
  let productsHTML = "";
  for (let i = 0; i < products.length; i++) {
    const product = productsArray[i];
    productsHTML += `
            <div class="col">
                <div class="card">
                    <img src="${product.imageUrl}" class="card-img-top" alt="Foto ${product.name}" />
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.description}</p>
                        <a class="btn btn-warning me-2 mb-2" href="edit.html?id=${product._id}">Modifica</a>
                        <a class="btn btn-info" href="details.html?id=${product._id}">Scopri di più</a>
                    </div>
                </div>
            </div>`;
  }
  productsList.innerHTML = productsHTML;
};



createCards();
