document.addEventListener("DOMContentLoaded", () => {
  // Tab switching
  const tabButtons = document.querySelectorAll(".tab-btn")
  const tabContents = document.querySelectorAll(".tab-content")

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons and contents
      tabButtons.forEach((btn) => btn.classList.remove("active"))
      tabContents.forEach((content) => content.classList.remove("active"))

      // Add active class to clicked button and corresponding content
      this.classList.add("active")
      const tabId = this.dataset.tab + "-tab"
      document.getElementById(tabId).classList.add("active")
    })
  })

  // Status update functionality
  const statusUpdateLinks = document.querySelectorAll(".status-update")

  statusUpdateLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()

      const requestId = this.dataset.id
      const newStatus = this.dataset.status

      // Send AJAX request to update status
      const formData = new FormData()
      formData.append("request_id", requestId)
      formData.append("status", newStatus)

      fetch("/update-request-status", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            // Update UI
            const row = this.closest("tr")
            const statusCell = row.querySelector(".status-badge")

            // Remove old status class
            statusCell.classList.forEach((className) => {
              if (className.startsWith("status-") && className !== "status-badge") {
                statusCell.classList.remove(className)
              }
            })

            // Add new status class and text
            statusCell.classList.add("status-" + newStatus)
            statusCell.textContent = newStatus

            // Show success message
            showNotification("Status updated successfully", "success")
          } else {
            showNotification("Failed to update status", "error")
          }
        })
        .catch((error) => {
          console.error("Error:", error)
          showNotification("An error occurred", "error")
        })
    })
  })

  // Notification function
  function showNotification(message, type) {
    const notification = document.createElement("div")
    notification.className = "notification notification-" + type
    notification.textContent = message

    document.body.appendChild(notification)

    // Remove after 3 seconds
    setTimeout(() => {
      notification.classList.add("fade-out")
      setTimeout(() => {
        notification.remove()
      }, 300)
    }, 3000)
  }
})

