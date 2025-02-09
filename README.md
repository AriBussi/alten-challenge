# Zara Challenge - Ari Bussi

This challenge is a web application for browsing, searching, and managing a mobile phone catalog.

## Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/AriBussi/alten-challenge
   ```

2. **Install dependencies**:

   ```bash
   npm install
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

## Architecture

- **React** is used for building the UI and managing the application state.
- **React Router** handles navigation between different views.
- **Vite** is used as the build tool for faster development and bundling.
- The **cart** is persisted using `localStorage`.
- **Styled Components** is used for styling the application, providing scoped, component-level styles.
- The app makes use of **API calls** to retrieve and filter mobile phones dynamically based on user search input.
- **ESLint** is used to ensure consistent code style.

## Key Features

- **Real-time search**: Filters phones by name or brand.
- **Responsive design**: Fully functional on mobile, tablet, and desktop.
- **Persistent cart**: Items in the cart are stored on page refresh.
- **Dynamic product details**: On the product detail page, users can view additional specifications and select variations like color and storage.

## Things to Improve with Extra Time

- **Testing**: Unit tests to ensure application reliability.
- **TypeScript**: Add type safety to enhance code quality and developer experience.
- **a11y**: Accessibility improvements for a more inclusive app.
