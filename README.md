# Crowdfunding – Farming Fields Platform

A React-based crowdfunding application for exploring farming fields, viewing their details on an interactive map, and accessing investment-related features.

## Features

- **Fields Overview** – Browse available farming fields displayed as cards with information about their location, size, price, and availability.
- **Interactive Map** – Explore fields on a map using custom markers and geographic coordinates.
- **Authentication** – Log in using username and password with API-based authentication.
- **Protected Routes** – Restrict access to selected pages to authenticated users.
- **Responsive Layout** – Adapt the interface to different screen sizes.
- **Loading and Error States** – Display skeleton loaders, validation messages, and error feedback when needed.

## Tech Stack

- **React** – Build the user interface with reusable components.
- **React Router** – Handle client-side routing and navigation.
- **Redux Toolkit** – Manage application state.
- **RTK Query** – Handle API requests, caching, and loading states.
- **Firebase Firestore** – Store and retrieve farming field data.
- **DummyJSON Auth API** – Provide authentication functionality.
- **CSS** – Style components and implement responsive layouts.
- **Webpack** – Bundle the application and run the development server.
- **Babel** – Transpile modern JavaScript and JSX.

## Dependencies

### Production dependencies

- `react`
- `react-dom`
- `react-router`
- `@reduxjs/toolkit`
- `react-redux`
- `firebase`
- `lucide-react`
- `react-leaflet`

## Getting Started

### Prerequisites

- Node.js (use a version compatible with the project's dependencies)
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/anastatiyaartsisheuskaya-ctrl/Crowdfunding.git
   ```

2. Navigate to the project directory:

   ```bash
   cd crowdfunding
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Configuration

Configure Firebase using your Firebase project credentials. Store configuration values in environment variables if the application is set up to read them from an environment file.

Make sure Firestore is enabled and its security rules allow the intended application requests.

Authentication uses the DummyJSON API and does not require a separate backend server for this demo.

### Run the Application

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in your terminal `http://localhost:3000`.

### Build for Production

If a production build script is configured, run:

```bash
npm run build
```

## Project Structure

The application follows a modular architecture, separating features, shared UI components, API logic, and pages.

```text
src/
├── app/          # Application setup, routing and store
├── modules/      # Feature modules, including authentication and fields
├── pages/        # Page-level components
├── shared/       # Reusable UI components and shared utilities
├── styles/       # Global styles for the app
└── api/          # Shared API configuration, if applicable
```

## Deploy

https://crowdfunding-sigma-jet.vercel.app
