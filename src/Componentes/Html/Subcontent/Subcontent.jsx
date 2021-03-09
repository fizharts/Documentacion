/* eslint-disable no-unused-vars */
import React, { Fragment } from 'react'
import { Elementos } from '../Elemento/Elemento'

export const Subcontent = ({ subContent }) => {

    console.log(subContent)
    return (

        <Fragment>
            {
                subContent !== undefined ? (
                    subContent.map((sub, i) => (
                        <section id={sub.id} key={i} className="doc-section">
                            <h3 className="block-title">{sub.texto}</h3>
                            <div className="section-block">
                                {
                                    sub.contenido.map(s => (
                                        <Elementos cont={s} />
                                    ))
                                }


                            </div>
                        </section>
                    ))
                ) : null
            }

        </Fragment>

    )
}
