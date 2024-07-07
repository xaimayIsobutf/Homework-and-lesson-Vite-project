<template>
<div>
    <p> Ask a Yes/No</p>
    <input v-model="question"> <br/>
    <button @click="submitPropsData"> Sub </button><br/>
    Text:{{showText}}
    <hr/>
    <hr/>
    <Childcomponent :isPropsData="propData" @someEmit="callback"/>
    //isPropsData ia a kay of prop to flie child
</div>

</template>
<script setup lang="ts">
 import {ref,reactive,watch} from 'vue';
 import Childcomponent from '../components/Children.Component.vue'

 const question = ref('');
 const propData = reactive<any>({});
 const showText = ref('');

const submitPropsData = ()=> {
    propData.name ='Xaimay';
    propData.surname = 'Xyat';

}
const callback = (e: any) => {
    showText.value=e;
}

</script>


