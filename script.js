document.addEventListener("DOMContentLoaded", function() {
    const loginBtn = document.querySelector(".login-btn");
    const modal = document.getElementById("loginModal");
    const closeModal = document.querySelector(".close");
    const submitLogin = document.getElementById("submitLogin");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");
    const dropdownToggle = document.querySelector(".dropdown-toggle");
    const dropdownMenu = document.querySelector(".dropdown-menu");
    const departmentLinks = document.querySelectorAll(".dropdown-menu li a");

    // LOGIN MODAL
    if (loginBtn && modal) {
        loginBtn.addEventListener("click", function() {
            modal.classList.add("show");
        });

        closeModal.addEventListener("click", function() {
            modal.classList.remove("show");
        });

        window.addEventListener("click", function(event) {
            if (event.target === modal) {
                modal.classList.remove("show");
            }
        });
    }

    // LOGIN AUTHENTICATION
    if (submitLogin) {
        submitLogin.addEventListener("click", function(event) {
            event.preventDefault(); 

            const username = usernameInput.value;
            const password = passwordInput.value;

            if (username === "admin" && password === "password") {
                alert("Login successful!");
                modal.classList.remove("show");
                window.location.href = "https://elms.sti.edu/";
            } else {
                alert("Invalid username or password. Please try again.");
            }
        });
    }

    // MOBILE MENU
    if (menuBtn && navLinks) {
        menuBtn.addEventListener("click", function() {
            navLinks.classList.toggle("show");
        });
    }

    // DROPDOWN MENU
    if (dropdownToggle && dropdownMenu) {
        dropdownToggle.addEventListener("click", function(event) {
            dropdownMenu.classList.toggle("show");
            event.stopPropagation();
        });

        document.addEventListener("click", function(event) {
            if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
                dropdownMenu.classList.add("show");
            }
        });
    }

    // Dropdown Menu Behavior (from your code snippet)
    const dropdown = document.querySelector('.dropdown');

    dropdown.addEventListener('mouseenter', () => {
        dropdownMenu.style.display = 'block';
    });

    dropdownMenu.addEventListener('mouseleave', () => {
        dropdownMenu.style.display = 'none';
    });

    // Prevent dropdown from closing when hovering over sub-departments
    dropdownMenu.addEventListener('mouseover', (event) => {
        event.stopPropagation(); 
    });
});