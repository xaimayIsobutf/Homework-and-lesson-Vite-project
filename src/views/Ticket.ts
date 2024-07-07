export default class Ticket {
    constructor(
      public id: number,
      public holderName: string,
      public seatNumber: string,
      public price: number
    ) {}
  
    getTicketInfo(): string {
      return `Ticket ID: ${this.id}, Holder: ${this.holderName}, Seat: ${this.seatNumber}, Price: ${this.price.toFixed(2)}`;
    }
  }