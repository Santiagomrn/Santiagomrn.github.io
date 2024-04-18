<script lang="ts" setup></script>

<template>
  <footer class="footer">
    <div class="footer__bg">
      <div class="footer__container container grid">
        <div>
          <h1 class="footer__title">Santiago</h1>
          <span class="footer__subtitle">Computer Engineer</span>
        </div>
        <ul class="footer__links">
          <li>
            <a href="#portfolio" class="footer__link">Portfolio</a>
          </li>
          <li>
            <a href="#contact" class="footer__link">Contact me</a>
          </li>
        </ul>
        <div class="footer__socials">
          <a
            href="https://www.linkedin.com/in/santiagorodrigueznoh/"
            target="_blank"
            class="footer__social"
            ><i class="uil uil-linkedin"></i
          ></a>
          <a href="https://github.com/Santiagomrn" target="_blank" class="footer__social"
            ><i class="uil uil-github"></i
          ></a>
          <a
            href="https://www.youtube.com/@santiagomrnrn1722"
            class="footer__social"
            target="_blank"
          >
            <i class="uil uil-youtube"></i>
          </a>
          <a href="https://www.facebook.com/" class="footer__social" target="_blank">
            <i class="uil uil-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/" class="footer__social" target="_blank">
            <i class="uil uil-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="css" scoped>
.footer {
  padding-top: 2rem;
}
.footer__container {
  row-gap: 3.5rem;
}
.footer__bg {
  background-color: var(--first-color);
  padding: 2rem 0 3rem;
}
.footer__title {
  font-size: var(--h1-font-size);
  margin-bottom: var(--mb-0-25);
}
.footer__subtitle {
  font-size: var(--small-font-size);
}
.footer__links {
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
}
.footer__link:hover {
  color: var(--first-color-lighter);
}
.footer__social {
  font-size: 1.25rem;
  margin-right: var(--mb-1-5);
}
.footer__social:hover {
  color: var(--first-color-lighter);
}
.footer__title,
.footer__subtitle,
.footer__link,
.footer__social {
  color: #fff;
}

/* For medium devices */
@media screen and (min-width: 568px) {
  .footer__container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (min-width: 768px) {
  .footer__container {
    grid-template-columns: repeat(3, 1fr);
  }
  .footer__bg {
    padding: 3rem 0 3.5rem;
  }
  .footer__links {
    flex-direction: row;
    column-gap: 2rem;
  }
  .footer__socials {
    justify-self: flex-end;
  }
}

/* For large devices */
@media screen and (min-width: 1024px) {
  .footer__container {
    padding: 0;
  }
}
</style>
