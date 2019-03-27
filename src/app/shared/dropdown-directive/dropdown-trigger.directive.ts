import { Directive, ElementRef, Host, HostListener } from "@angular/core";
import { DropdownDirective } from "./dropdown.directive";

@Directive({
    selector: '[dropdown-trigger]',
    exportAs: "dropdown-trigger"
})
/**
 * 下拉按钮，点击这个区域会把原来隐藏的下拉内容显示出来
 * 这个指令用来和DropdownDirective配合实现下拉功能
 */
export class DropdownTriggerDirective {
    constructor(@Host() public dropdown: DropdownDirective,
        private elementRef: ElementRef) {

    }

    open() {
        if (this.dropdown.isOpened())
            return;

        this.dropdown.open();
    }

    close() {
        if (!this.dropdown.isOpened())
            return;

        this.dropdown.close();
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
}