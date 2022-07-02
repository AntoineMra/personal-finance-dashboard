const app = require('../../index')

describe('The server should run on the var port', () => {
  test('The port should be set through env var', () => {
    expect(app.PORT).toEqual(process.env.API_PORT)
  })

  test('The server should run', async () => {
    const res = await request(app).get('/')
    expect(res.statusCode).toEqual(200)
  })
})
