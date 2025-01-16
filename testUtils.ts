

function spreadWithWeightings(total: number, weightings: Array<number>): Array<number> {
  if (weightings.length == 0) {
    return []
  }
  const totalWeight = weightings.reduce((acc, curr) => acc +curr, 0)
  console.log('totalWeight', totalWeight)
  let results: Array<number> = []

  for (let i = 0; i < weightings.length; i++) {
    const amountPerItem = Number((total * weightings[i] / totalWeight).toFixed(2))
    results.push(Number(amountPerItem.toFixed(2)))
  }

  const resultingWeight = results.reduce((acc, curr) => acc +curr, 0)
  results[0] = results[0] + total - resultingWeight

  return results
}

console.log(spreadWithWeightings(10,[]))
