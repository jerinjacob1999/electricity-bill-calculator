# My Next.js App

This is a Next.js application that calculates the total wattage usage and estimated bill based on user input. The application is styled using CSS and can be deployed to GitHub Pages.

## Features

- Add multiple items with name, wattage, and hours used.
- Calculate total wattage usage.
- Calculate estimated bill cost.
- Display items in a scrollable table with a fixed header.
- Animated gradient text.

## Getting Started

These instructions will help you set up the project on your local machine for development and testing purposes.

### Prerequisites

- Node.js v20
- pnpm
- TypeScript

### Installing

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/my-next-app.git
   cd my-next-app
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

### Development

To start the development server, run:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building and Exporting for Production

To build the application for production, run:

```bash
pnpm build
```

To export the application as static HTML, run:

```bash
pnpm export
```

The exported files will be located in the `out` directory.

### Deploying to GitHub Pages

1. **Install `gh-pages`:**

   ```bash
   pnpm add -D gh-pages
   ```

2. **Add the deploy script to `package.json`:**

   ```json
   {
     "scripts": {
       "deploy": "pnpm build && pnpm export && touch out/.nojekyll && gh-pages -d out"
     }
   }
   ```

3. **Deploy the application:**

   ```bash
   pnpm deploy
   ```

4. **Configure GitHub Pages:**

   Go to the settings of your GitHub repository and under the "Pages" section, set the source to `gh-pages` branch and the folder to `/root`.

## Contributing

Feel free to submit issues and pull requests to help improve this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
```

### Explanation

- **Project Overview**: Describes the project and its features.
- **Getting Started**: Provides instructions for setting up the project locally.
- **Development**: Details on how to start the development server.
- **Building and Exporting**: Instructions for building and exporting the application for production.
- **Deploying to GitHub Pages**: Steps to deploy the static site to GitHub Pages.
- **Contributing and License**: Sections for contributing and license information.

This `README.md` should give a clear understanding of how to set up, develop, build, and deploy your Next.js project using Node.js 20, pnpm, and TypeScript.