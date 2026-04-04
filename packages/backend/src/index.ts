import Fastify from 'fastify';
import cors from '@fastify/cors';
import availabilityRoutes from './routes/owner/availability.js';
import ownerBookingsRoutes from './routes/owner/bookings.js';
import ownerEventTypesRoutes from './routes/owner/event-types.js';
import publicEventTypesRoutes from './routes/public/event-types.js';
import publicSlotsRoutes from './routes/public/slots.js';
import publicBookingsRoutes from './routes/public/bookings.js';

const app = Fastify({ logger: true });

await app.register(cors);

// Owner routes
await app.register(availabilityRoutes, { prefix: '/api/v1/owner' });
await app.register(ownerBookingsRoutes, { prefix: '/api/v1/owner' });
await app.register(ownerEventTypesRoutes, { prefix: '/api/v1/owner' });

// Public routes
await app.register(publicEventTypesRoutes, { prefix: '/api/v1/public' });
await app.register(publicSlotsRoutes, { prefix: '/api/v1/public' });
await app.register(publicBookingsRoutes, { prefix: '/api/v1/public' });

try {
  await app.listen({ port: 3000, host: '0.0.0.0' });
} catch (err) {
  app.log.error(err);
  process.exit(1);
}
