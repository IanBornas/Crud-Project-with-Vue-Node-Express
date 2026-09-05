const server = require('../../app/server')

module.exports = (request, response) => {
  // Explicit item entrypoint for Vercel's /api/employees/:id routes.
  const employeeId = request.query.id || request.url.split('/').pop()
  request.url = `/api/employees/${employeeId}`
  return server(request, response)
}
