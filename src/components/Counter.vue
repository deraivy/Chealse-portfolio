<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section>
    <ul
      ref="statsSection"
      class="relative z-10 p-8 mx-auto w-11/12 lg:w-full max-w-7xl rounded-3xl border bg-[#121212] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12 transition-all duration-300"
    >
      <li
        v-for="element in numbers"
        :key="element.id"
        class="text-center group relative p-4 rounded-xl hover:bg-secondary/10 dark:hover:bg-secondary/20 transition-colors duration-200"
      >
        <h2
          class="font-bold flex justify-center items-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white dark:text-gray-100 group-hover:scale-105 transition-transform duration-200"
        >
          <span class="text-secondary mr-1">+</span>
          <Countup
            v-if="hasIntersected"
            :end-val="element.number"
            class="font-extrabold"
          />
        </h2>
        <p
          class="mt-3 text-sm sm:text-base lg:text-lg text-gray-200 dark:text-gray-300 font-medium"
        >
          {{ element.title }}
        </p>
        <!-- Subtle underline effect on hover -->
        <span
          class="absolute bottom-0 left-1/2 w-0 h-0.5 bg-secondary group-hover:w-1/2 transform -translate-x-1/2 transition-all duration-300"
        ></span>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const numbers = ref([
  { id: 1, number: 89, title: "Created projects" },
  { id: 2, number: 500, title: "Projects" },
  { id: 3, number: 50, title: "Happy clients" },
  { id: 4, number: 5, title: "Years" },
]);

const statsSection = ref(null);
const hasIntersected = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        hasIntersected.value = true;
        observer.disconnect();
      }
    },
    { threshold: 0.5 }
  );
  if (statsSection.value) {
    observer.observe(statsSection.value);
  }
});
</script>

<style scoped>
/* Custom styles for the underline hover effect */
.group:hover .absolute {
  width: 50%;
}
</style>
