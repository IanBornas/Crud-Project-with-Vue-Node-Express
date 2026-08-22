<script setup>
defineProps({
    show:{
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['cancel','confirm'])
</script>
<template>
<button type="button" class="btn btn-primary" aria-haspopup="dialog" aria-expanded="false" aria-controls="slide-down-animated-modal" data-overlay="#slide-down-animated-modal">Open modal</button>

<div id="slide-down-animated-modal" class="overlay modal overlay-open:opacity-100 overlay-open:duration-300 hidden" role="dialog" tabindex="-1">
  <div class="modal-dialog overlay-open:mt-12 overlay-open:duration-300 transition-all ease-out" >
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title">Creation Confirmation</h3>
        <button type="button" class="btn btn-text btn-circle btn-sm absolute end-3 top-3" aria-label="Close" data-overlay="#slide-down-animated-modal">
          <span class="icon-[tabler--x] size-4"></span>
        </button>
      </div>
      <div class="modal-body">
        This is some placeholder content to show the scrolling behavior for modals. Instead of repeating the text in the
        modal, we use an inline style to set a minimum height, thereby extending the length of the overall modal and
        demonstrating the overflow scrolling. When content becomes longer than the height of the viewport, scrolling
        will move the modal as needed.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-soft btn-secondary" data-overlay="#slide-down-animated-modal">
          Close
        </button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</template>