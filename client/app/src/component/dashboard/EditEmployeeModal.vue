<script setup>
    import { ref, watch } from 'vue'
    import { updateEmployeeById } from '@/services/employees';
    import EditEmployeeValidation from './EditEmployeeValidation.vue';
    import EditEmployeeConfirmation from './EditEmployeeConfirmation.vue';
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

    const emit = defineEmits(['updated'])
    const isLoading = ref(false)
    const showConfirmation = ref(false)
    const errorMessage = ref('')
    const validationForm = ref(null)
    const form = ref({
        name: '',
        email: '',
        position: '',
        department: ''
    })

    // Copy the selected employee into local form state so inputs can be edited safely.
    watch(() => props.employee, (employee) => {
        if (employee) {
            form.value = {
                name: employee.name ?? '',
                email: employee.email ?? '',
                position: employee.position ?? '',
                department: employee.department ?? ''
            }
        }
    }, { immediate: true })

    const handleEdit = async () => {
        errorMessage.value = ''
        const sanitizedForm = validationForm.value?.validate()

        if (!sanitizedForm) {
            return
        }

        form.value = sanitizedForm
        showConfirmation.value = true
    }

    const confirmEdit = async () => {
        try {
            if (!props.employeeId || !props.employee) {
                return
            }
            isLoading.value = true
            await updateEmployeeById(props.employeeId, form.value)

            showConfirmation.value = false
            // Close the edit modal only after the API confirms the update.
            HSOverlay.close('#edit-employee-modal')
            emit('updated', props.employeeId)

        } catch (error) {
            console.error('Failed to update employee:', error)
            errorMessage.value = error.response?.data?.error || 'Failed to update employee.'
        } finally {
            isLoading.value = false
        }
    }

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

            <form @submit.prevent="handleEdit">
                <div class="modal-body space-y-4 pt-0">
                <div>
                    <label class="label-text" for="fullName">Full Name</label>
                    <input
                    id="edit-fullname"
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
                        id="edit-email"
                        v-model="form.email"
                        type="email"
                        placeholder="johndoe@123@gmail.com"
                        class="input w-full"
                    />
                    </div>

                    <div>
                    <label class="label-text" for="position">Position</label>
                    <input
                        id="edit-position"
                        v-model="form.position"
                        type="text"
                        placeholder="Ex. Software Engineer"
                        class="input w-full"
                    />
                    </div>

                    <div>
                    <label class="label-text" for="department">Department</label>
                    <input
                        id="edit-department"
                        v-model="form.department"
                        type="text"
                        placeholder="IT Dev"
                        class="input w-full"
                    />
                    </div>
                </div>
                <EditEmployeeValidation ref="validationForm" :form="form"/>
                <p v-if="errorMessage" class="px-6 text-sm text-red-600">{{ errorMessage }}</p>
            </div>

                <div class="modal-footer">
                <button :disabled="isLoading || !employeeId" type="submit" class="btn btn-primary hover:bg-blue-800 bg-blue-600">
                {{ isLoading ? 'Updating...' : 'Update' }}
                </button>
                </div>
            </form>
            </div>
        </div>
        </div>

        <!-- Keep confirmation separate from the edit form, matching the create flow. -->
        <EditEmployeeConfirmation
            :show="showConfirmation"
            :employee="employee"
            :is-submitting="isLoading"
            @cancel="showConfirmation = false"
            @confirm="confirmEdit"
        />

</template>