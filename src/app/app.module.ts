import { NgModule } from '@angular/core'; 
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule //importar esta clase para enlazar los controles input mediante la directiva ngModel
    //cuando el operador ingrese datos en los input
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
