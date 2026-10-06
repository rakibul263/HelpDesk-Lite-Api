import { Injectable, NotFoundException } from '@nestjs/common';
import { Ticket } from './ticket.interface.js';

@Injectable()
export class TicketsService {
  private readonly tickets = [
    {
      id: 1,
      Subject: 'Cannot login to account.',
      description: 'User cannot access the dashboard after login',
      priority: 'high',
      status: 'open',
      createdAt: '2026-10-07T10:00:00:000Z',
    },
    {
      id: 2,
      Subject: 'Payment failed',
      description: 'Card Payment fails at the checkout step',
      priority: 'medium',
      status: 'open',
      createdAt: '2026-10-07T11:30:00:000Z',
    },
    {
      id: 3,
      subject: 'invoice download not working.',
      description: 'invoice PDF download returns an empty file.',
      priority: 'low',
      status: 'close',
      createdAt: '2026-10-07T12:45:00:000Z',
    },
  ];

  findAll(status?: Ticket['status'], priority?: Ticket['priority']) {
    let tickets = this.tickets;

    if (status) {
      tickets = tickets.filter((ticket) => ticket.status === status);
    }

    if (priority) {
      tickets = tickets.filter((tickets) => tickets.priority === priority);
    }

    return tickets;
  }
  findOne(id: number) {
    const ticket = this.tickets.find((ticket) => ticket.id === id);

    if (!ticket) {
      throw new NotFoundException(`Ticket with ID ${id} not found.`);
    }
    return ticket;
  }
}
