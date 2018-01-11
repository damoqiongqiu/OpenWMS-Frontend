import {Directive, ElementRef, ContentChild, Output, EventEmitter, Input} from "@angular/core";

@Directive({
  selector: '[dropdown]',
  exportAs: 'dropdown'
})
export class DropdownDirective {
    @Input("dropdownToggle")
    public toggleClick:boolean = true;

    @Input("dropdownFocusActivate")
    public activateOnFocus:boolean = false;

    @Output()
    public onOpen = new EventEmitter<string>();

    @Output()
    public onClose = new EventEmitter<string>();

    constructor(private elementRef: ElementRef) {
      
    }

    open() {
      const element: HTMLElement = this.elementRef.nativeElement;
      element.classList.add("open");
      this.onOpen.emit("open");
    }

    close() {
        const element: HTMLElement = this.elementRef.nativeElement;
        element.classList.remove("open");
        this.onClose.emit("close");
    }

    isOpened():boolean {
      const element: HTMLElement = this.elementRef.nativeElement;
      return element.classList.contains("open");
    }
}
