const sunMoonContainer = document.querySelector(".sun-moon-container")

document.querySelector(".theme-toggle-button").addEventListener("click", () => {
    document.body.classList.toggle("dark")
    // parseInt otherwise di add as string
    const currentRotation = parseInt(getComputedStyle(sunMoonContainer).getPropertyValue("--rotation"))
    // Bisa bikin circular klo +180 trus for every rotation, tpi note bakal ada batas amount of clicks possible
    if (currentRotation >= 360) {
        nextRotation = 180
    }
    else {
        nextRotation = currentRotation + 180
    }
    sunMoonContainer.style.setProperty("--rotation", nextRotation)
})
