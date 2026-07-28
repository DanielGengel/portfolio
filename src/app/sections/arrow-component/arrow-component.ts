import { AfterViewInit, Component, ElementRef, OnDestroy, inject, input, signal } from '@angular/core';

@Component({
  selector: 'app-arrow-component',
  templateUrl: './arrow-component.html',
  styleUrl: './arrow-component.scss',
})
export class ArrowComponent implements AfterViewInit, OnDestroy {
  private element = inject(ElementRef);
  private observer?: IntersectionObserver;

  startSide = input<'left' | 'right'>('right');
  isVisible = signal(false);

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        this.isVisible.set(entries[0].isIntersecting);
      },
      {
        threshold: 0.5, // 50% of Arrow in view 
      },
    );

    this.observer.observe(this.element.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
