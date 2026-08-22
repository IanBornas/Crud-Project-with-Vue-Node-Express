<script setup>
import { onMounted, ref } from 'vue'
import DashboardTitle from '@/component/dashboard/DashboardTitle.vue';
import DashboardTable from '@/component/dashboard/DashboardTable.vue';
import { getEmployees } from '@/services/employees';


const employees = ref([])
const error = ref('')

async function loadEmployees() {
  try {
    const response = await getEmployees()
    employees.value = response.data
  } catch (error) {
    error.value = err.response?.data?.error ?? 'Could not load employees.'
    console.error(error)
  }
}

onMounted(loadEmployees)

</script>

<template>
    <div class="space-y-6">
    <DashboardTitle/>
    <p v-if="error">{{error}}</p>
    <DashboardTable :employees="employees" @employee-created="loadEmployees"/>
    </div>

    
</template>