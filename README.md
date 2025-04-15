# 🧱 BM UI

**BM UI** is the internal design system of Barbamaster, providing reusable UI components, global styles, and utilities to ensure consistent design across applications on the platform.

---

## 📦 Installation

> This package is private. Make sure you're authenticated with a valid NPM token.

```bash
npm install @barbamaster/bm-ui
# or
yarn add @barbamaster/bm-ui
```

## 🛠️ Usage

```tsx
import { Button } from "@barbamaster/bm-ui";

export default function Home() {
  return <Button>My Button</Button>;
}
```

## 📁 Project Structure

```txt
bm-ui/
├── dist/                     # Compiled build files
├── lib/                      # Final transpiled code
├── src/                      # Source code
│   ├── components/           # Reusable components
│   │   ├── Button/           # Button component
│   │   │   └── index.tsx
│   │   └── ui/               # Subcomponents or variations
│   │       └── button.tsx
│   ├── styles/               # Global styles and theme
│   │   ├── global.css
│   │   └── theme.ts
│   └── utils/                # General utility functions
│       └── cn.ts             # Likely a className (cn) helper
├── public/                   # Public static assets
├── .npmrc                    # NPM token and registry config
├── package.json              # Project metadata
├── tsconfig.*.json           # TypeScript configurations
└── vite.config.ts            # Vite bundler configuration
```

## 🎨 Styling

- Global styles: `src/styles/global.css`
- Theme variables: `src/styles/theme.ts`

## 🧩 Components

Component | Description
Button | Reusable styled button

## 🧪 Testing

(This section will be updated when test coverage is added.)

## 🚀 Build

```bash
  yarn build
```

## 👨‍💻 Contributing

1. Clone this repository
2. Install dependencies: yarn
3. Create a new component under src/components/YourComponent
4. Run yarn dev to develop locally
5. Open a PR for review
