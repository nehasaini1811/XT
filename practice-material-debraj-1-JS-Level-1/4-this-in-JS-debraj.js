function sessionStart() {
    function sapientXtTraining() {
        console.log(this.name + " teaching .js");
        let self = this;
        let learn = function() {
            console.log(this.name + " learning .js from " + self.name);
        }
        return learn;
    }
    function Trainer(name) {
        this.name = name;
    }
    function Employee(name) {
        this.name = name;
    }
    Employee.prototype.work = function() {
        console.log(this.name + " working after learn");
    }
    let tnr = new Trainer('Subbu');
    let e1 = new Employee('E1');
    let e2 = new Employee('E2');
    let learnFunc = sapientXtTraining.call(tnr);
    learnFunc.call(e1);
    learnFunc.call(e2);
    e1.work();
    e2.work()
}
sessionStart();