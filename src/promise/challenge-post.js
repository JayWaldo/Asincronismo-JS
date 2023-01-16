import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

// Agregar/Enviar datos: metodo: POST
function postData(urlAPI, data) {
  const response = fetch(urlAPI, {
    method: 'POST',
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return response;
}

const data = {
  "title": "Elver",
  "price": 69,
  "description": "A description",
  "categoryId": 1,
  "images": ["https://placeimg.com/640/480/any"]
}

postData(`${API}/products`, data)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));

// Borrar datos: metodo: DELETE
function deleteData(urlAPI, data) {
  const response = fetch(urlAPI, {
    method: 'DELETE',
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return response;
}

deleteData(`${API}/products/247`, data)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));