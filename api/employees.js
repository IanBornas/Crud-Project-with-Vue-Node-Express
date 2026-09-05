const server = require('../app/server')

module.exports = (request, response) => {
  // Explicit collection entrypoint for Vercel's /api/employees route.
  request.url = '/api/employees'
  return server(request, response)
}
