document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 50,
                behavior: 'smooth'
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const fadeElements = document.querySelectorAll('.fade-in');

    function checkVisibility() {
        fadeElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.85) {
                el.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Ejecutar la función al cargar la página
});

window.addEventListener("scroll", function() {
    let header = document.querySelector(".hero");
    if (window.scrollY > 50) {
        header.style.background = "rgba(0, 0, 0, 0.8)";
    } else {
        header.style.background = "rgba(0, 0, 0, 0.5)";
    }
});

const toggleBtn = document.getElementById("darkModeToggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
});

document.addEventListener("DOMContentLoaded", function () {
    const gameDesignTexts = [
        "Level design",
        "Game mechanics",
        "Balancing",
        "User experience"
    ];

    const programmingTexts = [
        "C#",
        "Java",        
        "Python",
        "JavaScript",
        "React",
        "Unity Development"
    ];

    let gameDesignIndex = 0;
    let programmingIndex = 0;

    function updateText() {
        document.getElementById("game-design-text").textContent = gameDesignTexts[gameDesignIndex];
        document.getElementById("programming-text").textContent = programmingTexts[programmingIndex];

        gameDesignIndex = (gameDesignIndex + 1) % gameDesignTexts.length;
        programmingIndex = (programmingIndex + 1) % programmingTexts.length;
    }

    updateText(); // Mostrar el primer texto al cargar la página
    setInterval(updateText, 2000); // Cambiar el texto cada 2 segundos
});

document.addEventListener("DOMContentLoaded", function () {
    const text = `Ever since I was a child, I have been highly curious and have cultivated a special interest for technology and fictional worlds of video games. My passion for gaming and development sparked when I first explored the world of video game mechanics. The ability to create and interact with systems that shape immersive experiences fascinated me. Books and movies were great, but actually building interactive worlds? That felt like something else entirely. I've been hooked ever since.

    As I advanced in my career, I pursued studies in analysis and development of information systems, marketing and international business, and am currently earning a degree in computer engineering. My academic background has helped me bridge the gap between technology, business, and user experience, allowing me to build software and games that are both functional and engaging. 

    Recently, I have been deepening my knowledge in game development specializing in Unity, focusing on both technical and design aspects. Additionally, I have been working on my own project, Xanus' Lost Espheres, where I have implemented elements such as AI-driven enemies, level design, and game mechanics centered around time-based challenges.`;

    const animatedTextDiv = document.getElementById("animated-text");

    if (!animatedTextDiv) {
        console.error("Elemento #animated-text no encontrado.");
        return;
    }

    let index = 0;

    function typeText() {
        if (index < text.length) {
            animatedTextDiv.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeText, 20); // Velocidad de la animación
        } else {
            animatedTextDiv.style.opacity = 1; // Hacer visible al final
        }
    }

    setTimeout(typeText, 500); // Iniciar animación después de medio segundo
});
