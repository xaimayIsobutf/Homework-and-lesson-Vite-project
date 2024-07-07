<template>
    <div>
        My Component
        <Childern1Component1>
            <template v-slot:headers>
               Hello world 
            </template> 
        </Childern1Component1>
        <hr/>
        provide:{{message}}
    </div>
</template>
<script setup lang="ts">
import Childern1Component1 from '../components/Children2.Conpopnent.vue'
import {inject} from 'vue'

const message =inject('message');


</script>