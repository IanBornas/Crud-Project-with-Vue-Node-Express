<script>

</script>

<template>
        <div
        id="edit-employee-modal"
        class="overlay modal overlay-open:opacity-100 overlay-open:duration-300 hidden"
        role="dialog"
        tabindex="-1"
        >
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h3 class="modal-title">Edit Employee</h3>

                <button
                type="button"
                class="btn btn-text btn-circle btn-sm absolute end-3 top-3 "
                aria-label="Close"
                data-overlay="#edit-employee-modal"
                >
                <span class="icon-[tabler--x] size-4"></span>
                </button>
            </div>

            <form>
                <div class="modal-body space-y-4 pt-0">
                <div>
                    <label class="label-text" for="fullName">Full Name</label>
                    <input
                    id="edit-fullname"
                    type="text"
                    placeholder="John Doe"
                    class="input w-full"
                    />
                </div>

                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div class="sm:col-span-2">
                    <label class="label-text" for="email">Email</label>
                    <input
                        id="edit-email"
                        type="email"
                        placeholder="johndoe@123@gmail.com"
                        class="input w-full"
                    />
                    </div>

                    <div>
                    <label class="label-text" for="position">Position</label>
                    <input
                        id="edit-position"
                        type="text"
                        placeholder="Ex. Software Engineer"
                        class="input w-full"
                    />
                    </div>

                    <div>
                    <label class="label-text" for="department">Department</label>
                    <input
                        id="edit-department"
                        type="text"
                        placeholder="IT Dev"
                        class="input w-full"
                    />
                    </div>
                </div>
                </div>

                <div class="modal-footer">
                <button  type="submit" class="btn btn-primary hover:bg-blue-800 bg-blue-600">
                    Save changes
                </button>
                </div>
            </form>
            </div>
        </div>
        </div>

</template>