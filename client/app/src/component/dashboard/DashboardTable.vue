<script setup>
import { onMounted } from 'vue'
import { HSOverlay } from 'flyonui/dist/index.mjs'
import DashboardActions from './DashboardActions.vue';
import CreateEmployeeButton from './CreateEmployeeButton.vue';
import EmployeeDashboardRow from './EmployeeDashboardRow.vue';
import EmployeeSearchFilter from './EmployeeSearchFilter.vue';
import EditEmployeeModal from './EditEmployeeModal.vue';
import DeleteEmployeeModal from './DeleteEmployeeModal.vue';

const emit = defineEmits(['employee-created'])

defineProps({
    employees:{
        type: Array,
        required: true
    }
})

onMounted(() => {
  HSOverlay.autoInit()
})

function editEmployees(employeeId) {
  console.log('Open edit modal for:', employeeId)
  HSOverlay.open('#edit-employee-modal')
}

function deleteEmployees(employeeId) {
  console.log('Open delete confirmation for:', employeeId)
  HSOverlay.open('#delete-employee-modal')
}

</script>

<template>
<div class="w-full overflow-x-auto">
    <div class="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <EmployeeSearchFilter />
        <CreateEmployeeButton @employee-created="emit('employee-created')" />
    </div>
    <!-- scrollable table container -->
        <div class="w-full overflow-x-auto">
            <div class="max-h-[28rem] overflow-y-auto rounded-box border border-base-content/10">
                <table class="table">
                    <thead class="sticky top-0 z-10 bg-base-100">
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Department</th>
                            <th>Position</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        <EmployeeDashboardRow
                        v-for="employee in employees"
                        :key="employee.id"
                        :employee="employee"
                        >
                        <template #actions="{ employee }">
                            <DashboardActions
                            @edit="editEmployees(employee.id)"
                            @delete="deleteEmployees(employee.id)"
                            />
                        </template>
                        </EmployeeDashboardRow>
                    </tbody>
                </table>
            </div>

            <EditEmployeeModal />
            <DeleteEmployeeModal />
        </div>
    </div>
</template>