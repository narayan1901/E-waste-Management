document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("pickup-form")

  if (form) {
    // Add this for debugging
    console.log("Form found, setting up validation")

    form.addEventListener("submit", (event) => {
      console.log("Form submitted, validating...")
      let isValid = true

      // Get all required inputs
      const requiredInputs = form.querySelectorAll("[required]")
      console.log(`Found ${requiredInputs.length} required fields`)

      // Clear previous error messages
      const errorMessages = form.querySelectorAll(".form-error")
      errorMessages.forEach((message) => message.remove())

      // Reset input styles
      requiredInputs.forEach((input) => {
        input.classList.remove("error")
        input.classList.remove("valid")
      })

      // Validate each required field
      requiredInputs.forEach((input) => {
        console.log(`Validating field: ${input.name}, value: ${input.value}`)
        if (!input.value.trim()) {
          isValid = false
          input.classList.add("error")

          // Add error message
          const errorMessage = document.createElement("div")
          errorMessage.className = "form-error"
          errorMessage.textContent = "This field is required"
          input.parentNode.appendChild(errorMessage)
        } else {
          input.classList.add("valid")

          // Additional validation for specific fields
          if (input.type === "email" && !validateEmail(input.value)) {
            isValid = false
            input.classList.remove("valid")
            input.classList.add("error")

            const errorMessage = document.createElement("div")
            errorMessage.className = "form-error"
            errorMessage.textContent = "Please enter a valid email address"
            input.parentNode.appendChild(errorMessage)
          }

          if (input.id === "phone" && !validatePhone(input.value)) {
            isValid = false
            input.classList.remove("valid")
            input.classList.add("error")

            const errorMessage = document.createElement("div")
            errorMessage.className = "form-error"
            errorMessage.textContent = "Please enter a valid phone number"
            input.parentNode.appendChild(errorMessage)
          }

          if (input.id === "zip_code" && !validateZipCode(input.value)) {
            isValid = false
            input.classList.remove("valid")
            input.classList.add("error")

            const errorMessage = document.createElement("div")
            errorMessage.className = "form-error"
            errorMessage.textContent = "Please enter a valid ZIP code"
            input.parentNode.appendChild(errorMessage)
          }
        }
      })

      // Check terms checkbox
      const termsCheckbox = document.getElementById("terms")
      if (termsCheckbox && !termsCheckbox.checked) {
        isValid = false

        const errorMessage = document.createElement("div")
        errorMessage.className = "form-error"
        errorMessage.textContent = "You must agree to the terms and conditions"
        termsCheckbox.parentNode.appendChild(errorMessage)
      }

      console.log(`Form validation result: ${isValid ? "Valid" : "Invalid"}`)
      if (!isValid) {
        event.preventDefault()

        // Scroll to first error
        const firstError = form.querySelector(".error")
        if (firstError) {
          firstError.scrollIntoView({ behavior: "smooth", block: "center" })
          firstError.focus()
        }
      }
    })

    // Real-time validation on input
    form.querySelectorAll("input, select, textarea").forEach((input) => {
      input.addEventListener("blur", function () {
        validateInput(this)
      })
    })
  } else {
    console.error("Pickup form not found in the DOM")
  }

  // Validation functions
  function validateInput(input) {
    // Clear previous error
    const existingError = input.parentNode.querySelector(".form-error")
    if (existingError) {
      existingError.remove()
    }

    input.classList.remove("error")
    input.classList.remove("valid")

    if (input.hasAttribute("required") && !input.value.trim()) {
      input.classList.add("error")

      const errorMessage = document.createElement("div")
      errorMessage.className = "form-error"
      errorMessage.textContent = "This field is required"
      input.parentNode.appendChild(errorMessage)

      return false
    }

    if (input.value.trim()) {
      input.classList.add("valid")

      // Specific validations
      if (input.type === "email" && !validateEmail(input.value)) {
        input.classList.remove("valid")
        input.classList.add("error")

        const errorMessage = document.createElement("div")
        errorMessage.className = "form-error"
        errorMessage.textContent = "Please enter a valid email address"
        input.parentNode.appendChild(errorMessage)

        return false
      }

      if (input.id === "phone" && !validatePhone(input.value)) {
        input.classList.remove("valid")
        input.classList.add("error")

        const errorMessage = document.createElement("div")
        errorMessage.className = "form-error"
        errorMessage.textContent = "Please enter a valid phone number"
        input.parentNode.appendChild(errorMessage)

        return false
      }

      if (input.id === "zip_code" && !validateZipCode(input.value)) {
        input.classList.remove("valid")
        input.classList.add("error")

        const errorMessage = document.createElement("div")
        errorMessage.className = "form-error"
        errorMessage.textContent = "Please enter a valid ZIP code"
        input.parentNode.appendChild(errorMessage)

        return false
      }
    }

    return true
  }

  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }

  function validatePhone(phone) {
    const re = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/
    return re.test(String(phone))
  }

  function validateZipCode(zipCode) {
    const re = /(^\d{5}$)|(^\d{5}-\d{4}$)/
    return re.test(String(zipCode))
  }
})

