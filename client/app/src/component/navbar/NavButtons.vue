<script setup>
defineProps({
    to: {
        type: [String, Object],
        required: true
    },
    label: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        require: true
    }
})

</script>


<template>
<li>
    <RouterLink
      :to="to"
      class="flex items-center gap-3 rounded-md px-3 py-2 text-white hover:bg-gray-800"
    >
      <span :class="[icon, 'size-5 shrink-0']"></span>
      <span class="overlay-minified:hidden">
        {{ label }}
      </span>
    </RouterLink>
</li>

</template>

