<script>


</script>

<template>
        <button
            type="button"
            class="btn border-none bg-green-600 text-white hover:bg-green-700"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="form-modal"
            data-overlay="#form-modal"
            >
            Create Employee
        </button>

        <div
        id="form-modal"
        class="overlay modal overlay-open:opacity-100 overlay-open:duration-300 hidden"
        role="dialog"
        tabindex="-1"
        >
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h3 class="modal-title">Create Employee</h3>

                <button
                type="button"
                class="btn btn-text btn-circle btn-sm absolute end-3 top-3"
                aria-label="Close"
                data-overlay="#form-modal"
                >
                <span class="icon-[tabler--x] size-4"></span>
                </button>
            </div>

            <form>
                <div class="modal-body space-y-4 pt-0">
                <div>
                    <label class="label-text" for="fullName">Full Name</label>
                    <input
                    id="fullName"
                    type="text"
                    placeholder="John Doe"
                    class="input w-full"
                    />
                </div>

                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div class="sm:col-span-2">
                    <label class="label-text" for="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="johndoe@123@gmail.com"
                        class="input w-full"
                    />
                    </div>

                    <div>
                    <label class="label-text" for="position">Position</label>
                    <input
                        id="position"
                        type="text"
                        placeholder="Ex. Software Engineer"
                        class="input w-full"
                    />
                    </div>

                    <div>
                    <label class="label-text" for="department">Department</label>
                    <input
                        id="department"
                        type="text"
                        placeholder="IT Dev"
                        class="input w-full"
                    />
                    </div>
                </div>
                </div>

                <div class="modal-footer">
                <button type="submit" class="btn btn-primary bg-green-600">
                    Create Employee
                </button>
                </div>
            </form>
            </div>
        </div>
        </div>
</template>