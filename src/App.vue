<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
  components: {
    RouterLink,
    RouterView
  }
}
</script>

<template>
  <header>
    <div class="wrapper">
      <h1 class="text-5xl text-blue-600">Hello to Vue</h1>
    </div>
  </header>
  <div class="grid grid-cols-4 gap-4 h-screen">
    <div class="bg-cyan-50 rounded-sm shadow-md">
      <nav class="flex flex-col">
        <RouterLink to="/" class="py-3 px-4 rounded-sm hover:bg-cyan-500 hover:text-white" >Home</RouterLink>
        <RouterLink to="/testComputedProperties" class="py-3 px-4 rounded-sm hover:bg-cyan-500 hover:text-white">Computed Properties</RouterLink>
      </nav>
    </div>
    <div class="col-span-3">
      <main class="p-5 shadow-md border-t-2 border-gray-50 rounded-sm">
        <RouterView />
      </main>
    </div>
  </div>

  
</template>