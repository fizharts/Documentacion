import React from 'react'
import { Link } from 'react-router-dom'

export const Boton = ({ cont , typeButton    }) => {
    return (
        <Link to="/" className={ `btn ${ typeButton }` } target="_blank"> { cont }</Link>
    )
}
