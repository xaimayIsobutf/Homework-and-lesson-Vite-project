import Ticket from './Ticket';

export default class Concert {
  public tickets: Ticket[];

  constructor(public name: string, public date: string) {
    this.tickets = [];
  }

  addTicket(ticket: Ticket): void {
    this.tickets.push(ticket);
  }

  getConcertInfo(): string {
    return `Concert: ${this.name}, Date: ${this.date}, Total Tickets: ${this.tickets.length}`;
  }

  listTickets(): string[] {
    return this.tickets.map(ticket => ticket.getTicketInfo());
  }
}
