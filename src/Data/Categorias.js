export default class Categorias {
  constructor() {
    this.categorias = [];
    this.inscritos = [];
  }

  adicionaCategoria(novaCategoria) {
    this.categorias.push(novaCategoria);
    this.notificar();
  }

  deletaCategoria(index) {
    this.categorias.splice(index, 1);
    this.notificar();
  }

  inscrever(func) {
    this.inscritos.push(func);
  }

  desinscrever(func) {
    this.inscritos = this.inscritos.filter(f => f !== func);
  }

  notificar() {
    this.inscritos.forEach(func => func(this.categorias));
  }
}