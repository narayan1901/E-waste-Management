document.addEventListener("DOMContentLoaded", () => {
  const statCards = document.querySelectorAll(".stat-card")

  // Check if element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect()
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }

  // Animate counter
  function animateCounter(element, target) {
    const countElement = element.querySelector(".stat-count")
    const duration = 2000 // 2 seconds
    const steps = 50
    const stepValue = target / steps
    const stepTime = duration / steps

    let current = 0
    const timer = setInterval(() => {
      current += stepValue
      if (current >= target) {
        countElement.textContent = target.toLocaleString()
        clearInterval(timer)
      } else {
        countElement.textContent = Math.floor(current).toLocaleString()
      }
    }, stepTime)
  }

  // Start animation when scrolled into view
  function checkScroll() {
    statCards.forEach((card) => {
      if (isInViewport(card) && !card.classList.contains("counted")) {
        card.classList.add("counted")
        const target = Number.parseInt(card.dataset.count)
        animateCounter(card, target)
      }
    })
  }

  // Check on scroll and initial load
  window.addEventListener("scroll", checkScroll)
  checkScroll()
})

