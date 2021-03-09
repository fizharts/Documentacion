import React from 'react'
import { Elementos } from '../Componentes/Html/Elemento/Elemento'
import { Subcontent } from '../Componentes/Html/Subcontent/Subcontent'

export const CrearContennido = ({contenido , titulo:{ id , nombre } , subContent}) => {


    return (
        <section id={id} className="doc-section">
            <h2 className="section-title">{ nombre }</h2>
            <div className="section-block">
                {
                    contenido.map((cont , i) => (
                        <Elementos key={ i } cont={cont} />
                        )
                    )
                }
                
                {
                    subContent !== undefined ? (
                        <Subcontent subContent={ subContent }/>
                    ): null
                }
                
                
            </div>
        </section>
      
    )
}
