<script setup>
defineProps({
    show:{
        type: Boolean,
        default: false
  },
  employee: {
    type: Object,
    default: null
  },
  isSubmitting: {
    type: Boolean,
    default: false
    }
})

const emit = defineEmits(['cancel','confirm'])
</script>

<template>
<div v-if="show" id="slide-down-animated-modal" class="overlay modal open overlay-open:opacity-100 overlay-open:duration-300" role="dialog" tabindex="-1">
  <div class="modal-dialog overlay-open:mt-12 overlay-open:duration-300 transition-all ease-out" >
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title">Editing Employee Confirmation</h3>
        <button type="button" class="btn btn-text btn-circle btn-sm absolute end-3 top-3" aria-label="Close" @click="emit('cancel')">
          <span class="icon-[tabler--x] size-4"></span>
        </button>
      </div>
      <div class="modal-body">
            Are you sure you want to Edit this employee? {{employee?.name}}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-soft btn-secondary" @click="emit('cancel')">
          Cancel
        </button>
        <button type="button" class="btn btn-primary" :disabled="isSubmitting" @click="emit('confirm')">
          {{ isSubmitting ? 'Updating...' : 'Confirm' }}
        </button>
      </div>
    </div>
  </div>
</div>
</template>