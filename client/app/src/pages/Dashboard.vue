<script setup>
import { ref } from 'vue'
import DashboardTitle from '@/component/dashboard/DashboardTitle.vue';
import DashboardTable from '@/component/dashboard/DashboardTable.vue';

const employees = ref([
  {
    id: 1,
    name: 'John Doe',
    email: 'johndoe@example.com',
    department: 'IT',
    position: 'Developer'
  }
])

</script>

<template>

    <DashboardTitle/>
    <DashboardTable :employees="employees"/>
    
</template>