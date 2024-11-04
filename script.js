document.addEventListener('DOMContentLoaded', function(event) {

const contenedor = document.getElementById('contenedor');
const tabla = document.createElement('table');
const idHeader = document.createElement('tr');
const idHeader2= document.createElement('td');
const idHeader3= document.createElement('td');
const idHeader4= document.createElement('td');
const idHeader5= document.createElement('td');
tabla.setAttribute('id','tabla');
tabla.append(idHeader);
idHeader2.innerText = 'NOMBRE';
idHeader2.style.backgroundColor='white'
idHeader3.innerText = 'PRECIO';
idHeader3.style.backgroundColor='white'
idHeader4.innerText = 'CANTIDAD';
idHeader4.style.backgroundColor='white'
idHeader5.innerText = 'TOTAL';
idHeader5.style.backgroundColor='white'
idHeader.append(idHeader2);
idHeader.append(idHeader3);
idHeader.append(idHeader4);
idHeader.append(idHeader5);
contenedor.append(tabla);
const textodelTotal = document.getElementById('textoTotal');
textodelTotal.style.fontWeight='bold'
textodelTotal.textContent='Precio final:'


const carrito = new Carrito();
carrito.obtenerCarrito()

})

class Producto {

constructor (sku, title, price) {

this.sku = sku;
this.title = title,
this.price = price
}
}

class Carrito {
constructor () {
this.productos = [];


}        



obtenerCarrito() {



fetch ('https://jsonblob.com/api/1296354199548583936')
.then (respuesta => respuesta.json())
.then (function(salida) {

let productos = salida[0].products;

const producto1 = new Producto(productos[0].SKU,productos[0].title, productos[0].price );
const producto2 = new Producto(productos[1].SKU,productos[1].title, productos[1].price );
const producto3 = new Producto(productos[2].SKU,productos[2].title, productos[2].price );

                
const listTotal = [];
const lista = [];
lista.push(producto1);
lista.push(producto2);
lista.push(producto3);
let i= 0;
const listica = document.getElementById('listica');
const bre = document.createElement('br')
bre.setAttribute('id','bre')
const espacio = document.getElementById('bre')
let ul = document.createElement("ul");
let li = document.createElement("li");
    

lista.forEach(function(Producto) {

let incremento = 1;

i+= incremento;
console.log(i)

const tabla = document.getElementById('tabla');

const tr = document.createElement('tr');
const td = document.createElement('td');
const divRef = document.createElement('div');
divRef.setAttribute('id','ref')
divRef.textContent='REF '+Producto.sku + "";
td.innerText = Producto.title + "";
tr.append(td);
td.append(divRef)
tabla.append(tr);

const tr2 = document.createElement('tr');
const td2= document.createElement('td');

td2.innerText = Producto.price;
tr.append(td2);
tabla.append(tr2);

const tr3= document.createElement('tr');
const td3 = document.createElement('td');

const botonResta = document.createElement('button');
botonResta.innerText ='-';
const botonSuma = document.createElement('button');

botonSuma.innerText ='+';
td3.append(botonResta)
const divCantidad = document.createElement('div');
divCantidad.setAttribute('id', 'div1'+i)
divCantidad.textContent = '0';
td3.append(divCantidad)
td3.append(botonSuma)

let resto = 1;
let unidad = 0;
let incr = 0;


tr.append(td3);
tabla.append(tr3);

const tr4= document.createElement('tr');
const td4 = document.createElement('td');

let total = document.createElement('div');
total.setAttribute('id', 'div'+i);
total.textContent ='0';
td4.append(total)
let carritoTotal = [];
carritoTotal.push(total);


tr.append(td4);
tabla.append(tr4);
const list3= [];





botonResta.addEventListener('click', function(){

if (unidad > 0) {
unidad-= resto;
divCantidad.textContent = unidad;
console.log(unidad)
listTotal.pop();
total.textContent = parseFloat(unidad * Producto.price).toFixed(2);
listica.textContent=listTotal;


}
})

botonSuma.addEventListener('click', function(){


unidad+= resto;
divCantidad.textContent = unidad;
total.textContent = parseFloat(unidad * Producto.price).toFixed(2);
let elementoASumar =   total.textContent;
listTotal.push(Producto.title + "-" +Producto.price)
listica.textContent=listTotal;
console.log(listTotal)



})
botonSuma.addEventListener('click', function() {
incr = 0;

let totaldeTodo = document.getElementById('totaldeTodo');

for (let p = 1; p <= lista.length; p++) {
let elemento = document.getElementById('div' + p);
let elementoTexto = parseFloat(elemento.textContent);
incr+= elementoTexto;
console.log(incr)
totaldeTodo.textContent = incr;

}

})

botonResta.addEventListener('click', function() {

incr = 0;

let totaldeTodo = document.getElementById('totaldeTodo');

for (let p = 1; p <= lista.length; p++) {
let elemento = document.getElementById('div' + p);
let elementoTexto = parseFloat(elemento.textContent);
incr-= elementoTexto;
if (incr < 0)
incr = elementoTexto;
console.log(incr)
totaldeTodo.textContent = incr;

}

})




} );     


})
.catch(function(error) {


console.log(error);
})
}
}

