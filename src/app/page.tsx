'use client';

import React, { useEffect } from 'react';
import $ from 'jquery';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Home() {
  useEffect(() => {
    var windowOn = $(window);
    ///////////////////////////////////////////////////
    // 01. PreLoader Js
    windowOn.on('load', function () {
      $('#loading').fadeOut(500);
    });

    ///////////////////////////////////////////////////
    // 02. SubMenu Dropdown Toggle
    if ($('.tp-main-menu nav > ul > li.has-dropdown > a').length) {
      $('.tp-main-menu nav > ul > li.has-dropdown > a').append(
        '<i class="fal fa-angle-down"></i>',
      );
    }

    ///////////////////////////////////////////////////
    // 06. PreLoader Js
    windowOn.on('load', function () {
      $('#loading').fadeOut(500);
    });

    ///////////////////////////////////////////////////
    // 07. Sticky Header Js
    windowOn.on('scroll', function () {
      var scroll = windowOn.scrollTop();
      if (scroll && scroll < 300) {
        $('#header-sticky,#header-sticky-mobile').removeClass('header-sticky');
      } else {
        $('#header-sticky,#header-sticky-mobile').addClass('header-sticky');
      }
    });

    ////////////////////////////////////////////////////
    // 08. Mobile Menu Js
    // $('#mobile-menu').meanmenu({
    //   meanMenuContainer: '.mobile-menu',
    //   meanScreenWidth: '991',
    //   meanExpand: ['<i class="fal fa-plus"></i>'],
    // });

    ////////////////////////////////////////////////////
    // 08. Mobile Menu Js
    // $('#mobile-menu-2').meanmenu({
    //   meanMenuContainer: '.mobile-menu-2',
    //   meanScreenWidth: '1199',
    //   meanExpand: ['<i class="fal fa-plus"></i>'],
    // });

    ////////////////////////////////////////////////////
    // 09. Sidebar Js
    $('.tp-menu-bar').on('click', function () {
      $('.tpoffcanvas').addClass('opened');
      $('.body-overlay').addClass('apply');
    });
    $('.close-btn').on('click', function () {
      $('.tpoffcanvas').removeClass('opened');
      $('.body-overlay').removeClass('apply');
    });
    $('.body-overlay').on('click', function () {
      $('.tpoffcanvas').removeClass('opened');
      $('.body-overlay').removeClass('apply');
    });

    ////////////////////////////////////////////////////
    // 11. Data CSS Js
    $('[data-background').each(function () {
      $(this).css(
        'background-image',
        'url( ' + $(this).attr('data-background') + '  )',
      );
    });
  });

  return (
    <>
      <header className="d-none d-lg-block">
        <div
          id="header-sticky"
          className="tp-header-area header-transparent hasdropdown-white pl-170 pr-170"
        >
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xxl-3 col-xl-3 col-lg-3">
                <div className="tp-logo text-start">
                  <a href="#">
                    <img src={'/images/logo.png'} alt="OuiCanLogo" />
                  </a>
                </div>
              </div>
              <div className="col-xxl-9 col-xl-9 col-lg-9 tp-menu-white">
                <div className="tp-main-menu">
                  <nav id="mobile-menu">
                    <ul>
                      <li>
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="#about">About</a>
                      </li>
                      <li>
                        <a href="#services">Services</a>
                      </li>
                      <li>
                        <a href="#portfolio">Portfolio</a>
                      </li>
                      <li>
                        <a href="#testimonials">Testimonials</a>
                      </li>
                      <li>
                        <a href="#contact">Contact</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div
        id="header-sticky-mobile"
        className="tp-md-header-area header-transparent  tp-green-bg d-md-block d-lg-none pt-30 pb-30"
      >
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-6 col-6">
              <div className="tp-logo">
                <a href="#">
                  <img src="images/logo.png" />
                </a>
              </div>
            </div>
            <div className="col-md-6 col-6">
              <div className="tp-header-right tp-shadow-transparent z-index-1 d-flex align-items-center justify-content-end">
                <button className="tp-menu-bar">
                  <i className="fal fa-bars"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tp-offcanvas-area">
        <div className="tpoffcanvas">
          <div className="tpoffcanvas__logo">
            <a href="#">
              <img src="images/logo.png" />
            </a>
          </div>
          <div className="tpoffcanvas__close-btn">
            <a className="close-btn" href="javascript:void(0)">
              <i className="fal fa-times-hexagon"></i>
            </a>
          </div>
          <div className="tpoffcanvas__content d-none d-sm-block">
            <p>We deploy world-class solutions.</p>
          </div>
          <div className="mobile-menu"></div>
          <div className="tpoffcanvas__contact">
            <span>Contact us</span>
            <ul>
              <li>
                <i className="fas fa-star"></i>{' '}
                <a href="https://goo.gl/maps/" target="_blank">
                  Address line 1
                </a>
              </li>
              <li>
                <i className="fas fa-star"></i>{' '}
                <a href="tel:8180012345678">+1 234 567 890</a>
              </li>
              <li>
                <i className="fas fa-star"></i>{' '}
                <a href="mailto:mail@gmail.com">mail@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="body-overlay"></div>

      <main>
        <div className="tp-hero-area-two theme-bg pt-130 p-relative fix">
          <div className="tp-hero-shape-three ">
            <img src="images/hero-shape-3.png" />
          </div>
          <div className="tp-hero-circle-three"></div>
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-7 col-md-12">
                <div className="tp-hero-section-box pt-140 pb-200">
                  <h3
                    className="ct-hero-title wow tpfadeUp"
                    data-wow-duration=".3s"
                    data-wow-delay=".6s"
                  >
                    OuiCan helps your teams move work{' '}
                    <span className="tp-highlight">
                      <svg
                        width="266"
                        height="12"
                        viewBox="0 0 266 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 0L266 12H0V0Z" fill="#40c8f4" />
                      </svg>
                      <i>forward.</i>
                    </span>
                  </h3>
                  <p
                    className="wow tpfadeUp"
                    data-wow-duration=".5s"
                    data-wow-delay=".8s"
                  >
                    At ouican we specialize in designing, building, shipping and
                    scaling beautiful, usable products with blazing-fast
                    efficiency
                  </p>
                  <div
                    className="tp-hero-three-button-box d-flex align-items-center wow tpfadeUp"
                    data-wow-duration=".7s"
                    data-wow-delay="1s"
                  >
                    <div className="xs-bottom-space">
                      <a
                        className="tp-btn-yellow-semilar mr-55"
                        href="#services"
                      >
                        How it Works
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-5 col-md-12">
                <div
                  className="tp-hero-right-img wow tpfadeRight"
                  data-wow-duration=".9s"
                  data-wow-delay="1.2s"
                >
                  <img src="images/hero-4.png" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="about" className="corporate-about__area pt-120 corporate-plr">
          <div className="container">
            <div className="row align-items-center">
              <div
                className="col-xl-6 wow tpfadeLeft"
                data-wow-duration=".9s"
                data-wow-delay=".5s"
              >
                <div className="corporate-about__left-wrapper text-center text-xl-start p-relative">
                  <div className="corporate-about__main-img">
                    <img src="images/about-shape-7-2.png" />
                  </div>
                </div>
              </div>
              <div
                className="col-xl-6 wow tpfadeRight"
                data-wow-duration=".9s"
                data-wow-delay=".7s"
              >
                <div className="corporate-about__section-box">
                  <h4 className="tp-subtitle pink-circle">About Company</h4>
                  <h3 className="tp-title">More than 10 years experience</h3>
                </div>
                <div className="corporate-about__content">
                  <p>
                    At OuiCan we specialize in designing, building, shipping and
                    scaling beautiful, usable products with blazing-fast
                    efficiency At OuiCan we specialize in designing, building,
                    shipping and scaling beautiful, usable products with
                    blazing-fast efficiency
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tp-service-area pb-90 pt-90 grey-bg" id="services">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-10">
                <div className="tp-service-section-box text-center pb-60">
                  <h5 className="tp-subtitle pb-10">Our Services</h5>
                  <h2 className="tp-title-sm">
                    Managing you business with our best services
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow tpfadeUp"
                data-wow-duration=".3s"
                data-wow-delay=".5s"
              >
                <div className="tp-sv-border-effect">
                  <div className="tp-service-item-four sv-color-1 mb-30">
                    <div className="tp-service-item-four__img  mb-40">
                      <img src="images/007-email.png" />
                    </div>
                    <div className="tp-service-item-four__title">
                      <h3 className="tp-sv-sm-title">Product Management</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow tpfadeUp"
                data-wow-duration=".5s"
                data-wow-delay=".7s"
              >
                <div className="tp-sv-border-effect sv-border-effect-1">
                  <div className="tp-service-item-four sv-color-2 mb-30">
                    <div className="tp-service-item-four__img  mb-40">
                      <img src="images/service4.1.png" />
                    </div>
                    <div className="tp-service-item-four__title">
                      <h3 className="tp-sv-sm-title">
                        Web & Mobile Development
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6  wow tpfadeUp"
                data-wow-duration=".7s"
                data-wow-delay=".9s"
              >
                <div className="tp-sv-border-effect sv-border-effect-2">
                  <div className="tp-service-item-four sv-color-3 mb-30">
                    <div className="tp-service-item-four__img mb-40">
                      <img src="images/service4.2.png" />
                    </div>
                    <div className="tp-service-item-four__title">
                      <h3 className="tp-sv-sm-title">Fast Customer Support</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6  wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay="1s"
              >
                <div className="tp-sv-border-effect sv-border-effect-3">
                  <div className="tp-service-item-four sv-color-4 mb-30">
                    <div className="tp-service-item-four__img mb-40">
                      <img src="images/service4.3.png" />
                    </div>
                    <div className="tp-service-item-four__title">
                      <h3 className="tp-sv-sm-title">
                        Human <br /> Resources
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6  wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay="1.1s"
              >
                <div className="tp-sv-border-effect sv-border-effect-4">
                  <div className="tp-service-item-four sv-color-5 mb-30">
                    <div className="tp-service-item-four__img mb-40">
                      <img src="images/service4.4.png" />
                    </div>
                    <div className="tp-service-item-four__title">
                      <h3 className="tp-sv-sm-title">Design and Creatives</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6  wow tpfadeUp"
                data-wow-duration="1s"
                data-wow-delay="1.1s"
              >
                <div className="tp-sv-border-effect sv-border-effect-5">
                  <div className="tp-service-item-four sv-color-6 mb-30">
                    <div className="tp-service-item-four__img mb-40">
                      <img src="images/service4.5.png" />
                    </div>
                    <div className="tp-service-item-four__title">
                      <h3 className="tp-sv-sm-title">
                        Marketing and Communication
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6  wow tpfadeUp"
                data-wow-duration="1s"
                data-wow-delay="1.2s"
              >
                <div className="tp-sv-border-effect sv-border-effect-6">
                  <div className="tp-service-item-four sv-color-7 mb-30">
                    <div className="tp-service-item-four__img mb-40">
                      <img src="images/service4.6.png" />
                    </div>
                    <div className="tp-service-item-four__title">
                      <h3 className="tp-sv-sm-title">Business Development</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6  wow tpfadeUp"
                data-wow-duration="1.1s"
                data-wow-delay="1.3s"
              >
                <div className="sv-color-eight  mb-30">
                  <div className="sv-color-eight__title text-center">
                    <h3 className="tp-sv-sm-title">And Much More!</h3>
                    <i className="fal fa-plus"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="tp-project-area tp-cc-project pt-130 pb-100"
          id="portfolio"
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-10">
                <div className="tp-service-section-box text-center pb-60">
                  <h5 className="tp-subtitle pb-10">Our Portfolio</h5>
                  <h2 className="tp-title-sm">More than 20 awesome clients</h2>
                </div>
              </div>
            </div>

            <div className="row grid">
              <div className="col-xl-8 col-lg-8 col-md-12 grid-item  cat2 cat5 cat4">
                <div
                  className="tp-project-item-four tp-img-reveal-item mb-30"
                  data-subtitle="Design"
                  data-title="3d Digital Art"
                  data-fx="1"
                >
                  <div className="tp-project-item-four__img fix">
                    <a href="#">
                      <img className="w-100" src="images/project-4.1.jpg" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 grid-item  cat3 cat5">
                <div
                  className="tp-project-item-four tp-img-reveal-item mb-30"
                  data-subtitle="Design"
                  data-title="Graphic Design"
                  data-fx="1"
                >
                  <div className="tp-project-item-four__img fix">
                    <a href="#">
                      <img className="w-100" src="images/project-4.2.jpg" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 grid-item cat2 cat4">
                <div
                  className="tp-project-item-four tp-img-reveal-item mb-30"
                  data-subtitle="Design"
                  data-title="Web Design"
                  data-fx="1"
                >
                  <div className="tp-project-item-four__img fix">
                    <a href="#">
                      <img className="w-100" src="images/project-4.3.jpg" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 grid-item cat2 cat5 cat4">
                <div
                  className="tp-project-item-four tp-img-reveal-item mb-30"
                  data-subtitle="Design"
                  data-title="Mobile App Design"
                  data-fx="1"
                >
                  <div className="tp-project-item-four__img fix">
                    <a href="#">
                      <img className="w-100" src="images/project-4.4.jpg" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 grid-item cat5 cat4">
                <div
                  className="tp-project-item-four tp-img-reveal-item mb-30"
                  data-subtitle="Design"
                  data-title="Fashion Design"
                  data-fx="1"
                >
                  <div className="tp-project-item-four__img fix">
                    <a href="#">
                      <img className="w-100" src="images/project-4.5.jpg" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 grid-item cat5 cat4">
                <div
                  className="tp-project-item-four tp-img-reveal-item mb-30"
                  data-subtitle="Design"
                  data-title="Architec Design"
                  data-fx="1"
                >
                  <div className="tp-project-item-four__img fix">
                    <a href="#">
                      <img className="w-100" src="images/project-4.5.jpg" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tp-country-area pt-125 fix" id="customers">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-12">
                <div className="tp-country-sectiontitle-box text-center">
                  <h5 className="tp-subtitle">World Wide Customer</h5>
                  <h2 className="tp-title">
                    We are in over 18+
                    <span className="tp-section-highlight">
                      countries
                      <svg
                        width="205"
                        height="11"
                        viewBox="0 0 205 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 0L205 11H0V0Z" fill="#40c8f4" />
                      </svg>
                    </span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="tp-country-img text-center">
                  <img src="images/country.png" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="tp-testimonial-area grey-bg pt-125 pb-120 fix"
          id="testimonials"
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-12">
                <div className="tp-testimonial-title-box text-center pb-25">
                  <h5 className="tp-subtitle">Testimonial</h5>
                  <h2 className="tp-title">
                    Customer
                    <span className="tp-section-highlight">
                      &nbsp;feedback
                      <svg
                        width="253"
                        height="11"
                        viewBox="0 0 253 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 0L253 11H0V0Z" fill="#40c8f4" />
                      </svg>
                    </span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="tp-testimonial-slider-section-four">
              <Swiper
                spaceBetween={70}
                slidesPerView={3}
                loop
                centeredSlides
                style={{ marginLeft: '-320px', marginRight: '-320px' }}
              >
                <SwiperSlide>
                  {({ isActive }) => (
                    <div className={`${!isActive && 'testi-slider-opacity'}`}>
                      <div className="tp-testimonial-box">
                        <div className="tp-testimonial-box__rating">
                          <span>
                            <i className="fas fa-star"></i>
                          </span>
                          <span>
                            <i className="fas fa-star"></i>
                          </span>
                          <span>
                            <i className="fas fa-star"></i>
                          </span>
                          <span>
                            <i className="fas fa-star"></i>
                          </span>
                          <span>
                            <i className="fas fa-star"></i>
                          </span>
                          <p>
                            Wow. What a great experience with this copywriter.
                            Muhammad Noman is a very talented copywriter.
                            yesterday I got his first Email that was amazing...
                          </p>
                        </div>
                        <div className="tp-testimonial-box__info d-flex justify-content-between align-items-center">
                          <div className="tp-testimonial-box__testi-slide-img d-flex align-items-center">
                            <img
                              className="mr-25"
                              src="images/testi-slide-1.png"
                            />
                            <div className="tp-testimonial-box__testi-title">
                              <span className="testi-heading">Floyd Miles</span>
                              <span>CEO of (Amazon)</span>
                            </div>
                          </div>
                          <div className="tp-testimonial-box__testi-brand d-none d-md-block">
                            <img src="images/testi-brands.png" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </SwiperSlide>
                <SwiperSlide>
                  {({ isActive }) => (
                    <div className={`${!isActive && 'testi-slider-opacity'}`}>
                      <div className="tp-testimonial-box">
                        <div className="tp-testimonial-box__rating">
                          <span>
                            <i className="fas fa-star"></i>
                          </span>
                          <span>
                            <i className="fas fa-star"></i>
                          </span>
                          <span>
                            <i className="fas fa-star"></i>
                          </span>
                          <span>
                            <i className="fas fa-star"></i>
                          </span>
                          <span>
                            <i className="fas fa-star"></i>
                          </span>
                          <p>
                            Wow. What a great experience with this copywriter.
                            Muhammad Noman is a very talented copywriter.
                            yesterday I got his first Email that was amazing...
                          </p>
                        </div>
                        <div className="tp-testimonial-box__info d-flex justify-content-between align-items-center">
                          <div className="tp-testimonial-box__testi-slide-img d-flex align-items-center">
                            <img
                              className="mr-25"
                              src="images/testi-slide-2.png"
                            />
                            <div className="tp-testimonial-box__testi-title">
                              <span className="testi-heading">Floyd Miles</span>
                              <span>CEO of (Amazon)</span>
                            </div>
                          </div>
                          <div className="tp-testimonial-box__testi-brand d-none d-md-block">
                            <img src="images/testi-brands-2.png" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </SwiperSlide>
                <SwiperSlide>
                  {({ isActive }) => (
                    <div className={`${!isActive && 'testi-slider-opacity'}`}>
                      <div className="tp-testimonial-box">
                        <div className="tp-testimonial-box__rating">
                          <span>
                            <i className="fas fa-star"></i>
                          </span>
                          <span>
                            <i className="fas fa-star"></i>
                          </span>
                          <span>
                            <i className="fas fa-star"></i>
                          </span>
                          <span>
                            <i className="fas fa-star"></i>
                          </span>
                          <span>
                            <i className="fas fa-star"></i>
                          </span>
                          <p>
                            Wow. What a great experience with this copywriter.
                            Muhammad Noman is a very talented copywriter.
                            yesterday I got his first Email that was amazing...
                          </p>
                        </div>
                        <div className="tp-testimonial-box__info d-flex justify-content-between align-items-center">
                          <div className="tp-testimonial-box__testi-slide-img d-flex align-items-center">
                            <img
                              className="mr-25"
                              src="images/testi-slide-1.png"
                            />
                            <div className="tp-testimonial-box__testi-title">
                              <span className="testi-heading">Floyd Miles</span>
                              <span>CEO of (Amazon)</span>
                            </div>
                          </div>
                          <div className="tp-testimonial-box__testi-brand d-none d-md-block">
                            <img src="images/testi-brands-2.png" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </SwiperSlide>
                <SwiperSlide>
                  {({ isActive }) => (
                    <div className={`${!isActive && 'testi-slider-opacity'}`}>
                      <div className="tp-testimonial-box">
                        <div className="tp-testimonial-box__rating">
                          <span>
                            <i className="fas fa-star"></i>
                          </span>
                          <span>
                            <i className="fas fa-star"></i>
                          </span>
                          <span>
                            <i className="fas fa-star"></i>
                          </span>
                          <span>
                            <i className="fas fa-star"></i>
                          </span>
                          <span>
                            <i className="fas fa-star"></i>
                          </span>
                          <p>
                            Wow. What a great experience with this copywriter.
                            Muhammad Noman is a very talented copywriter.
                            yesterday I got his first Email that was amazing...
                          </p>
                        </div>
                        <div className="tp-testimonial-box__info d-flex justify-content-between align-items-center">
                          <div className="tp-testimonial-box__testi-slide-img d-flex align-items-center">
                            <img
                              className="mr-25"
                              src="images/testi-slide-1.png"
                            />
                            <div className="tp-testimonial-box__testi-title">
                              <span className="testi-heading">Floyd Miles</span>
                              <span>CEO of (Amazon)</span>
                            </div>
                          </div>
                          <div className="tp-testimonial-box__testi-brand d-none d-md-block">
                            <img src="images/testi-brands-2.png" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="testimonial-slider-dots-four text-center mt-50"></div>
          </div>
        </div>

        <div className="tp-brands-area theme-bg pt-125 pb-70" id="clients">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-10">
                <div className="tp-service-section-box text-center pb-60">
                  <h5 className="tp-subtitle pb-10">Our Clients</h5>
                  <h2 className="tp-title-sm">
                    We&apos;ve built solutions for
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-4  col-6">
                <div className="tp-brands-item text-md-center mb-60">
                  <img src="images/testi-brands.png" />
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-6">
                <div className="tp-brands-item text-md-center mb-60">
                  <img src="images/testi-brands.png" />
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-6">
                <div className="tp-brands-item text-md-center mb-60">
                  <img src="images/testi-brands.png" />
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-6">
                <div className="tp-brands-item text-md-center mb-60">
                  <img src="images/testi-brands.png" />
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-6">
                <div className="tp-brands-item text-md-center mb-60">
                  <img src="images/testi-brands.png" />
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-6">
                <div className="tp-brands-item text-md-center mb-60">
                  <img src="images/testi-brands.png" />
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-6">
                <div className="tp-brands-item text-md-center mb-60">
                  <img src="images/testi-brands.png" />
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-6">
                <div className="tp-brands-item text-md-center mb-60">
                  <img src="images/testi-brands.png" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tp-contact-area pt-135 pb-130" id="contact">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 ">
                <div className="tp-contct-wrapper contact-space-40">
                  <div className="tp-contact-thumb mb-60">
                    <img src="images/contact-1.jpg" />
                  </div>
                  <div className="tp-contact-info mb-40">
                    <h4 className="contact-title">Mail Address</h4>
                    <span>
                      <a href="mailto:(mail@gmail.com)">mail@gmail.com</a>
                    </span>
                  </div>
                  <div className="tp-contact-info mb-40">
                    <h4 className="contact-title">Phone Number</h4>
                    <span>
                      <a href="tel:(+1234567890)">(+1 234 567 890)</a>
                    </span>
                  </div>
                  <div className="tp-contact-info">
                    <h4 className="contact-title">Address line</h4>
                    <span>
                      <a href="https://www.google.com/maps" target="blank">
                        Address 1
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="tpcontact">
                  <h4 className="tp-contact-big-title">Let’s Talk!</h4>
                  <div className="tpcontact__form tpcontact__form-3">
                    <form id="contact-form" action="#">
                      <input name="name" type="text" placeholder="Name" />
                      <input name="email" type="email" placeholder="Email" />
                      <textarea name="message" placeholder="Message"></textarea>
                    </form>
                    <button
                      type="submit"
                      className="tp-btn-yellow-semilar d-none d-md-block"
                    >
                      Send Message
                    </button>
                  </div>
                  <p className="ajax-response"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <div className="tp-footer-area black-bg pt-30 pb-15">
          <div className="tp-copyright-area">
            <div className="container">
              <div
                className="wow tpfadeUp"
                data-wow-duration=".5s"
                data-wow-delay=".7s"
              >
                <div className="row">
                  <div className="col-12">
                    <div className="tp-copyright-left text-center">
                      <p> © Copyright ©2023 Ouican. All Rights Reserved.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
