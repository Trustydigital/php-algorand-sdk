document.addEventListener("DOMContentLoaded", function (event) {


    function switchMobMenu() {
    const btn = document.querySelector('[data-nav-btn]');
    if (btn) {
      const nav = document.querySelector('[data-nav-menu]');
      btn.addEventListener('click', () => {
        nav.classList.toggle('nav--mob-hidden');
        btn.classList.toggle('btn-burger--line');
        btn.classList.toggle('btn-burger--close');
        document.body.classList.toggle('__lock');

      });
    }
  }

  switchMobMenu();
  //  switch btn for email ==================================

  let switchBtnEmail = (parent) => {
    let par = document.querySelector(parent);
    if (par) {
      par.addEventListener('click', (e) => {
        let tar = e.target;
        if (tar.closest('[data-table-wrapp]')) {
          tar.closest('[data-table-wrapp]').classList.add('two-table__card--form');
          tar.closest('[data-table-wrapp]').querySelector('[data-table-card-head]').classList.add('hidden');
          tar.closest('[data-table-wrapp]').querySelector('[data-table-btn]').classList.add('hidden');
          tar.closest('[data-table-wrapp]').querySelector('[data-table-form]').classList.remove('hidden');

        }
      });
    }

  }
    switchBtnEmail('[data-table-parent]');
    switchBtnEmail('[data-table-parent]');

  //  swipper ===============================================

  const swiperBenefit = new Swiper('[data-home-benefits-slider]', {
    slidesPerView: 1,
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      1100: {
        slidesPerView: 3,
      },
    },

    // Navigation arrows
    navigation: {
      prevEl: '.benefits__btn-slider--prev',
      nextEl: '.benefits__btn-slider--next',
    },

  });
  // const swiperBenefitSolutions = new Swiper('[data-benefits-sol-swiper]', {
  //   // slidesPerView: 2,
  //   // freeMode: true,
  //   loop: false,
  //   // slidesPerColumn: 2,
  //   // slidesPerColumnFill: 'row',
  //   grid: {
  //     fill: 'row',
  //     rows: 2,

  //   },
  //   autoplay: {
  //     delay: 8000,
  //   },
  //   spaceBetween: 30,

  //   breakpoints: {
  //     320: {
  //       slidesPerView: 1,
  //     },
  //     768: {
  //       slidesPerView: 2,
  //     },
  //     1100: {
  //       slidesPerView: 3,
  //     },
  //   },

  //   // Navigation arrows
  //   navigation: {
  //     prevEl: '[data-sol-benefit-prev]',
  //     nextEl: '[data-sol-benefit-next]',
  //   },

  // });
  const swiperOurProject = new Swiper('[data-slider-our-project]', {
    slidesPerView: 1,
    // freeMode: true,
    // loop: true,
    // slidesPerColumn: 2,
    // slidesPerColumnFill: 'row',
    autoplay: {
      delay: 50000,
    },
    // spaceBetween: 30,

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      1100: {
        slidesPerView: 2,
      },

    },

    // Navigation arrows
    navigation: {
      prevEl: '[data-slider-our-project-prev]',
      nextEl: '[data-slider-our-project-next]',
    },

  });
  const swiperRewiev = new Swiper('[data-rewievs-sol-swiper]', {
    slidesPerView: 1,
    // freeMode: true,
    // loop: true,
    // slidesPerColumn: 2,
    // slidesPerColumnFill: 'row',
    autoplay: {
      delay: 50000,
    },
    spaceBetween: 30,

    breakpoints: {
      320: {
        slidesPerView: 1,
      },

      768: {
        slidesPerView: 2,
      },
      1100: {
        slidesPerView: 3,
      },
    },

    // Navigation arrows
    navigation: {
      prevEl: '[data-rewiev-sol-prev]',
      nextEl: '[data-rewiev-sol-next]',
    },

  });
  // height sliders


  function setHeightWelcomeSlides(allSliders) {
    const sliderHeights = document.querySelectorAll(allSliders);
    if (!sliderHeights.length) {
      return;
    }

    let maxHeight = 0;

    sliderHeights.forEach((element) => {
      element.style.height = 'auto';
      const currentHeight = element.offsetHeight;
      if (currentHeight > maxHeight) {
        maxHeight = currentHeight;
      }
    });

    if (!maxHeight) {
      return;
    }

    sliderHeights.forEach((element) => {
      element.style.height = `${maxHeight}px`;
      // element.style.opacity = '0.1';
    });
  }
  setHeightWelcomeSlides('.rewievs-sol__card');

  // scroll to ==================================================================================
  function scrollToElement(btnAnchor, goalElement) {
    // window.scrollBy(0, window.innerHeight);
    let goal = goalElement.offsetTop;
    let step = btnAnchor.offsetTop;
    let timer;
    if (btnAnchor) {

      // let article = btnAnchor.classList.contains('question_1') ||
      //   btnAnchor.classList.contains('question_2');

      // if (article && document.body.clientWidth <= 768) {

      //   btnAnchor = btnAnchor.offsetTop - btnAnchor.previousElementSibling.clientHeight;
      // } else {
      btnAnchor = btnAnchor.offsetTop;
      // }
      let speed = 20;

      function timeOuter() {

        if (step < goal) {
          requestAnimationFrame(timeOuter);
          window.scrollTo(0, step);
          speed += speed * 0.03;
          step += speed;
        } else {
          let final = goal;
          window.scrollTo(0, final - 100);
          step = btnAnchor.offsetTop;
        }
      }
      timeOuter();
    }

  }



  let initialScroll = (formPage, formEL) => {
    let page = document.querySelector(formPage);
    let goalEl = document.querySelector(formEL);
    if (page) {
      document.addEventListener('click', (e) => {
        let target = e.target;
        if (target.closest('[data-scroll-form]')) {
          scrollToElement(target, goalEl);
        }
      });
    }
  }
  initialScroll('[data-page-form]', '[data-goal-form]');

});




  //  swipper ===============================================

  // const swiperBenefit = new Swiper('.swiper', {
  //   slidesPerView: 1,
  //   loop: true,
  //   breakpoints: {
  //     320: {
  //       slidesPerView: 1,
  //     },
  //     576: {
  //       slidesPerView: 2,
  //     },
  //     1100: {
  //       slidesPerView: 3,
  //     },
  //   },

  //   // Navigation arrows
  //   navigation: {
  //     prevEl: '.benefits__btn-slider--prev',
  //     nextEl: '.benefits__btn-slider--next',
  //   },

  // });
  const swiperBenefitSolutions = new Swiper('[data-benefits-sol-swiper]', {
    // slidesPerView: 2,
    // freeMode: true,
    // loop: false,
    // slidesPerColumn: 2,
    // slidesPerColumnFill: 'row',
    grid: {
      fill: 'row',
      rows: 2,

    },
    autoplay: {
      delay: 8000,
    },
    spaceBetween: 30,

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1100: {
        slidesPerView: 3,
      },
    },

    // Navigation arrows
    navigation: {
      prevEl: '[data-sol-benefit-prev]',
      nextEl: '[data-sol-benefit-next]',
    },

  });
  const swiperOurProject = new Swiper('[data-slider-our-project]', {
    slidesPerView: 1,
    // freeMode: true,
    // loop: true,
    // slidesPerColumn: 2,
    // slidesPerColumnFill: 'row',
    autoplay: {
      delay: 50000,
    },
    // spaceBetween: 30,

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      1100: {
        slidesPerView: 2,
      },

    },

    // Navigation arrows
    navigation: {
      prevEl: '[data-slider-our-project-prev]',
      nextEl: '[data-slider-our-project-next]',
    },

  });
  const swiperRewiev = new Swiper('[data-rewievs-sol-swiper]', {
    slidesPerView: 1,
    // freeMode: true,
    // loop: true,
    // slidesPerColumn: 2,
    // slidesPerColumnFill: 'row',
    autoplay: {
      delay: 50000,
    },
    spaceBetween: 30,

    breakpoints: {
      320: {
        slidesPerView: 1,
      },

      768: {
        slidesPerView: 2,
      },
      1100: {
        slidesPerView: 3,
      },
    },

    // Navigation arrows
    navigation: {
      prevEl: '[data-rewiev-sol-prev]',
      nextEl: '[data-rewiev-sol-next]',
    },

  });
  // height sliders


  const swiperTokensKey = new Swiper('[data-key-benefits-swiper]', {
    slidesPerView: 1,
    // freeMode: true,
    // loop: true,
    // slidesPerColumn: 2,
    // slidesPerColumnFill: 'row',
    // autoplay: {
    //   delay: 5000,
    // },
    spaceBetween: 30,

    breakpoints: {
      320: {
        slidesPerView: 1,
      },

      768: {
        slidesPerView: 2,
        grid: {
          fill: 'row',
          rows: 2,

        },
      },
      1100: {
        slidesPerView: 3,
        grid: {
          fill: 'row',
          rows: 2,

        },
      },
    },

    // Navigation arrows
    navigation: {
      prevEl: '[data-key-benefits-prev]',
      nextEl: '[data-key-benefits-next]',
    },

  });
  const swiperTokensOurPartners = new Swiper('[data-our-partners-swiper]', {
    slidesPerView: 1,
    // freeMode: true,
    // loop: true,
    // slidesPerColumn: 2,
    // slidesPerColumnFill: 'row',
    // autoplay: {
    //   delay: 5000,
    // },
    spaceBetween: 30,

    breakpoints: {
      320: {
        slidesPerView: 1.2,
      },
      370: {
        slidesPerView: 1.5,
      },
      576: {
        slidesPerView: 2.2,
      },

      768: {
        slidesPerView: 2.3,
        grid: {
          fill: 'row',
          rows: 2,

        },
      },
      1100: {
        slidesPerView: 4,
        grid: {
          fill: 'row',
          rows: 2,

        },
      },
    },

    // Navigation arrows
    navigation: {
      prevEl: '[data-key-benefits-prev]',
      nextEl: '[data-key-benefits-next]',
    },

  });

  const swiperTokensSteps = new Swiper('[data-tokens-steps-slider]', {
    slidesPerView: 1,
    // freeMode: true,
    // loop: true,
    // slidesPerColumn: 2,
    // slidesPerColumnFill: 'row',
    // autoplay: {
    //   delay: 5000,
    // },
    spaceBetween: 30,

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      360: {
        slidesPerView: 1.25,
      },

      576: {
        slidesPerView: 2.3,
      },
      768: {
        slidesPerView: 2.3,
      },
      1100: {
        slidesPerView: 3,
      },
    },

    // Navigation arrows
    navigation: {
      prevEl: '[data-steps-prev]',
      nextEl: '[data-steps-next]',
    },

  });



