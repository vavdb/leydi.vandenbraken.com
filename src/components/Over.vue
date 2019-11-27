<template>
  <section
    class="resume-section p-3 p-lg-5 d-flex align-items-center"
    id="over"
  >
    <div class="w-100">
      <span>  <g-image
          alt="Image of Loke"
          src="../assets/images/profile.png"
          class="img-fluid img-profile rounded  mx-auto mb-2 float-right"
          style="filter: grayscale(1);"
        />
      
      <h1 class="mb-0">
        Leydi
        <span class="text-primary">van den Braken</span>
      </h1>
      <div class="subheading mb-5">
        Hooglanderveen · 
        <a href="tel:+31612960436">(06) 5757 0 554</a> ·
        <a href="mailto:leydi@vandenbraken.com">leydi@vandenbraken.com</a>
      </div>
      <p class="lead mb-5">
        Enthousiaste duizendpoot. Ik ben sterk in het snel inzichtelijk krijgen
        van complexe vraagstukken. Ervaren in data inventarisatie en analyse,
        zowel in beschrijvende als voorspellende modellen. Als team lead zie ik
        mezelf als meewerkend voorvrouw. Projecten en referenties opvraagbaar.
      </p>
      </span>
      
      <div class="social-icons">
        <a
          href="https://linkedin.com/in/leydivandenbraken"
          target="_blank"
          rel="noopener noreferrer"
        >
          <font-awesome :icon="['fab', 'linkedin']" />
        </a>
        <a
          href="https://github.com/RedRock89"
          target="_blank"
          rel="noopener noreferrer"
        >
          <font-awesome :icon="['fab', 'github']" />
        </a>
        <a
          href="https://twitter.com/leydijohanavdb"
          target="_blank"
          rel="noopener noreferrer"
        >
          <font-awesome :icon="['fab', 'twitter']" />
        </a>
        <a
          href="https://www.facebook.com/leydivdb"
          target="_blank"
          rel="noopener noreferrer"
        >
          <font-awesome :icon="['fab', 'facebook']" />
        </a>
        <a href="https://leydi.vandenbraken.com" target="_blank" rel="noopener noreferrer">
          <font-awesome :icon="['fas', 'rss']" />
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.social-icons a {
  cursor: pointer;
  display: inline-block;
  height: 3.5rem;
  width: 3.5rem;
  background-color: var(--secondary);
  color: #fff !important;
  border-radius: 100%;
  text-align: center;
  font-size: 1.5rem;
  line-height: 3.5rem;
  margin-right: 1rem;

  @media (max-width: 380px) {
    margin-right: 0.5rem;
  }

  @media (max-width: 350px) {
    margin-right: 0.2rem;
  }
}

.social-icons a:last-child {
  margin-right: 0;
}

.social-icons a:hover {
  background-color: var(--primary);
}
</style>
