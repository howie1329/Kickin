import { eq } from 'drizzle-orm'

import { db } from './index.ts'
import { todos } from './schema.ts'

export async function pingPostgres() {
  const title = `neon-ping-${Date.now()}`
  const [created] = await db
    .insert(todos)
    .values({ title })
    .returning({ id: todos.id, title: todos.title })

  if (!created) {
    throw new Error('Insert did not return a row')
  }

  const [read] = await db
    .select({ id: todos.id, title: todos.title })
    .from(todos)
    .where(eq(todos.id, created.id))

  await db.delete(todos).where(eq(todos.id, created.id))

  if (!read || read.title !== title) {
    throw new Error('Read did not return the inserted row')
  }

  return { ok: true as const, id: read.id, title: read.title }
}
