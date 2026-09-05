<script setup>
import { ref } from "vue"

const props = defineProps({
    form: {
        type: Object,
        required: true
    }
})

const errors = ref({})

const sanitize = (value, lowercase = false) => {
    const sanitized = String(value ?? "")
        .replace(/[\u0000-\u001F\u007F]/g, "")
        .replace(/<[^>]*>/g, "")
        .replace(/\s+/g, " ")
        .trim()

    return lowercase ? sanitized.toLowerCase() : sanitized
}

const validate = () => {
    const sanitizedForm = {
        name: sanitize(props.form.name),
        email: sanitize(props.form.email, true),
        position: sanitize(props.form.position),
        department: sanitize(props.form.department)
    }

    errors.value = {}

    if (!sanitizedForm.name) errors.value.name = "Name is required."
    if (!sanitizedForm.email) {
        errors.value.email = "Email is required."
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(sanitizedForm.email)) {
        errors.value.email = "Enter a valid email address."
    }
    if (!sanitizedForm.position) errors.value.position = "Position is required."
    if (!sanitizedForm.department) errors.value.department = "Department is required."

    return Object.keys(errors.value).length ? null : sanitizedForm
}

defineExpose({ validate })
</script>

<template>
    <div v-if="Object.keys(errors).length" class="px-6 text-sm text-red-600">
        <p v-if="errors.name">{{ errors.name }}</p>
        <p v-if="errors.email">{{ errors.email }}</p>
        <p v-if="errors.position">{{ errors.position }}</p>
        <p v-if="errors.department">{{ errors.department }}</p>
    </div>
</template>