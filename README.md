# FactoryPulse

> A focused industrial operations dashboard for monitoring and managing a manufacturing machine fleet.

FactoryPulse gives plant teams a clear view of machine activity, production output, and operational status. The interface is designed for quick daily decisions: review the fleet, filter machines by status, inspect production rates, and register new equipment without leaving the dashboard.

## Features

- **Operations dashboard** with high-level machine status indicators.
- **Machine fleet management** with searchable, filterable machine records.
- **Machine registration** with validation for names, zones, statuses, and production rates.
- **Responsive navigation** with a mobile menu for smaller screens.
- **Client-side routing** for the dashboard, fleet, machine creation, and Kanban areas.
- **Static JSON data source** that can be replaced by an API as the project evolves.
- **Accessible interaction states** including labels, validation feedback, loading states, and error messages.

> **Current status:** The Kanban route is scaffolded and ready for the board implementation. New machines are stored in the current browser session and are not persisted to the JSON file.

## Tech stack

| Layer | Technology |
| --- | --- |
| UI | React 19 |
| Build tool | Vite 8 |
| Routing | React Router 7 |
| Styling | Tailwind CSS 4 |
| Language | JavaScript (ES modules) |
| Quality | ESLint |

## Getting started

### Prerequisites

- Node.js 20 or newer
- npm 10 or newer

### Installation

```bash
git clone https://github.com/ayanakkabi1/FactoryPulse.git
cd FactoryPulse
npm install
```

### Start the development server

```bash
npm run dev
```

Vite will print the local URL in the terminal, typically `http://localhost:5173`.

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server with hot reload |
| `npm run build` | Create an optimized production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

## Application routes

| Route | Description |
| --- | --- |
| `/` | Operations dashboard |
| `/machines` | Searchable and filterable machine fleet |
| `/machines/new` | Add a machine to the current session |
| `/kanban` | Kanban workspace scaffold |

## Project structure

```text
FactoryPulse/
├── public/
│   └── machines.json          # Seed machine data loaded by the app
├── src/
│   ├── components/common/    # Shared navigation and status UI
│   ├── context/               # Machine data context and hooks
│   ├── pages/                 # Route-level screens
│   ├── App.jsx                # Application shell and routes
│   └── main.jsx               # React entry point
├── index.html
├── package.json
└── vite.config.js
```

## Data flow

Machine records are loaded from [`public/machines.json`](./public/machines.json) when the application starts. `MachinesProvider` exposes the records, loading state, load errors, and `addMachine` action to route components through the machine context.

New records receive the next available `M-###` identifier and remain in React state until the page is refreshed. To connect FactoryPulse to a persistent backend, replace the provider's fetch and mutation logic with API calls while keeping the context interface stable.

## Quality checks

Run the project checks before opening a pull request:

```bash
npm run lint
npm run build
```

## Roadmap

- Implement the Kanban board and maintenance workflow.
- Persist machine changes through a backend API.
- Connect dashboard indicators to live machine data.
- Add machine editing and deletion flows.
- Add automated component and end-to-end tests.

## Contributing

1. Create a feature branch.
2. Keep changes focused and consistent with the existing component patterns.
3. Run `npm run lint` and `npm run build`.
4. Open a pull request with a concise description of the user-facing impact.

