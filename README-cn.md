<a href="./README.md" target="_blank">README in English</a>

## OpenWMS-Frontend

这是OpenWMS项目的前端代码，基于当前最新的Angular 5.2.2 和 PrimeNG 4.1.0 。

#### 演示地址

在阿里云上的演示地址 http://47.104.80.251:4200

（自己掏钱买的一台小ECS，配置差，您担待！）

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

    git clone https://gitee.com/mumu-osc/OpenWMS-Frontend.git
    cd OpenWMS-Frontend
    npm i -g cnpm --registry=https://registry.npm.taobao.org
    cnpm i -g @angular/cli
    cnpm install
    ng serve

打开你的浏览器，访问http://localhost:4200/

**注意**这里有一个新的坑，目测是animation包引入的，如果需要加--prod参数进行编译，需要用yarn安装，并且要设置翻Qiang代理。

加上--prod之后打包，体积已经非常小了，请看：

<img src="./src/assets/imgs/network.png">

### 关于我

我是大漠穷秋，我的Github个人主页在这里：http://damoqiongqiu.github.io/ ，最新的Angular开发者中文社区在这里http://www.ngfans.net/ 。

### 开源许可证

 MIT

 你可以随意使用此项目，无需通知我，因为我可能很忙没空搭理你。

### 此项目专用QQ交流群

<a target="_blank" href="//shang.qq.com/wpa/qunwpa?idkey=e13f3165eba410049bc7fd145507ddaf15b5d543398cef62471f3922e1611cd1" class="list-group-item"><i class="fa fa-qq" aria-hidden="true"></i> Angular-OpenWMS</a>
