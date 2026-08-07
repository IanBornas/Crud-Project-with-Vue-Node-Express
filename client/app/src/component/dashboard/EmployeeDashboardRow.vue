<script setup>
    defineProps({
    employee: { type: Object, required: true },
    })
    const emit = defineEmits (['edit','delete'])
</script>

<template>
    <tr class="border-b border-gray-200">
        <td class="whitespace-nowrap px-6 py-4">{{employee.name}}</td>
        <td class="whitespace-nowrap px-6 py-4">{{employee.email}}</td>
        <td class="whitespace-nowrap px-6 py-4">{{employee.department}}</td>
        <td class="whitespace-nowrap px-6 py-4">{{employee.position}}</td>
        
        <td>
            <slot name="actions" :employee="employee"/>
        </td>
    </tr>
</template>