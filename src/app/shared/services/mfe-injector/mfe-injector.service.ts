import {
  ElementRef,
  Injectable,
  Renderer2,
  RendererFactory2,
} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MfeInjectorService {
  private renderer: Renderer2;
  private FILE_LIST = ['main.js', 'polufills.js', 'style.js'];
  private currentcustomElement?: HTMLElement;

  constructor(private renderFactory: RendererFactory2) {
    this.renderer = this.renderFactory.createRenderer(null, null);
  }

  public inject(container: ElementRef, element: ElementProps): void {
    const customElement = this.renderer.createElement(element.tag);

    this.currentcustomElement = customElement;

    this.FILE_LIST.forEach((file) => {
      this.insertScript(file, element);
    });

    this.setAttributes(customElement, element);

    this.renderer.appendChild(container.nativeElement, customElement);
  }

  private insertScript(file: string, element: ElementProps): void {
    const host = element.url;
    const scriptID = `${element.tag}-${file}`;

    if (!document.getElementById(scriptID)) {
      const script = this.renderer.createElement('script');

      this.renderer.setAttribute(script, 'id', scriptID);
      this.renderer.setAttribute(script, 'src', `${host}/${file}`);
      this.renderer.setAttribute(script, 'type', 'module');
      document.getElementsByTagName('head')[0]?.appendChild(script);
    }
  }

  private setAttributes(
    customElement: HTMLElement,
    element: ElementProps
  ): void {
    for (let key in element.attributes) {
      this.renderer.setAttribute(customElement, key, element.attributes[key]);
    }
  }

  public addAttributes(name: string, value: any): void {
    if (this.currentcustomElement) {
      this.renderer.setAttribute(this.currentcustomElement, name, value);
    }
  }

  public remove(container: ElementRef, element: ElementProps): void {
    const customElement = container.nativeElement.querySelector(element.tag);
    if (customElement) {
      this.renderer.removeChild(container.nativeElement, customElement);
    }
  }
}

export type ElementProps = {
  name: string;
  tag: string;
  url: string;
  attributes?: Record<string, any>;
};
