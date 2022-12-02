import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora';
  resultado: any = "";
  pantalla: string = "";
  addN(n:any): void{
    this.pantalla += n;
  }

  deleteAll(): void{
    this.pantalla = "";
  }
  realizarCalculo(array:any){
    let resultado: any = 0;
    let count = 0;
    for (let index = 0; index < array.length; index++) {
        count++;
        if(count > array.length){
            this.resultado = `error syntax`;
            break;
        }
        if(array[index] == "x" || array[index] == "/"){
            if(array[index+1] == 0){
                if(array[index] == "x" ){
                    console.log(resultado + "*" + array[index+2]);
                    resultado = resultado * array[index+2];
                    resultado -= array[index+2];
                }
                else{
                    console.log(resultado + "/" + array[index+2]);
                    resultado = resultado / array[index+2];
                    resultado -= array[index+2];
                }
                index = +2;
            }else{
                if(array[index] == "x" ){
                    resultado = resultado * array[index+1];
                    resultado -= array[index+1];
                } 
                else{
                    let n =resultado/array[index+1];
                    resultado = n-array[index+1];
                } 
                index = +1;
            }
        }
        else resultado += array[index];
    }
    this.resultado = resultado;
}

calcular(){
  let operations = [];
  let nAcutual :any = "";
  let mult: number = 1;
  for (let index = 0; index < this.pantalla.length; index++) {
      let aux = this.pantalla.substring(index, index+1);
      if(aux == "+" || aux == "-" || aux == "x" || aux == "/"){
          if(aux == "+" || aux == "-" ){
              nAcutual *= mult;
              operations.push(parseInt(nAcutual));
              nAcutual = "";
              mult = (aux == "+")?1:-1;
          }else{
              nAcutual *= mult;
              operations.push(parseInt(nAcutual));
              nAcutual = "";
              mult = 1;
              operations.push(aux);
          }

      }else nAcutual+= aux;
  }
  nAcutual *= mult;
  operations.push(parseInt(nAcutual));
  this.realizarCalculo(operations);
  } 

}
