const readline = require('readline');

// Función para crear una interfaz de lectura
function createReadlineInterface() {
  return readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
}

// Función para solicitar datos al usuario
function promptUser(question) {
  const rl = createReadlineInterface();

  return new Promise((resolve, reject) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

// Definición de la clase PartidoPolitico
class PartidoPolitico {
  constructor(public nombre: string) {}
}

// Definición de la clase Candidato
class Candidato {
  constructor(public nombre: string, public partido: PartidoPolitico) {}
}

// Definición de la clase Lista
class Lista {
  candidatos: Candidato[] = [];

  async agregarCandidato() {
    const nombre = await promptUser('Ingrese el nombre del candidato: ');
    const partido = await promptUser('Ingrese el nombre del partido político: ');
    const partidoPolitico = new PartidoPolitico(partido);
    const candidato = new Candidato(nombre, partidoPolitico);
    this.candidatos.push(candidato);
    console.log('Candidato agregado correctamente.');
  }
}

// Definición de la clase Votante
class Votante {
  constructor(public nombre: string, public dni: string) {}
  
  async agregarDatos() {
    this.nombre = await promptUser('Ingrese el nombre del votante: ');
    this.dni = await promptUser('Ingrese el DNI del votante: ');
    console.log('Datos del votante agregados correctamente.');
  }
}

// Definición de la clase Voto
class Voto {
  constructor(public votante: Votante, public candidato: Candidato) {}
  
  async agregarDatos(candidatos) {
    const nombreVotante = await promptUser('Ingrese el nombre del votante: ');
    const dniVotante = await promptUser('Ingrese el DNI del votante: ');
    const nombreCandidato = await promptUser('Ingrese el nombre del candidato: ');

    const votante = new Votante(nombreVotante, dniVotante);
    const candidato = candidatos.find((candidato) => candidato.nombre === nombreCandidato);

    if (candidato) {
      this.votante = votante;
      this.candidato = candidato;
      console.log('Voto registrado correctamente.');
    } else {
      console.log('El candidato no existe en la lista.');
    }
  }
}

// Definición de la clase EleccionLegislativa
class EleccionLegislativa {
  constructor(public distrito: string, public listas: Lista[]) {}
  
  async agregarDatos() {
    this.distrito = await promptUser('Ingrese el nombre del distrito: ');
    console.log('Datos de la elección legislativa agregados correctamente.');
  }
}

// Definición de la clase EleccionNacional
class EleccionNacional {
  constructor(public pais: string, public listas: Lista[]) {}
  
  async agregarDatos() {
    this.pais = await promptUser('Ingrese el nombre del país: ');
    console.log('Datos de la elección nacional agregados correctamente.');
  }
}

// Definición de la clase EleccionProvincial
class EleccionProvincial {
  constructor(public provincia: string, public listas: Lista[]) {}
}

// Función principal asincrónica
async function main() {
  const partidoA = new PartidoPolitico("Partido A");
  const partidoB = new PartidoPolitico("Partido B");

  const listaLegislativa = new Lista();
  await listaLegislativa.agregarCandidato();
}

// Ejecutar la función principal
main().catch((error) => console.error(error));
