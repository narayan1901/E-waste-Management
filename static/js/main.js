// Mobile menu toggle
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuBtn = document.getElementById("mobile-menu-btn")
  const navLinks = document.getElementById("nav-links")

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active")

      // Toggle hamburger to X
      const spans = mobileMenuBtn.querySelectorAll("span")
      spans[0].classList.toggle("rotate-45")
      spans[1].classList.toggle("opacity-0")
      spans[2].classList.toggle("-rotate-45")
    })
  }

  // Close flash messages
  const closeButtons = document.querySelectorAll(".close-btn")
  closeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      this.parentElement.style.display = "none"
    })
  })

  // Set current year in footer
  const currentYearElement = document.getElementById("current-year")
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear()
  }
})

