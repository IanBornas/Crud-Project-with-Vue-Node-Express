<script setup>
import {ref} from "vue"
import { createEmployee } from "@/services/employees";

const emit = defineEmits(['employee-created'])

const form = ref({
    name: "",
    email: "",
    position:"",
    department: ""
})


const isSubmitting = ref(false)
const errorMessage = ref("")

const handleCreateEmployee = async () => {
    try {
         isSubmitting.value = ref(true)
         errorMessage.value = ref("")

        if (!form.value.name || !form.value.email || !form.value.position || !form.value.department) {
            console.log("please fill up the following details to proceed!")
            return
        }
            const response = await createEmployee(form.value)
            //clear form
            form.value = {  
                name: "",
                email: "",
                position:"",
                department: ""
            }
            //close modal
            const modal = document.querySelector("#form-modal");

            if (modal) {
                window.HSOverlay.close(modal);
            }
            console.log("Employee Created", response.data)
            emit("employee-created")

    } catch (error) {
        console.error("failed to create employee: ", error)

            errorMessage.value =
            error.response?.data?.error ||
            "Failed to create employee.";
        } finally {
            isSubmitting.value = false;
    }
}

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

            <form @submit.prevent="handleCreateEmployee">
                <div class="modal-body space-y-4 pt-0">
                <div>
                    <label class="label-text" for="fullName">Full Name</label>
                    <input
                    id="fullName"
                    v-model="form.name"
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
                        v-model="form.email"
                        type="email"
                        placeholder="johndoe@123@gmail.com"
                        class="input w-full"
                    />
                    </div>

                    <div>
                    <label class="label-text" for="position">Position</label>
                    <input
                        id="position"
                        v-model="form.position"
                        type="text"
                        placeholder="Ex. Software Engineer"
                        class="input w-full"
                    />
                    </div>

                    <div>
                    <label class="label-text" for="department">Department</label>
                    <input
                        id="department"
                        v-model="form.department"
                        type="text"
                        placeholder="IT Dev"
                        class="input w-full"
                    />
                    </div>
                </div>
                </div>

                <div class="modal-footer">
                <button type="submit" :disabled="isSubmitting" class="btn btn-primary bg-green-600">
                    {{ isSubmitting ? "Creating..." : "Create Employee" }}
                </button>
                </div>
            </form>
            </div>
        </div>
        </div>
</template>