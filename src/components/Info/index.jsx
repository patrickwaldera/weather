import { 
  InfoCity,
  CityNameAndIcon,
  ImgContainer,
  TempContainer,
  DataInfoContainer
} from './styles'

import moment from 'moment';


const Info = ({weatherData}) => {
  const weatherDataInfo = {
    name: weatherData.name,
    country: weatherData.sys?.country,
    icon: weatherData.weather?.[0]?.icon,
    temp: weatherData.main?.temp,
    temp_min: weatherData.main?.temp_min,
    temp_max: weatherData.main?.temp_max,
    description: weatherData.weather?.[0]?.description,
    humidity: weatherData.main?.humidity,
    visibility: weatherData.visibility / 1000,
    sunrise: weatherData.sys?.sunrise,
    sunset: weatherData.sys?.sunset,
  }

  return (
    <InfoCity>
        <CityNameAndIcon>
            <div className='city'>
              <h2>{weatherDataInfo.name}</h2>
              <p>{weatherDataInfo.country}</p>
            </div>
            <ImgContainer>
              <img src={`https://openweathermap.org/img/wn/${weatherDataInfo.icon}@2x.png`} loading='lazy' />
            </ImgContainer>
        </CityNameAndIcon>
        <TempContainer>
          <h2>{Math.round(weatherDataInfo.temp)}<sup>ºC</sup></h2>
          <p className='description'>{weatherDataInfo.description}</p>
          <div>
            <p className='min-max-temp'><strong>Min:</strong> {Math.round(weatherDataInfo.temp_min)}<sup>ºC</sup></p>
            <p className='min-max-temp'><strong>Max:</strong> {Math.round(weatherDataInfo.temp_max)}<sup>ºC</sup></p>
          </div>         
        </TempContainer>
        <DataInfoContainer>
          <p><strong>Umidade:</strong> {weatherDataInfo.humidity} %</p>
          <p><strong>Visibilidade:</strong> {weatherDataInfo.visibility.toFixed(1)} Km</p>
          <p><strong>Nascer do sol:</strong> {moment(weatherDataInfo.sunrise, 'X').format('LT')}</p>
          <p><strong>Pôr do sol:</strong> {moment(weatherDataInfo.sunset, 'X').format('LT')}</p>
        </DataInfoContainer>
    </InfoCity>
  )
}

export { Info }