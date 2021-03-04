import React from 'react'
import { Link } from 'react-router-dom';

export const Elementos = ( { cont:{cont , type} } ) => {
        
        let res = null
        switch (type) {
            case 'parrafo':
                res = ( 
                        <p>{cont}</p>
                    )
                break;
            case "button":
                res = ( 
                    <Link to="/" className="btn btn-green" target="_blank"><i className="fas fa-download" /> { cont }</Link>
                 )
                break;
            default:
                break;
        }
    


        return res
    }