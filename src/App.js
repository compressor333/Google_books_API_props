import Header from "./components/Header";
import BooksGrid from "./components/BooksGrid";
import Search from "./components/Search";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {

  const [query, setQuery] = useState('js')
  const [items, setItems] = useState([])
  const [isLoading, setIsloading] = useState(false)
  const key = 'AIzaSyDL06aBH_O5VUNH94BbDh91mwXlB-0n354'

  const queryFunction = (q) => {
    if(q === '') {
      setQuery('js')
      console.log('no input')
    } else {
      setQuery(q)
    }
  }

  const search = async () => {
    setIsloading(true)
    try {
      const result = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=40&key=${key}`)
      const data = await result.data
      const volume = data.items

      if(volume) {
        console.log(volume)
        setItems(volume)
    } else {
      setItems([])
      setQuery('js')
      console.log('no results found')
    }
      setIsloading(false)
    } catch (error) {
      console.log(error)
      setIsloading(false)
    }
  }

  useEffect(() => {
    search();
  }, [query])

  return (
    <div>
      <Header />
      <Search getQuery={queryFunction} />
      <BooksGrid items={items} load={isLoading} query={query} />
    </div>
  )
}

export default App;
