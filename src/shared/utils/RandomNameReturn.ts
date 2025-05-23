class RandomNameReturn {

     private static readonly names: string[] = [
          "Ana", "Bruno", "Carlos", "Daniela", "Eduardo", "Fernanda", "Gustavo", "Helena",
          "Igor", "Joana", "Kleber", "Larissa", "Marcos", "Nathalia", "Otávio", "Patrícia",
          "Quésia", "Rafael", "Sabrina", "Thiago", "Ursula", "Vitor", "Wesley", "Ximena",
          "Yuri", "Zilda", "Alice", "Breno", "Catarina", "Diego", "Elisa", "Fabiano",
          "Gabriela", "Hugo", "Isabela", "Jorge", "Karina", "Leonardo", "Melissa", "Nathan",
          "Olívia", "Paulo", "Renata", "Samuel", "Tatiane", "Vinícius", "William", "Yasmim", "Zaqueu"
     ];

     private constructor() { }

     static returnRandomName(): string {
          const randomNumber = Math.floor(Math.random() * this.names.length);
          return this.names[randomNumber];
     }
}

export default RandomNameReturn;