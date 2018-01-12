import { Directive, ElementRef, OnDestroy, Host, HostListener } from "@angular/core";
import { DropdownDirective } from "./dropdown.directive";

@Directive({
    selector: '[dropdown-trigger]',
    exportAs: "dropdown-trigger"
})
/**
 * 下拉按钮，点击这个区域会把原来隐藏的下拉内容显示出来
 * 这个指令用来和DropdownDirective配合实现下拉功能
 * 从github上的这个项目简化而来：https://github.com/pleerock/ngx-dropdown
 */
export class DropdownTriggerDirective {

    private closeDropdownOnOutsideClick: (event: MouseEvent) => void;

    constructor( @Host() public dropdown: DropdownDirective,
        private elementRef: ElementRef) {
        const _this = this;
        this.closeDropdownOnOutsideClick = function closeDropdownOnOutsideClick(event: MouseEvent) {
            _this.closeIfInClosableZone(event);
        };
    }

    open() {
        if (this.dropdown.isOpened())
            return;

        this.dropdown.open();
        document.addEventListener("click", this.closeDropdownOnOutsideClick, true);
    }

    close() {
        if (!this.dropdown.isOpened())
            return;

        this.dropdown.close();
        document.removeEventListener("click", this.closeDropdownOnOutsideClick, true);
    }

    toggle() {
        if (this.dropdown.isOpened()) {
            this.close();
        } else {
            this.open();
        }
    }

    @HostListener("click")
    openDropdown() {
        if (this.dropdown.isOpened() && this.dropdown.toggleClick) {
            this.close();
        } else {
            this.open();
        }
    }
    
    private closeIfInClosableZone(event: Event) {
        if (event.target !== this.elementRef.nativeElement
            && !this.elementRef.nativeElement.contains(event.target)) {
            this.dropdown.close();
            document.removeEventListener("click", this.closeDropdownOnOutsideClick, true);
        }
    }

    ngOnDestroy() {
        document.removeEventListener("click", this.closeDropdownOnOutsideClick, true);
    }
}
