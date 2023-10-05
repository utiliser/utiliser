<p align="center">
	<img src="https://avatars.githubusercontent.com/u/146632266?s=48&v=4" alt="@utiliser logo" />
</p>
<p align="center">a simple collections of react hooks</p>
<p align="center">
<img alt="npm" src="https://img.shields.io/npm/dw/%40utiliser%2Freact-hooks?style=flat&label=npm%20download&labelColor=blue" />
<img alt="npm" src="https://img.shields.io/npm/v/%40utiliser%2Freact-hooks?label=version">
<img alt="GitHub Workflow Status (with event)" src="https://img.shields.io/github/actions/workflow/status/utiliser/utiliser/publish.yaml?label=publish">
<img alt="npm package minimized gzipped size (select exports)" src="https://img.shields.io/bundlejs/size/%40utiliser%2Freact-hooks">
</p>

### 🧪 Explore

- [Doc](https://utiliser.github.io/utiliser)

### 📖 Prerequisite

- Latest - [React](https://reactjs.org/) ^18

### 🪝 Install

using NPM:

```bash
npm install @utiliser/react-hooks
```

using Yarn:

```bash
yarn add @utiliser/react-hooks
```

### 💅 Usage

```tsx
import { useOnline } from '@utiliser/react-hooks'

const App = () => {
	const { isOnline } = useOnline()

	return <p>{isOnline ? 'Online' : 'Offline'}</p>
}

export default App
```

### ✨ Inspired By

- [vueuse](https://vueuse.org/)
- [usehooks](https://usehooks.com/)

### 🥷 Crafted

- Written In [TS](https://www.typescriptlang.org/)
- Documented [tsdoc](https://tsdoc.org/)

### 📃 License

[MIT License](https://github.com/vueuse/vueuse/blob/main/LICENSE) © 2022-PRESENT [Virak Khun](https://github.com/virakkhun)
