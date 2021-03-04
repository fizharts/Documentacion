import React from 'react'

export const Header = () => {
    return (
        <header className="header text-center">
        <div className="container">
          <div className="branding">
            <h1 className="logo">
              <span className="text-highlight">Documentación </span>
            </h1>
          </div>
          <div className="tagline">
            <p>Free Bootstrap 4 theme for your project documentation</p>
            <p>Designed with <i className="fas fa-heart" /> for developers</p>
          </div>
         {/*
             <div className="main-search-box pt-3 pb-4 d-inline-block">
            <form className="form-inline search-form justify-content-center" action method="get">
              <input type="text" placeholder="Enter search terms..." name="search" className="form-control search-input" />
              <button type="submit" className="btn search-btn" value="Search"><i className="fas fa-search" /></button>
            </form>
          </div>
        */}
          <div className="social-container">
            <div className="github-btn mb-2">
              <a className="github-button" href="https://github.com/xriley/PrettyDocs-Theme" data-size="large" aria-label="Star xriley/PrettyDocs-Theme on GitHub">Star</a>
              <a className="github-button" href="https://github.com/xriley" data-size="large" aria-label="Follow @xriley on GitHub">Follow @xriley</a>
            </div>
           
            <div className="twitter-tweet">
              <a href="https://twitter.com/3rdwave_themes?ref_src=twsrc%5Etfw" className="twitter-follow-button" data-show-count="false">Follow @3rdwave_themes</a>
            </div>
            <div className="fb-like" data-href="https://themes.3rdwavemedia.com/" data-width data-layout="button_count" data-action="like" data-size="small" data-share="true" />         
          </div>
        </div>
      </header>
  
    )
}
