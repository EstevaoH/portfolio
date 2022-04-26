import { Directive, ElementRef, EventEmitter, Output } from "@angular/core";

@Directive({
  selector: '[appKmItem]'
})
export class KeyboardManagedItemDirective {
  @Output() fucused = new EventEmitter<void>()

  constructor(private elementRef: ElementRef<HTMLElement>) { }

  public focus(): void {
    this.elementRef.nativeElement.focus();
    this.fucused.emit();
  }

  public isFocused(): boolean {
    return this.elementRef.nativeElement === document.activeElement;
  }
}
