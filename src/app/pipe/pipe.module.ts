import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from './safe.pipe';
import { ShorcutPipe } from './shorcut.pipe';

@NgModule({
  declarations: [SafePipe, ShorcutPipe],
  imports: [
    CommonModule
  ],
  exports: [
    SafePipe,
    ShorcutPipe
  ]
})
export class PipeModule { }
