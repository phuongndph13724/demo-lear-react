
# base-reactjs-project

A starter project for ReactJS with Vite, configured for development and production environments. This project includes essential tools and libraries to help you kickstart your development.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Dev Dependencies](#dev-dependencies)
- [Environment Variables](#environment-variables)
- [Detailed Library Descriptions](#detailed-library-descriptions)
- [License](#license)

## Installation

1. Clone the repository:
   \`\`\`bash
   git clone <repository-url>
   cd base-reactjs-project
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

## Usage

### Development

To start the development server with the development environment variables:

\`\`\`bash
npm run dev
\`\`\`

### Production

To build the project for production:

\`\`\`bash
npm run build
\`\`\`

To preview the production build locally:

\`\`\`bash
npm run preview
\`\`\`

### Linting

To lint the project:

\`\`\`bash
npm run lint
\`\`\`

To format the code and fix linting issues:

\`\`\`bash
npm run format:fix
\`\`\`

## Scripts

- \`start\`: Start the Vite server using the default environment variables.
  \`\`\`bash
  npm run start
  \`\`\`

- \`dev\`: Start the Vite server using the development environment variables.
  \`\`\`bash
  npm run dev
  \`\`\`

- \`build\`: Build the project using the default environment variables.
  \`\`\`bash
  npm run build
  \`\`\`

- \`lint\`: Lint the project using ESLint.
  \`\`\`bash
  npm run lint
  \`\`\`

- \`format:fix\`: Format the code with Prettier and fix linting issues.
  \`\`\`bash
  npm run format:fix
  \`\`\`

- \`preview\`: Preview the production build locally.
  \`\`\`bash
  npm run preview
  \`\`\`

## Dependencies

- **axios**: Promise based HTTP client for the browser and node.js.
- **i18next-browser-languagedetector**: Language detector for i18next for browser.
- **jwt-decode**: Decode JWT tokens.
- **lodash.debounce**: The lodash method debounce exported as a module.
- **react**: JavaScript library for building user interfaces.
- **react-dom**: Entry point to the DOM and server renderers for React.
- **react-hook-form**: Performant, flexible and extensible forms with easy-to-use validation.
- **react-i18next**: Powerful internationalization framework for React / React Native.
- **react-router-dom**: DOM bindings for React Router.

## Dev Dependencies

- **@testing-library/dom**: Simple and complete DOM testing utilities that encourage good testing practices.
- **@testing-library/react**: Simple and complete React DOM testing utilities that encourage good testing practices.
- **@types/react**: TypeScript definitions for React.
- **@types/react-dom**: TypeScript definitions for React DOM.
- **@vitejs/plugin-react**: Vite plugin for React.
- **autoprefixer**: Parse CSS and add vendor prefixes to CSS rules using values from Can I Use.
- **env-cmd**: Setting environment variables from a file.
- **eslint**: A fully pluggable tool for identifying and reporting on patterns in JavaScript.
- **eslint-config-prettier**: Turns off all rules that are unnecessary or might conflict with Prettier.
- **eslint-plugin-prettier**: Runs Prettier as an ESLint rule and reports differences as individual ESLint issues.
- **eslint-plugin-react**: React specific linting rules for ESLint.
- **eslint-plugin-react-hooks**: ESLint rules for React Hooks.
- **eslint-plugin-react-refresh**: ESLint plugin for React Refresh.
- **postcss**: A tool for transforming CSS with JavaScript plugins.
- **prettier**: An opinionated code formatter.
- **prettier-plugin-tailwindcss**: Prettier plugin for Tailwind CSS class sorting.
- **tailwindcss**: A utility-first CSS framework for rapidly building custom designs.
- **vite**: Next generation front-end tooling.

## Environment Variables

This project uses \`env-cmd\` to manage environment variables. Create \`.env\` and \`.env.development\` files at the root of the project to set your environment variables for production and development environments, respectively.

### Example \`.env\` file:
\`\`\`
VITE_API_URL=https://api.example.com
\`\`\`

### Example \`.env.development\` file:
\`\`\`
VITE_API_URL=http://localhost:3000
\`\`\`

## Detailed Library Descriptions

### axios
Axios is a promise-based HTTP client that works in the browser and Node.js. It provides a simple and easy-to-use API to make HTTP requests, handle responses, and manage errors.

### i18next-browser-languagedetector
This library is a language detector for i18next for use in the browser. It helps in detecting the user's preferred language and is used for internationalization.

### jwt-decode
A small library that helps in decoding JSON Web Tokens (JWT). It can be used to extract information from JWTs without needing to validate the token.

### lodash.debounce
This is a debounce function from lodash, which limits the rate at which a function can fire. Useful for optimizing performance in scenarios like window resizing or scrolling.

### react
A JavaScript library for building user interfaces, particularly for single-page applications. It allows developers to create reusable UI components.

### react-dom
Provides DOM-specific methods that can be used at the top level of a web app to enable an efficient way of managing the DOM elements of the web page.

### react-hook-form
A performant, flexible, and extensible forms library for React. It allows easy integration of form validation and error handling.

### react-i18next
A powerful internationalization framework for React / React Native which is based on i18next. It provides components and hooks to integrate localization into your React application.

### react-router-dom
DOM bindings for React Router. It enables navigation among views of various components in a React application, allows changing the browser URL, and keeps UI in sync with the URL.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
