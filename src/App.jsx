import { 
  WeatherContainer,
  WeatherWrapper,
 } from './styles'

 import { Search } from './components/Search'
 import { Info } from './components/Info/'

const App = () => {
  return (
    <WeatherContainer>
      <h1>Weather</h1>
      <WeatherWrapper>
          <Search />
          <Info />
      </WeatherWrapper>
    </WeatherContainer>
  )
}

export { App }
