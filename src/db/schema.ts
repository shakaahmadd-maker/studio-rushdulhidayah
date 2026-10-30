import { pgTable, serial, text, varchar, integer, timestamp, index } from 'drizzle-orm/pg-core';

export const registrations = pgTable(
  'registrations',
  {
    id: serial('id').primaryKey(),
    studentName: varchar('student_name', { length: 255 }).notNull(),
    studentAge: integer('student_age').notNull(),
    gender: varchar('gender', { length: 50 }).notNull(),
    country: varchar('country', { length: 100 }).notNull(),
    email: varchar('email', { length: 255 }).notNull(),
    phone: varchar('phone', { length: 100 }).notNull(),
    course: varchar('course', { length: 100 }).notNull(),
    classDays: varchar('class_days', { length: 100 }).notNull(),
    tutorPreference: varchar('tutor_preference', { length: 50 }).notNull(),
    message: text('message'),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => [
    index('registrations_created_at_idx').on(table.createdAt),
    index('registrations_email_idx').on(table.email),
  ]
);

export type Registration = typeof registrations.$inferSelect;
export type NewRegistration = typeof registrations.$inferInsert;

export const contacts = pgTable(
  'contacts',
  {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 255 }).notNull(),
    email: varchar('email', { length: 255 }).notNull(),
    subject: varchar('subject', { length: 255 }).notNull(),
    message: text('message').notNull(),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => [
    index('contacts_created_at_idx').on(table.createdAt),
    index('contacts_email_idx').on(table.email),
  ]
);

export type ContactMessage = typeof contacts.$inferSelect;
export type NewContactMessage = typeof contacts.$inferInsert;
