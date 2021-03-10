import React, { Fragment, useEffect, useState } from 'react'
import { getDatos } from '../../../fun/funGet'
import { Footer } from '../../ui/Footer/Footer'
import { ContenidoHtml } from '../ContenidoHtml/ContenidoHtml'
import { HeaderHtml } from '../HeaderHtml/HeaderHtml'
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

                <HeaderHtml />

                <ContenidoHtml  datosDoc={ datosDoc }/>

                <div id="promo-block" className="promo-block">
                    <div className="container">
                        <div className="promo-block-inner">
                            <h3 className="promo-title text-center"><i className="fas fa-heart" /> 
                            Are you an ambitious and entrepreneurial developer?</h3>
                            <div className="row">
                                <div className="figure-holder col-lg-5 col-md-6 col-12">
                                    <div className="figure-holder-inner">
                                        <a href="https://themes.3rdwavemedia.com/bootstrap-templates/portfolio/instance-bootstrap-portfolio-theme-for-developers/" target="_blank"><img className="img-fluid" src="assets/images/demo/instance-promo.jpg" alt="Instance Theme" /></a>
                                        <a className="mask" href="https://themes.3rdwavemedia.com/bootstrap-templates/portfolio/instance-bootstrap-portfolio-theme-for-developers/"><i className="icon fa fa-heart pink" /></a>
                                    </div>
                                </div>{/*//figure-holder*/}
                                <div className="content-holder col-lg-7 col-md-6 col-12">
                                    <div className="content-holder-inner">
                                        <div className="desc">
                                            <h4 className="content-title"><strong> Instance - Bootstrap 4 Portfolio Theme for Aspiring Developers</strong></h4>
                                            <p>Check out <a href="https://themes.3rdwavemedia.com/bootstrap-templates/portfolio/instance-bootstrap-portfolio-theme-for-developers/" target="_blank">Instance</a> - a Bootstrap personal portfolio theme I created for developers. The UX design is focused on selling a developer’s skills and experience to potential employers or clients, and has <strong className="highlight">all the winning ingredients to get you hired</strong>. It’s not only a HTML site template but also a marketing framework for you to <strong className="highlight">build an impressive online presence with a high conversion rate</strong>. </p>
                                            <p><strong className="highlight">[Tip for developers]:</strong> If your project is Open Source, you can use this area to promote your other projects or hold third party adverts like Bootstrap and FontAwesome do!</p>
                                            <a className="btn btn-cta" href="https://themes.3rdwavemedia.com/bootstrap-templates/portfolio/instance-bootstrap-portfolio-theme-for-developers/" target="_blank"><i className="fas fa-external-link-alt" /> View Demo</a>
                                        </div>{/*//desc*/}
                                        <div className="author"><a href="https://themes.3rdwavemedia.com">Xiaoying Riley</a></div>
                                    </div>{/*//content-holder-inner*/}
                                </div>{/*//content-holder*/}
                            </div>{/*//row*/}
                        </div>{/*//promo-block-inner*/}
                    </div>{/*//container*/}
                </div>{/*//promo-block*/}
            </div>{/*//page-wrapper*/}

            <Footer />

        </Fragment>
    )
}
