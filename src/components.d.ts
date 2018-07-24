/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}


declare global {

  namespace StencilComponents {
    interface TestComponent {

    }
  }

  interface HTMLTestComponentElement extends StencilComponents.TestComponent, HTMLStencilElement {}

  var HTMLTestComponentElement: {
    prototype: HTMLTestComponentElement;
    new (): HTMLTestComponentElement;
  };
  interface HTMLElementTagNameMap {
    'test-component': HTMLTestComponentElement;
  }
  interface ElementTagNameMap {
    'test-component': HTMLTestComponentElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'test-component': JSXElements.TestComponentAttributes;
    }
  }
  namespace JSXElements {
    export interface TestComponentAttributes extends HTMLAttributes {

    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }