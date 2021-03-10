import React, { Fragment } from 'react'
import Prism from "prismjs"
import  '../../../css/prism.css'
export const SubContenido = ( { subContent } ) => {
    console.log( subContent )
    return (
        <Fragment>
            {
                subContent.map(item => {
                    return (
                        <div id={ item.id  } key={ item.id } className="code-block">
                            <h3 className="block-title">{ item.texto }</h3>
                            <pre><code className="language-css">/* ======= Base Styling ======= */{"\n"}body {"{"}{"\n"}{"    "}font-family: 'Open Sans', arial, sans-serif; {"\n"}{"    "}color: #333; {"\n"}{"    "}font-size: 16px; {"\n"}{"    "}-webkit-font-smoothing: antialiased; {"\n"}{"    "}-moz-osx-font-smoothing: grayscale; {"\n"}{"}"}</code></pre>



                            </div>
                    )
                })
            }
            
        </Fragment>
    )
}
