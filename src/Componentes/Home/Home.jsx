import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Footer } from '../ui/Footer/Footer'
import { Header } from '../ui/Header/Header'

export const Home = () => {

    return (
        <Fragment>
  <div>

  <div className="page-wrapper">


        <Header/>



    <section className="cards-section text-center">
      <div className="container">
        <h2 className="title">Getting started is easy!</h2>
        <div className="intro">
          <p>Welcome to prettyDocs. This landing page is an example of how you can use a card view to present segments of your documentation. You can customise the icon fonts based on your needs.</p>
          <div className="cta-container">
            <button className="btn btn-primary btn-cta" ><i className="fas fa-cloud-download-alt" /> Download Now</button>
          </div>
        </div>
        <div id="cards-wrapper" className="cards-wrapper row">
          <div className="item item-green col-lg-4 col-6">
            <div className="item-inner">
              <div className="icon-holder">
                <i className="icon fa fa-paper-plane" />
              </div>
              <h3 className="title">Quick Start</h3>
              <p className="intro">Demo example, consectetuer adipiscing elit</p>
              <Link className="link" to="/htmlDoc"><span /></Link>
            </div>
          </div>
          <div className="item item-pink item-2 col-lg-4 col-6">
            <div className="item-inner">
              <div className="icon-holder">
                <span aria-hidden="true" className="icon icon_puzzle_alt" />
              </div>
              <h3 className="title">Components</h3>
              <p className="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
              <a className="link" href="components.html"><span /></a>
            </div>
          </div>
          <div className="item item-blue col-lg-4 col-6">
            <div className="item-inner">
              <div className="icon-holder">
                <span aria-hidden="true" className="icon icon_datareport_alt" />
              </div>
              <h3 className="title">Charts</h3>
              <p className="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
              <a className="link" href="charts.html"><span /></a>
            </div>
          </div>
          <div className="item item-purple col-lg-4 col-6">
            <div className="item-inner">
              <div className="icon-holder">
                <span aria-hidden="true" className="icon icon_lifesaver" />
              </div>
              <h3 className="title">FAQs</h3>
              <p className="intro">Layout for FAQ page. Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
              <a className="link" href="faqs.html"><span /></a>
            </div>
          </div>
          <div className="item item-primary col-lg-4 col-6">
            <div className="item-inner">
              <div className="icon-holder">
                <span aria-hidden="true" className="icon icon_genius" />
              </div>
              <h3 className="title">Showcase</h3>
              <p className="intro">Layout for showcase page. Lorem ipsum dolor sit amet, consectetuer adipiscing elit </p>
              <a className="link" href="showcase.html"><span /></a>
            </div>
          </div>
          <div className="item item-orange col-lg-4 col-6">
            <div className="item-inner">
              <div className="icon-holder">
                <span aria-hidden="true" className="icon icon_gift" />
              </div>{/*//icon-holder*/}
              <h3 className="title">License &amp; Credits</h3>
              <p className="intro">Layout for license &amp; credits page. Consectetuer adipiscing elit.</p>
              <a className="link" href="license.html"><span /></a>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
<Footer/>
</div>

        
        </Fragment>
    )
}
