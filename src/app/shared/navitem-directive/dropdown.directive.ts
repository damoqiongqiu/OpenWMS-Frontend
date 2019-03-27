import { Directive, ElementRef, Host, HostListener } from "@angular/core";

@Directive({
  selector: '[nav-item]',
  exportAs: 'nav-item'
})

export class NavItemDirective {

  private closeDropdownOnOutsideClick = ($event: MouseEvent) => { this.closeIfInClosableZone(event) };

  constructor(private elementRef: ElementRef) { }

  @HostListener("click")
  toggle($event: Event) {
    if (event.target == this.elementRef.nativeElement || this.elementRef.nativeElement.contains(event.target)) {
      this.elementRef.nativeElement.classList.toggle("show");
      this.elementRef.nativeElement.lastElementChild.classList.toggle("show");
    }
  }

  private closeIfInClosableZone($event: Event) {
    if (event.target !== this.elementRef.nativeElement
      && !this.elementRef.nativeElement.contains(event.target)) {
      this.elementRef.nativeElement.classList.remove("show");
      this.elementRef.nativeElement.lastElementChild.classList.remove("show");
    }
  }

  ngOnInit() {
    document.addEventListener("click", this.closeDropdownOnOutsideClick, true);
  }

  ngOnDestroy() {
    document.removeEventListener("click", this.closeDropdownOnOutsideClick, true);
  }
}
