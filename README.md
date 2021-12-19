# Vite + Vue 3 + VueRouter + Vuex + TypeScript + WindiCSS

This template will help you start developing with Vue3 VueRouter Vuex TypeScript WindiCSS in Vite.

**Editor:**

- [VSCode](https://code.visualstudio.com/)

**VSCode extension:**

- [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

**Development ENV:**

- NodeJs
- Git

## Clone

```shell
git clone git@github.com:zhixiangyao/vite-vue-ts-starter.git
cd vite-vue-ts-starter
pnpm i # If not install pnpm, please run: npm install -g pnpm
```

## Usage

### Development

click it http://localhost:3000

```shell
pnpm dev
```

### Build

```shell
pnpm build
```

### Check all

```shell
pnpm lint:all
```

### Check ESlint

```shell
pnpm lint:eslint
```

### Check Prettier

```shell
pnpm lint:prettier
```

### Check Stylelint

```shell
pnpm lint:stylelint
```

### APP

- **Config file ./capacitor.config.ts**
- **IOS project file ./ios**
- **Dependencies**

  ```json
  "dependencies": {
    "@capacitor/core": "^3.2.0",
    "@capacitor/ios": "^3.2.0",
  },
  "devDependencies": {
    "@capacitor/cli": "^3.2.0",
  },
  ```

- **Open The Xcode**

```shell
pnpm open:ios
```

- **Build IOS APP**

```shell
pnpm add:ios
```

- **Run IOS APP**

```shell
pnpm run:ios
```
