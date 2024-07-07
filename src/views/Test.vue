<template>
    <div>
        happy Lao new year 2024: {{ name }} {{ surname }} <br/><br/>
        show: {{ may.name }} {{ may.surname}} | {{ may.items.name }} {{may.items.surname }} <br/>
        <p>Has published books:</p>
        <span>{{ publishedBooksMessage }}</span> <br/>
        
        <P v-if="gender === 'male'"> Gender: {{ gender }}</P>
        <P v-else-if="gender === 'famale'"> Gender: {{ gender }}</P>
        <P v-else> Gender: {{ gender }}</P>
        <br/>
        <div style="background-color: green; height:200px;" @click="Changetext">
            <br/>
           <button @click="changedata"> Click Change Data</button> 
           <br/>
           <p style="color:white; font-size:20px;"> ShowName: {{ text }} </p>
           <input v-model="text">
        </div>
        <div :class="isActive? 'text-danger' : 'text-blue' "> Use div class </div>

        <!-- <div v-if="isActive" class="text-danger">Use v-if-else</div>
        <div v-else="!isActive" class="text-blue">Use v-if-else</div> -->

        <TextComponent/>
        <TextComponent2/>
        
    </div>
</template>
<script lang="ts" setup>
    import {ref,reactive,computed,onMounted} from 'vue'  
    import TextComponent from '../components/Text.conponent.vue'
    import TextComponent2 from '../components/Texts.component.vue'

    //ref ສາມທາດເກັບພຽງໄດ້ຄ່າດຽວ
    const isActive =ref(true);
    const name =ref('May');
    const surname = ref('xaiyasong');
    const gender=ref('male');
    // reactive  ສາມາດເກັບຄ່າໄດ້ຫຼາຍຄ່າ ແລະ ຫຼາຍຕົວປ່ຽນ
        const author = reactive({
    name: 'John Doe',
    books: [
        'Vue 2 - Advanced Guide',
        'Vue 3 - Basic Guide',
        'Vue 4 - The Mystery'
    ]
    })
    // a computed ref
    const publishedBooksMessage = computed(() => {
    return author.books.length > 0 ? 'Yes' : 'No'
    })
    const may= reactive ({
        name: 'may',
        surname: 'xaiyasong',
        items: {
            name:'alex',
            surname: 'sander'
        }
    });
    const changedata = () => {
        name.value ='Mee';
    }
    const text = ref('');
    const Changetext = () => {
        text.value='';
    }

    onMounted(() => {
    console.log(`the component is now mounted.`)
    })

//     const obj = reactive({ count: 0 })

//     watch(obj, (newValue, oldValue) => {
//         console.log(newValue,oldValue);
        
//   // fires on nested property mutations
//   // Note: `newValue` will be equal to `oldValue` here
//   // because they both point to the same object!
// })

// obj.count++

</script>
<style>
 .text-danger {
    color:red
 }
 .text-blue {
    color: blue
 }
</style>