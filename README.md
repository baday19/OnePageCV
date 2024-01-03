# 通用React前端框架

## 常见问题

### 创建ts项目

```ts
$ npx create-react-app my-app --template typescript
```

### 配置别名

```ts
// 第一步：释放 React 项目的配置文件，如果已经释放，则省略此步
$ npm run eject

// 第二步：找到 webpack.config.js 文件
// 找到 resolve 下的 alias 配置项，添加以下配置：
resolve: {
  // 配置别名
  alias: {
    // 自定义别名
    "@": paths.appSrc,
    "utils": path.resolve(paths.appSrc, "utils"),
    // ....其他的一些配置
  }
}

// 第三步：在项目根路径下的 tsconfig.json 当中添加以下代码：
// 即往 compilerOptions 当中添加："extends": "./paths.json"
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"],
      "utils/*": ["src/utils/*"]
  }
}
```

### 引入styled-components

```ts
$ npm install styled-components -S
```

### 引入jotai

```ts
$ npm install jotai

const initToken = '';
const token = atom<string>(initToken)

export const useToken = () => useAtom(token)
export const useSetToken = () => useSetAtom(token)
```

### 解决跨域

```ts
$ npm install http-proxy-middleware --save

// 在src目录下创建setupProxy.js
module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
        target: 'http://ip:port',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          	"^/api": "/api"
    	}
    }),
  )
}

```

