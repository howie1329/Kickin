import { pool } from './db/index.ts'

export async function getClient() {
  return pool
}
