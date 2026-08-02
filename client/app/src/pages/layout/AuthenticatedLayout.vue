<template>
  <div class="flex min-h-screen">
    <!-- Mobile sidebar toggle -->
    <button
      type="button"
      class="btn btn-text max-sm:btn-square sm:hidden"
      aria-haspopup="dialog"
      aria-expanded="false"
      aria-controls="collapsible-mini-sidebar"
      data-overlay="#collapsible-mini-sidebar"
    >
      <span class="icon-[tabler--menu-2] size-5"></span>
    </button>

    <aside
      id="collapsible-mini-sidebar"
      class="overlay [--auto-close:sm] overlay-minified:w-17 sm:shadow-none overlay-open:translate-x-0 drawer drawer-start hidden w-64 bg-gray-900 text-white sm:absolute sm:z-0 sm:flex sm:translate-x-0"
      role="dialog"
      tabindex="-1"
    >
      <div class="drawer-header overlay-minified:px-3.75 w-full py-2 flex items-center justify-between gap-3">
        <span class="icon-[solar--user-bold] size-10"></span>
        <h3 class="drawer-title text-m font-semibold overlay-minified:hidden text-white">
          Employee Management System
        </h3>

        <div class="hidden sm:block">
          <button
            type="button"
            class="btn btn-circle btn-text text-white"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="collapsible-mini-sidebar"
            aria-label="Minify navigation"
            data-overlay-minifier="#collapsible-mini-sidebar"
          >
            <span class="icon-[tabler--menu-2] size-5"></span>
            <span class="sr-only ">Navigation Toggle</span>
          </button>
        </div>
      </div>
      
      <div class="drawer-body px-2 pt-4">
        <ul class="menu p-0">
          <li>
            <RouterLink :to="{ name: 'directory' }">
              <span class="icon-[tabler--folder] size-5" ></span>
              <span class="overlay-minified:hidden text-white">Directory</span>
            </RouterLink>
          </li>

          <li>
            <RouterLink :to="{ name: 'dashboard' }">
              <span class="icon-[tabler--home] size-5"></span>
              <span class="overlay-minified:hidden text-white">Dashboard</span>
            </RouterLink>
          </li>
        </ul>
      </div>
    </aside>

    <main class="flex-1 p-6 sm:ml-64">
      <RouterView />
    </main>
  </div>
</template>