<template>
  <header class="shadow w-screen overflow-hidden">
    <nav>
      <nav class="flex items-center justify-between flex-wrap bg-black p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <px-icon class="mr-2" />
          <router-link
            :to="{ name: 'home' }"
            class="font-semibold text-xl tracking-tight"
            >btc-project</router-link
          >
        </div>
        <div
          class="hidden sm:block w-full block flex-grow lg:flex lg:items-center lg:w-auto"
        >
          <div class="text-sm lg:flex-grow">
            <router-link
              v-for="l in links"
              :key="l.title"
              :to="l.to"
              class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              >{{ l.title }}</router-link
            >
          </div>
          <router-link
            :to="{ name: 'about' }"
            class="text-teal-200 hover:text-white mr-10"
            >About Me</router-link
          >
          <a href="https://github.com/Dufainder"
            ><px-icon-github class="mr-2"></px-icon-github
          ></a>
          <a href="https://www.linkedin.com/in/dufainder-bedoya"
            ><px-icon-linkedin class="mr-2"></px-icon-linkedin
          ></a>
          <a href="https://my-portfolio-dufainder.vercel.app/"
            ><px-icon-portfolio class="mr-2"></px-icon-portfolio
          ></a>
        </div>
      </nav>
    </nav>
  </header>
</template>

<script>
import PxIcon from '@/components/PxIcon'
import PxIconGithub from '@/components/PxIconGithub'
import PxIconLinkedin from '@/components/PxIconLinkedin'
import PxIconPortfolio from '@/components/PxIconPortfolio'

export default {
  name: 'PxHeader',

  components: { PxIcon, PxIconGithub, PxIconLinkedin, PxIconPortfolio },
  props: {
    links: {
      type: Array,
      default: () => []
    }
  }
}
</script>
