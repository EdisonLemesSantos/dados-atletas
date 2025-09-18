//let temperatura = 25;
class Atleta  {
	constructor(nome, idade, peso, altura, notas) {
		this.nome = nome;
		this.idade = idade;
		this.peso = peso;
		this.altura = altura;
		this.notas = notas;
	}
	calculaCategorias() {
        let categorias = [
            {nome: "Infantil", min: 9, max: 11},
            {nome: "Juvenil", min: 12, max: 13},
            {nome: "Intermediario", min: 14, max: 15},
            {nome: "Adulto", min: 16, max: 30}
        ]
let categoria = categorias.find(function(faixa){
    return this.idade >= faixa.min && this.idade <= faixa.max;
}, this);
      return categoria.nome;  
}
  dadosAtleta() {
    return `
    Nome: ${this.obtemNomeAtleta()}
    Idade: ${this.obtemIdadeAtleta()} anos
    Peso: ${this.obtemPesoAtleta()}Kg
    Altura: ${this.altura}m
    Notas: ${this.obtemNotasAtleta()}
    Categoria: ${this.obtemCategoria()}
    IMC: ${this.obtemIMC()}
    Média ${this.obtemMediaValida()}`
  }
	calculaIMC() {
    let peso = this.peso;
    let altura = this.altura;
    let imc = peso / (altura * altura);
    return imc;
  }

	calculaMediaValida() {
      let notasAtletas = this.obtemNotasAtleta();
      notasAtletas.sort(function(a, b) {
        return a - b;
      });
      let notasValidas = notasAtletas.slice(1, notasAtletas.length -1);
      let soma = notasValidas.reduce(function(total, nota){
        return total + nota;
      }, 0);
      let media = soma / notasValidas.length;
      return media;
  }
	obtemNomeAtleta() {
        return this.nome;
  }
	obtemIdadeAtleta() {
    return this.idade;
  }
	obtemPesoAtleta() {
    return this.peso;
  }
	obtemNotasAtleta() {
    return this.notas;
  }
	obtemCategoria() {
    let categoria = this.calculaCategorias();
        if(categoria) {
            return categoria;
        }
            return "Sem categoria";
    }
	obtemIMC() {
    return this.calculaIMC();
    }
	obtemMediaValida() {
    return this.calculaMediaValida();
  }
}

//Declara o atleta
const atleta = new Atleta("Cesar Abascal",
	30, 80, 1.70,
	[10, 9.34, 8.42, 10, 7.88]);
    const atleta2 = new Atleta("Beatriz Santos",
	10, 20, 1.10,
	[8, 6, 9, 10, 10]);
    //console.log(`Nome: ${atleta.obtemNomeAtleta()}\n
//Idade: ${atleta.obtemIdadeAtleta()}\n
//Peso: ${atleta.obtemPesoAtleta()}\n
//Altura: ${atleta.altura}\n
//Notas: ${atleta.obtemNotasAtleta()}\n
//Categorias: ${atleta.obtemCategoria()}\n
//IMC: ${atleta.obtemIMC()}\n
//Media: ${atleta.calculaMediaValida()}`);
    console.log(atleta.dadosAtleta());
    console.log("-------------------------------------");
    console.log(atleta2.dadosAtleta());