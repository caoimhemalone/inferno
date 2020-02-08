import React from 'react';

import LazyLoad from 'react-lazyload';

import one from './images/gallery/1.jpg';
import two from './images/gallery/2.jpg';
import three from './images/gallery/3.jpg';
import four from './images/gallery/4.jpg';
import five from './images/gallery/5.jpg';
import six from './images/gallery/6.jpg';
import seven from './images/gallery/7.jpg';
import eight from './images/gallery/8.jpg';
import nine from './images/gallery/9.jpg';
import ten from './images/gallery/10.jpg';
import eleven from './images/gallery/11.jpg';
import twelve from './images/gallery/12.jpg';
import thirteen from './images/gallery/13.jpg';
import fifteen from './images/gallery/15.jpg';


function Gallery() {
  return (
   <section className="gallery-section">
    <div className="container">
      <h2>Gallery</h2>
      <div className="row">
        <div className="col-md-4 photo-item">
          <LazyLoad>
            <img src={nine} alt="fitness class"/>
          </LazyLoad>
        </div>
        <div className="col-md-4 photo-item">
          <LazyLoad>
            <img src={ten} alt="fitness class"/>
          </LazyLoad>
        </div>

        <div className="col-md-4 photo-item">
          <LazyLoad>
            <img src={fifteen} alt="fitness class"/>
          </LazyLoad>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 photo-item">
          <LazyLoad>
            <img src={seven} alt="fitness class"/>
          </LazyLoad>
          <LazyLoad>
            <img src={thirteen} alt="fitness class"/>
          </LazyLoad>
        </div>
        <div className="col-md-6 photo-item">
          <LazyLoad>
            <img src={eleven} alt="fitness class"/>
          </LazyLoad>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4 photo-item">
          <LazyLoad>
            <img src={one} alt="fitness class"/>
          </LazyLoad>
        </div>
        <div className="col-md-4 photo-item">
          <LazyLoad>
             <img src={twelve} alt="fitness class"/>
           </LazyLoad>
        </div>

        <div className="col-md-4 photo-item">
          <LazyLoad>
             <img src={two} alt="fitness class"/>
           </LazyLoad>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 photo-item">
          <LazyLoad>
            <img src={five} alt="fitness class"/>
          </LazyLoad>
        </div>

        <div className="col-md-6 photo-item">
          <LazyLoad>
            <img src={three} alt="fitness class"/>
          </LazyLoad>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4 photo-item">
          <LazyLoad>
            <img src={four} alt="fitness class"/>
          </LazyLoad>
        </div>
        <div className="col-md-4 photo-item">
          <LazyLoad>
            <img src={six} alt="fitness class"/>
          </LazyLoad>
        </div>
        <div className="col-md-4 photo-item">
          <LazyLoad>
            <img src={eight} alt="fitness class"/>
          </LazyLoad>
        </div>
      </div>
    </div>
   </section>
  );
}

export default Gallery;
