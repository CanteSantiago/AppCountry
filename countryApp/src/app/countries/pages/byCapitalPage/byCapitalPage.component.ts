import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-byCapitalPage',
  templateUrl: './byCapitalPage.component.html',
})
export class ByCapitalPageComponent {
  searchByCapital( term: string ):void  {
console.log('Desde ByCapitalPage');
console.log({term});

}

}
