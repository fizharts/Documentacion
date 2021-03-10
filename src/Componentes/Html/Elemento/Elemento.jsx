import React from 'react'
import { Link } from 'react-router-dom';
import { Code } from '../../Code/Code';
import { Alertas } from '../Alertas/Alertas';
import { Boton } from '../Boton/Boton';

export const Elementos = ( { cont:{cont , type , titulo , alertType , typeButton , liga} } ) => {
    // btn-primary

        let res = null
        switch (type) {
            case 'parrafo':
                res = ( 
                        <p className="text-justify" >{cont}</p>
                    )
                break;
            case "button":
                res = ( 
                    <Boton cont={ cont } typeButton={ typeButton } type={ type } liga={liga}/> 
                 )
                break;
            case "language-markup" :
                res = (
                    <Code type = { type } cont={ cont }/>
                )
                break; 
            case "language-css" :
                res = (
                    <Code type = { type } cont={ cont }/>
                )
                break; 
            case "language-javascript" :
                res = (
                    <Code type = { type } cont={ cont }/>
                )
                break; 
            case "alerta" :
                res = (
                    <Alertas type = { type } cont={ cont } titulo = {  titulo  } alertType = { alertType } />
                )
                break;
            default:
                break;
        }
    


        return res
    }