function setHeightWelcomeSlides(allSliders) {
  const sliderHeights = document.querySelectorAll(allSliders);
  if (!sliderHeights.length) {
    return;
  }

  let maxHeight = 0;

  sliderHeights.forEach((element) => {
    element.style.height = 'auto';
    const currentHeight = element.offsetHeight;
    if (currentHeight > maxHeight) {
      maxHeight = currentHeight;
    }
  });

  if (!maxHeight) {
    return;
  }

  sliderHeights.forEach((element) => {
    element.style.height = `${maxHeight}px`;
    // element.style.opacity = '0.1';
  });
}

  setHeightWelcomeSlides('.rewievs-sol__card');



  // setHeightWelcomeSlides('[data-tokens-steps-slider] .tokens-steps-slider__slide');
  setHeightWelcomeSlides('[data-our-partners-swiper] .our-partners-token__slide');

  window.addEventListener('resize', function() {
    setHeightWelcomeSlides('.rewievs-sol__card');

    // setHeightWelcomeSlides('[data-tokens-steps-slider] .tokens-steps-slider__slide');
    setHeightWelcomeSlides('[data-our-partners-swiper] .our-partners-token__slide');
  });


  // setHeightWelcomeSlides(' [data-tokens-steps-slider] .tokens-steps-slider__card');


  // scroll to ==================================================================================
  function scrollToElement(btnAnchor, goalElement) {
    // window.scrollBy(0, window.innerHeight);
    let goal = goalElement.offsetTop;
    let step = btnAnchor.offsetTop;
    let timer;
    if (btnAnchor) {

      // let article = btnAnchor.classList.contains('question_1') ||
      //   btnAnchor.classList.contains('question_2');

      // if (article && document.body.clientWidth <= 768) {

      //   btnAnchor = btnAnchor.offsetTop - btnAnchor.previousElementSibling.clientHeight;
      // } else {
      btnAnchor = btnAnchor.offsetTop;
      // }
      let speed = 20;

      function timeOuter() {

        if (step < goal) {
          requestAnimationFrame(timeOuter);
          window.scrollTo(0, step);
          speed += speed * 0.03;
          step += speed;
        } else {
          let final = goal;
          window.scrollTo(0, final - 100);
          step = btnAnchor.offsetTop;
        }
      }
      timeOuter();
    }

  }



  let initialScroll = (formPage, formEL) => {
    let page = document.querySelector(formPage);
    let goalEl = document.querySelector(formEL);
    if (page) {
      document.addEventListener('click', (e) => {
        let target = e.target;
        if (target.closest('[data-scroll-form]')) {
          scrollToElement(target, goalEl);
        }
      });
    }
  }
  initialScroll('[data-page-form]', '[data-goal-form]');

