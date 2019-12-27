# feedback-frontend

## Mock server

```
npm run mock
```

## Swagger

```
http://localhost:9802/static/index.html
```

## Docker server

### 构造镜像

```
docker build -t [镜像名] .
```

### 启动容器

```
docker run -idt -p 9200:9000 --name=dacontainer [镜像id或者镜像名称]
```

### Docker-Compose management docker

```
docker-compose up -d
```

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Concurrently Compiles and hot-reloads for development and setup mock swagger server

```
npm run serve:mock
```

### Compiles and minifies for production

```
npm run build
```

### Run your unit tests

```
npm run test:unit
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

Author[Email Address]

> protagonisths@gmail.com
