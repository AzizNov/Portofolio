<template>
  <nav>
    <div class="container mx-auto p-8">
      <div
        class="flex justify-between mx-[30px] md:mx-[200px] lg:mx-[250px] xl:mx-[350px]"
      >
        <h1 class="text-xl font-medium">AzizNov</h1>
        <ul class="hidden md:flex items-center gap-5 text-sm">
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
        <button @click="toggleMenu">
          <img src="/menu.png" alt="..." />
        </button>
      </div>
    </div>
    <ul
      class="md:hidden border border-black flex py-4 mx-20 rounded-full flex-col items-center gap-5 text-sm"
      :class="{ hidden: !showMenu }"
    >
      <li>About</li>
      <li>Projects</li>
      <li>Contact</li>
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
