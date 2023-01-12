import { SearchBox } from './styles'
import { FaSearch } from 'react-icons/fa/'

const Search = () => {
  return (
    <SearchBox>
        <div className='searchContainer'>
          <FaSearch size={24} color={'#263238'}/>
          <input type="text" placeholder='Escreva o nome da cidade...'/>
        </div>
        <button>PESQUISAR</button>
    </SearchBox>
  )
}

export { Search }
