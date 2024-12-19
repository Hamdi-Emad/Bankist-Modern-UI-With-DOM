"use strict";

//&===========================================================================================
//*===================================== Start Project 🚀 ====================================
//&===========================================================================================

//*=========================================================================
//*============================| 💻 BOB UP 💻 |============================

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (e) {
   e.preventDefault();
   modal.classList.remove("hidden");
   overlay.classList.remove("hidden");
};

const closeModal = function () {
   modal.classList.add("hidden");
   overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

//^ كومنت هنا علشان دي الطريقة القديمة
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
   if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeModal();
   }
});

//*=========================================================================
//*==========================| 💻 Scrolling 💻 |===========================

const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnScrollTo.addEventListener("click", function (e) {
   /*
  
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  
  console.log(e.target.getBoundingClientRect());
  //* Viewport عامة بُعد العنصر عن الـ
  
  // console.log(`current Scroll (X/Y)`, window.pageXOffset,pageYOffset); //! ده بقي قديم
  console.log(`Current Scroll (X/Y)`, window.scrollX, scrollY); //* دي الطريقة الجديدة
  //* من مكان ما احنا واقفين Left & Top عامة بُعد العنصر عن الـ
  
  console.log(
    //* viewportحجم الـ
    `height / width viewport`,
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );
  
  // //* Scrolling
  // // window.scrollTo('left position', 'Top position');
  // //* viewport هتجبلك بُعد العنصر لكن بالنسبة للـ getBoundingClientRect() , scrollTo(,) بص يحبيبي
  // //* من مكان ما احنا واقفين Top وهو بُعد العنصر عن الـ scrollX,Y وبالتالي هنضيف عليها الـ
  // window.scrollTo(
  //   s1coords.left + window.scrollX, //* مش هيشتغل من غيرها , يعني لازم تحط قيمة حتي و لو صفر , بس اكتبها زي ما انا كاتبها
  //   s1coords.top + window.scrollY //* دي المهمة جداً بقي
  // );
  
  //! object لازم تبقي smooth scroll علشان نضيف تأثير
  
  window.scrollTo({
    left: s1coords.left + window.scrollX,
    top: s1coords.top + window.scrollY,
    behavior: 'smooth',
  });
  
  */

   //* والكلام ده Top هتقولي يحمودة , انا مبحبش اقعد احسب المسافة لحد الـ
   //* هقولك ان فيه طريقة جديدة مش بتقعد تحسب فيها , وكمان مش اي حد يعرفها , علي الاقل ف وقت البروجيكت ده
   //* هتسألني طبعاً وتقول لما هو فيه طريقة جديدة واجع دماغي بالحاجات القديمة دي ليه ؟
   //* هقولك ان دي حاجات لازم تعرفها , تعرف زمان كنا بنعملها ازاي , وحالاً بنعملها ازاي
   //* ❤️😂 وخاصة ان الكود زمان كان بيعتمد علي تريكات ومحتاج تشغيل دماغ , وانا من مصلحتي انك تشغل دماغك
   //* ❤️❤️❤️ الطريقة الجديدة الجامدة
   section1.scrollIntoView({ behavior: "smooth" });
});

//*=========================================================================
//*=======================| 💻 Page Navigation 💻 |========================

// document.querySelectorAll('.nav__link').forEach(el =>
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     console.log('LINK');
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   })
// );

//* الطريقة ال فوق معقولة للتاسكات الصغيرة , لكن مش كويسة للمشاريع الكبيرة
//* ليهم كلهم ؟ e.preventDefault() ال بندوس عليها 3 , لكن تخيل لو 100 لينك , هل هنعمل Links عدد الـ
//* للأب ال شايل اللينكات event delegation الاجابة طبعاً لأ . احنا بكل بساطة هنستخدم
//* بنحتاج حاجتين event delegation في الـ
//* 1. add event listener to common parent element , للأب هاا اوعي تنسي event listener بنضيف
//* 2. Determine what element originated the event

document.querySelector(".nav__links").addEventListener("click", function (e) {
   e.preventDefault(); //* علشان امنع بس ال سكرول التلقائي السريع ال بيعمله وخلي بالك اني كتبته مرة واحدة

   //* Matching Strategy :
   if (e.target.classList.contains("nav__link")) {
      console.log("LINK");
      const id = e.target.getAttribute("href");
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
   }
});

