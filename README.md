This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

npm install @nextui-org/react
npm run dev
npm install --save-dev @iconify/tailwind

# db migrations
python manage.py makemigrations
python manage.py migrate

after that load hue_music_backup.sql


To run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

To run the Django server:
```bash
python manage.py runserver
# or
python manage.py runserver
# or
python manage.py runserver
# or
python manage.py runserver
```

Open [http://127.0.0.1:8000](http://127.0.0.1:8000) with your browser to see the result.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.



## Web приложение

- Frontend: Next.js, Typescript, Tailwind.css, Nextui, Iconify
- Backend: Python Django Rest Framework


## Настройки Tailwind custom

Настройки использующихся цветов и начертаний шрифтов указаны в файле tailwind.config.ts 




- theme: {
    - colors: {
      "primary-green": {
          DEFAULT: "#27AE60",
          100: "#9bd8b5",
        },
      'dark': '#333',
      'gray-100': '#828282',
      'gray-200': '#4f4f4f',
      'gray-for-text-bold': '#333',
      'gray-light': '#fafafa',
      'white': '#fff',
    },
    - fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['SF Pro Display', 'serif'],
    },



 
