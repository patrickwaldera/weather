import { ErrorContainer } from './styles'
import errorImage from '../../assets/errorImage.png'

const ErrorMessage = () => {
  return (
    <ErrorContainer>
        <img src={errorImage} alt="" width={150} height={'auto'} loading='lazy'/>
        <h2>Não foi possível encontrar este local!</h2>
    </ErrorContainer>
  )
}

export { ErrorMessage }
