const server = require('../app/server')

module.exports = (request, response) => {
  // Vercel may pass the function path with or without the /api prefix.
  // Normalize it so the existing Express /api route works in both cases.
  if (!request.url.startsWith('/api')) {
    request.url = `/api${request.url.startsWith('/') ? '' : '/'}${request.url}`
  }

  return server(request, response)
}
