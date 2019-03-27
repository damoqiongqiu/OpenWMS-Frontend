import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { WorkspaceComponent } from './workspace.component';
import { DropdownDirective } from '../../shared/dropdown-directive/dropdown.directive';
import { DropdownTriggerDirective } from '../../shared/dropdown-directive/dropdown-trigger.directive';
import { NavItemDirective } from '../../shared/navitem-directive/dropdown.directive';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { LeftSidebarComponent } from '../left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from '../right-sidebar/right-sidebar.component';
import { workspaceRoutes } from './workspace.routes';

@NgModule({
  imports: [SharedModule, RouterModule.forChild(workspaceRoutes)],
  declarations: [
    FooterComponent,
    NavBarComponent,
    LeftSidebarComponent,
    RightSidebarComponent,
    WorkspaceComponent,
    DropdownDirective,
    DropdownTriggerDirective,
    NavItemDirective
  ]
})
export class WorkspaceModule { }
