<template>
  <nav>
    <div class="container mx-auto p-8 lg:p-12">
      <div class="flex justify-between mx-[30px] xl:mx-[200px]">
        <h1 class="text-xl lg:text-4xl font-medium">
          <a href="#home"> AzizNov </a>
        </h1>
        <ul class="hidden md:flex items-center gap-5 text-sm lg:text-2xl">
          <li class="hover:underline">
            <a href="#about"> About </a>
          </li>
          <li class="hover:underline">
            <a href="#projects"> Projects </a>
          </li>
          <li class="hover:underline">
            <a href="#contact"> Contact </a>
          </li>
        </ul>
        <button class="md:hidden block" @click="toggleMenu">
          <img src="/menu.png" alt="..." />
        </button>
      </div>
    </div>
    <ul
      class="md:hidden border border-black flex py-4 mx-20 rounded-xl flex-col items-center gap-5 text-sm"
      :class="{ hidden: !showMenu }"
    >
      <li class="hover:underline">
        <a href="#about"> About </a>
      </li>
      <li class="hover:underline">
        <a href="#projects"> Projects </a>
      </li>
      <li class="hover:underline">
        <a href="#contact"> Contact </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>
