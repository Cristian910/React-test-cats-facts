const endpointFact = 'https://catfact.ninja/fact'

export const getFact = async () => {
  const res = await fetch(endpointFact)
  const data = await res.json()
  const { fact } = data
  return fact
  }