# Vite + Vue 3 + VueRouter + Vuex + TypeScript + WindiCSS

该模板将帮助您开始在 Vite 中使用 Vue3 VueRouter Vuex TypeScript WindiCSS 进行开发。

**编辑器:**

- [VS Code](https://code.visualstudio.com/)

**VS Code 插件:**

- [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

**开发环境:**

- NodeJs
- Git

## Clone

```shell
git clone git@github.com:zhixiangyao/vite-vue-ts-starter.git
cd vite-vue-ts-starter
pnpm i # 如果没有安装 pnpm, 请运行: npm install -g pnpm
```

## Usage

### Development

只需运行并访问 http://localhost:3000

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

- **配置文件 ./capacitor.config.ts**
- **ios 项目文件 ./ios**
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
