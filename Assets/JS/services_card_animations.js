document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".services-card");

    // Observador para la animación de entrada (scroll hacia abajo)
    const observerIn = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        const card = entry.target;
        if (entry.isIntersecting) {
          // Animación de entrada con retraso progresivo
          setTimeout(() => {
            card.classList.add("animate");
            card.classList.remove("reverse");
          }, index * 100); // Retraso progresivo
        }
      });
    }, {
      threshold: 0.3, // 50% visible para entrar
    });

    // Observador para la animación de salida (scroll hacia arriba)
    const observerOut = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const card = entry.target;
        if (!entry.isIntersecting) {
          // Animación de salida sincronizada (sin retraso)
          card.classList.add("reverse");
          card.classList.remove("animate");
        }
      });
    }, {
      threshold: 0.2, // 10% visible para salir
    });

    // Observar cada tarjeta con ambos observadores
    cards.forEach(card => {
      observerIn.observe(card); // Para la animación de entrada
      observerOut.observe(card); // Para la animación de salida
    });

});