# Application that uses official Riot Games API to track League of Legends and Valorant stats.

## Hosted on AWS S3, served by AWS CloudFront. https://d1u51f2qashwis.cloudfront.net/

### Roadmap

- [x] Decide to use CRA or create own dev evironment with webpack
- [x] Research Riot Games API
- [x] Set up CI/CD pipeline with AWS CodePipeline
- [x] Host production build on AWS S3
- [x] Define Presentation Components
- [x] Define Container/Logic Components
- [x] Lift states to higher order components to avoid tightly coupled components
- [x] Determine whether or not all state mangagement is fine with React's useState only
- [x] Implement Redux and determine whether this is easier to manage and offers better scalability
- [x] Research and Implement styled components
- [x] Implement User Accounts
- [x] Research .NET Core
- [x] Create mock DB with Express for testing purposes
- [x] Research DynamoDB
- [x] Develop .NET Core API to use with DynamoDB
- [x] Research Service oriented architecture
- [] Research Typescript
- [] Implememt Typescript
- [] Research Apollo GraphQL
- [] Implement Apollo GraphQL
- [] Research Emotion styled components
- [] Implement Emotion styled components

### Things to keep in mind

- Avoid coupling components
- model view controller architecture
- Keep logic out of Presentational Components
- Attempt to follow test driven development methodology

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
