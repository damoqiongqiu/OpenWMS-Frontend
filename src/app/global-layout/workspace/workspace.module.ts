import { NgModule } from '@angular/core';
import { SharedModule } from '../../bz-modules/shared/shared.module';
import { RouterModule } from '@angular/router';

import { AccordionModule } from 'primeng/primeng';

import { LeftNavComponent } from '../left-nav/left-nav.component';
import { TopMenuComponent } from '../top-menu/top-menu.component';
import { FooterComponent } from '../footer/footer.component';
import { WorkspaceComponent } from './workspace.component';

import { EventBusService } from '../../bz-modules/shared/event-bus.service';
import { AppSideMenuComponent } from '../left-nav/app-side-menu/app-side-menu.component';

import { workspaceRoutes } from './workspace.routes';

@NgModule({
    imports: [
        SharedModule,
        AccordionModule,
        RouterModule.forChild(workspaceRoutes)
    ],
    exports: [],
    declarations: [
        WorkspaceComponent,
        LeftNavComponent,
        TopMenuComponent,
        FooterComponent,
        AppSideMenuComponent
    ],
    providers: [EventBusService]
})
export class WorkspaceModule { }
