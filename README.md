# NoteSwap

NoteSwap is a React-based web application for sharing and renting notes.

## Getting Started

### Prerequisites

-   Node.js (v20.17.0)
-   npm (v10.8.2)

### Installation

1. Clone the repository:

    ```
    git clone https://github.com/<username>/<repository>.git
    cd <repository>
    ```

2. Install dependencies:

    ```
    npm install
    ```

3. Start the development server:
    ```
    npm run dev
    ```

## Project Structure

-   `src/`: Contains the source code
    -   `components/`: React components
    -   `pages/`: Page components
    -   `App.jsx`: Main application component
    -   `main.jsx`: Entry point
-   `public/`: Static assets
-   `index.html`: HTML template

## Contributing

1. Fork the repository
2. Create a new branch: `git checkout -b feature-branch-name`
3. Make your changes
4. Run Prettier to format your code:
    ```
    npx prettier --write .
    ```
5. Run ESLint to check for code quality issues:
    ```
    npm run lint
    ```
6. Fix any linting errors or warnings
7. Commit your changes: `git commit -m 'Add some feature'`
8. Push to the branch: `git push origin feature-branch-name`
9. Submit a pull request

### Code Style and Linting

This project uses Prettier for code formatting and ESLint for code quality checks.

#### Prettier

The Prettier configuration is defined in `.prettierrc.json`.

To format your code before committing:

1. Run Prettier:

    ```
    npx prettier --write .
    ```

2. Check for any formatting issues:
    ```
    npx prettier --check .
    ```

Prettier will automatically format your code according to the project's style guidelines.

#### ESLint

ESLint is configured to check for code quality issues and enforce best practices.

To run ESLint:

```
npm run lint
```

This will check all JavaScript and JSX files in the project for linting issues. Fix any errors or warnings before committing your changes.

## Built With

-   [React](https://reactjs.org/) - v18.3.1
-   [React DOM](https://reactjs.org/docs/react-dom.html) - v18.3.1
-   [React Router DOM](https://reactrouter.com/) - v6.26.2
-   [Vite](https://vitejs.dev/) - v5.4.1
-   [Tailwind CSS](https://tailwindcss.com/) - v3.4.11

## Development Dependencies

-   [@eslint/js](https://eslint.org/) - v9.9.0
-   [@types/react](https://www.npmjs.com/package/@types/react) - v18.3.3
-   [@types/react-dom](https://www.npmjs.com/package/@types/react-dom) - v18.3.0
-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react) - v4.3.1
-   [autoprefixer](https://github.com/postcss/autoprefixer) - v10.4.20
-   [eslint](https://eslint.org/) - v9.9.0
-   [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) - v7.35.0
-   [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks) - v5.1.0-rc.0
-   [eslint-plugin-react-refresh](https://github.com/ArnaudBarre/eslint-plugin-react-refresh) - v0.4.9
-   [globals](https://github.com/sindresorhus/globals) - v15.9.0
-   [postcss](https://postcss.org/) - v8.4.45
-   [prettier](https://prettier.io/) - v3.3.3

## Scripts

-   `npm run dev`: Start the development server
-   `npm run build`: Build the production-ready app
-   `npm run lint`: Run ESLint
-   `npm run preview`: Preview the built app
