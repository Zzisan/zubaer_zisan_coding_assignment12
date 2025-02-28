# Component Library - Coding Assignment 12

This project is a React-based UI component library developed using Create React App (TypeScript) and Storybook. It demonstrates the creation, testing, and deployment of reusable UI components.

The production version is containerized with Docker and served using NGINX on `localhost:8083`.

## 📌 Project Overview
### **Development:**
- Built with **Create React App** using TypeScript.
- Integrated with **Storybook** for interactive component development and testing.
- Uses **Styled Components** for styling.

### **Component Library:**
The project includes reusable UI components:
✅ **Button**
✅ **Label**
✅ **Text**
✅ **Table** (with header, row, cell, footer)
✅ **Dropdown**
✅ **Radio Button**
✅ **Image**
✅ **Hero Image**
✅ **Card**

Each component follows best practices and has:
- A `.tsx` file for implementation.
- A `.types.tsx` file for prop definitions.
- A `.stories.tsx` file for Storybook.
- A `.tests.tsx` file for unit tests.
- An `index.ts` file for exports.

### **Production & Deployment:**
- A production build is generated via `npm run build`.
- A Dockerfile is used to containerize the app, which is served by **NGINX**.
- The Docker container is named **zubaer_zisan_coding_assignment12** and hosts the files in the working directory `zubaer_zisan_ui_garden`.

---

## 🚀 How to Run the Project

### **Development Mode**
#### **1️⃣ Clone the Repository:**
```bash
git clone https://github.com/Zzisan/zubaer_zisan_coding_assignment12.git
cd zubaer_zisan_coding_assignment12
```

#### **2️⃣ Install Dependencies:**
```bash
npm install
```

#### **3️⃣ Start the React Development Server:**
```bash
npm start
```
✅ The application will open at **[http://localhost:3000](http://localhost:3000)**

#### **4️⃣ Launch Storybook:**
```bash
npm run storybook
```
✅ Open **[http://localhost:6006](http://localhost:6006)** to interact with components.

---

## 🛠️ Running Tests
To verify the components work correctly, run:
```bash
npm test
```
✅ All tests should pass successfully.

---

## 📦 Production Mode with Docker
### **1️⃣ Build the Production Version:**
```bash
npm run build
```
✅ This creates an optimized production build inside the `build/` folder.

### **2️⃣ Build the Docker Image:**
```bash
docker build -t zubaer_zisan_coding_assignment12 .
```

### **3️⃣ Run the Docker Container:**
```bash
docker run -p 8083:80 zubaer_zisan_coding_assignment12
```
✅ Open **[http://localhost:8083](http://localhost:8083)** to view the production build.

---

## 📤 Submission Details
- The **GitHub repository** is [here](https://github.com/Zzisan/zubaer_zisan_coding_assignment12).
- The **Docker image** is built and runs on `localhost:8083`.
- The **Storybook** components can be tested at `localhost:6006`.

🎯 **This project demonstrates the ability to create, test, and deploy a UI component library efficiently using modern web development tools.** 🚀
