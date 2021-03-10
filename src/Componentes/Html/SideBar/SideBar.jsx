import React, { Fragment} from 'react'
import genkey from 'genkey'
export const SideBar = ({ datosDoc }) => {

<<<<<<< HEAD
    // let datosDocKey = genkey( datosDoc , 33 , true )
    console.log(
        datosDoc
        )
=======
>>>>>>> 68530055f7dddad7fb9e91d965fdf7bfdfb54bb2

    return (

        <div className="doc-sidebar col-md-3 col-12 order-0 d-none d-md-flex">
            <div id="doc-nav" className="doc-nav">
                <nav id="doc-menu" className="nav doc-menu flex-column sticky">
                    {
<<<<<<< HEAD
                        
                        datosDoc.map(datoDoc => (
                            <div
                            key={ datoDoc.titulo.id }
                            >
                                <a className="nav-link scrollto"
=======
                        datosDoc.map((datoDoc , i) => (
                            <Fragment>
                                <a className="nav-link scrollto"
                                    key={ i+10 }
>>>>>>> 68530055f7dddad7fb9e91d965fdf7bfdfb54bb2
                                    href={`#${datoDoc.titulo.id}`}>
                                    {datoDoc.titulo.nombre}</a>

                                {  datoDoc.titulo.subTitulo ? (
                                    <nav className="doc-sub-menu nav flex-column">
                                        {
                                            datoDoc.subContent.map((sub , i) => (
                                                <a key={ i } 
                                                    className="nav-link scrollto" 
                                                    href={`#${sub.id}`}>
                                                    {sub.texto}
                                                </a>
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
