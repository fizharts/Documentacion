import React, { Fragment, useEffect, useState } from 'react'
import { getDatos } from '../../../fun/funGet'
import { Footer } from '../../ui/Footer/Footer'
import { ContenidoHtml } from '../ContenidoHtml/ContenidoHtml'
import { HeaderHtml } from '../HeaderHtml/HeaderHtml'
import { Promo } from '../Promo/Promo'
export const ContainerHtml = () => {

    const [datosDoc, setDatosDoc] = useState([])
    useEffect(()=> {
        getDatos().then(res=> {
            setDatosDoc(res)
        })
    } ,[])

    return (
        <Fragment>
            <div className="page-wrapper">
                {/*Esta es la cabecera*/}
                <HeaderHtml />
                {/*Esta es el contenido*/}
                <ContenidoHtml  datosDoc={ datosDoc }/>
                {/* Promo de mas cursos */}
                <Promo/>
            </div>

            <Footer />

        </Fragment>
    )
}
