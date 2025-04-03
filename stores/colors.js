import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { objectEntries } from '@vueuse/core';

export const useColorStore = defineStore('colors', () => {
    const colors = ref([]);

    async function fetchColors() {
        try {
            const response = await $fetch('/colors', {
                method: 'GET'
            });
            const data = response.data;
            console.log()
            const colorsArray = Object.values(data).map(color => ({
                ID: color.ID,
                name: color.name,
                hex: color.hex
            }));
            colors.value = colorsArray;

        } catch (error) {
            console.error('Error fetching colors', error)
        }
    }

    const addColor = async (newColor) => {
        try {
            const response = await $fetch('/colors', {
                method: 'POST',
                body: JSON.stringify(newColor),
                headers: { 'Content-Type': 'application/json' },
            });
            const addedColor = response.data;
            colors.value.push({
                id: "new!",
                name: addedColor.name,
                hex: addedColor.hex
            });
        } catch (error) {
            console.error('Error adding color:', error);
        }
    };

    async function deleteColor(colorID) {
        try {
            const response = await fetch(`/colors/${colorID}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                // Remove the deleted color from the local store
                colors.value = colors.value.filter(color => color.ID !== colorID);
                console.log('color deleted successfully');
            } else {
                const responseData = await response.json();
                console.error('Failed to delete color:', responseData.data);
            }
        } catch (error) {
            console.error('Error deleting color. Please reload the page and try again.', error);
        }

        await fetchColors()
    }

    function getColors() {
        return colors.value;
    }

    return{
        colors,
        addColor,
        fetchColors,
        getColors,
        deleteColor
    }
})