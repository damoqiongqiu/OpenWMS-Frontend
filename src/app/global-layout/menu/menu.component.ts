import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MenuItem } from 'primeng/primeng';
import { WorkspaceComponent } from '../workspace/workspace.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

    model: any[];
    @Input() reset: boolean;
    constructor(public app: WorkspaceComponent, public translateService: TranslateService) {
      this.translateService.get('globalLayout').subscribe(globalLayout => {
        this.model = [
          { label: globalLayout.dashboard, icon: 'dashboard', routerLink: ['/workspace/dashboard'] },
          {
              label: globalLayout.inventoryControl, icon: 'list', badge: '3', badgeStyleClass: 'teal-badge',
              items: [
                  { label: globalLayout.inventory, icon: 'desktop_mac', routerLink: ['/workspace/inventory/inventory-table/page/1'] },
                  { label: globalLayout.inbound, icon: 'desktop_mac', routerLink: ['/workspace/inventory/inbound-receipt-table/page/1'] },
                  { label: globalLayout.outbound, icon: 'desktop_mac', routerLink: ['/workspace/inventory/outbound-receipt-table/page/1'] },
              ]
          },
          {
              label: globalLayout.baseData, icon: 'list', badge: '5', badgeStyleClass: 'teal-badge',
              items: [
                  { label: globalLayout.warehouseData, icon: 'desktop_mac', routerLink: ['/workspace/basic-data/warehouse-table/page/1'] },
                  { label: globalLayout.categoryData, icon: 'desktop_mac', routerLink: ['/workspace/basic-data/category-table/page/1'] },
                  { label: globalLayout.vendorData, icon: 'desktop_mac', routerLink: ['/workspace/basic-data/vendor-table/page/1'] },
                  { label: globalLayout.customerData, icon: 'desktop_mac', routerLink: ['/workspace/basic-data/customer-table/page/1'] },
                  { label: globalLayout.staffData, icon: 'desktop_mac', routerLink: ['/workspace/basic-data/staff-table/page/1'] }
              ]
          },
          {
              label: globalLayout.systemMonitoring, icon: 'list', badge: '1', badgeStyleClass: 'teal-badge',
              items: [
                  { label: globalLayout.Echarts, icon: 'desktop_mac', routerLink: ['/workspace/sys/sysmonitor'] },
              ]
          },
          {
              label: globalLayout.theme, icon: 'palette', badge: '12', badgeStyleClass: 'teal-badge',
              items: [
                { label: globalLayout.indigoPink, icon: 'brush', command: (event) => { this.changeTheme('indigo'); } },
                { label: globalLayout.brownGreen, icon: 'brush', command: (event) => { this.changeTheme('brown'); } },
                { label: globalLayout.blueAmber, icon: 'brush', command: (event) => { this.changeTheme('blue'); } },
                { label: globalLayout.blueGrayGreen, icon: 'brush', command: (event) => { this.changeTheme('blue-grey'); } },
                { label: globalLayout.darkBlue, icon: 'brush', command: (event) => { this.changeTheme('dark-blue'); } },
                { label: globalLayout.darkGreen, icon: 'brush', command: (event) => { this.changeTheme('dark-green'); } },
                { label: globalLayout.greenYellow, icon: 'brush', command: (event) => { this.changeTheme('green'); } },
                { label: globalLayout.purpleCyan, icon: 'brush', command: (event) => { this.changeTheme('purple-cyan'); } },
                { label: globalLayout.purpleAmber, icon: 'brush', command: (event) => { this.changeTheme('purple-amber'); } },
                { label: globalLayout.tealLime, icon: 'brush', command: (event) => { this.changeTheme('teal'); } },
                { label: globalLayout.cyanAmber, icon: 'brush', command: (event) => { this.changeTheme('cyan'); } },
                { label: globalLayout.greyDeepOrange, icon: 'brush', command: (event) => { this.changeTheme('grey'); } }
            ]
          },
          {
              label: globalLayout.customization, icon: 'settings_application', badge: '10', badgeStyleClass: 'teal-badge',
              items: [
                  { label: globalLayout.compactSize, icon: 'fiber_manual_record', command: () => this.app.layoutCompact = true },
                  { label: globalLayout.materialSize, icon: 'fiber_smart_record', command: () => this.app.layoutCompact = false },
                  { label: globalLayout.staticMenu, icon: 'menu', command: () => this.app.changeToStaticMenu() },
                  { label: globalLayout.overlayMenu, icon: 'exit_to_app', command: () => this.app.changeToOverlayMenu() },
                  { label: globalLayout.slimMenu, icon: 'more_vert', command: () => this.app.changeToSlimMenu() },
                  { label: globalLayout.horizontalMenu, icon: 'border_horizontal', command: () => this.app.changeToHorizontalMenu() },
                  { label: globalLayout.lightMenu, icon: 'label_outline', command: () => this.app.darkMenu = false },
                  { label: globalLayout.darkMenu, icon: 'label', command: () => this.app.darkMenu = true },
                  { label: globalLayout.inlineProfile, icon: 'contacts', command: () => this.app.profileMode = 'inline' },
                  { label: globalLayout.topProfile, icon: 'person_pin', command: () => this.app.profileMode = 'top' },
              ]
          }
         ];
      })
     }

    ngOnInit() {
    }
    changeTheme(theme) {
        const themeLink: HTMLLinkElement = <HTMLLinkElement>document.getElementById('theme-css');
        const layoutLink: HTMLLinkElement = <HTMLLinkElement>document.getElementById('layout-css');

        themeLink.href = 'assets/theme/theme-' + theme + '.css';
        layoutLink.href = 'assets/layout/css/layout-' + theme + '.css';
    }

}

