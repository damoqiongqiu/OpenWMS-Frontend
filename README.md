<a href="./README-cn.md" target="_blank">中文版README</a>

## OpenWMS-Frontend

This is the front-end project of OpenWMS, based on Angular 5.2.2 and PrimeNG 4.1.0 .

### Demo Site

Demo site on Alibaba Cloud: http://47.104.80.251:4200

### Screenshots

<img src="./src/assets/imgs/login.png">

<img src="./src/assets/imgs/dashboard.png">

<img src="./src/assets/imgs/inventory.png">

<img src="./src/assets/imgs/map.png">

### Directory Structure

<img src="./src/assets/imgs/dir1.png">

<img src="./src/assets/imgs/dir2.png">

<img src="./src/assets/imgs/dir3.png">

### Usage

For Chinese developers:

    git clone https://gitee.com/mumu-osc/OpenWMS-Frontend.git
    cd OpenWMS-Frontend
    npm i -g cnpm --registry=https://registry.npm.taobao.org
    cnpm i -g @angular/cli
    cnpm install
    ng serve

For others:

    git clone https://gitee.com/mumu-osc/OpenWMS-Frontend.git
    cd OpenWMS-Frontend
    npm install
    ng serve

Open your browser and visit http://localhost:4200/

**Note** There is a bug here, seems like something is wrong with the animation module. If you want to compile with --prod argument, try install the node modules with yarn, if you are in China, please note the G-F-W.

The bundle size is very small with --prod argument, look here:

<img src="./src/assets/imgs/network.png">

### About Me

I'm Aaron Zhang, here is my personal site on http://damoqiongqiu.github.io/ , and this is the latest Angular forum for Chinese developers http://www.ngfans.net/ .

### License

 MIT

You can use this project whatever you want, there is no need to contact me first, because Chinese developers are always busy.

### QQ Group

<a target="_blank" href="//shang.qq.com/wpa/qunwpa?idkey=e13f3165eba410049bc7fd145507ddaf15b5d543398cef62471f3922e1611cd1" class="list-group-item"><i class="fa fa-qq" aria-hidden="true"></i> Angular-OpenWMS</a>
