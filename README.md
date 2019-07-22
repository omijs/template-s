## Develop

```bash
npm install
npm start
```

## Release

```bash
npm run build
```

## Eslint + Prettier

``` bash
npm run fix
```

## Directory description

```
├─ config
├─ public
├─ scripts
├─ src
│  ├─ assets
│  ├─ elements    //Store all custom elements
│  ├─ store       //Store all this store of pages
│  ├─ admin.js    //Entry js of compiler，will build to admin.html
│  └─ index.js    //Entry js of compiler，will build to index.html
```

## Build Scripts

```json
"scripts": {
    "start": "node scripts/start.js",
    "build": "PUBLIC_URL=. node scripts/build.js",
    "build-windows": "set PUBLIC_URL=.&& node scripts/build.js",
    "fix": "eslint src --fix"
}
```

You can set up the PUBLIC_URL, such as:

```bash
...
"build": "PUBLIC_URL=https://fe.wxpay.oa.com/dv node scripts/build.js",
"build-windows": "set PUBLIC_URL=https://fe.wxpay.oa.com/dv&& node scripts/build.js",
...
```

## Usage

- [→ Omis Codepen Demos](https://codepen.io/collection/XjLaRo/)
- [→ Docs](https://tencent.github.io/omi/site/omis/index.html)

```jsx
import { render, h } from 'omis'

const Counter = (props, store) => {
  return (
    <div>
      <button onClick={store.sub}>-</button>
      <span>{store.count}</span>
      <button onClick={store.add}>+</button>
    </div>
  )
}

Counter.store = _ => {
  return {
    count: 1,
    add() {
      this.count++
      this.update()
    },
    sub() {
      this.count--
      this.update()
    }
  }
}

Counter.css = `
span{
  color: red;
}
`

render(<Counter />, 'body')
```

## License

MIT 

