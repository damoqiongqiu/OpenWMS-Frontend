import { NgModule } from '@angular/core';
import { SharedModule } from '../../common/shared.module';
import { RouterModule } from '@angular/router';
import { TopMenuComponent } from '../top-menu/top-menu.component';
import { FooterComponent } from '../footer/footer.component';
import { WorkspaceComponent } from './workspace.component';
import { DropdownDirective } from '../../common/dropdown-directive/dropdown.directive';
import { DropdownTriggerDirective } from '../../common/dropdown-directive/dropdown-trigger.directive';
import {ThemeSwitcherComponent} from '../theme-switcher/theme-switcher.component';
import { workspaceRoutes } from './workspace.routes';

@NgModule({
  imports: [SharedModule, RouterModule.forChild(workspaceRoutes)],
  declarations: [
    WorkspaceComponent,
    TopMenuComponent,
    FooterComponent,
    ThemeSwitcherComponent,
    DropdownDirective,
    DropdownTriggerDirective
  ]
})
export class WorkspaceModule {}
