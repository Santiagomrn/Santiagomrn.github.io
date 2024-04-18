<script setup>
import { ref } from 'vue'

const selected = ref('work')
const select = (newSelected) => {
  selected.value = newSelected
}
</script>

<template>
  <section class="qualification section">
    <h2 class="section__title">Qualification</h2>
    <span class="section__subtitle">My personal journey </span>

    <div class="quelification_container container">
      <div class="qualification__tabs">
        <div
          class="qualification__button button--flex"
          :class="[selected == 'education' ? 'qualification__button__selected' : '']"
          @click="select('education')"
          v-tooltip="{ content: 'Click me', shown: true, delay: { show: 1000 } }"
        >
          <i class="uil uil-graduation-cap qualification__icon"></i>
          Education
        </div>
        <div
          class="qualification__button button--flex"
          :class="[selected == 'work' ? 'qualification__button__selected' : '']"
          @click="select('work')"
        >
          <i class="uil uil-briefcase-alt qualification__icon"></i>
          Work
        </div>
      </div>

      <div class="qualification__sections">
        <!-- qualification content 1 -->
        <div class="qualification__content" v-if="selected == 'education'">
          <!-- 1 -->
          <div class="qualification__data">
            <div>
              <h3 class="qualification__title">Training in Teleinformatics Networks</h3>
              <span class="qualification__subtitle">Colegio de Bachilleres - High School</span>
              <div class="qualification__calendar">
                <i class="uil uil-calendar-alt"> </i>
                2014-2016
              </div>
            </div>
            <div>
              <span class="qualification__rounder"></span>
              <span class="qualification__line"></span>
            </div>
          </div>
          <!-- 2 -->
          <div class="qualification__data">
            <div></div>
            <div>
              <span class="qualification__rounder"></span>
              <span class="qualification__line"></span>
            </div>
            <div>
              <h3 class="qualification__title">Computer Engineer degree</h3>
              <span class="qualification__subtitle">UADY - University</span>
              <div class="qualification__calendar">
                <i class="uil uil-calendar-alt"> </i>
                2016-2020
              </div>
            </div>
          </div>
          <!-- 3 -->
          <div class="qualification__data">
            <div>
              <h3 class="qualification__title">Certified in CyberSecurity</h3>
              <span class="qualification__subtitle">ISC2</span>
              <div class="qualification__calendar">
                <i class="uil uil-calendar-alt"> </i>
                2021
              </div>
            </div>
            <div>
              <span class="qualification__rounder"></span>
              <span class="qualification__line"></span>
            </div>
            <div></div>
          </div>
          <!-- 4 -->
          <div class="qualification__data">
            <div></div>
            <div>
              <span class="qualification__rounder"></span>
            </div>
            <div>
              <h3 class="qualification__title">Azure Fundamentals Certificate</h3>
              <span class="qualification__subtitle">Microsoft</span>
              <div class="qualification__calendar">
                <i class="uil uil-calendar-alt"> </i>
                2022
              </div>
            </div>
          </div>
        </div>

        <!-- qualification content 2 -->
        <div class="qualification__content" v-if="selected == 'work'">
          <!-- 1 -->
          <div class="qualification__data">
            <div>
              <h3 class="qualification__title">Full Stack developer</h3>
              <span class="qualification__subtitle">IMSS - Mérida</span>
              <div class="qualification__calendar">
                <i class="uil uil-calendar-alt"> </i>
                2020
              </div>
            </div>
            <div>
              <span class="qualification__rounder"></span>
              <span class="qualification__line"></span>
            </div>
          </div>

          <!-- 2 -->
          <div class="qualification__data">
            <div></div>
            <div>
              <span class="qualification__rounder"></span>
              <span class="qualification__line"></span>
            </div>
            <div>
              <h3 class="qualification__title">Front-end developer</h3>
              <span class="qualification__subtitle">JCB - Rhode Island</span>
              <div class="qualification__calendar">
                <i class="uil uil-calendar-alt"> </i>
                2020
              </div>
            </div>
          </div>

          <!-- 3 -->
          <div class="qualification__data">
            <div>
              <h3 class="qualification__title">Back-end developer</h3>
              <span class="qualification__subtitle">Wincify - Mérida</span>
              <div class="qualification__calendar">
                <i class="uil uil-calendar-alt"> </i>
                2020-2021
              </div>
            </div>
            <div>
              <span class="qualification__rounder"></span>
              <span class="qualification__line"></span>
            </div>
          </div>

          <!-- 4 -->
          <div class="qualification__data">
            <div></div>
            <div>
              <span class="qualification__rounder"></span>
            </div>
            <div>
              <h3 class="qualification__title">Back-end developer</h3>
              <span class="qualification__subtitle">The Ksquare Group - Mérida</span>
              <div class="qualification__calendar">
                <i class="uil uil-calendar-alt"> </i>
                2021-?
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.qualification__tabs {
  display: flex;
  justify-content: space-evenly;
  margin-bottom: var(--mb-2);
}

.qualification__button {
  font-size: var(--h2-font-size);
  font-weight: var(--font-medium);
  cursor: pointer;
}

.qualification__button:hover {
  color: var(--first-color-alt);
}
.qualification__button__selected {
  color: var(--first-color) !important;
}

.qualification__icon {
  font-size: 1.8rem;
  margin-right: var(--mb-0-25);
}
.qualification__data {
  display: grid;
  grid-template-columns: 1fr max-content 1fr;
  column-gap: 1.5rem;
}
.qualification__title {
  font-size: var(--normal-font-size);
  font-weight: var(--font-medium);
}

.qualification__subtitle {
  display: inline-block;
  font-size: var(--small-font-size);
  margin-bottom: var(--mb-0-25);
}

.qualification__calendar {
  font-size: var(--small-font-size);
  color: var(--text-color-light);
  margin-bottom: var(--mb-1);
}

.qualification__rounder {
  display: inline-block;
  width: 13px;
  height: 13px;
  background-color: var(--first-color);
  border-radius: 50%;
}
.qualification__line {
  display: block;
  width: 1px;
  height: 100%;
  background-color: var(--first-color);
  margin: auto;
  transform: translateY(-10px);
}
.qualification [data-content] {
  display: none;
}

/* For medium devices */
@media screen and (min-width: 568px) {
  .qualification__sections {
    display: grid;
    grid-template-columns: 0.6fr;
    justify-content: center;
  }
}
@media screen and (min-width: 768px) {
  .qualification__tabs {
    justify-content: center;
  }
  .qualification__button {
    margin: 0 var(--mb-1);
  }
  .qualification__sections {
    grid-template-columns: 0.7fr;
  }
}
</style>
