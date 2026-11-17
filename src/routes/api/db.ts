import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/api/db')({
  server: {
    handlers: {
      GET: async () => {
        const { pingPostgres } = await import('#/db/ping.ts')
        const result = await pingPostgres()
        return Response.json(result)
      },
    },
  },
})
