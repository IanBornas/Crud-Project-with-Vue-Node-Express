<template>


<div id="delete-employee-modal" class="overlay modal overlay-open:opacity-100 hidden overlay-open:duration-300" role="dialog" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title">Deleting Employee</h3>
        <button type="button" class="btn btn-text btn-circle btn-sm absolute end-3 top-3" aria-label="Close" data-overlay="#delete-employee-modal" >
          <span class="icon-[tabler--x] size-4"></span>
        </button>
      </div>
      <div class="modal-body">
             do you wish to proceed?
      </div>
      <div class="modal-footer">
        <button  type="button" class="btn btn-soft btn-secondary" data-overlay="#delete-employee-modal"><Cancel></Cancel></button>
        <button  type="button" class="btn btn-primary hover:bg-red-700 bg-red-600">Delete</button>
      </div>
    </div>
  </div>
</div>
</template>