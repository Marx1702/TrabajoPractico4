//DEFINIMOS LA CLASE DE PARTIDO POLITICO
var PartidoPolitico = /** @class */ (function () {
    function PartidoPolitico(nombre) {
        this.nombre = nombre;
    }
    return PartidoPolitico;
}());
//DEFINIMOS LA CLASE DE CANDIDATO TENIENDO NOMBRE Y A QUE PARTIDO PERTENECEN COMO ATRIBUTOS
var Candidato = /** @class */ (function () {
    function Candidato(nombre, partido) {
        this.nombre = nombre;
        this.partido = partido;
    }
    return Candidato;
}());
//EN ESTA LISTA INCLUIMOS LOS CANDIDATOS
var Lista = /** @class */ (function () {
    function Lista() {
        this.candidatos = [];
    }
    //FUNCION PARA EL INGRESO AL ARRAY
    Lista.prototype.agregarCandidato = function (candidato) {
        this.candidatos.push(candidato);
    };
    return Lista;
}());
//DEFINIMOS LA CLASE VOTANTE CON NOMBRE Y DNI
var Votante = /** @class */ (function () {
    function Votante(nombre, dni) {
        this.nombre = nombre;
        this.dni = dni;
    }
    return Votante;
}());
//EN LA CLASE VOTO DEFINIMOS COMO ATRIBUTOS QUIEN VOTO Y A QUIEN 
var Voto = /** @class */ (function () {
    function Voto(votante, candidato) {
        this.votante = votante;
        this.candidato = candidato;
    }
    return Voto;
}());
var EleccionLegislativa = /** @class */ (function () {
    function EleccionLegislativa(distrito, listas) {
        this.distrito = distrito;
        this.listas = listas;
    }
    return EleccionLegislativa;
}());
var EleccionNacional = /** @class */ (function () {
    function EleccionNacional(pais, listas) {
        this.pais = pais;
        this.listas = listas;
    }
    return EleccionNacional;
}());
var EleccionProvincial = /** @class */ (function () {
    function EleccionProvincial(provincia, listas) {
        this.provincia = provincia;
        this.listas = listas;
    }
    return EleccionProvincial;
}());
//ACA ASIGNAMOS LOS NOMBRES A LOS PARTIDOS
var partidoA = new PartidoPolitico('Partido A');
var partidoB = new PartidoPolitico('Partido B');
//A LA HORA DE DEFINIR LAS CONSTANTES DE CANDIDATO VA ATRIBUIDO A UN PARTIDO ESPECIFICO
var candidato1 = new Candidato('Candidato 1', partidoA);
var candidato2 = new Candidato('Candidato 2', partidoA);
var candidato3 = new Candidato('Candidato 3', partidoB);
//DEFINIMOS LA LISTA LEGISLATIVA Y AGREGAMOS LOS CANDIDATOS
var listaLegislativa = new Lista();
listaLegislativa.agregarCandidato(candidato1);
listaLegislativa.agregarCandidato(candidato2);
//DEFINIMOS LA CONSTANTE LISTA NACIONAL Y AGREGAMOS SUS CANDIDATOS
var listaNacional = new Lista();
listaNacional.agregarCandidato(candidato1);
listaNacional.agregarCandidato(candidato3);
//CREAMOS NUEVAS INSTANCIAS DE ELECCIONLEGISLATIVA INCORPORANDO LOS DATOS OBTENIDOS
var eleccionLegislativa = new EleccionLegislativa('Distrito 1', [listaLegislativa]);
var eleccionNacional = new EleccionNacional('Argentina', [listaNacional]);
var eleccionProvincial = new EleccionProvincial('Provincia X', [listaLegislativa, listaNacional]);
