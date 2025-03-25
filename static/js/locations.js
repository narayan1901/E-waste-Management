document.addEventListener("DOMContentLoaded", () => {
  // Get user's location if available
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userLat = position.coords.latitude
        const userLng = position.coords.longitude

        // Calculate distance to each location
        const locationCards = document.querySelectorAll(".location-card")
        locationCards.forEach((card) => {
          const locationLat = Number.parseFloat(card.dataset.lat)
          const locationLng = Number.parseFloat(card.dataset.lng)

          if (locationLat && locationLng) {
            const distance = calculateDistance(userLat, userLng, locationLat, locationLng)
            const distanceBadge = card.querySelector('[id^="distance-"]')

            if (distanceBadge) {
              distanceBadge.textContent = distance.toFixed(1) + " miles"
            }
          }
        })

        // Sort locations by distance
        sortLocationsByDistance()
      },
      (error) => {
        console.log("Error getting location:", error)
      },
    )
  }

  // Search functionality
  const searchBtn = document.getElementById("search-btn")
  const searchInput = document.getElementById("location-search")

  if (searchBtn && searchInput) {
    searchBtn.addEventListener("click", () => {
      const searchTerm = searchInput.value.trim().toLowerCase()

      if (searchTerm) {
        // Simple search implementation - filter by name or address
        const locationCards = document.querySelectorAll(".location-card")

        locationCards.forEach((card) => {
          const name = card.querySelector("h3").textContent.toLowerCase()
          const address = card.querySelector(".location-address").textContent.toLowerCase()

          if (name.includes(searchTerm) || address.includes(searchTerm)) {
            card.style.display = "block"
          } else {
            card.style.display = "none"
          }
        })
      }
    })

    // Search on Enter key
    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        searchBtn.click()
      }
    })
  }

  // Helper functions
  function calculateDistance(lat1, lon1, lat2, lon2) {
    // Haversine formula to calculate distance between two points
    const R = 3958.8 // Earth's radius in miles
    const dLat = toRad(lat2 - lat1)
    const dLon = toRad(lon2 - lon1)

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2)

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    const distance = R * c

    return distance
  }

  function toRad(value) {
    return (value * Math.PI) / 180
  }

  function sortLocationsByDistance() {
    const locationsList = document.querySelector(".locations-list")
    const locationCards = Array.from(document.querySelectorAll(".location-card"))

    locationCards.sort((a, b) => {
      const distanceA = Number.parseFloat(a.querySelector('[id^="distance-"]').textContent)
      const distanceB = Number.parseFloat(b.querySelector('[id^="distance-"]').textContent)

      return distanceA - distanceB
    })

    // Clear and re-append in sorted order
    locationsList.innerHTML = ""
    locationCards.forEach((card) => {
      locationsList.appendChild(card)
    })
  }
})

