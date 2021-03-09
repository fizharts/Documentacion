import React from 'react'
import { CrearContennido } from '../../../fun/CrearContennido'
import { Link } from 'react-router-dom'
import { Code } from '../../Code/Code'

export const Contenido = ({ datosDoc }) => {


    
    return (
        <div className="content-inner">
        
            {
                datosDoc !== undefined ? (
                    
                    datosDoc.map( (datoDoc , i) => (
                        datoDoc.contenido !== undefined ?(
                        <CrearContennido 
                            key={ i }
                            contenido={ datoDoc.contenido } 
                            titulo={ datoDoc.titulo } 
                            subContent={ datoDoc.subContent } 
                            />):null
                    )
        
                        ) 
                ):null
            }

    </div>
    )
}
