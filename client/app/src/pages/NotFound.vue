<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <h1 class="text-5xl font-bold">404</h1>
    <h2 class="text-2xl mt-2">Page Not Found</h2>

    <p class="mt-4 text-gray-500">
      The page you're looking for doesn't exist.
    </p>

    <RouterLink
      to="/"
      class="mt-6 px-4 py-2 bg-blue-500 text-white rounded"
    >
      Return Home
    </RouterLink>
  </div>
</template>