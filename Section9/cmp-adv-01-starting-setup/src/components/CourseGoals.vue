<template>
    <ul>
        <li v-for="goal in goals" :key="goal">
            <slot :goalItem="goal"></slot>
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            goals: ['Finish', 'Learn'],
        }
    },
}
</script>