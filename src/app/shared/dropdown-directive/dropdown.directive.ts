import { Directive, ElementRef, ContentChild, Output, EventEmitter, Input } from "@angular/core";

@Directive({
  selector: '[dropdown]',
  exportAs: 'dropdown'
})

export class DropdownDirective {
  @Input("dropdownToggle")
  public toggleClick: boolean = true;

  @Output()
  public onOpen = new EventEmitter<string>();

  @Output()
  public onClose = new EventEmitter<string>();

  private closeDropdownOnOutsideClick = (event: MouseEvent) => { this.closeIfInClosableZone(event) };

  constructor(private elementRef: ElementRef) { }

  open() {
    //这种操作HTML元素的方式还是很丑陋的，对吧？
    const element: HTMLElement = this.elementRef.nativeElement;
    element.classList.add("menu-open");
    element.firstElementChild.classList.add("active");
    this.onOpen.emit("open");
    document.addEventListener("click", this.closeDropdownOnOutsideClick, true);
  }

  close() {
    const element: HTMLElement = this.elementRef.nativeElement;
    element.classList.remove("menu-open");
    element.firstElementChild.classList.remove("active");
    this.onClose.emit("close");
    document.removeEventListener("click", this.closeDropdownOnOutsideClick, true);
  }

  isOpened(): boolean {
    const element: HTMLElement = this.elementRef.nativeElement;
    return element.classList.contains("menu-open");
  }

  //如果点击的位置不在下拉菜单内部，则关闭下拉
  private closeIfInClosableZone(event: Event) {
    if (event.target !== this.elementRef.nativeElement
      && !this.elementRef.nativeElement.contains(event.target)) {
      // this.close();
      // document.removeEventListener("click", this.closeDropdownOnOutsideClick, true);
      const element: HTMLElement = this.elementRef.nativeElement;
      // element.classList.remove("menu-open");
      element.firstElementChild.classList.remove("active");
    }
    if (event.target == this.elementRef.nativeElement || this.elementRef.nativeElement.contains(event.target)) {
      const element: HTMLElement = this.elementRef.nativeElement;
      element.firstElementChild.classList.add("active");
    }
  }

  ngOnDestroy() {
    document.removeEventListener("click", this.closeDropdownOnOutsideClick, true);
  }
}
