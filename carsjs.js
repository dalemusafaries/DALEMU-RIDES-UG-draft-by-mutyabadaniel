/* ==========================================
   MOBILE NAVIGATION
========================================== */

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


/* Close menu when link is clicked */

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});


/* ==========================================
   CAR FILTER
========================================== */

const filters = document.querySelectorAll(".filter");
const galleryItems = document.querySelectorAll(".gallery-item");

filters.forEach(function (filter) {

    filter.addEventListener("click", function () {

        /* Active button */

        filters.forEach(function (button) {

            button.classList.remove("active");

        });

        filter.classList.add("active");


        /* Get selected category */

        const selectedCategory =
            filter.getAttribute("data-filter");


        /* Filter cars */

        galleryItems.forEach(function (item) {

            const itemCategory =
                item.getAttribute("data-category");


            if (
                selectedCategory === "all" ||
                selectedCategory === itemCategory
            ) {

                item.style.display = "block";

                setTimeout(function () {

                    item.style.opacity = "1";
                    item.style.transform = "scale(1)";

                }, 50);

            } else {

                item.style.opacity = "0";
                item.style.transform = "scale(.95)";

                setTimeout(function () {

                    item.style.display = "none";

                }, 300);

            }

        });

    });

});


/* ==========================================
   CAR IMAGE MODAL
========================================== */

const modal = document.getElementById("carModal");

const modalImage =
    document.getElementById("modalImage");

const modalName =
    document.getElementById("modalName");

const modalType =
    document.getElementById("modalType");

const closeModal =
    document.getElementById("closeModal");

const viewButtons =
    document.querySelectorAll(".view-car");


viewButtons.forEach(function (button) {

    button.addEventListener("click", function (event) {

        event.stopPropagation();

        const card =
            button.closest(".gallery-item");

        const image =
            card.querySelector("img");

        const name =
            card.getAttribute("data-name");

        const type =
            card.getAttribute("data-type");


        modalImage.src = image.src;

        modalImage.alt = name;

        modalName.textContent = name;

        modalType.textContent = type.toUpperCase();


        modal.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});


/* ==========================================
   CLICK IMAGE TO OPEN
========================================== */

galleryItems.forEach(function (item) {

    item.addEventListener("click", function () {

        const button =
            item.querySelector(".view-car");

        button.click();

    });

});


/* ==========================================
   CLOSE MODAL
========================================== */

function closeCarModal() {

    modal.classList.remove("active");

    document.body.style.overflow = "";

}


closeModal.addEventListener(
    "click",
    closeCarModal
);


/* Click outside image */

modal.addEventListener("click", function (event) {

    if (event.target === modal) {

        closeCarModal();

    }

});


/* ESC KEY */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closeCarModal();

    }

});