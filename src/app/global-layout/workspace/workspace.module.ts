import { NgModule } from '@angular/core';
import { SharedModule } from '../../common/shared.module';
import { RouterModule } from '@angular/router';
import { TopMenuComponent } from '../top-menu/top-menu.component';
import { FooterComponent } from '../footer/footer.component';
import { WorkspaceComponent } from './workspace.component';
import { TopbarComponent } from '../topbar/topbar.component';
import { ProfileComponent } from '../profile/profile.component';
import { MenuComponent , AppSubMenuComponent} from '../menu/menu.component';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { RightpanelComponent } from '../rightpanel/rightpanel.component'
import { DropdownDirective } from '../../common/dropdown-directive/dropdown.directive';
import { DropdownTriggerDirective } from '../../common/dropdown-directive/dropdown-trigger.directive';
import { workspaceRoutes } from './workspace.routes';

@NgModule({
  imports: [SharedModule, RouterModule.forChild(workspaceRoutes)],
  declarations: [
    WorkspaceComponent,
    TopMenuComponent,
    FooterComponent,
    TopbarComponent,
    AppSubMenuComponent,
    BreadcrumbComponent,
    RightpanelComponent,
    MenuComponent,
    ProfileComponent,
    DropdownDirective,
    DropdownTriggerDirective
  ]
})
export class WorkspaceModule {}
