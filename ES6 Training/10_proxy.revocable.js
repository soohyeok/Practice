// Revocable Proxies

let person_revocable = {
    name: 'REVOCABLE'
};

let handler_revocable = {
    get: function(target, property){
        return Reflect.get(target, property);
    }
};

//let proxy_revocable = new Proxy(person_revocable, handler_revocable);
let {proxy, revoke} = Proxy.revocable(person_revocable, handler_revocable);
// the name here has to be 'proxy' for some reason
console.log(proxy.name);
//reVoke();
console.log(proxy.name); // now error