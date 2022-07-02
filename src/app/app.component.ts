import { Component } from '@angular/core';
import { CarroService } from './carro.service';
import { ICarro } from './ICarros';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ApiRequest';

  constructor(private carroService: CarroService)
  {}

  obterTodosCarros(){
    this.carroService.obterTodos()
      .then(carros => console.log(carros))
      .catch(error => console.error(error));
  }

  obterSomenteUm(){
    this.carroService.obterPorId(4)
      .then(carro => console.log(carro))
      .catch(error => console.error(error));
  }

  adicionarCarro(){
    const carro: ICarro = {
      nome: "Civic",
      marca: "Honda"
    };

    this.carroService.adicionar(carro)
      .then((carro: any) => console.log('🟢 Adicionado'))
      .catch((error: any) => console.error(error));
  }

  atualizar(){
    const carro: ICarro = {
      id: 4,
      nome: "Corolla",
      marca: "Toyota"
    };

    this.carroService.atualizar(carro)
      .then((carro: any) => console.log('🔵 Att', carro))
      .catch((error: any) => console.error(error));
  }

  remover(){
    this.carroService.delete(6)
      .then((res: any) => console.log('🔴 Removido', res))
      .catch((error: any) => console.error(error));
  }

}
