class Address{
    constructor(city,district,wards,specificAddress){
        this.city = city;
        this.district = district;
        this.wards = wards;
        this.specificAddress = specificAddress;
    }
    setCity (city){
        this.city = city;
    }
    getCity(){
        return this.city;
    }
    setDistrict (district){
        this.district = district;
    }
    getDistrict(){
        return this.district;
    }
    setWards (wards){
        this.wards = wards;
    }
    getWards(){
        return this.wards;
    }
    setSpecificAddress (specificAddress){
        this.specificAddress = specificAddress;
    }
    getSpecificAddress(){
        return this.specificAddress;
    }
}
export default Address;