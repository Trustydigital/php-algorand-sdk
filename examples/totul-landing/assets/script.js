const translations = {
  ru: {
    skip: 'Перейти к контенту',
    'nav.about': 'О нас',
    'nav.services': 'Услуги',
    'nav.process': 'Процесс',
    'nav.contacts': 'Контакты',
    'hero.badge': 'Профессиональная digital-команда',
    'hero.title': 'Дизайн и разработка сайтов под ключ',
    'hero.text': 'Создаём быстрые и адаптивные интерфейсы для бизнеса: продуманная UX-архитектура, современный UI и чистый код.',
    'hero.ctaPrimary': 'Обсудить проект',
    'hero.ctaSecondary': 'Что мы делаем',
    'hero.metric1': 'успешных запусков',
    'hero.metric2': 'довольных клиентов',
    'hero.metric3': 'средняя загрузка',
    'heroCard.title': 'Почему Totul',
    'heroCard.item1': 'Адаптив под все устройства',
    'heroCard.item2': 'Поддержка русского и румынского',
    'heroCard.item3': 'SEO-friendly структура',
    'heroCard.item4': 'Готово к масштабированию',
    'about.title': 'О проекте',
    'about.text1': 'Мы сделали архитектуру лендинга удобной для роста: можно легко добавлять новые блоки, формы и интеграции.',
    'about.text2': 'Весь интерфейс оптимизирован для телефонов, планшетов и десктопов, а тексты переключаются одним кликом.',
    'about.item1': 'адаптивная вёрстка',
    'about.item2': 'языка интерфейса',
    'about.item3': 'контраст по accessibility',
    'about.item4': 'зависимостей JS-фреймворков',
    'services.title': 'Услуги',
    'services.card1.title': 'UI/UX дизайн',
    'services.card1.text': 'Прототипирование, дизайн-система и визуальная концепция для web/mobile.',
    'services.card2.title': 'Frontend разработка',
    'services.card2.text': 'Чистая адаптивная HTML/CSS/JS вёрстка с упором на производительность.',
    'services.card3.title': 'Поддержка и рост',
    'services.card3.text': 'Подключение аналитики, SEO-улучшения, новые разделы и A/B-гипотезы.',
    'process.title': 'Как мы работаем',
    'process.step1.title': 'Бриф и цели',
    'process.step1.text': 'Формируем требования, аудиторию и метрики результата.',
    'process.step2.title': 'Дизайн и контент',
    'process.step2.text': 'Готовим визуальный стиль, тексты и структуру страниц.',
    'process.step3.title': 'Разработка и QA',
    'process.step3.text': 'Верстаем, тестируем на разных устройствах и выпускаем в прод.',
    'contacts.title': 'Готовы обсудить ваш проект?',
    'contacts.text': 'Напишите нам и получите план реализации с оценкой сроков.',
    'contacts.cta': 'Написать на почту',
    'footer.rights': 'Все права защищены'
  },
  ro: {
    skip: 'Mergi la conținut',
    'nav.about': 'Despre',
    'nav.services': 'Servicii',
    'nav.process': 'Proces',
    'nav.contacts': 'Contacte',
    'hero.badge': 'Echipă digital profesionistă',
    'hero.title': 'Design și dezvoltare web la cheie',
    'hero.text': 'Creăm interfețe rapide și adaptive pentru business: UX bine gândit, UI modern și cod curat.',
    'hero.ctaPrimary': 'Discută proiectul',
    'hero.ctaSecondary': 'Ce facem',
    'hero.metric1': 'lansări reușite',
    'hero.metric2': 'clienți mulțumiți',
    'hero.metric3': 'timp mediu de încărcare',
    'heroCard.title': 'De ce Totul',
    'heroCard.item1': 'Adaptiv pe toate dispozitivele',
    'heroCard.item2': 'Suport rusă și română',
    'heroCard.item3': 'Structură SEO-friendly',
    'heroCard.item4': 'Pregătit pentru scalare',
    'about.title': 'Despre proiect',
    'about.text1': 'Am construit arhitectura landing-ului pentru creștere: poți adăuga ușor blocuri, formulare și integrări.',
    'about.text2': 'Interfața este optimizată pentru telefon, tabletă și desktop, iar limba se schimbă dintr-un click.',
    'about.item1': 'machetare adaptivă',
    'about.item2': 'limbi ale interfeței',
    'about.item3': 'contrast conform accessibility',
    'about.item4': 'dependențe JS-framework',
    'services.title': 'Servicii',
    'services.card1.title': 'Design UI/UX',
    'services.card1.text': 'Prototipare, design system și concept vizual pentru web/mobile.',
    'services.card2.title': 'Dezvoltare Frontend',
    'services.card2.text': 'Machetare HTML/CSS/JS curată și adaptivă, optimizată pentru performanță.',
    'services.card3.title': 'Suport și creștere',
    'services.card3.text': 'Analitică, îmbunătățiri SEO, secțiuni noi și experimente A/B.',
    'process.title': 'Cum lucrăm',
    'process.step1.title': 'Brief și obiective',
    'process.step1.text': 'Definim cerințele, publicul și metricile de rezultat.',
    'process.step2.title': 'Design și conținut',
    'process.step2.text': 'Pregătim stilul vizual, textele și structura paginilor.',
    'process.step3.title': 'Dezvoltare și QA',
    'process.step3.text': 'Implementăm, testăm pe dispozitive diferite și lansăm în producție.',
    'contacts.title': 'Gata să discutăm proiectul dvs.?',
    'contacts.text': 'Scrieți-ne și primiți un plan de implementare cu estimare de timp.',
    'contacts.cta': 'Scrie pe email',
    'footer.rights': 'Toate drepturile rezervate'
  }
};

const STORAGE_KEY = 'totul_lang';
const translatable = document.querySelectorAll('[data-i18n]');
const langToggle = document.getElementById('langToggle');
const menu = document.querySelector('.menu');
const burger = document.querySelector('.burger');
const year = document.getElementById('year');

year.textContent = String(new Date().getFullYear());

const detectDefaultLang = () => {
  const browserLang = navigator.language?.toLowerCase() || 'ru';
  return browserLang.startsWith('ro') ? 'ro' : 'ru';
};

let currentLang = localStorage.getItem(STORAGE_KEY) || detectDefaultLang();
if (!translations[currentLang]) currentLang = 'ru';

function applyTranslations() {
  translatable.forEach((element) => {
    const key = element.dataset.i18n;
    const translated = translations[currentLang][key];
    if (translated) element.textContent = translated;
  });

  document.documentElement.lang = currentLang;
  langToggle.textContent = currentLang === 'ru' ? 'RO' : 'RU';
}

langToggle.addEventListener('click', () => {
  currentLang = currentLang === 'ru' ? 'ro' : 'ru';
  localStorage.setItem(STORAGE_KEY, currentLang);
  applyTranslations();
});

burger.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('menu--open');
  burger.setAttribute('aria-expanded', String(isOpen));
});

menu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('menu--open');
    burger.setAttribute('aria-expanded', 'false');
  });
});

applyTranslations();
