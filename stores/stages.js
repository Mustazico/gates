import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useStageStore = defineStore('stages', () => {
    const stages = ref([]);

    async function fetchStages() {
        console.log("Fetching stages..")
        try {
            const response = await $fetch('/stages', {
                method: 'GET'
            });
            const data = response.data;
            const stagesArray = Object.values(data).map(stage => ({
                ID: stage.ID,
                projectID: stage.projectID,
                nr: stage.nr,
                hex: stage.hex,
                name: stage.name,
                weight: stage.weight
            }));
            stages.value = stagesArray;

        } catch (error) {
            console.error('Error fetching stages', error)
        }
    }

    async function deleteStages(projectID) {
        try {
            await $fetch(`/stages/${projectID}`, {
                method: 'DELETE'
            });
            stages.value = stages.value.filter(stage => stage.projectID !== projectID);
        } catch (error) {
            console.error("Failed to delete stages:", error);
        }
    }

    async function addStages(projectID, stageArray) {
        try {
            await deleteStages(projectID); // Delete old stages first
            const response = await fetch('/stages', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ projectID, stages: stageArray })
            });

            const newStages = await response.json();
            stages.value.push(...newStages);
        } catch (error) {
            console.error("Error adding stages:", error);
        }
    }

    function getStages() {
        return stages.value;
    }

    function getStagesByID(projectID) {
        return stages.value.filter(stage => stage.projectID === projectID);
    }

    return {
        stages,
        fetchStages,
        deleteStages,
        getStages,
        addStages,
        getStagesByID
    }
})