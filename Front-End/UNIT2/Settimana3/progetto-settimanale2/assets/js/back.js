const dataUrl = "https://striveschool-api.herokuapp.com/api/product/";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZDU5ZTJkN2IxMTAwMTkwZTZkY2QiLCJpYXQiOjE3MDk4ODg5MjYsImV4cCI6MTcxMTA5ODUyNn0.5cMzW148MllRx_wsriGeodbK_f-7X0c-RA0BOzeHaqk";

window.addEventListener("load", async () => {
  const submitBtn = document.getElementById("save");
  submitBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    const nameInput = document.getElementById("name");
    const brandInput = document.getElementById("brand");
    const priceInput = document.getElementById("price");
    const imageUrlInput = document.getElementById("imageUrl");
    const descriptionInput = document.getElementById("description");

    const name = nameInput.value;
    const brand = brandInput.value;
    const price = priceInput.value;
    const imageUrl = imageUrlInput.value;
    const description = descriptionInput.value;
    const product = { name, brand, price, imageUrl, description };

    await addProduct(product);
  });
});

const addProduct = async (product) => {
  try {
    const response = await fetch(dataUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(product),
    });
    await response.json();
    alert("Prodotto inserito");
    location.href = "homepage.html";
  } catch (error) {
    console.log(error);
    alert("Errore nell'inserimento del prodotto");
  }
};
