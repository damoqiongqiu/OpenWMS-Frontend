import { NgModule } from '@angular/core';
import { SharedModule } from '../../bz-modules/shared/shared.module';
import { RouterModule } from '@angular/router';

import { LeftNavComponent } from '../left-nav/left-nav.component';
import { TopMenuComponent } from '../top-menu/top-menu.component';
import { FooterComponent } from '../footer/footer.component';
import { WorkspaceComponent } from './workspace.component';

import { EventBusService } from '../../bz-modules/shared/event-bus.service';
import { AppSideMenuComponent } from '../left-nav/app-side-menu/app-side-menu.component';

import { DropdownDirective } from '../../common/dropdown/dropdown.directive';
import { DropdownOpenDirective } from '../../common/dropdown/dropdown-open.directive';

import { workspaceRoutes } from './workspace.routes';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(workspaceRoutes)
    ],
    exports: [],
    declarations: [
        WorkspaceComponent,
        LeftNavComponent,
        TopMenuComponent,
        FooterComponent,
        AppSideMenuComponent,
        DropdownDirective,
        DropdownOpenDirective
    ],
    providers: [EventBusService]
})
export class WorkspaceModule { }
