


/*


    chain-of-resp
    -----------------

    ==> Avoid coupling the sender of a request to it's receiver by giving more than 1 obj a chance to handle the request. Chain the 
    receiving objects and pass the object along the chain until an object handles it.
    ==> Middlewares in Express/js follows chain-of-resp pattern.

  request/method-call ---> obj-1  --> obj-2 --> obj-2.1  --> obj-3  

  e.g


  http-request    ---> log-filter-1  --> auth-filter --> any-filter --> validation-filter --> end-point 


*/




// ATM



let twoK = {
    next: null,
    nextOne(nextObject) {
        this.next = nextObject;
        return this.next;
    },
    get(amount) {
        if (amount % 2000 === 0) {
            return Math.floor(amount / 2000) + " 2k-currency notes";
        }
        else {
            if (this.next)
                return Math.floor(amount / 2000) + " 2k-currency notes and " + this.next.get(amount > 2000 ? amount % 2000 : amount)
            else return "Sorry"
        }
    }
}


let fiveH = {
    next: null,
    nextOne(nextObject) {
        this.next = nextObject;
        return this.next;
    },
    get(amount) {
        if (amount % 500 === 0) {
            return Math.floor(amount / 500) + " 5H -currency notes";
        } else {
            if (this.next)
                return Math.floor(amount / 500) + " 5H -currency notes and " + this.next.get(amount > 500 ? amount % 500 : amount);
        }
    }
}

let H = {
    next: null,
    nextOne(nextObject) {
        this.next = nextObject;
        return this.next;
    },
    get(amount) {
        if (amount % 100 === 0) {
            return  Math.floor(amount / 100) + " Hundred-currency notes";
        }
    }
}


function withdraw(amount) {

        twoK
        .nextOne(fiveH)
        .nextOne(H)

    return twoK.get(amount)

}


// export { withdraw }
module.exports = { withdraw }