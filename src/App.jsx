import { 
  WeatherContainer,
  WeatherWrapper,
 } from './styles'

import { Search } from './components/Search'
import { Info } from './components/Info/'
import { ErrorMessage } from './components/ErrorMessage'
import { Loading } from './components/Loading'
import { useState,  useEffect} from 'react'

const App = () => {
  const [search, setSearch] = useState('Brasil');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&lang=pt_br&appid=2b226866ea8c4576d688c6e0bf81f1b9`)
    .then(response => response.json())
    .then(result => {
      setData(result)
      setSearch('');
      console.log(result);
      setLoading(false);
    });
  }

  useEffect(() => {
    fetchData();
  },[]);


  return (
    <WeatherContainer>
      <h1>Weather</h1>
      <WeatherWrapper>
          <Search search={search} setSearch={setSearch} fetchData={fetchData}/>
          {data.message?.length > 0 ? 
            <ErrorMessage />
          : 
            loading ? 
              <Loading />
            : 
              <Info weatherData={data}/>
          }
      </WeatherWrapper>
    </WeatherContainer>
  )
}

export { App }
