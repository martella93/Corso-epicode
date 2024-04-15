const productDetails = document.getElementById('productDetails');
let id;
let product;
const dataURL = 'https://striveschool-api.herokuapp.com/api/product/';
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZDU5ZTJkN2IxMTAwMTkwZTZkY2QiLCJpYXQiOjE3MDk4ODg5MjYsImV4cCI6MTcxMTA5ODUyNn0.5cMzW148MllRx_wsriGeodbK_f-7X0c-RA0BOzeHaqk";

window.addEventListener('load', function () {
	const params = new URLSearchParams(location.search);
	id = params.get('id');
	loadProduct();
});

const loadProduct = async () => {
	try {
		const response = await fetch(`https://striveschool-api.herokuapp.com/api/product/${productId}`, {
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZDU5ZTJkN2IxMTAwMTkwZTZkY2QiLCJpYXQiOjE3MDk4ODg5MjYsImV4cCI6MTcxMTA5ODUyNn0.5cMzW148MllRx_wsriGeodbK_f-7X0c-RA0BOzeHaqk"
            },
        });
        if (!response.ok) {
            throw new Error("Network is not ok");
          }
		product = await response.json();
        printDetails();
       
	} catch (error) {
		console.log(error);
	}
};

const printDetails = () => {
    productDetails.innerHTML = `
    <div class="col-5 text-center">
        <img src="${product.imageUrl}" width="90%" />
    </div>
    <div class="col-6">
        <h6>${product.brand}</h6>
        <h2>${product.name}</h2>
        <span class="badge bg-dark text-warning">${product.price}€</span>
        <p class="mt-4">${product.description}</p>
    </div>
    `
}