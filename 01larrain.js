var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var readline = require('readline');
// Función para crear una interfaz de lectura
function createReadlineInterface() {
    return readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
}
// Función para solicitar datos al usuario
function promptUser(question) {
    var rl = createReadlineInterface();
    return new Promise(function (resolve, reject) {
        rl.question(question, function (answer) {
            rl.close();
            resolve(answer);
        });
    });
}
// Definición de la clase PartidoPolitico
var PartidoPolitico = /** @class */ (function () {
    function PartidoPolitico(nombre) {
        this.nombre = nombre;
    }
    return PartidoPolitico;
}());
// Definición de la clase Candidato
var Candidato = /** @class */ (function () {
    function Candidato(nombre, partido) {
        this.nombre = nombre;
        this.partido = partido;
    }
    return Candidato;
}());
// Definición de la clase Lista
var Lista = /** @class */ (function () {
    function Lista() {
        this.candidatos = [];
    }
    Lista.prototype.agregarCandidato = function () {
        return __awaiter(this, void 0, void 0, function () {
            var nombre, partido, partidoPolitico, candidato;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, promptUser('Ingrese el nombre del candidato: ')];
                    case 1:
                        nombre = _a.sent();
                        return [4 /*yield*/, promptUser('Ingrese el nombre del partido político: ')];
                    case 2:
                        partido = _a.sent();
                        partidoPolitico = new PartidoPolitico(partido);
                        candidato = new Candidato(nombre, partidoPolitico);
                        this.candidatos.push(candidato);
                        console.log('Candidato agregado correctamente.');
                        return [2 /*return*/];
                }
            });
        });
    };
    return Lista;
}());
// Definición de la clase Votante
var Votante = /** @class */ (function () {
    function Votante(nombre, dni) {
        this.nombre = nombre;
        this.dni = dni;
    }
    Votante.prototype.agregarDatos = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, promptUser('Ingrese el nombre del votante: ')];
                    case 1:
                        _a.nombre = _c.sent();
                        _b = this;
                        return [4 /*yield*/, promptUser('Ingrese el DNI del votante: ')];
                    case 2:
                        _b.dni = _c.sent();
                        console.log('Datos del votante agregados correctamente.');
                        return [2 /*return*/];
                }
            });
        });
    };
    return Votante;
}());
// Definición de la clase Voto
var Voto = /** @class */ (function () {
    function Voto(votante, candidato) {
        this.votante = votante;
        this.candidato = candidato;
    }
    Voto.prototype.agregarDatos = function (candidatos) {
        return __awaiter(this, void 0, void 0, function () {
            var nombreVotante, dniVotante, nombreCandidato, votante, candidato;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, promptUser('Ingrese el nombre del votante: ')];
                    case 1:
                        nombreVotante = _a.sent();
                        return [4 /*yield*/, promptUser('Ingrese el DNI del votante: ')];
                    case 2:
                        dniVotante = _a.sent();
                        return [4 /*yield*/, promptUser('Ingrese el nombre del candidato: ')];
                    case 3:
                        nombreCandidato = _a.sent();
                        votante = new Votante(nombreVotante, dniVotante);
                        candidato = candidatos.find(function (candidato) { return candidato.nombre === nombreCandidato; });
                        if (candidato) {
                            this.votante = votante;
                            this.candidato = candidato;
                            console.log('Voto registrado correctamente.');
                        }
                        else {
                            console.log('El candidato no existe en la lista.');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return Voto;
}());
// Definición de la clase EleccionLegislativa
var EleccionLegislativa = /** @class */ (function () {
    function EleccionLegislativa(distrito, listas) {
        this.distrito = distrito;
        this.listas = listas;
    }
    EleccionLegislativa.prototype.agregarDatos = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, promptUser('Ingrese el nombre del distrito: ')];
                    case 1:
                        _a.distrito = _b.sent();
                        console.log('Datos de la elección legislativa agregados correctamente.');
                        return [2 /*return*/];
                }
            });
        });
    };
    return EleccionLegislativa;
}());
// Definición de la clase EleccionNacional
var EleccionNacional = /** @class */ (function () {
    function EleccionNacional(pais, listas) {
        this.pais = pais;
        this.listas = listas;
    }
    EleccionNacional.prototype.agregarDatos = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, promptUser('Ingrese el nombre del país: ')];
                    case 1:
                        _a.pais = _b.sent();
                        console.log('Datos de la elección nacional agregados correctamente.');
                        return [2 /*return*/];
                }
            });
        });
    };
    return EleccionNacional;
}());
// Definición de la clase EleccionProvincial
var EleccionProvincial = /** @class */ (function () {
    function EleccionProvincial(provincia, listas) {
        this.provincia = provincia;
        this.listas = listas;
    }
    return EleccionProvincial;
}());
// Función principal asincrónica
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var partidoA, partidoB, listaLegislativa;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    partidoA = new PartidoPolitico("Partido A");
                    partidoB = new PartidoPolitico("Partido B");
                    listaLegislativa = new Lista();
                    return [4 /*yield*/, listaLegislativa.agregarCandidato()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
// Ejecutar la función principal
main().catch(function (error) { return console.error(error); });