//*=========================================================================
//*=======================| 💻 Tabbed Component 💻 |=======================

const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

//^ عملنا هنا كومنت لاننا زي ما اتفقنا دي طريقة قديمة
//^ لان ده هيخلي فيه تقل ف الموقع لو عندنا عناصر كتير جداً addEventListener ومينفعش كل عنصر اضيف ليه

// tabs.forEach(tab => {
//   tab.addEventListener('click', function () {
//     console.log('Tab');
//   });
// });

//^ event delegation بكل بساطة هنستخدم الـ
tabsContainer.addEventListener("click", function (e) {
   const clicked = e.target.closest(".operations__tab");
   console.log(clicked);

   //^ Guard Clause
   //* null ده بكل بساطة معناه لو مفيش حاجة نكلك عليها , ونتيجتها
   //* true ده معنا ان العكس بتاعها هيكون
   //* هينفذ الكود وال مش هيعمل حاجة , والكود ال بعد كدة مش هيشتغل
   //* falsy value بس لو النتيجة مختلفة عن الـ
   //* وبالتالي الكود ال بعد كدة هو ال هيشتغل false ده معناه ان العكس بتاعها هيكون
   //* متعملش حاجة null من الاخر يصاحبي احنا بنقوله لو الكليك بتاعنا ده رجع لينا
   if (!clicked) {
      return;
   }

   //^ remove the active classes
   tabs.forEach((tab) => tab.classList.remove("operations__tab--active"));
   tabsContent.forEach((tab) =>
      tab.classList.remove("operations__content--active")
   );

   //^ Active Tab
   clicked.classList.add("operations__tab--active");

   //^ Activate content area
   document
      .querySelector(`.operations__content--${clicked.dataset.tab}`)
      .classList.add("operations__content--active");
});

//*=========================================================================
//*======================| 💻 Menu Fade Animation 💻 |=====================

const nav = document.querySelector(".nav");

//^ ملحوظة بسيطة بس اعرفها
//* mouseleave عكس mouseenter
//* mouseout عكس mouseover

//^ ======= الكود كامل بشكل بسيط بدون تحسين =======
/*
nav.addEventListener('mouseover', function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) {
        el.style.opacity = '0.5';
      }
    });

    logo.style.opacity = '0.5';
  }
});

nav.addEventListener('mouseout', function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) {
        el.style.opacity = '1';
      }
    });

    logo.style.opacity = '1';
  }
});
*/

//^ ======== التحسين الأول ========
/*
const handleHover = function (e, opacity) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) {
        el.style.opacity = opacity;
      }
    });

    logo.style.opacity = opacity;
  }
};

nav.addEventListener('mouseover', function (e) {
  handleHover(e, 0.5);
});

nav.addEventListener('mouseout', function (e) {
  handleHover(e, 1);
});
*/

//^ ========= التحسين الثاني =========

const handleHover = function (e) {
   if (e.target.classList.contains("nav__link")) {
      const link = e.target;
      const siblings = link.closest(".nav").querySelectorAll(".nav__link");
      const logo = link.closest(".nav").querySelector("img");

      //* bind هنا هتكون قيمتها زي القيمة ال جوا الـ this تحت ف بالتالي الـ bind خلي بالك بما اننا استخدمنا الـ
      siblings.forEach((el) => {
         if (el !== link) {
            el.style.opacity = this;
         }
      });

      logo.style.opacity = this;
   }
};

nav.addEventListener("mouseover", handleHover.bind(0.5));

nav.addEventListener("mouseout", handleHover.bind(1));

//*=========================================================================
//*======================| 💻 Sticky Navigations 💻 |======================

//^ ===== الطريقة العادية =====
/*
//! مش الطف حاجة تستخدمها خاصة لاداء الموقع , بس احنا هنا استخدمناه مؤقتاً scroll event خلي بالك بردو ان الـ
const initialCoords = section1.getBoundingClientRect();
window.addEventListener('scroll', function (e) {
  console.log(Math.trunc(initialCoords.top), Math.trunc(window.scrollY));
  if (window.scrollY > initialCoords.top) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
});
*/

//^ ===== طريقة افضل =====
//* Intersection Observer API طريقة الـ

/*
const obsCallback = function (entries, observer) {
  entries.forEach(entry => {
    console.log(entry);
  });
};

const obsOptions = {
  root: null, //* viewport اعتقد دي معناها هنا الـ
  // threshold: 0.1, //* Array هنا يقصد تسكرول لحد ماتساوي الـ0.1 ونقدر نحط
  threshold: [0, 0.2],
};
const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1);
*/

