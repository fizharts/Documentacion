import React from 'react'
import { Elementos } from '../Componentes/Html/Elemento/Elemento'
import { SubContenido } from '../Componentes/Html/SubContenido/SubContenido'



export const CrearContennido = ({contenido , titulo , subContent}) => {


    return (
       
        <section id={titulo.id} className="doc-section">
            <h2 className="section-title">{ titulo.nombre }</h2>
            <div className="section-block">
                {
                    contenido.map(cont => {
                        return (<Elementos cont={cont} />)
                    })
                }
                
                {
                    subContent.length !== 0 ? (
                        <SubContenido subContent={ subContent }/>
                    ): null
                }
                
                
            </div>
        </section>
      
    )
}
