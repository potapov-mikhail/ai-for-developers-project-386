import { db } from './index.js';
import { availability } from './schema.js';
import { count } from 'drizzle-orm';

export async function seed() {
  const [row] = db.select({ count: count() }).from(availability).all();
  if (row.count > 0) {
    console.log('Availability already seeded, skipping.');
    return;
  }

  const days = [
    { dayOfWeek: 0, label: 'Monday' },
    { dayOfWeek: 1, label: 'Tuesday' },
    { dayOfWeek: 2, label: 'Wednesday' },
    { dayOfWeek: 3, label: 'Thursday' },
    { dayOfWeek: 4, label: 'Friday' },
    { dayOfWeek: 5, label: 'Saturday' },
    { dayOfWeek: 6, label: 'Sunday' },
  ];

  for (const day of days) {
    db.insert(availability)
      .values({
        id: crypto.randomUUID(),
        dayOfWeek: day.dayOfWeek,
        startTime: '09:00',
        endTime: '18:00',
      })
      .run();
  }

  console.log('Seeded 7 availability rows (09:00–18:00 daily).');
}

// Run directly
const isMain = process.argv[1]?.endsWith('seed.ts') || process.argv[1]?.endsWith('seed.js');
if (isMain) {
  seed();
}