const header = document.querySelector(".header");

const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
   const [entry] = entries;
   // console.log(entry);
   if (!entry.isIntersecting) {
      nav.classList.add("sticky");
   } else {
      nav.classList.remove("sticky");
   }
};

const headerObserver = new IntersectionObserver(stickyNav, {
   root: null, //* ال قدامنا viewport يقصد بيها الـ
   threshold: 0, //* مش باين header موجود يبقي نعمل اكشن معين , 0% يعني الـ header يقصد يعني ان لو 0% من الـ
   rootMargin: `-${navHeight}px`,
   //* navbar يظهر الـ navbar بالقيمة دي , علشان قبل السيكشن بمسافة تساوي ارتفاع الـ margin وبقوله يعمل  navbar هنا حطيت قيمة ارتفاع الـ
});

headerObserver.observe(header);

//*=========================================================================
//*======================| 💻 Revealing Sections 💻 |======================

const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
   const [entry] = entries;
   // console.log(entry);
   if (!entry.isIntersecting) return;
   entry.target.classList.remove("section--hidden");
   //* لكن دي بتوقفه observer القطة ال تحت دي جميلة ومهمة جداً علشان هتلاحظ مع كل سكرول بيعمل
   //* والدليل علي كدة ان الكونسول هتلاقيه مبقاش شغال من بعد المرة الاولي
   observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
   root: null,
   threshold: 0.15,
});

allSections.forEach((section) => {
   sectionObserver.observe(section);
   section.classList.add("section--hidden");
});

//*=========================================================================
//*======================| 💻 Lazy Loading Images 💻 |=====================

const imgTargets = document.querySelectorAll("img[data-src]");

const loadImg = function (entries, observer) {
   const [entry] = entries;
   // console.log(entry);

   if (!entry.isIntersecting) return;

   //* Replace src with data-src
   entry.target.src = entry.target.dataset.src;

   entry.target.addEventListener("load", function () {
      entry.target.classList.remove("lazy-img");
   });

   observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
   root: null,
   threshold: 0,
   // rootMargin: `200px`, //* حسيتها بتخليني مقدرش اشوف البلور وهو بيتشال ف عملت عليها كومنت
});

imgTargets.forEach((img) => {
   imgObserver.observe(img);
});

//*=========================================================================
//*=============================| 💻 Slider 💻 |===========================

