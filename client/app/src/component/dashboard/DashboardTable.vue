<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import DashboardActions from './DashboardActions.vue';
import CreateEmployeeButton from './CreateEmployeeButton.vue';
import EmployeeDashboardRow from './EmployeeDashboardRow.vue';
import EmployeeSearchFilter from './EmployeeSearchFilter.vue';
import EditEmployeeModal from './EditEmployeeModal.vue';
import DeleteEmployeeModal from './DeleteEmployeeModal.vue';
import ExportAsCsv from './ExportAsCsv.vue';


const emit = defineEmits(['employee-created', 'employee-deleted'])
const searchQuery = ref('')
const selectedEmployee = ref(null)



const props = defineProps({
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
}

function deleteEmployees(employee) {
    selectedEmployee.value = employee
    console.log('Open delete confirmation for:', employee.id)
}


const searchFilteredEmployees = computed(() => {

    console.log('EMPLOYEES PROP:', props.employees)
    console.log('SEARCH:', searchQuery.value)
    

    const query = searchQuery.value.toLowerCase().trim();

    if (!query) {
        return props.employees;
    }

    return props.employees.filter(employee =>
        employee.name?.toLowerCase().includes(query) ||
        employee.email?.toLowerCase().includes(query) ||
        employee.department?.toLowerCase().includes(query) ||
        employee.position?.toLowerCase().includes(query)
    );
});

watch(searchQuery, (value) => {
    console.log('SEARCH:', value); //watches the searchfilter input
});

</script>

<template>
<div class="w-full overflow-x-auto">
    <div class="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <EmployeeSearchFilter v-model="searchQuery" />
        <div class="flex items-center gap-5">
            <ExportAsCsv />
            <CreateEmployeeButton @employee-created="emit('employee-created')" />
        </div>
    </div>
    <!-- scrollable table container -->
        <div class="w-full overflow-x-auto">
            <div class="max-h-[28rem] overflow-y-auto rounded-box border border-base-content/10 bg-base-100">
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
                        v-for="employee in searchFilteredEmployees"
                        :key="employee.id"
                        :employee="employee"
                        >
                        <template #actions="{ employee }">
                            <DashboardActions
                            @edit="editEmployees(employee.id)"
                            @delete="deleteEmployees(employee)"
                            />
                        </template>
                        </EmployeeDashboardRow>
                    </tbody>
                </table>
            </div>

            <EditEmployeeModal />
            <DeleteEmployeeModal
                :employee-id="selectedEmployee?.id"
                :employee="selectedEmployee"
                @deleted="emit('employee-deleted')"
            />
        </div>
    </div>
</template>