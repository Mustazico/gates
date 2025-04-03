<template>
    <div v-if="hasProgress">
        <div v-if="isArray" class="progress-container">
            <div
                v-for="(progress, index) in progressNumber"
                :key="index"
                class="progress-bar"
                :class="getBarClass(index)"
            >
                <div class="filled-bar" :style="{ width: (progress || 0) + '%' }"></div>
            </div>
        </div>

        <div v-else class="progress-bar">
            <div class="filled-bar" :style="{ width: progressNumber + '%' }"></div>
        </div>
    </div>
    <div v-else>
        <span>No progress data available</span>
    </div>
</template>

<script setup>
const props = defineProps({
    progressNumber: {
        type: [Array, Number], // Accept either an array or a number
        default: () => [],
    },
});

const isArray = computed(() => {
    return Array.isArray(props.progressNumber);
});

const hasProgress = computed(() => {
    return (
        (isArray.value && props.progressNumber.length > 0) ||
            (!isArray.value && props.progressNumber >= 0)
    );
});
</script>

<style scoped>
.progress-container {
  display: flex;
  gap: 5px;
  width: 100%;
}

.progress-bar {
    width: 100%;
    background-color: #f5f5f5;
    height: 20px;
    border-radius: 5px;
    border: 1px solid #b0b0b0; /* Outline */
    overflow: hidden;
    position: relative;
}

.filled-bar {
  height: 100%;
  border-radius: 5px;
  background-color: #76c7c0;
  font-weight: bold;
  font-size: 0.8rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  white-space: nowrap;
  overflow: hidden;
}

</style>
