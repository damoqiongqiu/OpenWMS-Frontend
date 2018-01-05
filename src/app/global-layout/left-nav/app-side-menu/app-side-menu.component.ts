import { Component, OnInit, ElementRef, HostListener, Input } from '@angular/core';
import { EventBusService } from '../../../bz-modules/common/services/event-bus.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-side-menu',
    templateUrl: './app-side-menu.component.html',
    styleUrls: ['./app-side-menu.component.scss']
})
export class AppSideMenuComponent implements OnInit {
    //这里先写死，你也可以搞一个Service到后台去加载
    public menus = [
        {
            id: "1",
            name: "库存管理",
            isOpen: false,
            icon:'fa-home',
            children: [
                { name: "出库",icon:'fa-male',route:'org/orgmng'},
                { name: "入库",icon:'fa-bug',route:'user/usertable/page/1' },
                { name: "移库",icon:'fa-bus',route:'role/roletable/page/1' },
                { name: "盘点",icon:'fa-bus',route:'role/roletable/page/1' }
            ]
        },
        {
            id: "2",
            name: "采购管理",
            isOpen: false,
            icon:'fa-magic',
            children: [
                { name: "提交申请",icon:'fa-mobile',route:'post/posttable/page/1' },
                { name: "编制计划",icon:'fa-minus',route:'comment/commenttable/page/1' },
                { name: "订单和单据",icon:'fa-minus',route:'comment/commenttable/page/1' },
                { name: "财务数据",icon:'fa-minus',route:'comment/commenttable/page/1' }
            ]
        },
        {
            id: "3",
            name: "基础资料",
            isOpen: false,
            icon:'fa-magic',
            children: [
                { name: "仓库资料",icon:'fa-minus',route:'comment/commenttable/page/1' },
                { name: "品类资料",icon:'fa-minus',route:'comment/commenttable/page/1' },
                { name: "供应商资料",icon:'fa-mobile',route:'post/posttable/page/1' },
                { name: "员工资料",icon:'fa-mobile',route:'post/posttable/page/1' }
            ]
        },
        {
            id: "4",
            name: "报表模块",
            isOpen: false,
            icon:'fa-wrench',
            children: [
                { name: "系统状态",icon:'fa-line-chart',route:'sys/sysmonitor' },
                { name: "高德地图",icon:'fa-map-marker',route:'map/map' }
            ]
        },
        {
            id: "5",
            name: "系统监控",
            isOpen: false,
            icon:'fa-wrench',
            children: [
                { name: "系统状态",icon:'fa-line-chart',route:'sys/sysmonitor' },
                { name: "高德地图",icon:'fa-map-marker',route:'map/map' }
            ]
        }
    ];

    public isCollapse: boolean = false;

    constructor(private elementRef: ElementRef, private eventBusService: EventBusService) {
    }

    ngOnInit() {
        this.eventBusService.topToggleBtn.subscribe(value => {
            this.toggleMenuAll(value);
        });
    }

    private toggleMenuAll(isCollapse: boolean): void {
        this.isCollapse = isCollapse;
        this.menus.forEach(item => {
            item.isOpen = false;
        })
    }

    public toggleMenuItem(event, menu): void {
        menu.isOpen = !menu.isOpen;
        //折叠状态下只能打开一个二级菜单层
        if (this.isCollapse) {
            let tempId = menu.id;
            this.menus.forEach(item => {
                if (item.id !== tempId) {
                    item.isOpen = false;
                }
            });
        }
    }

    @HostListener('body:click', ['$event'])
    public onBodyClick(event): void {
        if (this.isCollapse && (event.clientX > 75)) {
            this.menus.forEach(item => {
                item.isOpen = false;
            });
        }
    }
}