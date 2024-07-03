import Address from "./Address.js";
class UserAuth{
    constructor(idUserAuth,user,name,phone,email,password,address){
        this.idUserAuth = idUserAuth;
        this.user = user;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.password = password;
        this.address = new Address(address.city, address.district, address.wards, address.specificAddress);
    }
    setIdUserAuth (idUserAuth){
        this.idUserAuth = idUserAuth;
    }
    getIdUserAuth(){
        return this.idUserAuth;
    }
    setUser (user){
        this.user = user;
    }
    getUser(){
        return this.user;
    }
    setName (name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
    setPhone (phone){
        this.phone = phone;
    }
    getPhone(){
        return this.phone;
    }
    setEmail (email){
        this.email = email;
    }
    getEmail(){
        return this.email;
    }
    setPassword (password){
        this.password = password;
    }
    getPassword(){
        return this.password;
    }
    setAddress(address){
        this.address = address;
    }
    getAddress(){
        return this.address;
    }
    
}

export default UserAuth;