<script setup>


    const emit = defineEmits (['edit','delete'])
</script>

<template>
        <button
            type="button"
            class="btn btn-circle btn-text btn-sm"
            aria-label="Edit employee"
            data-overlay="#edit-employee-modal"
            @click="emit('edit')"
        >
            <span class="icon-[tabler--pencil] size-5"></span>
        </button>

        <button
            type="button"
            class="btn btn-circle btn-text btn-sm"
            aria-label="Delete employee"
            data-overlay="#delete-employee-modal"
            @click="emit('delete')"
        >
            <span class="icon-[tabler--trash] size-5"></span>
        </button>
</template>