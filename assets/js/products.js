// ==============================
// DOM Elements
// ==============================

const container = document.getElementById("productsContainer");
const searchInput = document.getElementById("searchInput");
const productsCount = document.getElementById("productsCount");
const sortSelect = document.getElementById("sortSelect");
const filterButtons = document.querySelectorAll(".filter-btn");


// ==============================
// Variables
// ==============================

let selectedCategory = "All";


// ==============================
// Display Products
// ==============================

function displayProducts(items) {

    container.innerHTML = "";

    // Product Count
    if (productsCount) {

        productsCount.textContent =
            `Showing ${items.length} Product${items.length !== 1 ? "s" : ""}`;

    }


    // No Products
    if (items.length === 0) {

        container.innerHTML = `
            <div class="no-products">

                <h2>No Products Found 😔</h2>

                <p>Try another search or category.</p>

            </div>
        `;

        return;
    }


    // Product Cards
    items.forEach(product => {

        container.innerHTML += `

        <div class="product-card">

            <img src="${product.image}" alt="${product.name}">

            <div class="product-info">

                <h3>${product.name}</h3>

                <p class="price">₹${product.price}</p>

                <p>⭐⭐⭐⭐⭐ (${product.rating})</p>

                <a href="product.html?id=${product.id}" class="view-btn">
                    View Details
                </a>

                <a
                    href="https://wa.me/919844751214?text=Hi, I'm interested in ${product.name}"
                    class="order-btn"
                    target="_blank">

                    Order on WhatsApp

                </a>

            </div>

        </div>

        `;

    });

}


// ==============================
// Filter + Search + Sort
// ==============================

function filterProducts() {

    const keyword = searchInput
        ? searchInput.value.toLowerCase().trim()
        : "";

    // Create a copy so original products array isn't changed
    let filtered = [...products];


    // ==============================
    // Category Filter
    // ==============================

    if (selectedCategory !== "All") {

        filtered = filtered.filter(product =>
            product.category === selectedCategory
        );

    }


    // ==============================
    // Search
    // ==============================

    if (keyword !== "") {

        filtered = filtered.filter(product =>

            product.name.toLowerCase().includes(keyword) ||

            product.category.toLowerCase().includes(keyword)

        );

    }


    // ==============================
    // Sorting
    // ==============================

    if (sortSelect) {

        switch (sortSelect.value) {

            case "low-high":

                filtered.sort((a, b) =>
                    Number(a.price) - Number(b.price)
                );

                break;


            case "high-low":

                filtered.sort((a, b) =>
                    Number(b.price) - Number(a.price)
                );

                break;


            case "a-z":

                filtered.sort((a, b) =>
                    a.name.localeCompare(b.name)
                );

                break;


            case "z-a":

                filtered.sort((a, b) =>
                    b.name.localeCompare(a.name)
                );

                break;


            case "default":

            default:

                // Keep original order
                break;

        }

    }


    // ==============================
    // Display Result
    // ==============================

    displayProducts(filtered);

}


// ==============================
// Search Event
// ==============================

if (searchInput) {

    searchInput.addEventListener("input", filterProducts);

}


// ==============================
// Category Filter
// ==============================

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const activeButton =
            document.querySelector(".filter-btn.active");

        if (activeButton) {
            activeButton.classList.remove("active");
        }

        button.classList.add("active");

        selectedCategory = button.dataset.category;

        filterProducts();

    });

});


// ==============================
// Sorting
// ==============================

if (sortSelect) {

    sortSelect.addEventListener("change", filterProducts);

}


// ==============================
// Initial Load
// ==============================

displayProducts(products);