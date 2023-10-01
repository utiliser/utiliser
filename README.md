<p align="center">
	<img src="https://avatars.githubusercontent.com/u/146632266?s=48&v=4" alt="@utiliser logo" />
	<span>
		a simple collections of react hooks
	</span>
</p>

### 🧪 Explore

- [Doc](https://utiliser.vercel.app/)

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
