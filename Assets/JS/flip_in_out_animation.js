document.addEventListener("DOMContentLoaded", () => {
    const services_resume = document.querySelectorAll(".flip");
    // Observador para la animación de entrada (scroll hacia abajo)
    const observerIn2 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const resume = entry.target
          if (entry.isIntersecting) {
              resume.classList.add("flip-in");
              resume.classList.remove("flip-out");
          }
        });}, {
          threshold: 0.3, // 50% visible para entrar
        }
      );
      // Observador para la animación de entrada (scroll hacia abajo)
      const observerOut2 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const resume = entry.target
          if (!entry.isIntersecting) {
            resume.classList.add("flip-out");
            resume.classList.remove("flip-in");
          }
        });}, {
          threshold: 0.3, // 50% visible para entrar
        }
      );

    services_resume.forEach(service_resume => {
      observerIn2.observe(service_resume); // Para la animación de entrada
      observerOut2.observe(service_resume); // Para la animación de entrada
    });
});