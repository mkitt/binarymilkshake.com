async function getCharacters() {
  const results = await fetch('https://rickandmortyapi.com/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `{
        characters {
          results {
            name
          }
        }
      }`,
    }),
  })
  const characters = await results.json()
  return characters
}

export default async function Page() {
  const characters = await getCharacters()
  const results: { name: string }[] = characters.data.characters.results
  return (
    <section className="flex min-h-screen flex-col gap-4 p-4">
      <header className="flex flex-col gap-2">
        <h1 className="text-2xl font-700">Characters</h1>
        <p className="text-sm">rickandmortyapi.com/graphql</p>
      </header>
      <ol className="list-inside list-decimal">
        {results.map((character, index) => (
          <li key={index}>{character.name}</li>
        ))}
      </ol>
    </section>
  )
}
