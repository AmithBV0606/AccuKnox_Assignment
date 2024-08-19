# Accuknox Assignment

This is a web application project built using React, Vite, and Redux Toolkit. The project includes routing, state management, and styling with TailwindCSS.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (version 14 or later)
- npm (version 6 or later) or yarn (version 1.22 or later)

## Installation

### 1. Clone the Repository

To get a copy of this project, you can either download the ZIP file or clone the repository using Git.

#### Clone using Git:

```bash
git clone <repository-url>
```
NOTE : Replace `<repository-url>` with the actual URL of the repository.

### Or Download the ZIP:
- Click on the "Code" button at the top right of this repository.
- Select "Download ZIP".
- Extract the ZIP file on your local machine.

### 2. Once you have the project files, navigate to the project directory:
```bash
cd accuknox-assignment
```

### 3. Install Dependencies
Install the required dependencies using npm or yarn:

#### Using npm:
```bash
npm install
```

#### Using yarn:
```bash
yarn install
```

## Running the Project

### 1. JSON Server

This project includes a JSON server for mocking API requests. To run the JSON server:

```bash
npx json-server --watch data/db.json --port 3000
```

### 2. Start the Development Server

To run the project locally, start the development server:
```bash
npm run dev
```
OR

```bash
yarn dev
```

NOTE : This will start the Vite development server. 

    After setp-1(JSON Server) and step-2(Start the Development Server), You can view the application in your browser by navigating to http://localhost:5173 and the JSON server will be running on the port 3000. The remaining steps are optional.

### 3. Build the Project(Optional)

To build the project for production, use:
```bash
npm run build
```

OR

```bash
yarn build
```

NOTE : This will create an optimized production build in the dist folder.

### 4. Preview the Production Build

To preview the production build locally, run:
```bash
npm run preview
```

OR

```bash
yarn preview
```

### 5. Lint the Project

To lint your code and check for any issues:
```bash
npm run lint
```

OR

```bash
yarn lint
```

## Additional Notes

- The project uses TailwindCSS for styling, and ESLint for code linting.