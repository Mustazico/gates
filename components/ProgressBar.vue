<template>
  <div v-if="hasProgress">
    <div v-if="isArray" class="progress-container">
      <div
        v-for="(progress, index) in progressNumber"
        :key="index"
        class="progress-bar"
        :style="{ flex: getStageWeight(index) }"
      >
        <div
          class="filled-bar"
          :style="{ width: (progress || 0) + '%', backgroundColor: getStageColor(index) }"
        >
          <span class="stage-label">{{ getStageName(index) }}</span>
        </div>
      </div>
    </div>
    <div v-else class="progress-bar single">
      <div class="filled-bar" :style="{ width: progressNumber + '%', backgroundColor: stageColor }">
        <span class="stage-label">{{ singleStageName }}</span>
      </div>
    </div>
  </div>

  <div v-else>
    <span>No progress data available</span>
  </div>
</template>

<script setup>
import { computed, ref, watch, onMounted } from 'vue';
import { useStageStore } from '@/stores/stages';

const props = defineProps({
  projectID: {
    type: String,
    required: true
  },
  progressNumber: {
    type: [Array, Number], // Accept either an array or a number
    default: () => [],
  }
});

const stagesStore = useStageStore();
const projectStages = ref([]);

// Fetch stages when the component is mounted or when projectID changes
const fetchStages = async () => {
  if (!props.projectID) return;
  try {
    projectStages.value = await stagesStore.getStagesByID(props.projectID);
  } catch (error) {
    console.error("Failed to fetch project stages:", error);
  }
};

onMounted(fetchStages);
watch(() => props.projectID, fetchStages, { immediate: true });

// Computed properties
const isArray = computed(() => Array.isArray(props.progressNumber));
const hasProgress = computed(() => (
  (isArray.value && props.progressNumber.length > 0) ||
  (!isArray.value && props.progressNumber >= 0)
));

const stageColor = computed(() => projectStages.value.length > 0 ? projectStages.value[0].hex : '#76c7c0');
const singleStageName = computed(() => projectStages.value.length > 0 ? projectStages.value[0].name : '');

// Get the stage color for each progress bar in an array
const getStageColor = (index) => {
  return projectStages.value[index]?.hex || '#76c7c0';
};

// Get the stage name for each progress bar in an array
const getStageName = (index) => {
  return projectStages.value[index]?.name || '';
};

// Adjust width of each bar based on stage weight
const getStageWeight = (index) => {
  return projectStages.value[index]?.weight || 1; // Default weight is 1
};
</script>


<style scoped>
.progress-container {
  display: flex;
  gap: 5px;
  width: 100%;
}

.progress-bar {
  background-color: #f5f5f5;
  height: 25px;
  border-radius: 5px;
  border: 1px solid #b0b0b0;
  overflow: hidden;
  position: relative;
  flex: 1; /* Default flex value, overridden by stage weight */
}

.filled-bar {
  height: 100%;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 0.8rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  white-space: nowrap;
  overflow: hidden;
}

.stage-label {
  padding: 0 5px;
}
</style>
