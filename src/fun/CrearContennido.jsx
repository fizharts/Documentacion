import React from 'react'
import { Elementos } from '../Componentes/Html/Elemento/Elemento'

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
                        <div id="step1" className="section-block">
                        <h3 className="block-title">Step One</h3>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.
                        </p>
                        <div className="code-block">
                            <h6>Default code example:</h6>
                            <p><code>bower install &lt;package&gt;</code></p>
                            <p><code>npm install &lt;package&gt;</code></p>
                        </div>
                    </div>
                    ): null
                }
                
                
            </div>
        </section>
      
    )
}
