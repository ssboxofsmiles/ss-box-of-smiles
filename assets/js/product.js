const params = new URLSearchParams(window.location.search);

const id = Number(params.get("id"));

const product = products.find(p => p.id === id);

if(product){

document.getElementById("productImage").src = product.image;

document.getElementById("productName").textContent = product.name;

document.getElementById("productPrice").textContent = "₹" + product.price;

document.getElementById("productRating").textContent = product.rating;

document.getElementById("productDescription").textContent = product.description;

const list = document.getElementById("productIncludes");

list.innerHTML="";

const includes = [
"Chocolate",
"Greeting Card",
"Decor Items",
"Fairy Lights",
"Personalized Message"
];

includes.forEach(item=>{

const li=document.createElement("li");

li.textContent=item;

list.appendChild(li);

});

document.getElementById("whatsappBtn").href =
`https://wa.me/919844751214?text=Hi, I'm interested in ${product.name}`;

}