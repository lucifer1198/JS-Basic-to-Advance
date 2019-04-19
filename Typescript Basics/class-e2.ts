// defining a class
class Ani_mal {

    constructor(public limbs: number, public typeOfAnimal: string, public diet: string) {
        this.limbs = limbs;
        this.typeOfAnimal = typeOfAnimal;
        this.diet = diet;

    }// end constructor

    getDietType = () => {
        return this.diet
    }

}// end class 


let ti_ger = new Ani_mal(4, "mammal", "carnivore")
let sna_ke = new Ani_mal(0, "reptile", "carnivore")
alert(ti_ger.getDietType())