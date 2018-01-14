import { NgModule } from '@angular/core';
import { SharedModule } from '../../common/shared.module';
import { RouterModule } from '@angular/router';

import { TopMenuComponent } from '../top-menu/top-menu.component';
import { FooterComponent } from '../footer/footer.component';
import { WorkspaceComponent } from './workspace.component';

import { DropdownDirective } from '../../common/dropdown/dropdown.directive';
import { DropdownTriggerDirective } from '../../common/dropdown/dropdown-trigger.directive';

import { workspaceRoutes } from './workspace.routes';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(workspaceRoutes)
    ],
    exports: [],
    declarations: [
        WorkspaceComponent,
        TopMenuComponent,
        FooterComponent,
        DropdownDirective,
        DropdownTriggerDirective
    ]
})
export class WorkspaceModule { }
