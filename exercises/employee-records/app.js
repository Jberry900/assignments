let employees = [""]

function Employee(name, title, salary, status) {
    this.name = name
    this.title = title
    this.salary = salary
    this.status = status
}

let john = new Employee("John", "Boss", "$50,000")
console.log(john)