const products = [
  {
    id: 1,
    name: "pedigree ",
    price: 29.99,
    image: "image/pedigree.jpg",
    description: "Pedigree is a complete and balanced dog food. Prepared from high quality ingredients, Pedigree is rich in protein and nutrition. Pedigree provides dogs with 5 signs of good health - healthy skin and coat, strong bones and teeth, healthy digestion, strong muscles and a strong immune system. It also contains an optimal blend of Omega 6 and zinc, which have been proven to ensure a healthier and shinier coat in puppies and adult dogs. "
  },
  {
    id: 2,
    name: "bone biscuit",
    price: 49.99,
    image: "image/bone biscuit.jpg",
    description: "This is a great product B."
  },
  {
    id: 3,
    name: "dollor",
    price: 59.99,
    image: "image/dollor.jpg",
    description: "This is a great product B."
  },
  {
    id: 3,
    name: "chicken chunks",
    price: 19.99,
    image: "image/chicken.jpg",
    description: "This is a great product C."
  }
];

const listDiv = document.getElementById('product-list');

if (listDiv) {
  products.forEach(product => {
    const div = document.createElement('div');
    div.className = 'product-card';
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
      <button onclick='viewDetails(${JSON.stringify(product)})'>View Details</button>
    `;
    listDiv.appendChild(div);
  });
}

function viewDetails(product) {
  localStorage.setItem('selectedProduct', JSON.stringify(product));
  window.location.href = "p1.html";
}
