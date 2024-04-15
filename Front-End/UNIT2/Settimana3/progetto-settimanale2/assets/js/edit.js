const dataUrl = 'https://striveschool-api.herokuapp.com/api/product/';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZDU5ZTJkN2IxMTAwMTkwZTZkY2QiLCJpYXQiOjE3MDk4ODg5MjYsImV4cCI6MTcxMTA5ODUyNn0.5cMzW148MllRx_wsriGeodbK_f-7X0c-RA0BOzeHaqk';

const modifyProduct = async (id, product) => {
    try {
        const response = await fetch(dataUrl + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(product),
        });
        await response.json();
        alert('Prodotto modificato');
        location.href = 'homepage.html';
    } catch (error) {
        console.log(error);
        alert('Errore nella modifica del prodotto');
    }
}

const deleteProduct = async (id) => {
    try {
        const response = await fetch(dataUrl + id, {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${token}`
         },
        });
        await response.json();
        alert('Prodotto eliminato');
        location.href = 'homepage.html';
    } catch (error) {
        console.log(error);
        alert('Errore nell\'eliminazione del prodotto');
    }
}


window.addEventListener('load', async () => {
    const params = new URLSearchParams(location.search);
    const id = params.get('id');

    const form = document.querySelector('form');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const product = Object.fromEntries(formData.entries());

        if (id) {
            await modifyProduct(id, product);
        } else {
            console.log('Errore: Id non trovato');
        }
    });
});