import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import './homepage.css'
  
const Landing = (props) => {


  return (
    // <div className='container landing-page'>
    //   <div className='overlay'>
    //     <img src='https://greenindustryplatform.org/sites/default/files/styles/large/public/learning-resources/image/sol-518339-unsplash.jpg?itok=B4GJAY6_' 
    //       alt='background'
    //        />
    //   </div>

    //   <h1>Home Order</h1>
    //   <div>
    //     <p className="row1 intro-text">
    //       Welcome to Home Order! To get help from local volunteers for any home projects just click post a job to get started!
    //     </p>
    //   </div>

    //   <Link to={ROUTES.SIGN_IN} className="nav-link">
    //     <button type="button" className="btn btn-primary btn-lg row1 intro-button">Post a job</button>
    //   </Link>
    
    
    // </div>
    <>
    {/* <!-- Navbar --> */}
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar">
      <div className="container">

        {/* <!-- Brand --> */}
        <a className="navbar-brand" href="https://mdbootstrap.com/material-design-for-bootstrap/" target="_blank">
          <strong>MDB</strong>
        </a>

        {/* <!-- Collapse --> */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* <!-- Links --> */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          {/* <!-- Left --> */}
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://mdbootstrap.com/material-design-for-bootstrap/" target="_blank">About MDB</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://mdbootstrap.com/getting-started/" target="_blank">Free download</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://mdbootstrap.com/bootstrap-tutorial/" target="_blank">Free tutorials</a>
            </li>
          </ul>

          {/* <!-- Right --> */}
          <ul className="navbar-nav nav-flex-icons">
            <li className="nav-item">
              <a href="https://www.facebook.com/mdbootstrap" className="nav-link" target="_blank">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li className="nav-item">
              <a href="https://twitter.com/MDBootstrap" className="nav-link" target="_blank">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="nav-item">
              <a href="https://github.com/mdbootstrap/bootstrap-material-design" className="nav-link border border-light rounded"
                target="_blank">
                <i className="fab fa-github mr-2"></i>MDB GitHub
              </a>
            </li>
          </ul>

        </div>

      </div>
    </nav>
    {/* <!-- Navbar --> */}
    <div id="carousel-example-1z" className="carousel slide carousel-fade" data-ride="carousel">

      {/* <!--Indicators--> */}
      <ol className="carousel-indicators">
        <li data-target="#carousel-example-1z" data-slide-to="0" className="active"></li>
        <li data-target="#carousel-example-1z" data-slide-to="1"></li>
        <li data-target="#carousel-example-1z" data-slide-to="2"></li>
      </ol>
      {/* <!--/.Indicators--> */}

      {/* <!--Slides--> */}
      <div className="carousel-inner" role="listbox">
        {/* <!--First slide--> */}
        <div className="carousel-item active">
          <div className="view" style={{backgroundImage: `url('https://mdbootstrap.com/img/Photos/Others/images/93.jpg')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>

            {/* <!-- Mask & flexbox options--> */}
            <div className="mask rgba-black-light d-flex justify-content-center align-items-center">

              {/* <!-- Content --> */}
              <div className="text-center white-text mx-5 wow fadeIn">
                <h1 className="mb-4">
                  <strong>Learn Bootstrap 4 with MDB</strong>
                </h1>

                <p>
                  <strong>Best & free guide of responsive web design</strong>
                </p>

                <p className="mb-4 d-none d-md-block">
                  <strong>The most comprehensive tutorial for the Bootstrap 4. Loved by over 500 000 users. Video and
                    written versions
                    available. Create your own, stunning website.</strong>
                </p>

                <a target="_blank" rel="noopener noreferrer" href="https://mdbootstrap.com/bootstrap-tutorial/" className="btn btn-outline-white btn-lg">Start
                  free tutorial
                  <i className="fas fa-graduation-cap ml-2"></i>
                </a>
              </div>
              {/* <!-- Content --> */}

            </div>
            {/* <!-- Mask & flexbox options--> */}

          </div>
        </div>
        {/* <!--/First slide--> */}

        {/* <!--Second slide--> */}
        <div className="carousel-item">
          <div className="view" style={{backgroundImage: `url('https://mdbootstrap.com/img/Photos/Others/images/94.jpg')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>

            {/* <!-- Mask & flexbox options--> */}
            <div className="mask rgba-black-light d-flex justify-content-center align-items-center">

              {/* <!-- Content --> */}
              <div className="text-center white-text mx-5 wow fadeIn">
                <h1 className="mb-4">
                  <strong>Learn Bootstrap 4 with MDB</strong>
                </h1>

                <p>
                  <strong>Best & free guide of responsive web design</strong>
                </p>

                <p className="mb-4 d-none d-md-block">
                  <strong>The most comprehensive tutorial for the Bootstrap 4. Loved by over 500 000 users. Video and
                    written versions
                    available. Create your own, stunning website.</strong>
                </p>

                <a target="_blank" rel="noopener noreferrer" href="https://mdbootstrap.com/bootstrap-tutorial/" className="btn btn-outline-white btn-lg">Start
                  free tutorial
                  <i className="fas fa-graduation-cap ml-2"></i>
                </a>
              </div>
              {/* <!-- Content --> */}

            </div>
            {/* <!-- Mask & flexbox options--> */}

          </div>
        </div>
        {/* <!--/Second slide--> */}

        {/* <!--Third slide--> */}
        <div className="carousel-item">
          <div className="view" style={{backgroundImage: `url('https://mdbootstrap.com/img/Photos/Others/images/92.jpg')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>

            {/* <!-- Mask & flexbox options--> */}
            <div className="mask rgba-black-light d-flex justify-content-center align-items-center">

              {/* <!-- Content --> */}
              <div className="text-center white-text mx-5 wow fadeIn">
                <h1 className="mb-4">
                  <strong>Learn Bootstrap 4 with MDB</strong>
                </h1>

                <p>
                  <strong>Best & free guide of responsive web design</strong>
                </p>

                <p className="mb-4 d-none d-md-block">
                  <strong>The most comprehensive tutorial for the Bootstrap 4. Loved by over 500 000 users. Video and
                    written versions
                    available. Create your own, stunning website.</strong>
                </p>

                <a target="_blank" rel="noopener noreferrer" href="https://mdbootstrap.com/bootstrap-tutorial/" className="btn btn-outline-white btn-lg">Start
                  free tutorial
                  <i className="fas fa-graduation-cap ml-2"></i>
                </a>
              </div>
              {/* <!-- Content --> */}

            </div>
            {/* <!-- Mask & flexbox options--> */}

          </div>
        </div>
        {/* <!--/Third slide--> */}

      </div>
      {/* <!--/.Slides--> */}

      {/* <!--Controls--> */}
      <a className="carousel-control-prev" href="#carousel-example-1z" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carousel-example-1z" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
      {/* <!--/.Controls--> */}

    </div>
    {/* <!--/.Carousel Wrapper--> */}

    {/* <!--Main layout--> */}
    <main>
      <div className="container">

        {/* <!--Section: Main info--> */}
        <section className="mt-5 wow fadeIn">

          {/* <!--Grid row--> */}
          <div className="row">

            {/* <!--Grid column--> */}
            <div className="col-md-6 mb-4">

              <img src="https://mdbootstrap.com/img/Marketing/mdb-press-pack/mdb-main.jpg" className="img-fluid z-depth-1-half"
                alt="" />

            </div>
            {/* <!--Grid column--> */}

            {/* <!--Grid column--> */}
            <div className="col-md-6 mb-4">

              {/* <!-- Main heading --> */}
              <h3 className="h3 mb-3">Material Design for Bootstrap</h3>
              <p>This template is created with Material Design for Bootstrap (
                <strong>MDB</strong> ) framework.</p>
              <p>Read details below to learn more about MDB.</p>
              {/* <!-- Main heading --> */}

              <hr />

              <p>
                <strong>400+</strong> material UI elements,
                <strong>600+</strong> material icons,
                <strong>74</strong> CSS animations, SASS files, templates, tutorials and many more.
                <strong>Free for personal and commercial use.</strong>
              </p>

              {/* <!-- CTA --> */}
              <a target="_blank" rel="noopener noreferrer" href="https://mdbootstrap.com/getting-started/" className="btn btn-indigo btn-md">Download
                <i className="fas fa-download ml-1"></i>
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://mdbootstrap.com/components/" className="btn btn-indigo btn-md">Live demo
                <i className="fas fa-image ml-1"></i>
              </a>

            </div>
            {/* <!--Grid column--> */}

          </div>
          {/* <!--Grid row--> */}

        </section>
        {/* <!--Section: Main info--> */}

        <hr className="my-5" />

        {/* <!--Section: Main features & Quick Start--> */}
        <section>

          <h3 className="h3 text-center mb-5">About MDB</h3>

          {/* <!--Grid row--> */}
          <div className="row wow fadeIn">

            {/* <!--Grid column--> */}
            <div className="col-lg-6 col-md-12 px-4">

              {/* <!--First row--> */}
              <div className="row">
                <div className="col-1 mr-3">
                  <i className="fas fa-code fa-2x indigo-text"></i>
                </div>
                <div className="col-10">
                  <h5 className="feature-title">Bootstrap 4</h5>
                  <p className="grey-text">Thanks to MDB you can take advantage of all feature of newest Bootstrap 4.</p>
                </div>
              </div>
              {/* <!--/First row--> */}

              <div style={{height: 30 + 'px'}}></div>

              {/* <!--Second row--> */}
              <div className="row">
                <div className="col-1 mr-3">
                  <i className="fas fa-book fa-2x blue-text"></i>
                </div>
                <div className="col-10">
                  <h5 className="feature-title">Detailed documentation</h5>
                  <p className="grey-text">We give you detailed user-friendly documentation at your disposal. It will help you
                    to implement your ideas
                    easily.
                  </p>
                </div>
              </div>
              {/* <!--/Second row--> */}

              <div style={{height: 30 + 'px'}}></div>

              {/* <!--Third row--> */}
              <div className="row">
                <div className="col-1 mr-3">
                  <i className="fas fa-graduation-cap fa-2x cyan-text"></i>
                </div>
                <div className="col-10">
                  <h5 className="feature-title">Lots of tutorials</h5>
                  <p className="grey-text">We care about the development of our users. We have prepared numerous tutorials,
                    which allow you to learn
                    how to use MDB as well as other technologies.</p>
                </div>
              </div>
              {/* <!--/Third row--> */}

            </div>
            {/* <!--/Grid column--> */}

            {/* <!--Grid column--> */}
            <div className="col-lg-6 col-md-12">

              <p className="h5 text-center mb-4">Watch our "5 min Quick Start" tutorial</p>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/cXTThxoywNQ" allowFullScreen></iframe>
              </div>
            </div>
            {/* <!--/Grid column--> */}

          </div>
          {/* <!--/Grid row--> */}

        </section>
        {/* <!--Section: Main features & Quick Start--> */}

        <hr className="my-5" />

        {/* <!--Section: Not enough--> */}
        <section>

          <h2 className="my-5 h3 text-center">Not enough?</h2>

          {/* <!--First row--> */}
          <div className="row features-small mb-5 mt-3 wow fadeIn">

            {/* <!--First column--> */}
            <div className="col-md-4">
              {/* <!--First row--> */}
              <div className="row">
                <div className="col-2">
                  <i className="fas fa-check-circle fa-2x indigo-text"></i>
                </div>
                <div className="col-10">
                  <h6 className="feature-title">Free for personal and commercial use</h6>
                  <p className="grey-text">Our license is user-friendly. Feel free to use MDB for both private as well as
                    commercial projects.
                  </p>
                  <div style={{height: 15 + 'px'}}></div>
                </div>
              </div>
              {/* <!--/First row--> */}

              {/* <!--Second row--> */}
              <div className="row">
                <div className="col-2">
                  <i className="fas fa-check-circle fa-2x indigo-text"></i>
                </div>
                <div className="col-10">
                  <h6 className="feature-title">400+ UI elements</h6>
                  <p className="grey-text">An impressive collection of flexible components allows you to develop any project.
                  </p>
                  <div style={{height: 15 + 'px'}}></div>
                </div>
              </div>
              {/* <!--/Second row--> */}

              {/* <!--Third row--> */}
              <div className="row">
                <div className="col-2">
                  <i className="fas fa-check-circle fa-2x indigo-text"></i>
                </div>
                <div className="col-10">
                  <h6 className="feature-title">600+ icons</h6>
                  <p className="grey-text">Hundreds of useful, scalable, vector icons at your disposal.</p>
                  <div style={{height: 15 + 'px'}}></div>
                </div>
              </div>
              {/* <!--/Third row--> */}

              {/* <!--Fourth row--> */}
              <div className="row">
                <div className="col-2">
                  <i className="fas fa-check-circle fa-2x indigo-text"></i>
                </div>
                <div className="col-10">
                  <h6 className="feature-title">Fully responsive</h6>
                  <p className="grey-text">It doesn't matter whether your project will be displayed on desktop, laptop, tablet
                    or mobile phone. MDB
                    looks great on each screen.</p>
                  <div style={{height: 15 + 'px'}}></div>
                </div>
              </div>
              {/* <!--/Fourth row--> */}
            </div>
            {/* <!--/First column--> */}

            {/* <!--Second column--> */}
            <div className="col-md-4 flex-center">
              <img src="https://mdbootstrap.com/img/Others/screens.png" alt="MDB Magazine Template displayed on iPhone"
                className="z-depth-0 img-fluid" />
            </div>
            {/* <!--/Second column--> */}

            {/* <!--Third column--> */}
            <div className="col-md-4 mt-2">
              {/* <!--First row--> */}
              <div className="row">
                <div className="col-2">
                  <i className="fas fa-check-circle fa-2x indigo-text"></i>
                </div>
                <div className="col-10">
                  <h6 className="feature-title">70+ CSS animations</h6>
                  <p className="grey-text">Neat and easy to use animations, which will increase the interactivity of your
                    project and delight your visitors.
                  </p>
                  <div style={{height: 15 + 'px'}}></div>
                </div>
              </div>
              {/* <!--/First row--> */}

              {/* <!--Second row--> */}
              <div className="row">
                <div className="col-2">
                  <i className="fas fa-check-circle fa-2x indigo-text"></i>
                </div>
                <div className="col-10">
                  <h6 className="feature-title">Plenty of useful templates</h6>
                  <p className="grey-text">Need inspiration? Use one of our predefined templates for free.</p>
                  <div style={{height: 15 + 'px'}}></div>
                </div>
              </div>
              {/* <!--/Second row--> */}

              {/* <!--Third row--> */}
              <div className="row">
                <div className="col-2">
                  <i className="fas fa-check-circle fa-2x indigo-text"></i>
                </div>
                <div className="col-10">
                  <h6 className="feature-title">Easy installation</h6>
                  <p className="grey-text">5 minutes, a few clicks and... done. You will be surprised at how easy it is.
                  </p>
                  <div style={{height: 15 + 'px'}}></div>
                </div>
              </div>
              {/* <!--/Third row--> */}

              {/* <!--Fourth row--> */}
              <div className="row">
                <div className="col-2">
                  <i className="fas fa-check-circle fa-2x indigo-text"></i>
                </div>
                <div className="col-10">
                  <h6 className="feature-title">Easy to use and customize</h6>
                  <p className="grey-text">Using MDB is straightforward and pleasant. Components flexibility allows you deep
                    customization. You will
                    easily adjust each component to suit your needs.</p>
                  <div style={{height: 15 + 'px'}}></div>
                </div>
              </div>
              {/* <!--/Fourth row--> */}
            </div>
            {/* <!--/Third column--> */}

          </div>
          {/* <!--/First row--> */}

        </section>
        {/* <!--Section: Not enough--> */}

        <hr className="mb-5" />

        {/* <!--Section: More--> */}
        <section>

          <h2 className="my-5 h3 text-center">...and even more</h2>

          {/* <!--First row--> */}
          <div className="row features-small mt-5 wow fadeIn">

            {/* <!--Grid column--> */}
            <div className="col-xl-3 col-lg-6">
              {/* <!--Grid row--> */}
              <div className="row">
                <div className="col-2">
                  <i className="fab fa-firefox fa-2x mb-1 indigo-text" aria-hidden="true"></i>
                </div>
                <div className="col-10 mb-2 pl-3">
                  <h5 className="feature-title font-bold mb-1">Cross-browser compatibility</h5>
                  <p className="grey-text mt-2">Chrome, Firefox, IE, Safari, Opera, Microsoft Edge - MDB loves all browsers;
                    all browsers love MDB.
                  </p>
                </div>
              </div>
              {/* <!--/Grid row--> */}
            </div>
            {/* <!--/Grid column--> */}

            {/* <!--Grid column--> */}
            <div className="col-xl-3 col-lg-6">
              {/* <!--Grid row--> */}
              <div className="row">
                <div className="col-2">
                  <i className="fas fa-level-up-alt fa-2x mb-1 indigo-text" aria-hidden="true"></i>
                </div>
                <div className="col-10 mb-2">
                  <h5 className="feature-title font-bold mb-1">Frequent updates</h5>
                  <p className="grey-text mt-2">MDB becomes better every month. We love the project and enhance as much as
                    possible.
                  </p>
                </div>
              </div>
              {/* <!--/Grid row--> */}
            </div>
            {/* <!--/Grid column--> */}

            {/* <!--Grid column--> */}
            <div className="col-xl-3 col-lg-6">
              {/* <!--Grid row--> */}
              <div className="row">
                <div className="col-2">
                  <i className="far fa-comments fa-2x mb-1 indigo-text" aria-hidden="true"></i>
                </div>
                <div className="col-10 mb-2">
                  <h5 className="feature-title font-bold mb-1">Active community</h5>
                  <p className="grey-text mt-2">Our society grows day by day. Visit our forum and check how it is to be a part
                    of our family.
                  </p>
                </div>
              </div>
              {/* <!--/Grid row--> */}
            </div>
            {/* <!--/Grid column--> */}

            {/* <!--Grid column--> */}
            <div className="col-xl-3 col-lg-6">
              {/* <!--Grid row--> */}
              <div className="row">
                <div className="col-2">
                  <i className="fas fa-code fa-2x mb-1 indigo-text" aria-hidden="true"></i>
                </div>
                <div className="col-10 mb-2">
                  <h5 className="feature-title font-bold mb-1">jQuery 3.x</h5>
                  <p className="grey-text mt-2">MDB is integrated with newest jQuery. Therefore you can use all the latest
                    features which come along with
                    it.
                  </p>
                </div>
              </div>
              {/* <!--/Grid row--> */}
            </div>
            {/* <!--/Grid column--> */}

          </div>
          {/* <!--/First row--> */}

          {/* <!--Second row--> */}
          <div className="row features-small mt-4 wow fadeIn">

            {/* <!--Grid column--> */}
            <div className="col-xl-3 col-lg-6">
              {/* <!--Grid row--> */}
              <div className="row">
                <div className="col-2">
                  <i className="fas fa-cubes fa-2x mb-1 indigo-text" aria-hidden="true"></i>
                </div>
                <div className="col-10 mb-2">
                  <h5 className="feature-title font-bold mb-1">Modularity</h5>
                  <p className="grey-text mt-2">Material Design for Bootstrap comes with both, compiled, ready to use libraries
                    including all features as
                    well as modules for CSS (SASS files) and JS.</p>
                </div>
              </div>
              {/* <!--/Grid row--> */}
            </div>
            {/* <!--/Grid column--> */}

            {/* <!--Grid column--> */}
            <div className="col-xl-3 col-lg-6">
              {/* <!--Grid row--> */}
              <div className="row">
                <div className="col-2">
                  <i className="fas fa-question fa-2x mb-1 indigo-text" aria-hidden="true"></i>
                </div>
                <div className="col-10 mb-2">
                  <h5 className="feature-title font-bold mb-1">Technical support</h5>
                  <p className="grey-text mt-2">We care about reliability. If you have any questions - do not hesitate to
                    contact us.
                  </p>
                </div>
              </div>
              {/* <!--/Grid row--> */}
            </div>
            {/* <!--/Grid column--> */}

            {/* <!--Grid column--> */}
            <div className="col-xl-3 col-lg-6">
              {/* <!--Grid row--> */}
              <div className="row">
                <div className="col-2">
                  <i className="fas fa-th fa-2x mb-1 indigo-text" aria-hidden="true"></i>
                </div>
                <div className="col-10 mb-2">
                  <h5 className="feature-title font-bold mb-1">Flexbox</h5>
                  <p className="grey-text mt-2">MDB fully supports Flex Box. You can forget about alignment issues.</p>
                </div>
              </div>
              {/* <!--/Grid row--> */}
            </div>
            {/* <!--/Grid column--> */}

            {/* <!--Grid column--> */}
            <div className="col-xl-3 col-lg-6">
              {/* <!--Grid row--> */}
              <div className="row">
                <div className="col-2">
                  <i className="far fa-file-code fa-2x mb-1 indigo-text" aria-hidden="true"></i>
                </div>
                <div className="col-10 mb-2">
                  <h5 className="feature-title font-bold mb-1">SASS files</h5>
                  <p className="grey-text mt-2">Arranged and well documented .scss files can't wait until you compile them.</p>
                </div>
              </div>
              {/* <!--/Grid row--> */}
            </div>
            {/* <!--/Grid column--> */}

          </div>
          {/* <!--/Second row--> */}

        </section>
        {/* <!--Section: More--> */}

      </div>
    </main>
    </>
    /* <!--Main layout--> */

    /* <!--Footer--> */
  );
};
 
export default Landing;