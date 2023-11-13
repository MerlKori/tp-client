
export default async function (...args: [unknown]) {
  console.log('api products', ...args)
  return [{ id: 1, label: 'test' }]
}