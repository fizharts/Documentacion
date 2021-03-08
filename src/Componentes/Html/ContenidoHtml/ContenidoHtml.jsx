import React from 'react'
import { Contenido } from '../Contenido/Contenido'
import { SideBar } from '../SideBar/SideBar'

export const ContenidoHtml = ({datosDoc}) => {
    return (
        <div className="doc-wrapper">
        <div className="container">
            <div id="doc-header" className="doc-header text-center">
                <h1 className="doc-title">Curso Html</h1>
                <div className="meta"><i className="far fa-clock" /> Last updated: Oct 12th, 2020</div>
            </div>

            <div className="doc-body row">
                <div className="doc-content col-md-9 col-12 order-1">
                    <Contenido datosDoc={datosDoc}/>
                </div>

                <SideBar  datosDoc={datosDoc}/>
            </div>
        </div>
    </div>
    )
}
