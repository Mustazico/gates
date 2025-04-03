<template>
    <div class="color-card">
        <div class="w50 row">
            <div class="w50">{{ props.entryData.name }}</div>
            <div class="w50 border" :style="{backgroundColor: props.entryData.hex}"></div>
        </div>
        <div class="w50">{{ props.entryData.hex }}</div>
        
        <div class="delete" @click.stop="toggleModal" v-if="superadmin">
            <img src="/assets/x.svg" alt="Delete" />
        </div>
    </div>
    <Modal @close="toggleModal" :modalActive="modalActive" v-if="superadmin">
        <p>Delete color "{{ props.entryData.name }}"?</p>
        <button @click="deleteColorHandler" class="deleteButton">Yes</button>
        <button @click="toggleModal" class="cancelButton">No</button>
    </Modal>
</template>


<script setup>
import Modal from "@/components/ReusableModal.vue";

const colorStore = useColorStore();
const authStore = useAuthStore();
const superadmin = ref(authStore.isSuperAdmin())

const props = defineProps({
    entryData: {
        type: Object,
        required: true
    }
});

const modalActive = ref(false);
const toggleModal = () => {
  modalActive.value = !modalActive.value;
};

function deleteColorHandler() {
    const colorId = props.entryData.ID;
    colorStore.deleteColor(colorId);
    toggleModal();
}

</script>


<style>
.color-card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 5px;
    background-color: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 6px;
}

.row {
    margin-left: 10px;
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 10px;
}

.w50 {
    margin-left: 10px;
    width: 50%;
}

.w25 {
    width: 25%;
    height: 25px;
}

.border {
    border-style: solid;
    border-width: 1px;
}

.delete {
    cursor: pointer;
    width: 10px;
    margin-left: 5px;
    margin-right: 2px;
}

</style>