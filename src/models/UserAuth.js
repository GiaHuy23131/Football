import AddressRegister from "./AddressRegister.js";
class UserAuth{
    constructor(idUserAuth,user,name,phone,email,password){
        this.idUserAuth = idUserAuth;
        this.user = user;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.password = password;
        // this.address = new AddressRegister(address.city, address.district, address.wards, address.specificAddress);
    }
}

export default UserAuth;