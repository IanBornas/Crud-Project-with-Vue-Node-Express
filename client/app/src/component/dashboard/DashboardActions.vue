<script setup>
    import { nextTick } from 'vue'
    import { HSOverlay } from 'flyonui/dist/index.mjs'

    const emit = defineEmits (['edit','delete'])

    const openEditModal = async () => {
        emit('edit')
        // Wait for the selected employee to render into the edit form before opening it.
        await nextTick()
        HSOverlay.open('#edit-employee-modal')
    }

    const openDeleteModal = () => {
        emit('delete')
        HSOverlay.open('#delete-employee-modal')
    }
</script>

<template>
        <button
            type="button"
            class="btn btn-circle btn-text btn-sm"
            aria-label="Edit employee"
            data-overlay="#edit-employee-modal"
            @click="openEditModal"
        >
            <span class="icon-[tabler--pencil] size-5"></span>
        </button>

        <button
            type="button"
            class="btn btn-circle btn-text btn-sm"
            aria-label="Delete employee"
            data-overlay="#delete-employee-modal"
            @click="openDeleteModal"
        >
            <span class="icon-[tabler--trash] size-5"></span>
        </button>
</template>