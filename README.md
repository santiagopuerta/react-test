# React Test

This test build an application with "cards" for the display of posts made by a user using React + TypeScript + Vite. The application use the free API [http://jsonplaceholder.typicode.com](http://jsonplaceholder.typicode.com) to get the posts and the users data.

## Technologies

The application was built using the following technologies:
- React
- React Router
- RTK Query
- TypeScript
- Vite
- Bootstrap 5
- SASS
- Cypress
- ESLint
- Prettier

## Instalation

You can run the following commands:

```bash
# Clone this repo
git clone git@github.com:santiagopuerta/react-test.git
cd react-test/

# Install the dependencies
npm install

# Configure the environment variables
cp .env.example .env

# Add in .env VITE_API_URL the backend URL in this case https://jsonplaceholder.typicode.com

# Run the application
npm run dev
```

## Tests

To run the tests you can use the following command:

```bash
npm run cypress-test
```

## Live Demo

You can see a live demo of the application in the following link: [https://66963f037762e40008e0a88e--bespoke-biscochitos-e7519c.netlify.app/](https://66963f037762e40008e0a88e--bespoke-biscochitos-e7519c.netlify.app/) thanks to Netlifys.