const slider = function () {
   const slides = document.querySelectorAll(".slide");

   const btnLeft = document.querySelector(".slider__btn--left");
   const btnRight = document.querySelector(".slider__btn--right");

   const dotContainer = document.querySelector(".dots");

   let curSlide = 0;
   const maxSlide = slides.length;

   // const slider = document.querySelector('.slider');
   // slider.style.transform = 'scale(0.2) translateX(-1200px)';
   // slider.style.overflow = 'visible';

   //* === Functions ===
   const createDots = function () {
      slides.forEach((_, i) => {
         dotContainer.insertAdjacentHTML(
            "beforeend",
            `<button class='dots__dot' data-slide='${i}'>
      </button>`
         );
      });
   };

   const activateDot = function (slide) {
      document.querySelectorAll(".dots__dot").forEach((dot) => {
         dot.classList.remove("dots__dot--active");
      });

      document
         .querySelector(`.dots__dot[data-slide="${slide}"]`)
         .classList.add("dots__dot--active");
   };

   //^ goToSlide(0) هنستبدله بـ
   // slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));
   // //* 0%, 100%, 200%, 300%

   const goToSlide = function (slide) {
      slides.forEach(
         (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
         //^ 😂 تريكاية بسيطة بس حسستني اني عايز اقوم اسقف مش عارف ليه
      );
   };
   //* curSlide = 1: -100, 0, 100, 200

   //* 0%, 100%, 200%, 300%

   //* === Next Slide ===
   const nextSlide = function () {
      if (curSlide === maxSlide - 1) {
         curSlide = 0;
      } else {
         curSlide++;
      }
      goToSlide(curSlide);
      activateDot(curSlide);
   };

   //* === Previous Slide ===
   const prevSlide = function () {
      if (curSlide === 0) {
         curSlide = maxSlide - 1;
      } else {
         curSlide--;
      }
      goToSlide(curSlide);
      activateDot(curSlide);
   };

   const init = function () {
      goToSlide(0);
      createDots(); //* Dot لأي Active يعني المفروض تتعمل قبل ماتعمل
      activateDot(0); //* Active يكون Dot علشان نخلي اول
   };

   init();

   //* === Event ===
   btnRight.addEventListener("click", nextSlide);
   btnLeft.addEventListener("click", prevSlide);

   document.addEventListener("keydown", function (e) {
      console.log(e);

      //* === Left Key ===
      if (e.key === "ArrowLeft") {
         prevSlide();
      }

      //* === Right Key ===
      // if (e.key === 'ArrowRight') {
      //   nextSlide();
      // }

      //^ عادي Short-Circuiting ممكن تستخدم طريقة الـ
      e.key === "ArrowRight" && nextSlide();
   });

   dotContainer.addEventListener("click", function (e) {
      if (e.target.classList.contains("dots__dot")) {
         console.log("dot");
         const slide = e.target.dataset.slide;
         goToSlide(slide);
         activateDot(slide);
      }
   });
};

slider();
//&===========================================================================================
//^====================================== End Project 🎯 =====================================
//&===========================================================================================

//⬇️
//⬇️
//⬇️
//⬇️
//⬇️
//⬇️
//⬇️
//⬇️
//⬇️
//⬇️
//⬇️
//⬇️
//⬇️
//⬇️
//⬇️

//* /////////////// ⬇️⬇️⬇️ lectures ⬇️⬇️⬇️ //////////////
//!========================================================
//^====== Selecting, Creating, and Deleting Elements ======
//!========================================================

/*

//^ 1) ======= Selecting Elements : =======

console.log(document.documentElement); //* head & body بالـ html من الاخر هيجيب صفحة الـ
console.log(document.head); //* head طبعاً هيجيب الـ
console.log(document.body); //* body طبعاً هيجيب الـ

const header = document.querySelector('.header'); //* header بتاعه اسمه Calssهتجيب العنصر الـ الـ
//! بنفس الاسم , لانها مش هتجيب غير اول واحد بس class خلي بالك مش بنستخدمها لو عندنا اكتر من
//^ querySelectorAll بنفس الاسم هنستخدم class طيب لو عندنا اكتر من
const allSection = document.querySelectorAll('.section');
console.log(allSection); //* ده class فيها كل العناصر ال بتحتوي علي الـ node list هيجبلنا

document.getElementById('section--1'); //* id طبعاً من اسمها باينة هي بتاعة ايه 😂, بنجيب الـعنصر عن طريق الـ

const allButtons = document.getElementsByTagName('button'); //* بنجيب العنصر بـ اسمه
console.log(allButtons); //* Buttons فيها كل الـ HTMLCollection هيجبلنا
//^ قل Length بيعمل ابديت كل شوية ف لو حذفت عنصر هتلاقي الـ HTMLCollections الـ
//^ NodeList الكلام ده طبعاً مش بيحصل في الـ

console.log(document.getElementsByClassName('btn')); //* ده class فيها كل العناصر ال بتحتوي علي الـ HTMLCollection هيجبلنا

//& ========================================
console.log(`=============================`);

//^ 2) ======= Creating and Inserting Elements : =======

// .insertAdjacentHTML() //* خدناها قبل كدة ف التطبيق الـ فات

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = `We use cookied for improve functionality and analytics.`;
message.style.padding = '20px 10px';
message.innerHTML = `We use cookied for improve functionality and analytics.
<button class='btn btn--close-cookie'>Got it!</button>`;

header.prepend(message); //^ ولكن ف الاول header هيحط الـعنصر بتاعنا جوا الـ
header.append(message); //^ ولكن ف الاخر header هيحط الـعنصر بتاعنا جوا الـ
//! طبعاً هيتنفذ مرة واحدة وهينفذ الاخيرة , وبالتالي العنصر بتاعنا هيجي ف الاخر
//^ cloneNode(true) طيب والحل هنا ايه ؟ الحل هيكون اننا نستخدم
// header.append(message.cloneNode(true)); //! لاقيتها مأثرتش remove() جربت اعمل ليه

// header.before(message); //* مش جواه header هيحط العنصر بتاعنا قبل الـ
// header.after(message); //* مش جواه header هيحط العنصر بتاعنا بعد الـ

//* remove()
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
    // message.parentElement.removeChild(message) //* زمان كانوا بيكتبوها كدة
  });

*/

//!========================================================
//^============ Styles, Attributes, and Classes ===========
//!========================================================

/*

const header = document.querySelector('.header'); //* header بتاعه اسمه Calssهتجيب العنصر الـ الـ

const message = document.createElement('div');
message.classList.add('cookie-message');
message.style.padding = '20px 10px';
message.innerHTML = `We use cookied for improve functionality and analytics.
<button class='btn btn--close-cookie'>Got it!</button>`;
header.append(message); //* ولكن ف الاخر header هيحط الـعنصر بتاعنا جوا الـ

//* remove()
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
    // message.parentElement.removeChild(message) //* زمان كانوا بيكتبوها كدة
  });

//^ 1) ============= Styles =============

message.style.backgroundColor = '#37383d'; //* inline style بيعمل
message.style.borderRadius = '10px'; //* inline style بيعمل
message.style.width = '90%'; //* inline style بيعمل

console.log(message.style.height); //* مش هيطبع حاجة Will log nothing ,inline style لانه مش بيشتغل غير علي الـ
console.log(message.style.backgroundColor); //* inline style هيطبعه عادي لانه
//! inline style يبقي نفهم ان الخاصية دي مش بتشتغل غير علي الـ

//* getComputedStyle(العنصر).(الخاصية)  | هنستخدم inline style طيب لو عايز اجيب قيمة ستايل معين بس ميكونش
console.log(getComputedStyle(message).color); //* inline style رغم انه مش color هتجيب قيمة الـ
console.log(getComputedStyle(message).height); //* inline style رغم انه مش color هتجيب قيمة الـ

message.style.height = `${
  Number.parseFloat(getComputedStyle(message).height) + 150
}px`;
// Number.parseFloat(getComputedStyle(message).height) + 150 + 'px';
//! 120px مثلاً Unit علشان هيرجع لينا القيمة بالـ Number.parseFloat استخدمنا الـ
//! Number.parseFloat ف اكيد هنستخدم pxواكيد احنا عايزين الـ120 ومش عايزين الـ

console.log(message.style.height); //* واحلي مسا عليك وعلي التريكاية بتاعتك يعم

//* CSS لو عايز اغير قيمة خاصية معينة جوا ملف الـ
//* CSS في ملف الـ ROOT هنا غيرنا قيمة خاصية جوا الـ
//* Custom property ودي الطريقة ال بنتبعها مع الـ
document.documentElement.style.setProperty('--color-primary', 'orange');

//^ 2) ============= Attributes =============

const logo = document.querySelector('.nav__logo');
console.log(logo.alt); //* الخاص بالصورة Alt هيطبع الـ
console.log(logo.src); //* الخاص بالصورة src هيطبع الـ
//* the absolute url و طبعاً بيكون
//* getAttribute() العادي بنستخدم srcلو عايز الـ
console.log(logo.className); //* Class هيطبع لينا اسم الـ
console.log(logo.id); //* id هيطبع لينا اسم الـ

//* set نقدر نعمل
logo.alt = ' ❤️ بحبك في الله يعم '; //* قيمته هتتغير للقيمة دي alt هنا الـ
console.log(logo.alt); //* ( ❤️ هيطبع لينا   (  بحبك في الله يعم

//^ 3) ========= Non-Standard Attribute =========

console.log(logo.designer);
//* Standard Attribute وده لإن الطريقة دي مش بتطبع غير الـ undefined مخصص عملته بـ ايديا بس مش هيرضي يتطبع وهيجيب لينا attribute ده
//* getAtrribute('Attributeاسم الـ')  طيب والحل هنا ايه , الحل اننا نستخدم خاصية
console.log(logo.getAttribute('designer')); //* hamdi عادي وال قيمته custom Attribute هيطبع الـ

//* setAttrribute عن طريق set نقدر نعمل ليها custom attribute وبالنسبة للـ
logo.setAttribute('company', 'H&H');
logo.setAttribute('designer', 'hannon');

console.log(logo.getAttribute('company')); //* بقيمة جديدة custom attribute هنا عملنا
console.log(logo.getAttribute('designer')); //* designer ال اسمه custom attribute هنا غيرنا قيمة الـ

console.log(logo.getAttribute('src')); //* relative url العادي بتاعنا src زي ماقولتلك فوق دي الطريقة ال نجيب ببيها الـ

const link = document.querySelector('.nav__link--btn');
console.log(link.href); //* هيطبع اللينك عادي , absolute link
console.log(link.getAttribute('href')); //* HTML أو اي حاجة عامةً زي ما انت كتبتها ف الـ url خليك فاكر ان دي بترجعلك الـ

//^ 4) ============= Data Attribute =============

//* data-version-number="3.0" بالمنظر ده HTML احنا كاتبينها ف الـ
console.log(logo.dataset.versionNumber); //* لكن هنا هنكتبها بالمنظر ده

//^ 5) ================= Classes =================

// logo.className = 'hamdi'; //* classes علي كل الـ override حاول متستخدمهاش , لانها مش عملية , وبتعمل 
logo.classList.add('first', 'second', 'third'); //* Class بنستخدمه لو هنحط اكتر من
console.log(logo);

logo.classList.remove('first', 'second'); //* Class نقدر نمسح اكتر من Class بيمسح الـ
console.log(logo);

logo.classList.toggle('third'); //* موجود هيمسحه , ولو مش موجود هيضيفه Class الخاصية دي جميلة , لو الـ
console.log(logo);

console.log(logo.classList.contains('nav__logo')); //* includes موجود ولا لأا , زيها زي الـ Class بتتأكد هو الـ

*/

//!========================================================
//^============== Types of Events and Handlers ============
//!========================================================

/*

const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert(`addEventListener: Great! You Are Reading The Heading :D`);

  //* ف حالة لو مبقيناش محتاجينه تاني أو لو عايزينه يشتغل مرة واحدة بس event handler دي نقطة اننا نقدر نمسح الـ
  // h1.removeEventListener('mouseenter', alertH1);
};

h1.addEventListener('mouseenter', alertH1);

//* setTimeout() بعد فترة معينة بإستخدام الـ event handler نقدر طبعاً نطبق مثال حذف الـ
//* ومش هتشتغل تاني event handler  هنا بعد 3 ثواني هيمسح الـ
setTimeout(function () {
  h1.removeEventListener('mouseenter', alertH1);
}, 3000);

//* لنفس العنصر عادي addEventListenerتقدر تكرر الـكود , أقصد يعني تقدر تكرر الـ
//* ف حالة لو مبقيناش محتاجينه تاني event handler تقدر تمسح الـ

//* Old way (Old school 😒)
// h1.onmouseenter = function (e) {
//   alert(`addEventListener: Great! You Are Reading The Heading :D`);
// };
// //! Override هنا بقي متقدرش تكرر الكود , لانك لو كررته هيعمل

*/

//!========================================================
//^======== Event Propagation: Bubbling and Caption =======
//!========================================================

/*

//^ ====== Capturing Phase (المرحلة العليا) ======
//* (زي document) Dom في المرحلة دي، الأحداث بتتحرك من العنصر الأعلى في شجرة
//* لحد العنصر المستهدف (اللي تم النقر عليه أو حصل فيه الحدث).
//* يعني لو عندك عدة عناصر متداخلة، الحدث هيبدأ من العنصر الأب ويعدي
//* على كل العناصر لحد ما يوصل للعنصر اللي تم عليه الحدث.

//^ ====== Target Phase (المرحلة المستهدفة) ======
//* في المرحلة دي، الحدث بيكون في العنصر المستهدف نفسه.
//* يعني لو أنت ضغطت على زر، الحدث في المرحلة دي هيكون في الزر اللي ضغطت عليه.

//^ ====== Bubbling Phase (المرحلة السفلية) ======
//* بعد ما الحدث يوصل للعنصر المستهدف، بيبدأ يرجع تاني لأعلى،
//* لكن في الاتجاه العكسي. يعني بعد ما يحصل الحدث في الزر،
//* مرة تانية Dom الحدث هيبدأ يتحرك لأعلى في شجرة الـ
//* document ويعدي على كل العناصر الأبوية لحد ما يوصل للـ

//* مثال :

//* document
//*   └── div
//*       └── button

//* (button) لو ضغطت على الزر :
//*  button وبعدين يوصل لـ div ثم document الـحدث هيبدأ من الـ Capturing Phase فـ الـ
//* button الحدث هيكون فـ الـ Target Phase: فـ الـ
//* document وبعدين يوصل لـ div وبعدها الـ button الحدث هيرجع لأعلى، يعني هيعدي من Bubbling Phase فـ الـ

//* أهمية الحاجات دي ايه ؟ :
//* بيساعد في تحديد المكان اللي عايز تعالج فيه الأحداث Event Propagation الفهم الجيد للـ
//* Bubbling لتمنع الحدث من انه يعمل stopPropagation لو عايز تعالج حدث عند العنصر المستهدف فقط، ممكن تستخدم

//^ مثال واضح جداً وركز بقي يعم انت
//^ الخطة كالأتي :
//* section
//*   └── div
//*       └── span
//*           └── button

//^ وبالتالي الشكل هيكون كدة

//* <section class="myDiv" style="width: 70px; height: 70px;background-color: red;">
//* <div>
//*    <span>
//*      <p>
//*        <button class="myBtn">click</button>
//*      </p>
//*    </span>
//*  </div>
//* </section>

//! لكن عملتهالك فوق علشان تتخيل عليها الشكل لو كانت موجودة HTML الاكواد دي ملهاش وجود ف ملف الـ
const btn = document.querySelector('.myBtn');
const div = document.querySelector('.myDiv');

btn.addEventListener('click', function (e) {
  console.log('btn checked');
  //! div checked هنا الكارثة بقي لانه هيطبع كمان
  //* e.stopPropagation() طيب والحل ؟ الحل اننا نستخدم
  //* Bubbling من انه يعمل event وال هتوقف الـ
  e.stopPropagation();
});

div.addEventListener('click', function () {
  console.log('div checked');
});

*/

//!========================================================
//^============= Event Propagation in Practice ============
//!========================================================

/*

//* rgb(255,255,255)

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomInt(2, 5));

//* ❤️😂 عجبتني الفكرة دي جامد
const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

console.log(randomColor());

document.querySelector('.nav__link').addEventListener('click', function (e) {
  console.log('Link', e.target, e.currentTarget);
  //^ e.target :
  //* حصل فيه اول مرة Eventالمكان ال الـ e.target
  //* خلي باك من النفطة ال جاية دي
  //* event بنفس الـ handle التارجت هيكون واحد لانهم جميعاً بيتعمل ليهم

  //^ e.currentTarget :
  //* Event Handler وده بيحصل في اي , this خلي باك هيطلعلك نفس قيمة الـ

  //^ this :
  //* هنا بتعود علي العنصر ال احنا اخترناه this
  this.style.backgroundColor = randomColor();

  //^ e.stopPropagation() :
  //* e.stopPropagation() أنا خليتها ف الاخر علشان اشرحها , بص الهدف من المثال ده اننا لو مكتبناش الـ
  //* .nav وكمان كود الـ .nav__links ده هيتسبب ف تنفيذ الكود ال التحت الخاص بالـ
  //* DOM هينتقل للأعلي خالص ف شجرة الـ event والـ Bubbling طيب الكود هيتنفذ ليه ؟ ده لإن هيحصل
  //* Bubbling ونمنع الـ target phase هنا بس ال هي مرحلة الـ event طيب احنا مش عايزين كدة وعايزين نشغل الـ
  //* Bubbling وهي هتمنع الـ e.stopPropagation() يبقي الحل بكل بساطة اننا نستخدم الـ
  //* .nav ولا حتي كود الـ .nav__links وبالتالي مش هيأثر ولا يوصل لكود الـ
  e.stopPropagation();
  //! " in general it's not really a good idea to stop the Propagation of event "
  //* " event للـ stop Propagation بيقولك ف العموم (( ليست )) فكرة جيدة اننا نعمل "
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log('Container', e.target, e.currentTarget);
  this.style.backgroundColor = randomColor();
  e.stopPropagation();
});

document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    console.log('Nav', e.target, e.currentTarget);
    this.style.backgroundColor = randomColor();
  },
  true
); //* Capturing دي معناها اننا بنقوله يكون ف مرحلة الـ true القيمة التالتة ال انا خليتها
//* ف هو هيكون اول كود يتطبع Capturing وبما انه ف مرحلة الـ
//* true بتاعها انها تكون Default متنساش ان الـ
//! دول 3 نقط مهمين ركز عليهم

*/

//!========================================================
//^==== Event Delecation: Implementing Page Navigation ====
//!========================================================

//* Page Navigation تطبيق الدرس ده معمول ف البروجيكت فوق ف جزئية الـ

//!========================================================
//^==================== DOM TRAVERSING ====================
//!========================================================

/*

//^ DOM TRAVERSING : meaning We Can select an element based on another element .

const h1 = document.querySelector('h1');

//^ Going downwards: child
//* فقط h1 ولكن جوا الـ highlight اسمه class هنا بنمسك العناصر ال واخدة
//* ده class فقط ماشي , يعني الابناء ال جوا ال بيتضمنوا الـ h1 ركز بالله عليك , انا بقولك جوا الـ
console.log(h1.querySelectorAll('.highlight'));

console.log(h1.childNodes); //* nodes can be anything , can be text or elements or even comment

console.log(h1.children); //* html collection , live collection because its dynamic , بتشتغل مع الابناء المباشرين بس

console.log(h1.firstElementChild);
h1.firstElementChild.style.color = 'red';

h1.lastElementChild.style.color = 'blue';

//^ Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement); //* ف حالتنا دي الاتنين واحد

//* header مثلاً عندنا ف الصفحة عناصر كتير بتحمل كلاس اسمه
//* h1 ولكن جواه الـ header اسمه class واحنا عايزين مثلاً العنصر ال بيحمل
//* header اسمه class يكون واخد h1 بمعني بسيط جداً عايزين اقرب عنصر بالنسبة للـ
//* queryString بنقول عليه querySelector جو الخاصية دي زي الـ select نظام الـ
//* علي ما اعتقد من فوق لتحت يعني مينفعشي تديها لعنصر اب وتقوله اقرب ابن
//* لكن تقدر تديها لعنصر ابن وتقوله اقرب اب , ده علي حسب فهمي وممكن هنا اكون غلط
h1.closest('.header').style.background = 'var(--gradient-secondary)';
h1.closest('h1').style.background = 'var(--gradient-primary)';

//^ Going sideways: siblings
console.log(h1.previousElementSibling); //* لإن مفيش فعلاً حاجة قبله null
console.log(h1.nextElementSibling);

console.log(h1.previousSibling); //* جوناس مكانشي متإكد ايه ده , خاصة اننا هنستخدم ال فوق بس
console.log(h1.nextSibling);

//* كل حاجة , previous أو next سواء بقي siblings لو عايزين كل الـ
//* عن طريق التريكاية بتاعة اننا نوصل للاب ومن الاب نجيب كل ابنائه
//* نبيه ماشاء الله
console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(el => {
  if (el !== h1) {
    el.style.background = 'red';
  }
});

//* متنساش دول ف الزحمة يعم
console.log(h1.textContent); //* نصوص بس ,
console.log(h1.innerHTML); //* tags ال HTML النصوص وعناصر الـ

*/

//!========================================================
//^================= Lifecycle DOM Event ==================
//!========================================================

/*

document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed DOM tree built!', e);
});

window.addEventListener('load', function (e) {
  console.log('Page Fully Loaded', e);
});

// //* 😡 مش حاجة كويسة انك تستخدمها الصراحة
// window.addEventListener('beforeunload', function (e) {
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = ''; //* مبقتش شغالة ف كروم وبقية المتصفحات , لان المتصفحات الحديثة شايفة ان دي رسايل مزعجة
// });

*/

//!========================================================
//^====== Efficient Script Loading: defer and async =======
//!========================================================
//* درس نظري , بس هكتب الملخص بسرعة علشان يكون مرجع اقدر اجع ليه ف اي وقت

//* 1) defer :
//* DOMContentLoaded event هتتنفذ بعد تحميل كل محتوي الصفحة وقبل الـ scripts الـ
//* بالتوازي , لكن التنفيذ بيكون بالترتيب scripts يتم تحميل الـ
//* مفيد لتحسين أداء تحميل الصفحة

//* 2) async :
//* هتتنفذ علي طول اول ماتتحمل من غير انتظار تحميل بقية الصفحة scripts الـ
//* بتتنفذ ف اي ترتيب علي حسب وقت تحميلها async الـ بتستخدم scripts الـ

//* الزتونة :
//* احسن وهنستخدمها كتير وكمان هنستخدمها مع جوناس ف الكورس defer
//* المرتبطة بترتيب معين scripts احسن طبعاً في تحميل الـ defer الـ
//* async المستقلة يبقي استخدم scripts لو عايز حاجة مش مرتبطة بترتيب وبتعتمد علي الـ

//! ======== head ف الـ script tag مش محتاج اقولك اننا هنا هنحط الـ ========
