import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appDirectiveOne]'
})
export class DirectiveOneDirective implements OnInit{
  color: string;
  letters = '0123456789ABCDEF';
  @Input() inputColor: string;
  @Input() textChange: string;

  constructor(
    private el: ElementRef
  ) { }
  ngOnInit(): void {
  }

  @HostListener('click') onClick() {
    this.color = '#';
    for (let i = 0; i < 6; i++) {
      this.color += this.letters[Math.floor(Math.random() * 16)];
    }
    this.onChangeColor(this.color);
  }

  @HostListener('mouseleave') onLeave() {
    this.textChange = 'xxx';
  }

  @HostListener('mouseover') onHover() {
    
    this.onChangeTextWithInput();
  }

  onChangeColor(color: string): void {
    this.el.nativeElement.style.color = color;
  }

  onChangeTextWithInput(): void {
    this.el.nativeElement.innerText = this.textChange;
  }
}
