<script setup>
import DashboardActions from './DashboardActions.vue';
import EmployeeDashboardRow from './EmployeeDashboardRow.vue';

defineProps({
    employees:{
        type: Object,
        required: true
    }
})


function testEdit(employeeId) {
  console.log('Open edit modal for:', employeeId)
}

function testDelete(employeeId) {
  console.log('Open delete confirmation for:', employeeId)
}

</script>

<template>
<div class="w-full overflow-x-auto">
    <table class="table">
        <thead>
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
                @edit="testEdit(employee.id)"
                @delete="testDelete(employee.id)"
                />
            </template>
            </EmployeeDashboardRow>
        </tbody>
    </table>
    </div>
</template>