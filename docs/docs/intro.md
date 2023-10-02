---
sidebar_label: Getting Started
sidebar_position: 1
title: Getting Started
---

Welcome to **@utiliser/react-hooks**.

### Prequesites

- [React](https://reactjs.org) ^18.\*
- [Node.js](https://nodejs.org/en/download/) version 16.14 or above:
- [TypeScript](https://www.typescriptlang.org/)

## Installation

Choose your favorite package manager either **npm** or **yarn**.

> with npm:

```bash
npm install @utiliser/react-hooks
```

> with yarn:

```bash
yarn add @utiliser/react-hooks
```

## Quick Example

To use a hook, you will need to import it.

```tsx
import { useOnline } from '@utiliser/react-hooks'

const App = () => {
	const { isOnline } = useOnline()

	return <div>{isOnline ? <p>Online</p> : <p>Offline</p>}</div>
}

export default App
```

## ✨ Inspired By

- [vueuse](https://vueuse.org/)
- [usehooks](https://usehooks.com/)

## 🥷 Written

- Written In [TS](https://www.typescriptlang.org/)
- Using [tsdoc](https://tsdoc.org/) to documented

## 📃 License

[MIT License](https://github.com/vueuse/vueuse/blob/main/LICENSE) © 2022-PRESENT [Virak Khun](https://github.com/virakkhun)
