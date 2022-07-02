const app = require('../../index')

describe('The swagger should be initiated with options', () => {
  test('The options should be defined', () => {
    expect(app.options).toHaveProperty('apis')
  })
})