@Component({
    selector: '[app-submenu]',
    template: `
        <ng-template ngFor let-child let-i="index" [ngForOf]="(root ? item : item.items)">
            <li [ngClass]="{'active-menuitem': isActive(i)}" [class]="child.badgeStyleClass" *ngIf="child.visible === false ? false : true">
                <a [href]="child.url||'#'" (click)="itemClick($event,child,i)" (mouseenter)="onMouseEnter(i)"
                   class="ripplelink" *ngIf="!child.routerLink"
                    [attr.tabindex]="!visible ? '-1' : null" [attr.target]="child.target">
                    <i *ngIf="child.icon" class="material-icons">{{child.icon}}</i>
                    <span>{{child.label}}</span>
                    <span class="menuitem-badge" *ngIf="child.badge">{{child.badge}}</span>
                    <i class="material-icons submenu-icon" *ngIf="child.items">keyboard_arrow_down</i>
                </a>

                <a (click)="itemClick($event,child,i)" (mouseenter)="onMouseEnter(i)" class="ripplelink" *ngIf="child.routerLink"
                    [routerLink]="child.routerLink" routerLinkActive="active-menuitem-routerlink"
                   [routerLinkActiveOptions]="{exact: true}" [attr.tabindex]="!visible ? '-1' : null" [attr.target]="child.target">
                    <i *ngIf="child.icon" class="material-icons">{{child.icon}}</i>
                    <span>{{child.label}}</span>
                    <span class="menuitem-badge" *ngIf="child.badge">{{child.badge}}</span>
                    <i class="material-icons submenu-icon" *ngIf="child.items">keyboard_arrow_down</i>
                </a>
                <div class="layout-menu-tooltip">
                    <div class="layout-menu-tooltip-arrow"></div>
                    <div class="layout-menu-tooltip-text">{{child.label}}</div>
                </div>
                <ul app-submenu [item]="child" *ngIf="child.items" [visible]="isActive(i)" [reset]="reset" [parentActive]="isActive(i)"
                    [@children]="(app.isSlim()||app.isHorizontal())&&root ? isActive(i) ?
                    'visible' : 'hidden' : isActive(i) ? 'visibleAnimated' : 'hiddenAnimated'"></ul>
            </li>
        </ng-template>
    `,
    animations: [
        trigger('children', [
            state('hiddenAnimated', style({
                height: '0px'
            })),
            state('visibleAnimated', style({
                height: '*'
            })),
            state('visible', style({
                height: '*',
                'z-index': 100
            })),
            state('hidden', style({
                height: '0px',
                'z-index': '*'
            })),
            transition('visibleAnimated => hiddenAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
            transition('hiddenAnimated => visibleAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
        ])
    ]
})
export class AppSubMenuComponent {

    @Input() item: MenuItem;

    @Input() root: boolean;

    @Input() visible: boolean;

    _reset: boolean;

    _parentActive: boolean;

    activeIndex: number;

    constructor(public app: WorkspaceComponent) { }

    itemClick(event: Event, item: MenuItem, index: number) {
        if (this.root) {
            this.app.menuHoverActive = !this.app.menuHoverActive;
        }

        // avoid processing disabled items
        if (item.disabled) {
            event.preventDefault();
            return true;
        }

        // activate current item and deactivate active sibling if any
        this.activeIndex = (this.activeIndex === index) ? null : index;

        // execute command
        if (item.command) {
            item.command({ originalEvent: event, item: item });
        }

        // prevent hash change
        if (item.items || (!item.url && !item.routerLink)) {
            setTimeout(() => {
                this.app.layoutMenuScrollerViewChild.moveBar();
            }, 450);
            event.preventDefault();
        }

        // hide menu
        if (!item.items) {
            if (this.app.isHorizontal() || this.app.isSlim()) {
                this.app.resetMenu = true;
            } else {
                this.app.resetMenu = false;
            }

            this.app.overlayMenuActive = false;
            this.app.staticMenuMobileActive = false;
            this.app.menuHoverActive = !this.app.menuHoverActive;
        }
    }

    onMouseEnter(index: number) {
        if (this.root && this.app.menuHoverActive && (this.app.isHorizontal() || this.app.isSlim())
            && !this.app.isMobile() && !this.app.isTablet()) {
            this.activeIndex = index;
        }
    }

    isActive(index: number): boolean {
        return this.activeIndex === index;
    }

    @Input() get reset(): boolean {
        return this._reset;
    }

    set reset(val: boolean) {
        this._reset = val;

        if (this._reset && (this.app.isHorizontal() || this.app.isSlim())) {
            this.activeIndex = null;
        }
    }

    @Input() get parentActive(): boolean {
        return this._parentActive;
    }

    set parentActive(val: boolean) {
        this._parentActive = val;

        if (!this._parentActive) {
            this.activeIndex = null;
        }
    }
}
