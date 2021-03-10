import React from 'react'
import { Elementos } from '../Componentes/Html/Elemento/Elemento'
<<<<<<< HEAD
import { SubContenido } from '../Componentes/Html/SubContenido/SubContenido'


=======
import { Subcontent } from '../Componentes/Html/Subcontent/Subcontent'
>>>>>>> 68530055f7dddad7fb9e91d965fdf7bfdfb54bb2

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
<<<<<<< HEAD
                    subContent.length !== 0 ? (
                        <SubContenido subContent={ subContent }/>
=======
                    subContent !== undefined ? (
                        <Subcontent subContent={ subContent }/>
>>>>>>> 68530055f7dddad7fb9e91d965fdf7bfdfb54bb2
                    ): null
                }
                
                
            </div>
        </section>
      
    )
}
