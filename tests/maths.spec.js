const { test } = require('@japa/runner')

test.group('Maths.add', (group) => {
  group.setup(async () => {
    await import('@adonisjs/repl')
  })

  test('add two numbers', ({ assert }) => {
    // Test logic goes here
    assert.equal(2 + 2, 4)
  })
})
