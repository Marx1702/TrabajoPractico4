//DEFINIMOS LA CLASE DE PARTIDO POLITICO
class PartidoPolitico {
constructor(public nombre: string) {}
}
//DEFINIMOS LA CLASE DE CANDIDATO TENIENDO NOMBRE Y A QUE PARTIDO PERTENECEN COMO ATRIBUTOS
class Candidato {
constructor(public nombre: string, public partido: PartidoPolitico) {}
}
//EN ESTA LISTA INCLUIMOS LOS CANDIDATOS
class Lista {
candidatos: Candidato[] = [];
//FUNCION PARA EL INGRESO AL ARRAY
agregarCandidato(candidato: Candidato) {
    this.candidatos.push(candidato);
}
}
//DEFINIMOS LA CLASE VOTANTE CON NOMBRE Y DNI
class Votante {
constructor(public nombre: string, public dni: string) {}
}

//EN LA CLASE VOTO DEFINIMOS COMO ATRIBUTOS QUIEN VOTO Y A QUIEN 
class Voto {
constructor(public votante: Votante, public candidato: Candidato) {}
}

class EleccionLegislativa {
constructor(public distrito: string, public listas: Lista[]) {}
}

class EleccionNacional {
constructor(public pais: string, public listas: Lista[]) {}
}

class EleccionProvincial {
constructor(public provincia: string, public listas: Lista[]) {}
}


//ACA ASIGNAMOS LOS NOMBRES A LOS PARTIDOS
const partidoA = new PartidoPolitico('Partido A');
const partidoB = new PartidoPolitico('Partido B');


//A LA HORA DE DEFINIR LAS CONSTANTES DE CANDIDATO VA ATRIBUIDO A UN PARTIDO ESPECIFICO
const candidato1 = new Candidato('Candidato 1', partidoA);
const candidato2 = new Candidato('Candidato 2', partidoA);
const candidato3 = new Candidato('Candidato 3', partidoB);


//DEFINIMOS LA LISTA LEGISLATIVA Y AGREGAMOS LOS CANDIDATOS
const listaLegislativa = new Lista();
listaLegislativa.agregarCandidato(candidato1);
listaLegislativa.agregarCandidato(candidato2);

//DEFINIMOS LA CONSTANTE LISTA NACIONAL Y AGREGAMOS SUS CANDIDATOS
const listaNacional = new Lista();
listaNacional.agregarCandidato(candidato1);
listaNacional.agregarCandidato(candidato3);


//CREAMOS NUEVAS INSTANCIAS DE ELECCIONLEGISLATIVA INCORPORANDO LOS DATOS OBTENIDOS
const eleccionLegislativa = new EleccionLegislativa('Distrito 1', [listaLegislativa]);
const eleccionNacional = new EleccionNacional('Argentina', [listaNacional]);
const eleccionProvincial = new EleccionProvincial('Provincia X', [listaLegislativa, listaNacional]);

//NO TENEMOS NINGUN TIPO DE CONSOLE LOG YA QUE SOLO DEFINIMOS LAS CLASES.SE PUEDE AGREGAR UN INGRESO TANTO DE INFORMACION O PODEMOS PASAR A PRIVATE LOS ATRIBUTOS DE EL VOTO.