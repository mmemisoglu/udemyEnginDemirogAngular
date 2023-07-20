import { Injectable } from '@angular/core';
declare let swal:any;

@Injectable()

export class SweetalertService {
  constructor() { }
  
  success(message:string){
    swal("İşlem başarılı", message, "success");
    //swal("İşlem başarılı", "Sepete eklendi : "+ product.name, "success");
  }
  error(message:string){
    swal("İşlem başarısız", message, "error");
    //swal("İşlem başarılı", "Sepete eklendi : "+ product.name, "success");
  }
  warning(message:string){
    swal("Dikkat", message, "info");
    //swal("İşlem başarılı", "Sepete eklendi : "+ product.name, "success");
  }
}
