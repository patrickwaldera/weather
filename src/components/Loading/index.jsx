import { LoadingContainer } from './styles'

const Loading = () => {
  return (
    <LoadingContainer>
        <span className="loader"></span>
        <h2>Buscando informações...</h2>
    </LoadingContainer>
  )
}

export { Loading }
