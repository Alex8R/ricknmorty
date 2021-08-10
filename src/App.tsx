import React, { useEffect, useMemo, useState } from 'react'
import { gql, useQuery } from '@apollo/client'
import './App.css'
import { Preloader } from './components/Preloader/Preloader'
import { Card } from './components/Card/Card'
import { useDebounce } from './hooks/debounce'
import { SearchBar } from './components/SeacrhBar/SearchBar'
import { Container } from './components/Container/Container'

const CHARACTERS = gql`
  query getList($searchText: String!) {
    characters(filter: { name: $searchText }) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        species
        status
        image
      }
    }
  }
`

interface IData {
  characters: ICharacters
}

interface ICharacters {
  info: {
    count: number
    next: number
    pages: number
    prev: string | null
  }
  results: ICharacter[]
}

interface ICharacter {
  id: string
  image: string
  name: string
  species: string
  status: string
  __typename: string
}

type Options = {
  searchText: string
}

function App() {
  const [searchValue, setSearchValue] = useState<string>('')
  const [searchText, setSearchText] = useState<string>('')

  const debouncedSearchValue = useDebounce(searchValue)

  const { loading, data } = useQuery<IData, Options>(CHARACTERS, {
    variables: {
      searchText,
    },
  })

  const characters = useMemo(() => data?.characters?.results, [data])

  useEffect(() => {
    if (searchValue.length > 2) setSearchText(searchValue)
  }, [debouncedSearchValue])

  return (
    <main className="App">
      <SearchBar value={searchValue} setSearchValue={setSearchValue} />
      {loading && <Preloader />}
      <Container>
        {characters && characters.length > 0 ?
        characters.map(({ id, name, image, status, species }) => (
          <Card
            key={id}
            species={species}
            status={status}
            name={name}
            image={image}
          />
        )) : "Unknown character..."}
      </Container>
    </main>
  )
}

export default App
