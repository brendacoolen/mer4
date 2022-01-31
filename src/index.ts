let producto1:string = prompt("Ingrese el primer producto");
let precioProducto1:number = Number(prompt("Ingrese el precio del primer producto"));
let stockProducto1:number = Number(prompt("Ingrese el stock del primer producto"));

let producto2:string = prompt("Ingrese el segundo producto");
let precioProducto2:number = Number(prompt("Ingrese el precio de segundo producto"));
let stockProducto2:number = Number(prompt("Ingrese el stock del segundo producto"));

let producto3:string = prompt("Ingrese el tercer producto");
let precioProducto3:number = Number(prompt("Ingrese el precio del tercer producto"));
let stockProducto3:number =(prompt("Ingrese el stock del tercer producto"));

if(stockProducto1<1){
  stockProducto1=prompt("El stock del producto 1 es inferior a 1.El stock no puede ser inferior a 1, ingrese de nuevo el stock");
};
if(stockProducto2<1){
  stockProducto2=prompt("El stock del producto 2 es inferior a 1.El stock no puede ser inferior a 1, ingrese de nuevo el stock");
};
if(stockProducto3<1){
  stockProducto3=prompt("El stock del producto 3 es inferior a 1.El stock no puede ser inferior a 1, ingrese de nuevo el stock");
};

console.log("Bienvenido al supermercado El Oceano, tenemos los siguientes productos:", stockProducto1,producto1, "a $", precioProducto1,"," stockProducto2 , producto2, "a $", precioProducto2,"," stockProducto3,producto3, "a $", precioProducto3,",");

let productoAdquirido:number = Number(prompt("Digite 1 para comprar el primer producto,2 para comprar el segundo producto y 3 para comprar el tercer producto"));

let cantidadAdquirida:number = Number(prompt("Ingrese la cantidad que desea comprar"));

if(cantidadAdquirida<1){
  cantidadAdquirida=prompt("No se puede adquirir menos de 1 producto, ingrese otra cantidad");
};

if(productoAdquirido===1 && cantidadAdquirida>stockProducto1){
  cantidadAdquirida=prompt("No tenemos la cantidad ingresada en stock, ingrese una cantidad menor. Disculpe por el inconveniente");
} else if (productoAdquirido===2 && cantidadAdquirida>stockProducto2){
  cantidadAdquirida=prompt("No tenemos la cantidad ingresada en stock, ingrese una cantidad menor. Disculpe por el inconveniente");
} else if(productoAdquirido===3 && cantidadAdquirida>stockProducto3){
  cantidadAdquirida=prompt("No tenemos la cantidad ingresada en stock, ingrese una cantidad menor. Disculpe por el inconveniente");
};

if(productoAdquirido===1){
  console.log("Usted compro", cantidadAdquirida,producto1, "a $", cantidadAdquirida*precioProducto1, ".");
  console.log("Quedan", stockProducto1-cantidadAdquirida,producto1, "en stock.");

} else if(productoAdquirido===2){
  console.log("Usted compro", cantidadAdquirida,producto2, "a $", cantidadAdquirida*precioProducto2, ".");
  console.log("Quedan", stockProducto2-cantidadAdquirida,producto2, "en stock.");

} else if(productoAdquirido===3){
  console.log("Usted compro", cantidadAdquirida,producto3, "a $", cantidadAdquirida*precioProducto3, ".");
  console.log("Quedan", stockProducto3-cantidadAdquirida,producto3, "en stock.");
}


