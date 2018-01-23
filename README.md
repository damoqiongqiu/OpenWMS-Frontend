## OpenWMS-Frontend

这是OpenWMS项目的前端代码，基于Angular和PrimeNG。

## 目录结构

src
├── app
│   ├── app.component.css
│   ├── app.component.html
│   ├── app.component.scss
│   ├── app.component.spec.ts
│   ├── app.component.ts
│   ├── app.module.ts                       //主模块
│   ├── app.routes.ts                       //一级路由
│   ├── bz-modules
│   │   ├── basic-data                      //对应一级菜单中的“基础资料”功能
│   │   │   ├── basic-data.component.html
│   │   │   ├── basic-data.component.scss
│   │   │   ├── basic-data.component.spec.ts
│   │   │   ├── basic-data.component.ts
│   │   │   ├── basic-data.module.ts        //子模块定义模块
│   │   │   ├── basic-data.routes.ts
│   │   │   ├── category-form
│   │   │   ├── category-table
│   │   │   ├── customer-form
│   │   │   ├── customer-table
│   │   │   ├── staff-form
│   │   │   ├── staff-table
│   │   │   ├── vendor-form
│   │   │   ├── vendor-table
│   │   │   ├── warehouse-form
│   │   │   ├── warehouse-map
│   │   │   └── warehouse-table
│   │   ├── dashboard                       //对应一级菜单中的“仪表盘”功能
│   │   │   ├── dashboard
│   │   │   ├── dashboard.module.ts
│   │   │   └── dashboard.routes.ts
│   │   ├── inventory                       //对应一级菜单中的“库存管理”功能
│   │   │   ├── inbound-receipt-detail
│   │   │   ├── inbound-receipt-table
│   │   │   ├── inventory.component.html
│   │   │   ├── inventory.component.scss
│   │   │   ├── inventory.component.spec.ts
│   │   │   ├── inventory.component.ts
│   │   │   ├── inventory-item-detail
│   │   │   ├── inventory.module.ts         //子模块定义模块
│   │   │   ├── inventory.routes.ts
│   │   │   ├── inventory-table
│   │   │   ├── new-inbound-receipt
│   │   │   ├── new-outbound-receipt
│   │   │   ├── outbound-receipt-detail
│   │   │   └── outbound-receipt-table
│   │   └── sys                 //对应一级菜单中的“系统监控”
│   ├── common                  //通用功能都在这个目录
│   │   ├── dropdown-directive  //下拉菜单指令
│   │   ├── services            //所有加载数据的服务都在这里
│   │   └── shared.module.ts    //共享模块定义文件
│   ├── global-layout           //页面整体布局在这个目录
│   │   ├── footer              //底部
│   │   ├── top-menu            //顶部下拉菜单
│   │   └── workspace           //登录进来之后的主控模块
│   ├── index.ts
│   └── login
├── assets                      //外部的CSS和图片等都在这个目录
│   ├── i18n
│   │   ├── en.json
│   │   └── zh.json
│   └── imgs
├── environments
│   ├── environment.prod.ts
│   └── environment.ts
├── favicon.ico
├── index.html
├── main.ts
├── polyfills.ts
├── styles.scss
├── test.ts
├── tsconfig.json
└── typings.d.ts

## 用法

    git clone https://gitee.com/mumu-osc/OpenWMS-Frontend.git
    cd OpenWMS-Frontend
    npm i -g cnpm --registry=https://registry.npm.taobao.org
    cnpm i -g @angular/cli
    cnpm install
    ng serve
    ng serve

## 关于我

我是大漠穷秋，我的Github个人主页在这里：http://damoqiongqiu.github.io/ ，最新的Angular开发者中文社区在这里http://www.ngfans.net/ 。

## 开源许可证

 MIT

 你可以随意使用此项目，无需通知我，因为我可能很忙没空搭理你。

## 此项目专用QQ交流群

<a target="_blank" href="//shang.qq.com/wpa/qunwpa?idkey=e13f3165eba410049bc7fd145507ddaf15b5d543398cef62471f3922e1611cd1" class="list-group-item"><i class="fa fa-qq" aria-hidden="true"></i> Angular-OpenWMS:630250974</a>
