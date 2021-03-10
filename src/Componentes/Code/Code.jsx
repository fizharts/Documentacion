import React, { useEffect, useState } from 'react'
import Prism from "prismjs"
import "../../css/prism.css"
import { Link } from 'react-router-dom'

export const Code = ({type , cont }) => {
    const [copiado, setCopiado] = useState(false)
    useEffect(()=> {
        Prism.highlightAll()
        
    } ,[] )
    

    const copiarCodigo = async ( {target:{parentNode:{firstChild}}} ) => {

        await navigator.clipboard.writeText(firstChild.innerText)
        setCopiado( true )
        setTimeout(()=> {
            setCopiado( false )
        }, [2000])
    }


    
    return (
        <div className="Code">
        {
            copiado ? (
                <div className="callout-block callout-success">
                <div className="icon-holder">
                    <i className="fas fa-thumbs-up" />
                </div>
                <div className="content">
                    <p className="callout-title">Copiado al porta papeles</p>
                </div>
            </div>
            ):null
        }
            <pre>
                <code className={type}>{cont}</code>
            </pre>
            <button className="btn btn-info" onClick={ ( e ) => copiarCodigo( e ) }>Copiar</button>
            
        </div>
               
    )
}
