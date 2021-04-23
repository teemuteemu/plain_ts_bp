import { hello } from './main'

test('hello fn should return "Hello <param>"', () => {
  expect(hello('world')).toBe('Hello world')
  expect(hello('foo')).toBe('Hello foo')
})
