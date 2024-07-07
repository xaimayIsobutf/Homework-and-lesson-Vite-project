<template>
    <div>
      <h2>Ticket Details</h2>
      <ul>
        <li v-for="ticket in tickets" :key="ticket.id">{{ ticket.getTicketInfo() }}</li>
      </ul>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import Ticket from '../views/Ticket';
  import Concert from '../views/Concert';
  
  export default defineComponent({
    name: 'TicketComponent',
    data() {
      return {
        tickets: [] as Ticket[],
        concert: null as Concert | null
      };
    },
    created() {
      // Initialize concert and tickets
      this.concert = new Concert('Live Concert', '2024-07-20');
      const ticket1 = new Ticket(1, 'John Doe', 'A1', 50.00);
      const ticket2 = new Ticket(2, 'Jane Smith', 'A2', 55.00);
      const ticket3 = new Ticket(3, 'Alice Brown', 'B1', 60.00);
      const ticket4 = new Ticket(4, 'Xaimay', 'B4', 50.00);
      
      this.concert.addTicket(ticket1);
      this.concert.addTicket(ticket2);
      this.concert.addTicket(ticket3);
      this.concert.addTicket(ticket4);
      
      this.tickets = this.concert.tickets;
    }
  });
  </script>
  
  <style scoped>
  /* Add styles here if needed */
  </style>
  