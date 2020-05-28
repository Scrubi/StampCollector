class Stamp {
    constructor(id,name,yearPublished,isStamped,imgUrl,country,price){
        this.id = id;
        this.name = name;
        this.yearPublished = yearPublished;
        this.isStamped = isStamped; 
        this.imageUrl = imgUrl;
        this.country = country;
        this.price = price;
    }
    
    GetPriceString(){
        return parseFloat(this.price).toFixed(2)
    }

    StampToAlert(){
        let msg =  ""
        msg += "ID: "+this.id+"\n"
        msg += "Name: "+this.name+"\n"
        msg += "Price: "+this.price+"\n"
        msg += "Year Published: "+this.yearPublished+"\n"
        msg += "country: "+this.country+"\n"
        msg += "isStamped: "+this.isStamped
        alert(msg)
    }
}


export {Stamp}