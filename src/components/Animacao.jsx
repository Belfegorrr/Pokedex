export default function ImageLoad(){
  return(
      <div className="box">
          <div className="spinner">
            <img src="../../images/animacao1.svg" alt="Loading1" />
          </div>
          <div className="elementcarregar">
            <img src="./images/carregando.svg" alt="Carregando..." />
          </div>
      </div>
  )
}