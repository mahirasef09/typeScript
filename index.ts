
function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === false) {
        return input.toLowerCase();
    }
    else {
        return input.toUpperCase();
    }
}






function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter(item => item.rating >= 4);
}







function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.flat();
}






class Vehicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number) {
        this.make = make;
        this.year = year;
    }
    getInfo() {
        console.log(`Make: ${this.make}, Year: ${this.year}`);
    }
}

class Car extends Vehicle {
    private model: string;
    constructor(make: string, year: number, model: string) {
        super(make, year)
        this.model = model;
    }
    getModel() {
        console.log(`Model: ${this.model}`);
    }

}

const myCar = new Car("Toyota", 2020, "Corolla");





function processValue(value: string | number): number {
    if (typeof value === "number") {
        return value * 2;
    }
    else {
        return value.length;
    }
}






interface Product {
    name: string;
    price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) return null;

    return products.reduce((a, b) =>
        b.price > a.price ? b : a
    ); // using reduce for achieving highest price
}







enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function getDayType(day: Day): string {
    if (day === Day.Saturday || day === Day.Sunday) {
        return "Weekend";
      } else {
        return "Weekday";
      }
}





async function squareAsync(num: number): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num < 0) {
                reject(new Error("Rejected because the number is negative"));
            } else {
                resolve(num * num);
            }
        }, 1000);
    });
}

