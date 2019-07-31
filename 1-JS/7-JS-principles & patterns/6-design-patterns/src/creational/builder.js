
/*


    builder-pattern
    -----------------

    ==> if your object creation is so complex, that it can be represented/defined in a simple separate algorithm, then let algo help builder to build that object.
    ==> Each builder is going to have some default algorithm to create an object.
    ==> Used to create complex objects with builder
    ==> Also keeps the construction logic separate but will create the object(not sealed-various customization in object) in different steps.
    ==> One can build same object with varios methods like in case of JQuery (where we can chain any no. of functions to an object)
    ==> isolates complex object creation logic from representing class
                    OR
        Separates the contruction of a complex object from it's representing so that the same construction process can create different representations.
*/


//------------------------------------


class Request {
    constructor() {
        this.url = '';
        this.method = 'GET';
        this.payload = {};
    }
}


class RequestBuilder {

    constructor() {
        //this.request = new Request();
    }

    create() {
        this.request = new Request();
        return this;
    }

    // Algorithm
    forUrl(url) {
        this.request.url = url;
        return this;
    }
    useMethod(method) {
        this.request.method = method;
        return this;
    }

    payload(payload) {
        this.request.payload = payload;
        return this;
    }
    
    build() {
        return this.request;
    }

}

export default RequestBuilder;