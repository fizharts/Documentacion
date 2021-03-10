import React, { Fragment} from 'react'
import genkey from 'genkey'
export const SideBar = ({ datosDoc }) => {

    // let datosDocKey = genkey( datosDoc , 33 , true )
    console.log(
        datosDoc
        )

    return (

        <div className="doc-sidebar col-md-3 col-12 order-0 d-none d-md-flex">
            <div id="doc-nav" className="doc-nav">
                <nav id="doc-menu" className="nav doc-menu flex-column sticky">
                    {
                        
                        datosDoc.map(datoDoc => (
                            <div
                            key={ datoDoc.titulo.id }
                            >
                                <a className="nav-link scrollto"
                                    href={`#${datoDoc.titulo.id}`}>
                                    {datoDoc.titulo.nombre}</a>

                                {  datoDoc.titulo.subTitulo ? (
                                    <nav className="doc-sub-menu nav flex-column">
                                        {
                                            datoDoc.subContent.map(sub => (
                                                <a className="nav-link scrollto" href={`#${sub.id}`}>{sub.texto}</a>
                                            ))
                                        }
                                    </nav>
                                ) : null
                                }
                            </div>
                        ))
                    }
                </nav>
            </div>

        </div>

    )
}
