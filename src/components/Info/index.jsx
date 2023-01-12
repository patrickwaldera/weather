import { 
  InfoCity,
  CityNameAndIcon,
  ImgContainer,
  TempContainer,
  DataInfoContainer
} from './styles'

import icon from '../../../10n@2x.png'

const Info = () => {
  return (
    <InfoCity>
        <CityNameAndIcon>
            <div className='city'>
              <h2>Curitiba</h2>
              <p>BR</p>
            </div>
            <ImgContainer>
              <img src={icon} loading='lazy' />
            </ImgContainer>
        </CityNameAndIcon>
        <TempContainer>
          <h2>24<sup>ºC</sup></h2>
          <p className='description'>Nublado</p>
          <div>
            <p className='min-max-temp'><strong>Min:</strong> 21<sup>ºC</sup></p>
            <p className='min-max-temp'><strong>Max:</strong> 26<sup>ºC</sup></p>
          </div>         
        </TempContainer>
        <DataInfoContainer>
          <p><strong>Humidade:</strong> 60 %</p>
          <p><strong>Visibilidade:</strong> 10 Km</p>
          <p><strong>Nascer do sol:</strong> 5:35 am</p>
          <p><strong>Pôr do sol:</strong> 19:13 pm</p>
        </DataInfoContainer>
    </InfoCity>
  )
}

export { Info }