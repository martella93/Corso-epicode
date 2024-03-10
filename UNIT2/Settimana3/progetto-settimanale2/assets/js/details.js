const productDetails = document.getElementById('productDetails');
const dataUrl = 'https://striveschool-api.herokuapp.com/api/product/';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZDU5ZTJkN2IxMTAwMTkwZTZkY2QiLCJpYXQiOjE3MDk4ODg5MjYsImV4cCI6MTcxMTA5ODUyNn0.5cMzW148MllRx_wsriGeodbK_f-7X0c-RA0BOzeHaqk';

window.addEventListener('load', () => {
  const params = new URLSearchParams(location.search);
  const id = params.get('id');
  loadProductDetails(id);
});

const loadProductDetails = async (productId) => {
  try {
    const response = await fetch(dataUrl + productId, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
    });
    const product = await response.json();
    printProductDetails(product);
  } catch (error) {
    console.log(error);
  }
};

const printProductDetails = (product) => {
  productDetails.innerHTML = `
    <div class="col-6 text-center">
        <img src="${product.imageUrl}" width="100%" />
    </div>
    <div class="col-6">
        <h5>${product.brand}</h5>
        <h2>${product.name}</h2>
        <p class="badge bg-dark text-black">${product.price}€</p>
        <p class="mt-3">${product.description}</p>
    </div>
    `;
};