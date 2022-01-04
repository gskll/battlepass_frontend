export default function formatISODate(ISOdate: string) {
  const date = new Date(ISOdate)
  return date.toDateString()
}
