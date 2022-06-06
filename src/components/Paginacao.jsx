import React from "react";

const Paginacao = (props) => {
  const {page, totalPages, onLeftClick, onRightClick} = props;
  return(
    <div className="paginacao-container">
          <button onClick={onLeftClick}><div></div></button>
          <div>{page} de {totalPages}</div>
          <button onClick={onRightClick}><div></div></button>
    </div>
  )
}


export default Paginacao;