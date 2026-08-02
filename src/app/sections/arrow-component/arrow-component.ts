import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  inject,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-arrow-component',
  templateUrl: './arrow-component.html',
  styleUrl: './arrow-component.scss',
})
export class ArrowComponent implements AfterViewInit, OnDestroy {
  // Gives access to the HTML element of this component.
  private element = inject(ElementRef);

  // Watches whether the component is visible on the screen, so the 
  // animation only starts once the section becomes visible and will 
  // only start againe, if the section becomes visible again. 
  private observer?: IntersectionObserver;

  // Defines which side the arrow starts from.
  // The default side is the right side...
  // Adds left or right to css [class.arrow-section--right]
  startSide = input<'left' | 'right'>('right');

  // Saves whether the arrow is visible on the screen.
  // It is false before the arrow is visible in viewport.
  isVisible = signal(false);

  // Runs after Angular has created the component's HTML.
  ngAfterViewInit(): void {
    // Creates an observer that watches the arrow component.
    this.observer = new IntersectionObserver(
      (entries) => {
        // Checks whether the arrow is currently inside the visible screen area.
        // Adds "true" to css [class.arrow--active] => the animation class
        this.isVisible.set(entries[0].isIntersecting);
      },
      {
        // The observer reacts when at least 50% of the arrow is visible.
        threshold: 0.5,
      },
    );

    // Starts watching the arrow component.
    this.observer.observe(this.element.nativeElement);
  }

  // Runs shortly before Angular removes the component.
  ngOnDestroy(): void {
    // Stops the observer because it is no longer needed.
    this.observer?.disconnect();
  }
}