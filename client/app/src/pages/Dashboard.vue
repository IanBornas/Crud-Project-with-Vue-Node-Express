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
  } catch (loadError) {
    // Keep refresh errors visible without shadowing the reactive error message.
    error.value = loadError.response?.data?.error ?? 'Could not load employees.'
    console.error(loadError)
  }
}

onMounted(loadEmployees)

</script>

<template>
    <div class="space-y-6">
    <DashboardTitle/>
    <p v-if="error">{{error}}</p>
    <DashboardTable
      :employees="employees"
      @employee-created="loadEmployees"
      @employee-deleted="loadEmployees"
      @employee-updated="loadEmployees"
    />
    </div>

    
</template>