# Playwright API Automation Framework

This project is an API automation framework using Playwright. It is designed to test the RESTful Booker API, providing a suite of tests for various booking operations.

## Project Setup

To set up the project, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone git@github.com:imshaiknasir/pw-API_testing.git
   cd pw-API_testing
   ```

2. **Install dependencies:**

   Ensure you have Node.js installed. Then, run the following command to install the necessary dependencies:

   ```bash
   npm ci
   ```

3. **Environment Configuration:**

   Create a `.env` file in the root directory to configure any environment variables if needed. The project uses `dotenv` to manage environment variables.

## Running Tests

The project includes a variety of test scripts to cover different aspects of the API. Below are the commands to run these tests:

- **Run all tests:**

  ```bash
  npm test
  ```

- **Generate and view test reports:**

  To run tests and generate a report, use:

  ```bash
  npm run test:with_report
  ```

- **Run smoke tests:**

  These are a subset of tests marked with the `@smoke` tag.

  ```bash
  npm run smoke-tests
  ```

- **Run tests by HTTP method:**

  - **GET requests:**

    ```bash
    npm run test-get
    ```

  - **POST requests:**

    ```bash
    npm run test-post
    ```

  - **DELETE requests:**

    ```bash
    npm run test-delete
    ```

  - **PUT requests:**

    ```bash
    npm run test-put
    ```

  - **PATCH requests:**

    ```bash
    npm run test-patch
    ```

## Test Data

The `test-data` directory contains JSON files used for testing various booking scenarios. These files include:

- `booking.json`: Default booking data.
- `post-booking.json`: Data for creating a new booking.
- `update-booking.json`: Data for updating an existing booking.

## Configuration

The `playwright.config.ts` file contains the configuration for Playwright, including test directories, viewport settings, and base URL for the API.

## Author

Nasir

## License

This project is licensed under the ISC License.
