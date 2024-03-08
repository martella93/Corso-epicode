const dataURL = "https://striveschool-api.herokuapp.com/api/product/";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZDU5ZTJkN2IxMTAwMTkwZTZkY2QiLCJpYXQiOjE3MDk4ODg5MjYsImV4cCI6MTcxMTA5ODUyNn0.5cMzW148MllRx_wsriGeodbK_f-7X0c-RA0BOzeHaqk";

const fetchProducts = async () => {
    try {
        const response = await fetch(dataURL, {
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZDU5ZTJkN2IxMTAwMTkwZTZkY2QiLCJpYXQiOjE3MDk4ODg5MjYsImV4cCI6MTcxMTA5ODUyNn0.5cMzW148MllRx_wsriGeodbK_f-7X0c-RA0BOzeHaqk"
            },
        });

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const products = await response.json();
        console.log("Products:", products);
        return products;
    } catch (error) {
        console.error("Error fetching products:", error);
        
    }
};

const createCards = (product) => {
    const card = document.createElement('div');
    card.classList.add('card', 'ms-3');

    const immagine = document.createElement('img');
    immagine.src = product.imageUrl;
    immagine.alt = product.name;
    card.appendChild(image);

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const title = document.createElement('h3');
    title.classList.add('card-title');
    title.textContent = product.name;
    cardBody.appendChild(title);

    const brand = document.createElement('p');
    brand.classList.add('card-text');
    brand.textContent = `Brand: ${product.brand}`;
    cardBody.appendChild(brand);

    const price = document.createElement('p');
    price.classList.add('card-text');
    price.textContent = `Price: $${product.price}`;
    cardBody.appendChild(price);

    const description = document.createElement('p');
    description.classList.add('card-text');
    description.textContent = product.description;
    cardBody.appendChild(description);

    const editButton = document.createElement('button');
    editButton.textContent = 'Modifica';
    editButton.classList.add('btn', 'btn-success', 'me-2');
    editButton.addEventListener('click', () => {
        window.location.href = `edit.html?id=${product._id}`;
    });
    cardBody.appendChild(editButton);

    const detailsButton = document.createElement('button');
    detailsButton.textContent = 'Scopri di più';
    detailsButton.classList.add('btn', 'btn-primary', 'me-2');
    detailsButton.addEventListener('click', () => {
        
    });
    cardBody.appendChild(detailsButton);

    card.appendChild(cardBody);

    return card;
};

const mostraProdotti = async () => {
    try {
        const products = await fetchProducts();
        const containerCards= document.getElementById('cards');

        products.forEach((product) => {
            const card = createCards(product);
            containerCards.appendChild(card);
        });
    } catch (error) {
        console.error('Error showing products:', error);
    }
};
showProducts()


