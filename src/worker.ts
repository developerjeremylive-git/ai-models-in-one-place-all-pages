import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'
import { logger } from 'hono/logger'

type Bindings = {
	__STATIC_CONTENT: string
}

const app = new Hono<{ Bindings: Bindings }>()

// Add logger middleware
app.use('*', logger())

// Middleware to handle errors
app.onError((err, c) => {
	console.error(`Error occurred:`, {
		message: err.message,
		stack: err.stack,
		url: c.req.url,
		method: c.req.method
	})
	return c.json({
		error: 'Internal Server Error',
		message: err.message
	}, 500)
})

// Health check endpoint
app.get('/health', (c) => c.json({ status: 'ok' }))

// Serve static assets
app.use('*', serveStatic({ root: './' }))

// Fallback for SPA routing
app.use('*', serveStatic({ path: './index.html' }))

export default app 