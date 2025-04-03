<template>
    <div v-if="admin">
        <h3>Color palette:</h3>

        <!-- List of colors -->
        <div v-if="notEmpty">
            <AdminComponentsColorPaletteDesc/>
            <div v-for="color in colors" :key="color.id">
                <AdminComponentsColorEntry :entryData="color"/>
            </div>
            <div class="bottom-spacer"/>
        </div>
        <div v-else>Color palette empty.</div>

        <!-- Add color button -->
         <div v-if="!addColorBool">
            <button class="button-38" @click="openAddColorModal">
                Add color
            </button>
         </div>
         
         <div v-else>
            <div>
                <form @submit.prevent="addColor">
                    <label for="name" class="w50px">Name: </label>
                    <input type="text" id="name" v-model="newColor.name" required class="w150px">
                    <br><br>
                    <label for="hex" class="w50px">Color: </label>
                    <input type="color" id="hex" v-model="newColor.hex" required class="w150px"><br><br>
                    <button class="button-38" type="submit">Add color</button>
                    <button class="button-38" @click="openAddColorModal">Cancel</button>
                </form>
            </div>
         </div>
         

    </div>
    <div v-else>This is an admin only page, please do not attempt to access it without being logged in as an admin.</div>

</template>

<script setup>
const authStore = useAuthStore();
const colorStore = useColorStore();

const admin = computed(() => authStore.isAdmin());
const colors = ref([]);
const notEmpty = computed(() => (colors.value.length>0))
const addColorBool = ref(false)

const newColor = ref({
    name: '',
    hex: '#000000'
})


onMounted(() => {
    fetchColors(); 
})

watchEffect(()=> {
    colors.value = colorStore.getColors();
})

function openAddColorModal() {
    addColorBool.value = !addColorBool.value
}

async function fetchColors() {
    await colorStore.fetchColors();
    colors.value = colorStore.getColors()
}

async function addColor() {
    if (!newColor.value.name || !newColor.value.hex) {
        alert("Please fill in all fields.");
        return;
    }

    await colorStore.addColor({
        name: newColor.value.name,
        hex: newColor.value.hex
    });

    await fetchColors();
    addColorBool.value = false;
}

</script>

<style>
.bottom-spacer {
    height: 100px;
}

.w150px{
    width: 150px;
}

.w50px {
    width: 50px;
}


/* CSS */
.button-38 {
  background-color: #FFFFFF;
  border: 0;
  border-radius: .5rem;
  box-sizing: border-box;
  color: #111827;
  font-family: "Inter var",ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  font-size: .875rem;
  font-weight: 600;
  line-height: 1.25rem;
  padding: .75rem 1rem;
  text-align: center;
  text-decoration: none #D1D5DB solid;
  text-decoration-thickness: auto;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-38:hover {
  background-color: rgb(249,250,251);
}

.button-38:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.button-38:focus-visible {
  box-shadow: none;
}
</style>