<script setup>
    defineProps({
    employee: { type: String, required: true },
    })
    const emit = defineEmits (['edit','delete'])
</script>

<template>
    <td>{{employee.name}}</td>
    <td>{{employee.email}}</td>
    <td>{{employee.department}}</td>
    <td>{{employee.position}}</td>
    
    <td>
        <slot name="actions" :employee="employee"/>
    </td>
    
</template>