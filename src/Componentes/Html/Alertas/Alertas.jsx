import React from 'react'

export const Alertas = ( {cont , alertType , titulo , type } ) => {
    console.log(
        cont , alertType , titulo , type
    )
        let icono ;

    switch (alertType) {
        case 'callout-info':
            icono = 'fas fa-info-circle'
            break;
        case 'callout-warning':
            icono = 'fas fa-bug'
            break;
        case 'callout-success':
            icono = 'fas fa-thumbs-up'
            break;
        case 'callout-danger':
            icono = 'fas fa-exclamation-triangle'
            break;
    
        default:
            break;
    }


    console.log(icono)
    
    return (
        <div>
        <div className={ `callout-block ${alertType}` }>
        <div className="icon-holder">
            <i className={ `${icono}` } />
        </div>
        <div className="content">
            <h4 className="callout-title">{ titulo }</h4>
            <p>{ cont }</p>
        </div>
    </div>
        </div>
    )
}


