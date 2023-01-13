import { SearchBox } from './styles'
import { FaSearch } from 'react-icons/fa/'

const Search = ({search, setSearch, fetchData}) => {
  return (
    <SearchBox>
        <div className='searchContainer'>
          <FaSearch size={24} color={'#263238'}/>
          <input type="text" placeholder='Escreva o nome da cidade...' value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={e => e.key === 'Enter' ? fetchData() : ''}/>
        </div>
        <button onClick={fetchData}>PESQUISAR</button>
    </SearchBox>
  )
}

export { Search }
