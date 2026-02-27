class Herói{
  constructor(nome, idade, tipo){
  this.nome = nome
  this.idade = idade
  this.tipo = tipo
}
  atacar(){
    let ataque
      if (this.tipo === "mago") {
      ataque = "magia"
    } else if (this.tipo === "guerreiro") {
      ataque = "espada"
    } else if (this.tipo === "monge") {
      ataque = "artes marciais"
    } else if (this.tipo === "ninja") {
      ataque = "shuriken"
      }
    console.log(`O herói de nome ${this.nome}, ${this.idade} anos, de tipo ${this.tipo} atacou usando ${ataque}`)
  }
}
    const Herói1 = new Herói("Felipe", 15, "ninja")
        Herói1.atacar()

