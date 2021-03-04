import React, { Fragment} from 'react'

export const SideBar = ({ datosDoc }) => {



    return (

        <div className="doc-sidebar col-md-3 col-12 order-0 d-none d-md-flex">
            <div id="doc-nav" className="doc-nav">
                <nav id="doc-menu" className="nav doc-menu flex-column sticky">
                    {
                        datosDoc.map(datoDoc => (
                            <Fragment>
                                <a className="nav-link scrollto"
                                    key={datoDoc.titulo.id + 1}
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
                            </Fragment>
                        ))
                    }
                </nav>
            </div>

        </div>

    )
}
