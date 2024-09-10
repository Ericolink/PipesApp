import { Component } from '@angular/core';
import { resolve } from 'node:path';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-pages',
  templateUrl: './uncommon-pages.component.html',
  styleUrl: './uncommon-pages.component.css'
})
export class UncommonPagesComponent {
  //i18n Select
  public name: string = 'Fernando';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient():void{
    this.name = 'Melissa';
    this.gender = 'female';
  }

  // i18nPlural
  public client: string[] = ['Isma','Nar','Ashley','Kim','Jenny','Obed','Dylan','Uriel','Eric','Saul']
  deleteClient(): void {
    this.client.shift();
  }

  //Slice
  public clients: string[] = ['Isma','Nar','Ashley','Kim','Jenny','Obed','Dylan','Uriel','Eric','Saul']
  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }


  //KeyValue Pipe
  public person =
  {
    name: 'Fernando',
    age: 36,
    addres: 'Ottawa, Canada'
  }

  //async pipe
//  public myObservableTimer = interval(3000).pipe(
//    tap( value => console.log('tap', value ) )
//  );
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap ( value => console.log('tap:', value))
  );

  public promiseValue: Promise<string> = new Promise( ( resolve, reject ) => {
    setTimeout ( () => {
      resolve( 'Tenemos data en la promesa.' );
      console.log( 'Tenemos data en la promesa.' );
      this.person.name = 'Otro nombre '
    }, 3500);
  })

}
