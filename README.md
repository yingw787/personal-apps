# `personal-apps`: Monorepo for all my personal applications

## Getting Started

1.  Clone this repository:

    ```bash
    git clone git@github.com:yingw787/personal-apps.git /path/to/personal-apps
    cd /path/to/personal-apps
    ```

1.  Copy over the environment file `.env.sample` to `.env.local` and
    `.env.production`:

    ```bash
    cp .env.sample .env.local
    cp .env.sample .env.production
    ```

1.  Install dependencies:

    ```bash
    npm install
    ```

1.  Start all services using the VS Code launch console (`Ctrl + Shift + D`,
    select the service to run as listed in `launch.json`, then `Ctrl + Shift +
    F5`):

1.  Navigate to `http://localhost:5000` to see the homepage, and other ports to
    see other apps, according to `.vscode/launch.json`.

### Development helpers

1.  To autoformat the codebase:

    ```bash
    make autoformat
    ```

1.  To list available Nx generators:

    ```bash
    npx nx list
    ```

### Deploying to Vercel

Vercel deploys automatically, and environment variables should be configured
manually (attempted configuration from local development failed).
