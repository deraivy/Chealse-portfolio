<template>
  <div class="bg-[#121212] text-gray-100 font-sans">
    <!-- Sidebar -->
    <aside
      class="fixed bottom-0 left-4 z-50 hidden md:block"
      data-aos="fade-right"
      data-aos-delay="200"
    >
      <div class="flex flex-col items-center">
        <Dribbble
          class="mb-6 text-emerald-500 hover:text-[#ea4c89] transition-colors"
          :size="24"
          data-aos="zoom-in"
          data-aos-delay="300"
        />
        <Instagram
          class="mb-6 text-emerald-500 hover:text-[#e1306c] transition-colors"
          :size="24"
          data-aos="zoom-in"
          data-aos-delay="400"
        />
        <Github
          class="mb-6 text-emerald-500 hover:text-[#4078c0] transition-colors"
          :size="24"
          data-aos="zoom-in"
          data-aos-delay="500"
        />
        <Linkedin
          class="mb-6 text-emerald-500 hover:text-[#0077b5] transition-colors"
          :size="24"
          data-aos="zoom-in"
          data-aos-delay="600"
        />
        <div
          class="border border-emerald-500 opacity-50 h-56 w-0 mt-6 transition-all hover:opacity-100"
          data-aos="fade-up"
          data-aos-delay="700"
        ></div>
      </div>
    </aside>

    <!-- Hero Section -->
    <section
      class="w-full h-screen flex items-center justify-center relative overflow-hidden"
      data-aos="fade"
    >
      <div class="absolute inset-0">
        <img
          src="/images/line.png"
          alt="Background"
          class="w-full h-full object-cover opacity-10 transition-opacity duration-500 hover:opacity-20"
          data-aos="fade"
          data-aos-delay="100"
        />
      </div>
      <div class="relative text-center z-10 px-4 sm:px-6 lg:px-8">
        <h2
          class="text-2xl sm:text-3xl md:text-4xl font-light tracking-widest text-gray-300 animate-fadeIn"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Hello, I'm
        </h2>
        <h1
          class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mt-3 bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-300 animate-fadeIn"
          style="animation-delay: 0.2s"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Ejikeme Chelsea
        </h1>
        <h3
          class="text-xl sm:text-2xl md:text-3xl font-semibold text-emerald-500 mt-5 animate-fadeIn"
          style="animation-delay: 0.4s"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          I am {{ displayText }}
        </h3>
        <p
          class="text-base sm:text-lg md:text-xl mt-6 max-w-3xl mx-auto leading-relaxed text-gray-400 animate-fadeIn"
          style="animation-delay: 0.6s"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          I specialize in bringing ideas to life through stunning visuals,
          creative designs, and engaging multimedia content.
        </p>
        <a
          href="#contact"
          class="mt-10 inline-flex items-center bg-emerald-600 text-white py-3 px-10 rounded-full font-semibold text-lg shadow-lg hover:bg-emerald-700 hover:scale-110 transition-all duration-300"
          data-aos="zoom-in"
          data-aos-delay="600"
        >
          Contact Me
        </a>
      </div>
    </section>

    <section
      class="mx-auto w-full max-w-7xl px-4 sm:px-6 py-12 md:py-16 lg:py-24"
    >
      <Counter />
    </section>
    <!-- Services Section -->
    <section
      class="mx-auto w-full max-w-7xl px-4 sm:px-6 py-12 md:py-16 lg:py-24"
      data-aos="fade-up"
    >
      <div class="mb-12 text-center">
        <h2
          class="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-100 animate-slideUp"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          My Specialties
        </h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          class="bg-[#1e1e1e] rounded-xl shadow-lg p-8 text-center hover:bg-[#2d2d2d] hover:scale-105 transition-all duration-300"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Box
            class="mx-auto mb-5 text-white opacity-80 hover:opacity-100 transition-opacity"
            :size="52"
            data-aos="zoom-in"
            data-aos-delay="300"
          />
          <h3
            class="text-gray-100 text-2xl font-semibold hover:text-emerald-500 transition-colors"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            3D Design
          </h3>
          <p class="text-gray-400 mt-2" data-aos="fade-up" data-aos-delay="500">
            Creating realistic and interactive 3D models.
          </p>
        </div>
        <div
          class="bg-[#1e1e1e] rounded-xl shadow-lg p-8 text-center hover:bg-[#2d2d2d] hover:scale-105 transition-all duration-300"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <Images
            class="mx-auto mb-5 text-white opacity-80 hover:opacity-100 transition-opacity"
            :size="52"
            data-aos="zoom-in"
            data-aos-delay="400"
          />
          <h3
            class="text-gray-100 text-2xl font-semibold hover:text-emerald-500 transition-colors"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Flyer Design
          </h3>
          <p class="text-gray-400 mt-2" data-aos="fade-up" data-aos-delay="600">
            Designing eye-catching promotional flyers.
          </p>
        </div>
        <div
          class="bg-[#1e1e1e] rounded-xl shadow-lg p-8 text-center hover:bg-[#2d2d2d] hover:scale-105 transition-all duration-300"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <MonitorPlay
            class="mx-auto mb-5 text-white opacity-80 hover:opacity-100 transition-opacity"
            :size="52"
            data-aos="zoom-in"
            data-aos-delay="500"
          />
          <h3
            class="text-gray-100 text-2xl font-semibold hover:text-emerald-500 transition-colors"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            Motion Graphics
          </h3>
          <p class="text-gray-400 mt-2" data-aos="fade-up" data-aos-delay="700">
            Creating engaging animated graphics and videos.
          </p>
        </div>
        <div
          class="bg-[#1e1e1e] rounded-xl shadow-lg p-8 text-center hover:bg-[#2d2d2d] hover:scale-105 transition-all duration-300"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <Layers2
            class="mx-auto mb-5 text-white opacity-80 hover:opacity-100 transition-opacity"
            :size="52"
            data-aos="zoom-in"
            data-aos-delay="600"
          />
          <h3
            class="text-gray-100 text-2xl font-semibold hover:text-emerald-500 transition-colors"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            Logo Design
          </h3>
          <p class="text-gray-400 mt-2" data-aos="fade-up" data-aos-delay="800">
            Crafting unique and professional brand logos.
          </p>
        </div>
      </div>
    </section>

    <!-- Experience, Education, Skills Section -->
    <section class="" data-aos="fade-up">
      <div
        class="mx-auto w-full max-w-7xl px-6 sm:px-12 md:px-16 py-16 md:py-24 lg:py-32"
      >
        <div
          class="flex flex-col md:flex-row items-start space-x-0 md:space-x-16"
        >
          <div
            class="md:w-1/3 lg:w-1/4 sm:w-full"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div class="flex flex-col space-y-4">
              <button
                v-for="(tab, index) in tabs"
                :key="index"
                class="text-lg font-medium py-4 px-8 rounded-lg transition-all duration-300 flex justify-between items-center"
                :class="{
                  'bg-emerald-600 text-white shadow-md': selected === tab.id,
                  'text-gray-400 hover:bg-[#2d2d2d] hover:text-gray-100':
                    selected !== tab.id,
                }"
                @click="selected = tab.id"
                data-aos="fade-up"
                :data-aos-delay="200 + index * 100"
              >
                {{ tab.label }}
                <ArrowUpRight
                  :color="selected === tab.id ? 'white' : 'emerald-500'"
                  :size="28"
                />
              </button>
            </div>
          </div>
          <div
            class="md:w-2/3 lg:w-3/4 bg-[#1e1e1e] p-10 rounded-xl shadow-md mt-8 md:mt-0"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <transition name="fade" mode="out-in">
              <div v-if="selected">
                <div v-if="selected === 'experience'" key="experience">
                  <h3
                    class="text-3xl font-semibold text-gray-100 mb-6"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    Experience
                  </h3>
                  <div class="space-y-6">
                    <div data-aos="fade-up" data-aos-delay="400">
                      <p class="font-medium text-xl text-emerald-500">
                        Software Engineer - XYZ Company
                      </p>
                      <p class="text-sm text-gray-400">2020 - Present</p>
                      <p class="mt-3 text-gray-100">
                        Developed and maintained web applications using modern
                        technologies.
                      </p>
                    </div>
                  </div>
                </div>
                <div v-if="selected === 'education'" key="education">
                  <h3
                    class="text-3xl font-semibold text-gray-100 mb-6"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    Education
                  </h3>
                  <div class="space-y-6">
                    <div data-aos="fade-up" data-aos-delay="400">
                      <p class="font-medium text-xl text-emerald-500">
                        Bells University Of Technology
                      </p>
                      <p class="text-sm text-gray-400">2018 - 2023</p>
                      <p class="mt-3 text-gray-100">
                        B.Tech in Computer Science
                      </p>
                    </div>
                  </div>
                </div>
                <div v-if="selected === 'skills'" key="skills">
                  <h3
                    class="text-3xl font-semibold text-gray-100 mb-6"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    Skills
                  </h3>
                  <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div
                      class="bg-emerald-600 p-4 rounded-lg text-center text-white font-medium hover:bg-emerald-700 transition-colors"
                      data-aos="zoom-in"
                      data-aos-delay="400"
                    >
                      Adobe Illustrator
                    </div>
                    <div
                      class="bg-emerald-600 p-4 rounded-lg text-center text-white font-medium hover:bg-emerald-700 transition-colors"
                      data-aos="zoom-in"
                      data-aos-delay="500"
                    >
                      Blender
                    </div>
                    <div
                      class="bg-emerald-600 p-4 rounded-lg text-center text-white font-medium hover:bg-emerald-700 transition-colors"
                      data-aos="zoom-in"
                      data-aos-delay="600"
                    >
                      Adobe Photoshop
                    </div>
                    <div
                      class="bg-emerald-600 p-4 rounded-lg text-center text-white font-medium hover:bg-emerald-700 transition-colors"
                      data-aos="zoom-in"
                      data-aos-delay="700"
                    >
                      Photoshop
                    </div>
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio Section -->
    <section
      class="mx-auto w-full max-w-7xl px-4 sm:px-6 py-12 md:py-16 lg:py-24"
      data-aos="fade-up"
    >
      <div class="text-center mb-12">
        <h2
          class="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-100 animate-slideUp"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          My Projects
        </h2>
        <p
          class="text-gray-400 mt-4 text-lg sm:text-xl max-w-3xl mx-auto animate-slideUp"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          A curated selection of my creative work, showcasing expertise in 3D
          design, flyer design, motion graphics, and logo design.
        </p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div
          v-for="(project, index) in projects"
          :key="project.id"
          class="relative bg-[#1e1e1e] rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition-all duration-300 group h-80"
          data-aos="fade-up"
          :data-aos-delay="300 + index * 100"
        >
          <!-- Image -->
          <img
            v-if="project.type === 'image'"
            :src="project.src"
            :alt="project.alt"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <!-- Self-Hosted Video -->
          <video
            v-if="project.type === 'video'"
            :src="project.src"
            :poster="project.poster"
            class="w-full h-full object-cover"
            muted
            loop
            autoplay
            playsinline
            controls
          ></video>
          <!-- Play Button Overlay for Videos -->
          <div
            v-if="project.type === 'video'"
            class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-80 transition-opacity duration-300 bg-black bg-opacity-50"
          >
            <svg
              class="w-12 h-12 text-emerald-500"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <!-- Content Overlay -->
          <div
            class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"
          >
            <h3 class="text-lg font-semibold text-white">
              {{ project.title }}
            </h3>
            <p class="text-sm text-gray-400">{{ project.description }}</p>
            <router-link
              :to="`/portfolio/${project.id}`"
              class="mt-2 inline-block text-emerald-500 hover:text-emerald-400 text-sm font-medium"
            >
              View Details
            </router-link>
          </div>
        </div>
      </div>
      <div class="flex justify-end mt-10">
        <router-link
          to="/portfolio"
          class="bg-emerald-600 px-10 py-3 text-white rounded-full font-semibold text-lg hover:bg-emerald-700 hover:scale-105 transition-all duration-300 shadow-md"
          data-aos="zoom-in"
          data-aos-delay="600"
        >
          See More
        </router-link>
      </div>
    </section>
    <!-- Contact Section -->
    <div class="relative overflow-hidden" data-aos="fade-up">
      <div
        class="mx-auto w-full max-w-7xl px-4 sm:px-6 py-12 md:py-16 lg:py-24 relative z-10"
      >
        <h2
          class="text-4xl sm:text-5xl md:text-6xl text-center font-bold text-gray-100 animate-slideUp"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Get In Touch
        </h2>
        <p
          class="text-center text-lg sm:text-xl text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed animate-slideUp"
          style="animation-delay: 0.2s"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Need eye-catching visuals, stunning 3D designs, or sleek motion
          graphics? I specialize in bringing ideas to life. My inbox is always
          open—whether you have a project, a question, or just want to connect!
        </p>
        <div class="flex justify-center mt-8">
          <a
            :href="emailLink"
            class="inline-flex items-center bg-emerald-600 text-white font-semibold text-lg sm:text-xl px-8 py-3 rounded-full shadow-md hover:bg-emerald-700 hover:scale-105 transition-all duration-300 animate-slideUp"
            style="animation-delay: 0.4s"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            Say Hello
          </a>
        </div>
        <div
          class="flex flex-col sm:flex-row justify-between items-center px-24 mt-12 text-gray-100 space-y-6 sm:space-y-0 sm:space-x-8"
        >
          <div class="text-center" data-aos="fade-up" data-aos-delay="400">
            <h3 class="text-lg font-semibold">Location</h3>
            <p class="text-gray-400 mt-1">Lagos, Nigeria</p>
          </div>
          <div class="text-center" data-aos="fade-up" data-aos-delay="500">
            <h3 class="text-lg font-semibold">Phone</h3>
            <p class="text-gray-400 mt-1">(+234) 000 000 0000</p>
          </div>
          <div class="text-center" data-aos="fade-up" data-aos-delay="600">
            <h3 class="text-lg font-semibold">Email</h3>
            <p class="text-gray-400 mt-1">your.email@example.com</p>
          </div>
        </div>
      </div>
      <img
        src="/images/help.png"
        alt="Decorative corner"
        class="absolute bottom-0 right-0 w-32 sm:w-40 md:w-48 lg:w-80 opacity-30 pointer-events-none z-0"
        data-aos="fade-left"
        data-aos-delay="700"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Counter from "../components/Counter.vue";
