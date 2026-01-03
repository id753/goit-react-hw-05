### React + Vite

# Застосунок із маршрутизацією для пошуку фільмів за назвою. 

Використано сервіс TMDB https://developer.themoviedb.org/docs/getting-started.

При натисканні на посилання Go back (після перегляду акторів/ рев'ю) користувач має повернутися на сторінку, з якої він зайшов на сторінку з деталями фільма. Якщо сторінку було оновлено і об'єкт місцезнаходження не зберігся, то повернення користувача на "/movies”.

Навігація в додатку.
У застосунку створено наступні маршрути:

    '/' – компонент HomePage, домашня сторінка із списком популярних кінофільмів.
    '/movies' – компонент MoviesPage, сторінка пошуку кінофільмів за ключовим словом.
    '/movies/:movieId' – компонент MovieDetailsPage, сторінка із детальною інформацією про кінофільм.
    /movies/:movieId/cast – компонент MovieCast, інформація про акторський склад. Рендериться в нижній частині на сторінці MovieDetailsPage.
    /movies/:movieId/reviews – компонент MovieReviews, інформація про огляди. Рендериться в нижній частині на сторінці MovieDetailsPage.
    Якщо користувач зайшов за неіснуючим маршрутом, потрібно показувати компонент NotFoundPage, в якому є посилання Link на домашню сторінку.
    
Додано асинхронне завантаження JS-коду для маршрутів застосунку, використовуючи React.lazy та Suspense.

---

Розгорнуто на Vercel.</br>
Проект створений за допомогою Vite.</br>
Для кожного компонента у папці src/components є окрема папка, яка містить JSX файл самого React компонента та файл його стилів. Назва папки, файла компонента (з розширенням .jsx) та файла стилів (перед .module.css) однакова і відповідає назвам, вказаним у завданнях (якщо вони були)</br>
Для кожної сторінки у папці src/pages є окрема папка, яка містить JSX файл самого React компонента та файл його стилів.</br>
Для експорту компонентів використовується експорт за замовчуванням (export default).</br>
Використано Prettier. </br>
Стилізація виконана за допомогою CSS-модулів.</br>

---

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
