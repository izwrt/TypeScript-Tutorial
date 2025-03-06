const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number): boolean | number {
    return val
}

function identityTwo(val: any): any{
    return val
}

function identityThree<Type>(val: Type): Type {
    return val
}

function identityFour<T>(val: T): T {
    return val
}

console.log(identityThree<number>(24))
console.log(identityFour<string>("water"))

interface Bootle {
    brand: string,
    type: number
}

identityFour<Bootle>({brand:"Cloast",type:500})

function identityFive<T,U>(val1: T,val2: U) {
    console.log(`bootle brand is ${val1} and type is ${val2}`);
}

identityFive<string,number>("Closter",500)

function typeCasting<T>(val:T): T {
    return 3 as T
}

function withouTypeCasting<T>(val:T): number {
    return 3;
}

function getSearchProduct<T>(Product: T[]): T {
    const myIndex = 3;
    return Product[myIndex];
}

const getMoreSerachProduct = <T>(Product: T[]): T => {
    const myIndex = 3;
    return Product[myIndex];
}


const anotherFunction = <T, U extends number>(value1:T, val2:U): object => {
    return {
        value1,
        val2
    }
}

// anotherFunction(3,"4")


interface Database {
    connection: number,
    username: string,
    password: string
}

function anotherFunctionTwo<T, U extends Database>(value1:T, val2:U): object {
    return {
        value1,
        val2
    }
}

anotherFunctionTwo("500",{ connection: 1, username: "admin", password: "secret" });

interface Quiz {
    name: string,
    type: string
}

interface Course {
    name: string,
    author: string,
    subject: string
}

class Sellable<T> {
    public cart: T[] = []

    addToCart(product: T){
        this.cart.push(product)
    }
}