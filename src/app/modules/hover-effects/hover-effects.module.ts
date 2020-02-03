import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeColorDirective } from './directives/change-color.directive';
import { EnlargeFontDirective } from './directives/enlarge-font.directive';



@NgModule({
  declarations: [
    ChangeColorDirective,
    EnlargeFontDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ChangeColorDirective,
    EnlargeFontDirective
  ]
})
export class HoverEffectsModule { }
