
//1

function Employee(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
}

const employees = [
    new Employee("Abel", "developer", 60000),
    new Employee("Danny", "Product manager", 100000),
    new Employee("Melaku", "designer", 30000),
    new Employee("Mulerk", "developer", 40000)

];


employees.forEach(employee => {
    if (employee.position === "developer") {
        employee.salary *= 1.10
    }
    console.log(`${employee.name}: ${employee.position}, $${employee.salary}`);
});


// 2
function ProductsInStock(products) {

    return products.filter(products => products.inStock).sort((a, b) => a.price - b.price);


}

const products = [
    { name: "Cable", price: 100, inStock: true },
    { name: "Earpode", price: 1000, inStock: true },
    { name: "Phone Case", price: 200, inStock: false },
    { name: "Bag", price: 1200, instock: false },
    { name: "Headphones", price: 500, instock: false },
];
const x = ProductsInStock(products)
console.log(x);



// 3. 
const grades = {
    Abel: [50, 80, 75],
    Danny: [90, 40, 65],
    Melaku: [85, 80, 100],
    Mulerk: [90, 80, 45],
    Arsema: [70, 75, 80],
};

function studentAverage(grades) {
    for (const student in grades) {
        const scores = grades[student];
        const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
        const result = average > 70 ? "Pass" : "Fail";
        console.log(`${student}: Average = ${average}, ${result}`);
    }
}

studentAverage(grades);





// 4
function User(username, email, isActive) {
    this.username = username
    this.email = email
    this.isActive = isActive
}

const users = [
    new User("Abel", "abel@gmail.com", true),
    new User("Danny", "danny@gmail.com", false),
    new User("Melaku", "melaku@gmail.com", true),
    new User("Arsu", "arsu@gmail.com", false),
]

users.forEach(user => {

    if (user.isActive == "false") {
        console.log(`users ${user.username} account has been deactivated`)
    }
})

const activeusers = []
users.forEach(user => {
    if (user.isActive) {
        activeusers.push(user.username)
    }
})
console.log(activeusers)




// 5
function allDestination(destinations, maxDistance, budget) {

    const affordableDestinations = destinations.filter(destination => destination.distance <= maxDistance && destination.budgetRequired <= budget

    )
    if (affordableDestinations.length === 0) {
        return "No destinations uder your budget and distance"
    } else {
        return affordableDestinations
    }

}


const destinations = [
    { name: "Kenya", distance: 4000, budgetRequired: 50000 },
    { name: "Eritria", distance: 2000, budgetRequired: 20000 },
    { name: "Ethiopia", distance: 1000, budgetRequired: 10000 }

]

const maxDistance = 2000
const budget = 20000

const affordableDestinations = allDestination(destinations, maxDistance, budget)
console.log("These are the affordable destinations:", affordableDestinations)
























