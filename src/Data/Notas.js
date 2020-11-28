export default class ArrayDeNotas {
  constructor() {
    this.notas = [];
    this.inscritos = [];
  }

  adicionaNota(titulo, texto, categoria) {
    const novaNota = new Nota(titulo, texto, categoria);
    this.notas.push(novaNota);
    this.notificar()
  }

  deletaNota(index) {
    this.notas.splice(index, 1);
    this.notificar()
  }

  inscrever(func) {
    this.inscritos.push(func);
  }

  desinscrever(func) {
    this.inscritos = this.inscritos.filter(f => f !== func);
  }

  notificar() {
    this.inscritos.forEach(func => func(this.notas));
  }
}

class Nota {
  constructor(titulo, texto, categoria) {
    this.titulo = titulo;
    this.texto = texto;
    this.categoria = categoria;
  }
}