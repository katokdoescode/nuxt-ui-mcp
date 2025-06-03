# Nuxt UI MCP Server

This project implements a Model Context Protocol (MCP) server for Nuxt UI, exposing Nuxt UI documentation and resources via a standardized API. It is built with TypeScript and Express, and leverages the @modelcontextprotocol/sdk.

## Table of Contents

- [Nuxt UI MCP Server](#nuxt-ui-mcp-server)
	- [Table of Contents](#table-of-contents)
	- [Features](#features)
	- [Prerequisites](#prerequisites)
	- [Installation](#installation)
		- [1. Clone the repository:](#1-clone-the-repository)
		- [2. Install dependencies:](#2-install-dependencies)
	- [Running the Server](#running-the-server)
		- [Build](#build)
		- [Start (Foreground)](#start-foreground)
		- [Start (Background with PM2)](#start-background-with-pm2)
		- [Stop (Background/PM2)](#stop-backgroundpm2)
		- [Delete PM2 Process](#delete-pm2-process)
		- [View PM2 Logs](#view-pm2-logs)
		- [Development Mode](#development-mode)
	- [Environment Variables](#environment-variables)
	- [Testing](#testing)
	- [Contributing](#contributing)
	- [License](#license)

## Features

- Serves Nuxt UI documentation and resources via MCP endpoints
- Express-based HTTP server
- Supports session-based streaming via MCP

## Prerequisites

- Node.js v18 or higher
- npm v9 or higher

## Installation

### 1. Clone the repository:

   ```sh
   git clone <your-fork-or-repo-url>
   cd nuxt-ui-mcp
   ```
### 2. Install dependencies:

   ```sh
   npm install
   ```

## Running the Server

### Build

First, compile the TypeScript source:
```sh
npm run build
```

### Start (Foreground)

```sh
npm start
```

### Start (Background with PM2)

```sh
npm run start:bg
```

### Stop (Background/PM2)

```sh
npm run stop:bg
```

### Delete PM2 Process

```sh
npm run delete:bg
```

### View PM2 Logs

```sh
npm run logs:bg
```

### Development Mode

Runs the server and the MCP inspector concurrently:
```sh
npm run dev
```

The server will listen on the port specified by the `DEFAULT_PORT` environment variable, or `3000` if not set.

## Environment Variables

Create a `.env` file in the project root if you need to override defaults. Example:
```
DEFAULT_PORT=3000
```

## Testing

There are currently **no automated tests** or test scripts for this project. If you would like to contribute tests, see the [Contributing](#contributing) section.

## Contributing

1. Fork this repository and create a new branch for your feature or fix.
2. Ensure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
3. Run `npm install` to install dependencies.
4. Use `npm run build` to compile TypeScript before submitting a PR.
5. Follow the existing code style and TypeScript strictness (see `tsconfig.json`).
6. If adding features or fixing bugs, please document your changes in the PR description.

## License

MIT
