<template>
  <div>
    <header class="p-4 bg-gray-800 flex space-x-8 items-baseline">
      <h1 class="text-3xl text-white">Test</h1>
      <nav class="flex space-x-2 text-white">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </nav>
    </header>
    <main class="mt-4 mx-auto container">
      <router-view />
    </main>
  </div>
</template>

<style></style>
