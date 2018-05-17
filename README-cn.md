<a href="./README.md" target="_blank">README in English</a>

## OpenWMS-Frontend

这是 OpenWMS 项目的前端代码，基于 Angular 6.0.0 和 PrimeNG 5.2.4 。

#### 演示地址

在阿里云上的演示地址 http://47.104.80.251:4200

### 效果截图

<img src="./src/assets/imgs/login.png">

<img src="./src/assets/imgs/dashboard.png">

<img src="./src/assets/imgs/inventory.png">

<img src="./src/assets/imgs/map.png">

### 目录结构

<img src="./src/assets/imgs/dir1.png">

<img src="./src/assets/imgs/dir2.png">

<img src="./src/assets/imgs/dir3.png">

### 演进历史

<img src="./src/assets/imgs/OpenWMS.gif">

### 用法

    请先fork本项目
    git clone 你自己fork之后的项目路径
    cd OpenWMS-Frontend
    npm i -g cnpm --registry=https://registry.npm.taobao.org
    cnpm i -g @angular/cli
    cnpm install
    ng serve -e dev

打开你的浏览器，访问http://localhost:4200/

### 切换不同的运行环境

在 src/environments 目录下提供了 3 份配置文件，分别对应 dev、mock 和 prod 环境。

ng serve 默认使用 dev 这份配置文件，如果需要切换到 mock 环境，请运行：

    ng serve -e mock

### HMR 支持

在开发状态，你可能不想每次修改代码之后都让浏览器全部刷新，你希望能“热替换”，所以有了 HRM 这个机制。

@angular/cli 在默认情况下不支持 HMR，所以这里我们手动进行了支持，具体做法请参考这里：https://medium.com/wizardnet972/hot-module-replacement-with-angular-cli-5fc7a3ae4a9c

以 HRM 的方式启动此项目请执行：

    npm run hmr

**特别注意**:最新的@angular/cli 6.x 版本已经内置了 HMR 支持，只要执行以下命令即可：

    ng serve --hmr

### 开源许可证

MIT

你可以随意使用此项目，无需通知我，因为我可能很忙没空搭理你。

如果你需要更多中文版学习资料，请看这里：www.ngfans.net

### 此项目专用 QQ 交流群

<a target="_blank" href="//shang.qq.com/wpa/qunwpa?idkey=e13f3165eba410049bc7fd145507ddaf15b5d543398cef62471f3922e1611cd1" class="list-group-item"><i class="fa fa-qq" aria-hidden="true"></i> Angular-OpenWMS</a>

**如果你觉得这个项目对你有用，请给它加个星**
