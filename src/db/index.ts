import { attachDatabasePool } from '@vercel/functions'
import { parseEnv } from '@neon/env'
import { drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'

import config from '../../neon.ts'
import * as schema from './schema.ts'

const { postgres } = parseEnv(config, ['DATABASE_URL'])

export const pool = new Pool({
  connectionString: postgres.databaseUrl,
})

attachDatabasePool(pool)

export const db = drizzle(pool, { schema })
