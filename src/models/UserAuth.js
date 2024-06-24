class UserAuth{
    constructor(idUserAuth,user,name,phone,account,password){
        this.idUserAuth = idUserAuth;
        this.user = user;
        this.name = name;
        this.phone = phone;
        this.account = account;
        this.password = password;
    }
    setIdUserAuth (idUserAuth){
        this.idUserAuth = idUserAuth;
    }
    getIdUserAuth(){
        return this.idUserAuth;
    }
    setUser(user){
        this.user = user;
    }
    getUser(){
        return this.user;
    }
    setName(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
    setPhone(phone){
        this.phone = phone;
    }
    getPhone(){
        return this.phone;
    }
    setAccount(account){
        this.account = account;
    }
    getAccount(){
        return this.account;
    }
    setPassword(password){
        this.password = password;
    }
    getPassword(){
        return this.password;
    }
}
export default UserAuth;