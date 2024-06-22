document.addEventListener("DOMContentLoaded", function () {
    const particleCount = 30;
    const startupScreen = document.getElementById("startup-screen");

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("div");
        particle.classList.add("particle");
        particle.style.width = `${Math.random() * 10 + 5}px`;
        particle.style.height = `${Math.random() * 10 + 5}px`;
        particle.style.top = `${Math.random() * 100}vh`;
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.animationDuration = `${Math.random() * 3 + 2}s`;
        startupScreen.appendChild(particle);
    }

    setTimeout(function () {
        startupScreen.style.opacity = "0";
        setTimeout(function () {
            startupScreen.style.display = "none";
        }, 1000); // Wait for the transition to complete
    }, 3000); // Adjust the timeout as needed
});
