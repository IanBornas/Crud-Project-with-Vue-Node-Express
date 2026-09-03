<script setup>
import {ref} from 'vue'
import { deleteEmployeeById } from '@/services/employees';
import { HSOverlay } from 'flyonui/dist/index.mjs';

const props = defineProps({
  employeeId: {
    type: [String, Number],
    default: null
  },
  employee: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['deleted'])
const isLoading = ref(false)

const handleDelete = async () => {
  if (!props.employeeId) return
  
  try {
    isLoading.value = true
    await deleteEmployeeById(props.employeeId)

    HSOverlay.close('#delete-employee-modal')
    emit('deleted', props.employeeId)

  } catch (error) {
    console.error('Failed to delete employee:', error)
  } finally {
    isLoading.value = false
  }
}

</script>

<template>
<div id="delete-employee-modal" class="overlay modal overlay-open:opacity-100 hidden overlay-open:duration-300" role="dialog" tabindex="-1" >
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title">Deleting Employee </h3>
        <button type="button" class="btn btn-text btn-circle btn-sm absolute end-3 top-3" aria-label="Close" data-overlay="#delete-employee-modal" >
          <span class="icon-[tabler--x] size-4"></span>
        </button>
      </div>
      <div class="modal-body">
            Are you sure you want to delete employee: {{ employee?.name }}?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-soft btn-secondary" data-overlay="#delete-employee-modal">Cancel</button>
        <button @click="handleDelete" :disabled="isLoading || !employeeId" type="button" class="btn btn-primary hover:bg-red-700 bg-red-600">{{ isLoading ? 'Deleting...' : 'Delete' }}</button>
      </div>
    </div>
  </div>
</div>
</template>