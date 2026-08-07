<script setup>
    const emit = defineEmits (['edit','delete'])
</script>

<template>
   
        <button @click="emit('edit')" class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[tabler--pencil] size-5"></span> </button>
        <button @click="emit('delete')" class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[tabler--trash] size-5"></span> </button>

</template>