<script setup>
import SidebarLink from '@/component/navbar/NavButtons.vue'
</script>


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
          HRTrak
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
              <SidebarLink
                :to="{ name: 'directory' }"
                label="Directory"
                icon="icon-[tabler--folder]"
              />
              <SidebarLink
                :to="{ name: 'dashboard' }"
                label="Dashboard"
                icon="icon-[tabler--home]"
              />
        </ul>
      </div>
    </aside>

    <main class="min-h-screen w-full bg-gray-200
         sm:ps-64
         overlay-minified:sm:ps-17
         transition-[padding] duration-300 ease-in-out">
         
        <div class="mx-auto w-full max-w-6xl p-6">
            <RouterView />
        </div>
    </main>
  </div>
</template>