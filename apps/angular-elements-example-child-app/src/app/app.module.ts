import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { ElementZoneStrategyFactory } from 'elements-zone-strategy';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [AppComponent, ExampleComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {
  constructor(private injector: Injector) {
    const customElementSelector = 'example-custom-element';
    const strategyFactory = new ElementZoneStrategyFactory(ExampleComponent, this.injector);
    const exampleElement = createCustomElement(ExampleComponent, {injector: this.injector, strategyFactory});

    if (!customElements.get('example-custom-element')) {
      customElements.define('example-custom-element', exampleElement);
    }
  }
}
