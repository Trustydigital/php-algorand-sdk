# Исправление загрузки логотипов партнёров при первой загрузке страницы

## Проблема
Логотипы партнёров не загружаются при первой загрузке страницы trusty.digital.

## Возможные причины и решения

### 1. Изображения загружаются через JavaScript до готовности DOM

**Решение:** Убедитесь, что код выполняется после полной загрузки DOM:

```javascript
// Вместо этого:
document.addEventListener('DOMContentLoaded', function() {
    loadPartnerLogos();
});

// Используйте это (для гарантии загрузки всех ресурсов):
window.addEventListener('load', function() {
    loadPartnerLogos();
});

// Или используйте оба обработчика:
function initPartnerLogos() {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadPartnerLogos);
    } else {
        loadPartnerLogos();
    }
}
initPartnerLogos();
```

### 2. Lazy loading не срабатывает при первой загрузке

**Решение:** Добавьте явную загрузку изображений при инициализации:

```javascript
function loadPartnerLogos() {
    const logoImages = document.querySelectorAll('.partner-logo img[data-src]');
    
    logoImages.forEach(img => {
        // Убедитесь, что изображения загружаются сразу при первой загрузке
        if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        }
    });
    
    // Также загрузите изображения, которые видны в viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    }, {
        rootMargin: '50px' // Начните загрузку за 50px до появления в viewport
    });
    
    logoImages.forEach(img => {
        if (img.dataset.src) {
            observer.observe(img);
        }
    });
}
```

### 3. Изображения загружаются через API, но запрос не выполняется

**Решение:** Убедитесь, что API запрос выполняется при первой загрузке:

```javascript
async function loadPartnerLogos() {
    try {
        const response = await fetch('/api/partners');
        const partners = await response.json();
        
        const logoContainer = document.querySelector('.partner-logos');
        if (logoContainer) {
            partners.forEach(partner => {
                const img = document.createElement('img');
                img.src = partner.logoUrl;
                img.alt = partner.name;
                img.loading = 'eager'; // Принудительная загрузка без lazy loading
                img.onload = () => {
                    img.classList.add('loaded');
                };
                logoContainer.appendChild(img);
            });
        }
    } catch (error) {
        console.error('Ошибка загрузки логотипов партнёров:', error);
    }
}

// Вызовите сразу при загрузке страницы
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadPartnerLogos);
} else {
    loadPartnerLogos();
}
```

### 4. Использование preload для критических изображений

**Решение:** Добавьте preload в `<head>` для важных логотипов:

```html
<head>
    <!-- Preload критических логотипов партнёров -->
    <link rel="preload" as="image" href="/images/partners/logo1.png">
    <link rel="preload" as="image" href="/images/partners/logo2.png">
    <link rel="preload" as="image" href="/images/partners/logo3.png">
</head>
```

### 5. Убедитесь, что изображения не скрыты при загрузке

**Решение:** Проверьте CSS и убедитесь, что изображения видны:

```css
.partner-logo img {
    opacity: 0;
    transition: opacity 0.3s;
}

.partner-logo img.loaded {
    opacity: 1;
}

/* Или используйте visibility вместо display: none */
.partner-logo {
    visibility: visible; /* вместо display: none */
}
```

### 6. Полное решение с обработкой ошибок

```javascript
(function() {
    'use strict';
    
    function loadPartnerLogos() {
        const logoContainer = document.querySelector('.partner-logos, #partner-logos, [data-partner-logos]');
        
        if (!logoContainer) {
            console.warn('Контейнер для логотипов партнёров не найден');
            return;
        }
        
        // Загрузить изображения из data-атрибутов
        const lazyImages = logoContainer.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => {
            const imageUrl = img.dataset.src;
            if (imageUrl) {
                const image = new Image();
                image.onload = function() {
                    img.src = imageUrl;
                    img.removeAttribute('data-src');
                    img.classList.add('loaded');
                };
                image.onerror = function() {
                    console.error('Ошибка загрузки изображения:', imageUrl);
                    img.classList.add('error');
                };
                image.src = imageUrl;
            }
        });
        
        // Загрузить изображения через API, если нужно
        if (logoContainer.dataset.apiUrl) {
            fetch(logoContainer.dataset.apiUrl)
                .then(response => response.json())
                .then(partners => {
                    partners.forEach(partner => {
                        const img = document.createElement('img');
                        img.src = partner.logoUrl;
                        img.alt = partner.name;
                        img.loading = 'eager';
                        img.className = 'partner-logo-img';
                        logoContainer.appendChild(img);
                    });
                })
                .catch(error => {
                    console.error('Ошибка загрузки партнёров через API:', error);
                });
        }
    }
    
    // Инициализация при загрузке страницы
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadPartnerLogos);
    } else {
        loadPartnerLogos();
    }
    
    // Также попробуйте загрузить после полной загрузки страницы
    window.addEventListener('load', function() {
        // Проверить, загрузились ли изображения
        const unloadedImages = document.querySelectorAll('.partner-logo img:not(.loaded):not(.error)');
        if (unloadedImages.length > 0) {
            console.log('Повторная попытка загрузки', unloadedImages.length, 'изображений');
            loadPartnerLogos();
        }
    });
})();
```

## Рекомендации

1. **Проверьте консоль браузера** на наличие ошибок загрузки изображений
2. **Проверьте Network tab** в DevTools, чтобы увидеть, загружаются ли изображения
3. **Убедитесь, что пути к изображениям правильные** и доступны
4. **Проверьте CORS**, если изображения загружаются с другого домена
5. **Используйте loading="eager"** для критических изображений вместо lazy loading

## Тестирование

После применения исправлений:
1. Очистите кеш браузера (Ctrl+Shift+Delete)
2. Откройте сайт в режиме инкогнито
3. Проверьте, загружаются ли логотипы при первой загрузке
4. Проверьте консоль на наличие ошибок
