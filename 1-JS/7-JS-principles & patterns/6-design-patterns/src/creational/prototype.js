
/*


    prototype-pattern
    -----------------

    ==> if you want to create some kinds of objects again and again with slight modification in values or no modification, then clone the object which is called Prototype pattern.
    ==> Simply creates a clone of your existing/calling object and depending on the definition you can add extra new properties or update values of cloned properties in the cloned object
    ==> Cloning using "new" keyword to return new object instance will clone the object completely as it is with all properties, values and member functions intact.
    ==> While using prototype with Object.assign() to clone, 
        i) then we can pass on additional configuration obj to add/edit properties 
        ii) and can specifically pass src object member functions  as "this.__proto__.<methodName>" inside a separate object notation or simply "this.<methodName>" for it to be cloned
    
*/


//------------------------------------

class Sheep {
    constructor(name, weight) {
        //......
        this.name = name;
        this.weight = weight;
    }
    clone() {
        return new Sheep(this.name, this.weight);
    }
}

// export default Sheep;
// module.exports = Sheep;



class Template {
    constructor(header, body, footer) {
        ///
        this.header = header;
        this.body = body;
        this.footer = footer;
    }

    clone(config) {
        // return Object.assign({}, this, config, { clone: this.__proto__.clone }) //this.clone will fetch the actual clone() method residing in object's prototype
        return Object.assign({}, this, config, { clone: this.clone }) //this.clone will fetch the reference to clone() method
        // return new Template(this.header, this.body, this.footer)
    }

}


// export { Template };

module.exports = {Sheep, Template};