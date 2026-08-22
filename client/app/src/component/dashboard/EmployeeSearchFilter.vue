<script setup>
defineProps({
    modelValue:{
        type: String,
        default: ''
    }
})
const emit = defineEmits(['update:modelValue'])
</script>

<template>

<input  :value="modelValue"
        @input="emit('update:modelValue', $event.target.value)" 
        type="text"  placeholder="Search Employee" 
        class="input max-w-sm border-2 bordder-base-content/80" />

</template>