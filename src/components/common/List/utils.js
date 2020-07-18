export const sortStringsAsc = (a, b) => {
  const nameA = a.name.toLowerCase()
  const nameB = b.name.toLowerCase()
  if (nameA > nameB) return 1
  if (nameB > nameA) return -1
  return 0
}

export const sortStringsDesc = (a, b) => {
  const nameA = a.name.toLowerCase()
  const nameB = b.name.toLowerCase()
  if (nameA < nameB) return 1
  if (nameB < nameA) return -1
  return 0
}
