import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthorComponent } from './author/author.component';

@NgModule({
  declarations: [AuthorComponent],
  imports: [CommonModule],
  exports: [AuthorComponent],
})
export class ApDsModule {}
