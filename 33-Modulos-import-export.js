// Los modulos son para que podamos llamar un archivo javaScript dentro de otro archivo JavaScript.

//Para importar un archivo de otro usamos em import{aqui el nombre del codigo importado} from "asignamos aqui el archivo de origin del codigo"
import ladrar, {person}from "./33.3-archivo-para-importacion.js"
// importacion del Objeto
// tbm podemos asignar un nuevo numbre a al codigo importado usando "as"
import {operaciones as op} from "./33.3-archivo-para-importacion.js"
console.log(person)
console.log(op.restar(3,2), // usamos op ya que asignamos otro nombre
op.sumar(10,23));
ladrar();