// ===============================
// Mobile Menu
// ===============================

function toggleMenu() {

    const menu = document.getElementById("navLinks");

    if (menu) {
        menu.classList.toggle("active");
    }

}


// ===============================
// Close Mobile Menu
// ===============================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        const menu = document.getElementById("navLinks");

        if (menu) {
            menu.classList.remove("active");
        }

    });

});


// ===============================
// Scroll To Top
// ===============================

const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {

            topBtn.style.display = "block";

        } else {

            topBtn.style.display = "none";

        }

    });


    topBtn.addEventListener("click", function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}