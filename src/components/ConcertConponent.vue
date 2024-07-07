<template>
    <div>
      <h1>{{ concertInfo }}</h1>
      <TicketComponent />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import TicketComponent from './TicketConponent.vue';
  import Concert from '../views/Concert';
  
  export default defineComponent({
    name: 'ConcertComponent',
    components: {
      TicketComponent
    },
    data() {
      return {
        concert: null as Concert | null,
        concertInfo: ''
      };
    },
    created() {
      // Initialize concert and display its information
      const concert = new Concert('Live Concert', '2024-07-20');
      this.concertInfo = concert.getConcertInfo();
    }
  });
  </script>
  
  <style scoped>
  /* Add styles here if needed */
  </style>
  