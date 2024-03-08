const dataURL = 'https://striveschool-api.herokuapp.com/api/product/';

const addProductForm = document.getElementById('form')

addProductForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(addProductForm);
  const product = Object.fromEntries(formData.entries());

  try {
    const response = await fetch(dataURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZDU5ZTJkN2IxMTAwMTkwZTZkY2QiLCJpYXQiOjE3MDk4ODg5MjYsImV4cCI6MTcxMTA5ODUyNn0.5cMzW148MllRx_wsriGeodbK_f-7X0c-RA0BOzeHaqk"  ,
      },
      body: JSON.stringify(product),
    });

    if (!response.ok) {
      throw new Error("Network is not ok");
    }
    const newProduct = await response.json();
  } catch (error) {
    console.error("Error adding product:", error);
  }
});