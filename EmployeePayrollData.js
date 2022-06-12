class EmployeePayrollData {
    // Property
    // id;
    // gender;
    // startDate;
    // salary;

    //Constructor

    constructor(...params){
        this.id = params[0];
        this.name = params[1];this.startDate
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    //Getter And Setter
    get name() {
        return this._name;
    }
    set name(name) {
        console.log("Setting:- " +name);
        this._name = name;
    }

    //Method
    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = !this.startDate ? "undefined" :
                        this.startDate.toLocaleDateString("en-US", options);
        
        return "id:- " + this.id + "\nname:- " + this.name + "\nSalary:- " + this.salary + "\nGender:-" +this.gender+ "\nStartDate:-" + empDate;

    }
} 
    let employeePayrollData = new EmployeePayrollData(1, "Anshul", 30000);
console.log(employeePayrollData.toString());

let newEmployeePayrollData = new EmployeePayrollData(2 , "Ansh" , 40000 , "M" , new Date());
console.log(newEmployeePayrollData.toString());