window.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/product/${productId}`, {
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZDU5ZTJkN2IxMTAwMTkwZTZkY2QiLCJpYXQiOjE3MDk4ODg5MjYsImV4cCI6MTcxMTA5ODUyNn0.5cMzW148MllRx_wsriGeodbK_f-7X0c-RA0BOzeHaqk"
            },
        });

        if (!response.ok) {
        throw new Error("Network is not ok");
        }

        const product = await response.json();

        document.getElementById('name').value = product.name;
        document.getElementById('brand').value = product.brand;
        document.getElementById('imageUrl').value = product.imageUrl;
        document.getElementById('price').value = product.price;
        document.getElementById('description').value = product.description;


        document.getElementById('form').addEventListener('submit', async (event) => {
            event.preventDefault()
            const formData = new FormData(event.target);
            const updatedProductData = Object.fromEntries(formData.entries());

            try {
                const updateResponse = await fetch(`https://striveschool-api.herokuapp.com/api/product/${productId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZDU5ZTJkN2IxMTAwMTkwZTZkY2QiLCJpYXQiOjE3MDk4ODg5MjYsImV4cCI6MTcxMTA5ODUyNn0.5cMzW148MllRx_wsriGeodbK_f-7X0c-RA0BOzeHaqk'
                    },
                    body: JSON.stringify(updatedProductData)
                });

                if (!updateResponse.ok) {
                    throw new Error('errore');
                }

                const updatedProduct = await updateResponse.json();


                window.location.href = 'homepage.html';
            } catch (error) {
                console.error('Error updating product:', error);
            }
        });


        document.getElementById('deleteButton').addEventListener('click', async () => {
            try {
                const deleteResponse = await fetch(`https://striveschool-api.herokuapp.com/api/product/${productId}`, {
                    method: 'DELETE',
                    headers: {
                        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZDU5ZTJkN2IxMTAwMTkwZTZkY2QiLCJpYXQiOjE3MDk4ODg5MjYsImV4cCI6MTcxMTA5ODUyNn0.5cMzW148MllRx_wsriGeodbK_f-7X0c-RA0BOzeHaqk'
                    }
                });

                if (!deleteResponse.ok) {
                    throw new Error('Error');
                }


                window.location.href = 'homepage.html';
            } catch (error) {
               console.log(error);
            }
        });
    } catch (error) {
        console.error(error);
    }
});