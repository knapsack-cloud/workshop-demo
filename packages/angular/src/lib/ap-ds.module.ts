import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [ButtonComponent, CardComponent],
  imports: [CommonModule],
  exports: [ButtonComponent, CardComponent],
})
export class ApDsModule {}