jQuery(document).ready(function () {
    // carousel-1
    jQuery("#owl-csel1").owlCarousel({
        items: 4,
        autoplay: false,
        autoplayTimeout: 3000,
        startPosition: 0,
        rtl: false,
        loop: true,
        margin: 15,
        dots: true,
        nav: true,
        autoplayHoverPause: false,
        navText: [
            '<img src="/main_page/blog/arrow1.png" alt="">',
            '<img src="/main_page/blog/arrow2.png" alt="">'
        ],
        navContainer: '.main-content1 .custom-nav',
        responsive:{
            0: {
                items: 1,

            },
            767: {
                items: 2,

            },
            991: {
                items: 3,

            },
            1199: {
                items: 3,

            },
            1200: {
                items: 3,

            }
        }

    });

// carousel-2
    jQuery("#owl-csel2").owlCarousel({
        items: 4,
        autoplay: false,
        autoplayTimeout: 3000,
        startPosition: 0,
        rtl: false,
        loop: true,
        margin: 15,
        dots: true,
        nav: true,
        autoplayHoverPause: false,
        navText: [
            '<img src="/main_page/blog/arrow1.png" alt="">',
            '<img src="/main_page/blog/arrow2.png" alt="">'
        ],
        navContainer: '.main-content2 .custom-nav',
        responsive:{
            0: {
                items: 1,

            },
            767: {
                items: 2,

            },
            991: {
                items: 3,

            },
            1199: {
                items: 3,

            },
            1200: {
                items: 3,

            }
        }

    });
    jQuery('.scrolltotop').click(function(){
        jQuery('html').animate({'scrollTop' : '0px'}, 300);
        return false;
    });

    jQuery(window).scroll(function(){
        var upto = jQuery(window).scrollTop();
        if(upto > 500) {
            jQuery('.scrolltotop').fadeIn();
        } else {
            jQuery('.scrolltotop').fadeOut();
        }
    });




    // accordion js code
    $('.acc:nth-child(1) .acc-head').addClass('active');
    $('.acc:nth-child(1) .acc-content').slideDown();
    $('.acc:nth-child(1) .acc-head i').removeClass('fa-plus').addClass('fa-minus');
    $('.acc-head').on('click', function() {
        if ($(this).hasClass('active')) {
            $(this).siblings('.acc-content').slideUp();
            $(this).removeClass('active');
            $(this).find('i').removeClass('fa-minus').addClass('fa-plus');
        } else {
            $('.acc-content').slideUp();
            $('.acc-head').removeClass('active');
            $('.acc-head i').removeClass('fa-minus').addClass('fa-plus');
            $(this).siblings('.acc-content').slideDown();
            $(this).addClass('active');
            $(this).find('i').removeClass('fa-plus').addClass('fa-minus');
        }
    });

    // tabs
    $('.tabs a').click(function() {
        $('.panel').hide();
        $('.tabs a.active').removeClass('active');
        $(this).addClass('active');
        var panel = $(this).attr('href');
        $(panel).fadeIn(1000);
        return false;
    });
    $('.tabs li:first a').click();


    // accordion js
    $(function() {
        var Accordion = function(el, multiple) {
            this.el = el || {};
            this.multiple = multiple || false;

            // Variables privadas
            var links = this.el.find('.link');
            // Evento
            links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
        }

        Accordion.prototype.dropdown = function(e) {
            var $el = e.data.el;
            $this = $(this),
                $next = $this.next();

            $next.slideToggle();
            $this.parent().toggleClass('open');

            if (!e.data.multiple) {
                $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
            };
        }

        var accordion = new Accordion($('.accordion'), false);
    });




});
window.addEventListener("load", () => {
  setHeightWelcomeSlides('[data-our-partners-swiper] .our-partners-token__slide');
  setTimeout(() => {
    setHeightWelcomeSlides('[data-tokens-steps-slider] .tokens-steps-slider__slide');
    setHeightWelcomeSlides('[data-our-partners-swiper] .our-partners-token__slide');
  }, 2000);
});
