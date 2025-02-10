# Zara Challenge - Ari Bussi

This challenge is a web application for browsing, searching, and managing a mobile phone catalog.

## Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/AriBussi/alten-challenge
   ```

2. **Install dependencies**:

   ```bash
   cd alten-challenge
   npm i
   ```

3. **Create a `.env.local` file**:

   You need to create a `.env.local` file in the root of the project with your API key.

   ```plaintext
   VITE_API_KEY=YourKeyHere
   ```

4. **Run the app locally**:

   ```bash
   npm run dev
   ```

   The app will be available at [http://localhost:5173](http://localhost:5173).

5. **Run e2e**:

   ```bash
   npx cypress open
   ```

## Architecture

- **React** is used for building the UI and managing the application state.
- **React Router** handles navigation between different views.
- **Vite** is used as the build tool for faster development and bundling.
- The **cart** is persisted using `localStorage`.
- **Styled Components** is used for styling the application, providing scoped, component-level styles.
- The app makes use of **API calls** to retrieve and filter mobile phones dynamically based on user search input.
- **ESLint** is used to ensure consistent code style.
- **ESLint** cypress.io is used for e2e coverage.

## Key Features

- **Real-time search**: Filters phones by name or brand.
- **Responsive design**: Fully functional on mobile, tablet, and desktop.
- **Persistent cart**: Items in the cart are stored on page refresh.
- **Dynamic product details**: On the product detail page, users can view additional specifications and select variations like color and storage.

## Potential improvement with extra time

- **Testing**: Unit tests to ensure application reliability.

- **A11y**: Accessibility improvements. While most a11y is achieved through good design and a semantic markup, there is still room for improvements if the aim is AAA standard.

- **Type safety**: Typescript could be added to enhance code quality and developer experience.

- **Backend Image Standardization**: : Standardizing image sizes on the backend would improve the app's visual consistency and overall user experience.

- **Front UI**: Adding transitions, loaders and hovers would provide a much smoother and complete look and feel on the UX.
