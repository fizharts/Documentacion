import React from 'react'
import { Link } from 'react-router-dom'

export const Promo = () => {
    return (
        <div id="promo-block" className="promo-block">
        <div className="container">
            <div className="promo-block-inner">
                <h3 className="promo-title text-center"><i className="fas fa-heart" /> 
                <Link  to="/">Are you an ambitious and entrepreneurial developer?</Link></h3>
                <div className="row">
                    <div className="figure-holder col-lg-5 col-md-6 col-12">
                        <div className="figure-holder-inner">
                            <Link  to="/"><img className="img-fluid" src="assets/images/demo/instance-promo.jpg" alt="Instance Theme" /></Link>
                            <Link  className="mask" to="/"><i className="icon fa fa-heart pink" /></Link>
                        </div>
                    </div>
                    <div className="content-holder col-lg-7 col-md-6 col-12">
                        <div className="content-holder-inner">
                            <div className="desc">
                                <h4 className="content-title"><strong> Instance - Bootstrap 4 Portfolio Theme for Aspiring Developers</strong></h4>
                                <p>Check out <Link  to="/">Instance</Link> - a Bootstrap personal portfolio theme I created for developers. The UX design is focused on selling a developer’s skills and experience to potential employers or clients, and has <strong className="highlight">all the winning ingredients to get you hired</strong>. It’s not only a HTML site template but also a marketing framework for you to <strong className="highlight">build an impressive online presence with a high conversion rate</strong>. </p>
                                <p><strong className="highlight">[Tip for developers]:</strong> If your project is Open Source, you can use this area to promote your other projects or hold third party adverts like Bootstrap and FontAwesome do!</p>
                                <Link  className="btn btn-cta" 
                                    to="/"
                                ><i className="fas fa-external-link-alt" /> View Demo</Link>
                            </div>
                            <div className="author"><Link  to="/">Xiaoying Riley</Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
