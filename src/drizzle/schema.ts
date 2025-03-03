import { pgTable, uuid, varchar, timestamp } from "drizzle-orm/pg-core";

export const UserTable = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
});

export const ClicksTable = pgTable("clicks", {
  id: uuid("id").primaryKey().defaultRandom(),
  createdAt: timestamp().defaultNow(),
  updatedAt: timestamp().defaultNow(),
});