import {
  ArrowUpRight,
  Dribbble,
  Instagram,
  Linkedin,
  Github,
  Layers2,
} from "lucide-vue-next";
import { Box } from "lucide-vue-next";
import { MonitorPlay } from "lucide-vue-next";
import { Images } from "lucide-vue-next";
import AOS from "aos";
import "aos/dist/aos.css";

const email = "nwanorohfavoured@gmail.com";
const emailLink = ref(`mailto:${email}`);
const words = ["Creative Designer", "Visual Artist", "Freelancer"];
const displayText = ref("");
let i = 0;
let j = 0;
let isDeleting = false;
const selected = ref("experience");

const tabs = [
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
];

const projects = ref([
  {
    id: 1,
    category: "3D Design",
    type: "image",
    title: "3D Architectural Model",
    src: "/images/flyer1.png",
    alt: "3D Design Project",
    description: "A detailed 3D model for architectural visualization.",
  },
  {
    id: 2,
    category: "Flyer Design",
    type: "image",
    title: "Event Promotional Flyer",
    src: "/images/flyer1.png",
    alt: "Flyer Design Project",
    description: "Eye-catching flyer for a local event.",
  },
  {
    id: 3,
    category: "Motion Graphics",
    type: "video",
    title: "Promotional Animation",
    src: "/images/motion/motion1.MP4",
    poster: "/images/motion-graphics-thumb.jpg", // Poster image
    alt: "Motion Graphics Project",
    description: "Dynamic animations for a brand campaign.",
  },
  {
    id: 4,
    category: "Motion Graphics",
    type: "video",
    title: "Promotional Animation",
    src: "/images/motion/motion2.MP4",
    poster: "/images/motion-graphics-thumb.jpg", // Poster image
    alt: "Motion Graphics Project",
    description: "Dynamic animations for a brand campaign.",
  },
]);

const type = () => {
  const currentWord = words[i];
  if (isDeleting) {
    displayText.value = currentWord.substring(0, j - 1);
    j--;
    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
    }
  } else {
    displayText.value = currentWord.substring(0, j + 1);
    j++;
    if (j === currentWord.length) {
      setTimeout(() => {
        isDeleting = true;
        type();
      }, 1500);
      return;
    }
  }
  setTimeout(type, 100);
};

onMounted(() => {
  AOS.init({
    duration: 800,
    easing: "ease-out",
    once: true,
    anchorPlacement: "top-bottom",
  });
  type();
});
</script>
