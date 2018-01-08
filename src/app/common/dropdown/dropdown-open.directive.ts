import {Directive, ElementRef, OnDestroy, Host, HostListener} from "@angular/core";
import {DropdownDirective} from "./dropdown.directive";

@Directive({
  selector: '[dropdown-open]',
  exportAs: "dropdown-open"
})
export class DropdownOpenDirective {
  private openedByFocus: boolean = false;

  private closeDropdownOnOutsideClick: (event: Event) => void;

  constructor() { }
  
}
