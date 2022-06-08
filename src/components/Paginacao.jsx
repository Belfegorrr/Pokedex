import React from "react";
import './home.css'

const Paginacao = (props) => {
  const {onLeftClick, onRightClick} = props;
  return(
    <section className="paginacao-container">
          <button className="botaoprev" onClick={onLeftClick}>            
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="4" cy="4" r="4" fill="#212121"/>
              </svg>
           
          </button>
          <button className="botaoaba"><svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="4" cy="4" r="4" fill="#212121"/>
              </svg></button>
          <button className="botaonext" onClick={onRightClick}>
            
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="4" cy="4" r="4" fill="#212121"/>
              </svg>
            
          </button>
      </section>
  )
}


export default Paginacao;