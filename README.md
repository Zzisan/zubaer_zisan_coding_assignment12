# 🚀 Component Library - Coding Assignment 13

This project is a _React-based UI component library_ developed using _Create React App (TypeScript)_ and _Storybook_. It demonstrates the creation, testing, and deployment of reusable UI components.

The production version is _containerized with Docker_ and serves the app on localhost:8018.

---

## 📌 Project Overview

### _Development:_

- Built with _Create React App_ using TypeScript.
- Integrated with _Storybook_ for interactive component development.
- Uses _Styled Components_ for styling.

### _Component Library:_

The project includes _reusable UI components_:
✅ _Button_  
✅ _Label_  
✅ _Text_  
✅ _Table_ (with header, row, cell, footer)  
✅ _Dropdown_  
✅ _Radio Button_  
✅ _Image_  
✅ _Hero Image_  
✅ _Card_

Each component follows best practices and has:

- A .tsx file for implementation.
- A .types.tsx file for prop definitions.
- A .stories.tsx file for Storybook.
- A .test.tsx file for unit tests.
- An index.ts file for exports.

### _Production & Deployment:_

- A _Dockerfile_ is used to containerize the app, which is served on localhost:8018.
- A _GitHub Actions workflow_ is set up to automate builds and tests.
- _Pre-commit hooks (Husky)_ ensure linting and formatting checks.

## Project Summary

Script Summary:

1.ESLint & Prettier Setup:

Installed ESLint, Prettier, and associated plugins.

Configured ESLint with a flat configuration (eslint.config.mjs) and defined Prettier rules in .prettierrc.

Verified code quality by running lint and prettier checks.

2.Husky & lint-staged Pre-commit Hooks:

Installed Husky and lint-staged.

Configured a pre-commit hook to automatically run ESLint, Prettier, and tests on staged files, blocking commits if issues are found.

3.Dockerization:

Generated a production build using npm run build.

Created a Dockerfile that sets a working directory (named according to the assignment), copies the build output, and uses NGINX to serve the app.

Built and ran the Docker container, making the production app accessible on localhost.

4.CI/CD with GitHub Actions:

Set up a GitHub Actions workflow (.github/workflows/ci.yml) to run ESLint, Prettier, and tests on every push and pull request.

Ensured automated quality checks to catch any issues before merging code.

5.Version Control & Documentation:

Managed changes via Git and GitHub with proper branching and Pull Requests.

Documented all steps and commands in this README for clarity and reproducibility.

## 🚀 How to Run the Project

### _⿡ Clone the Repository:_

sh
git clone https://github.com/your-username/your-repo.git
cd your-repo

### _⿢ Install Dependencies:_

sh
npm install

### _⿣ Start the React Development Server:_

sh
npm start

✅ The application will open at _[http://localhost:3000](http://localhost:3000)_.

### _⿤ Launch Storybook:_

sh
npm run storybook

✅ Open _[http://localhost:6006](http://localhost:6006)_ to interact with components.

---

## 🛠 Running Tests & Linting

### _Run Tests:_

sh
npm run test

✅ All tests should pass successfully.

### _Run ESLint (Code Quality Check):_

sh
npm run lint

### _Run Prettier (Code Formatting):_

sh
npm run prettier

---

## 📦 Production Mode with Docker

### _⿡ Build the Production Version:_

sh
npm run build

✅ This creates an optimized production build inside the build/ folder.

### _⿢ Build the Docker Image:_

sh
docker build -t anvar_ui_garden .

### _⿣ Run the Docker Container:_

sh
docker run -p 8083:8083 anvar_ui_garden

✅ Open _[http://localhost:8083](http://localhost:8083)_ to view the production build.

---

## 🛡 GitHub Actions & Pre-commit Hooks

### _GitHub Actions_

- The repository includes a _CI/CD pipeline_ that runs automated tests and linting on every push.
- Build failures will be reported automatically.

### _Pre-commit Hooks (Husky)_

- Pre-commit checks _ESLint, Prettier, and tests_ to ensure code quality.
- To manually run the checks:

sh
npm run lint && npm run prettier && npm run test

---

## 📄 Submission Details

- _GitHub Repository:_ https://github.com/asyed04/coding-assignment-13.git
- _Docker Image:_ Runs on localhost:8083
- _Storybook URL:_ localhost:6006

🎯 *This project demonstrates the ability to create, test, and deploy a UI component library efficiently using modern web development tools.* 🚀
