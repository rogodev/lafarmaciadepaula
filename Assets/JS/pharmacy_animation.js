document.addEventListener("DOMContentLoaded", () => {
    const rigth_appears = document.querySelectorAll(".rigth-appear");
    const left_appears = document.querySelectorAll(".left-appear");
    // Observador para la animación de entrada (scroll hacia abajo)
    const observerIn3 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const resume = entry.target
          if (entry.isIntersecting) {
              resume.classList.add("rigth-appear-in");
              resume.classList.remove("rigth-appear-out");
          }
        });}, {
          threshold: 0.5, // 50% visible para entrar
        }
      );
      // Observador para la animación de entrada (scroll hacia abajo)
      const observerOut3 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const resume = entry.target
          if (!entry.isIntersecting) {
            resume.classList.add("rigth-appear-in");
            resume.classList.remove("rigth-appear-in");
          }
        });}, {
          threshold: 0.2, // 50% visible para entrar
        }
      );

      const observerIn4 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const resume = entry.target
          if (entry.isIntersecting) {
              resume.classList.add("left-appear-in");
              resume.classList.remove("left-appear-out");
          }
        });}, {
          threshold: 0.8, // 50% visible para entrar
        }
      );
      // Observador para la animación de entrada (scroll hacia abajo)
      const observerOut4 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const resume = entry.target
          if (!entry.isIntersecting) {
            resume.classList.add("left-appear-in");
            resume.classList.remove("left-appear-in");
          }
        });}, {
          threshold: 0.5, // 50% visible para entrar
        }
      );

    rigth_appears.forEach(rigth_appear => {
      observerIn3.observe(rigth_appear); // Para la animación de entrada
      observerOut3.observe(rigth_appear); // Para la animación de entrada
    });
    left_appears.forEach(left_appear => {
        observerIn4.observe(left_appear); // Para la animación de entrada
        observerOut4.observe(left_appear); // Para la animación de entrada
    });
});