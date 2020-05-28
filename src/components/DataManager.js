import {Stamp} from '../classfiles/Stamp'

var stampCollection = [];

var initDataManager = () => {

    var stamp1 = new Stamp(
        1,
        "Steven Seagull",
        "1984",
        false,
        'https://www.postcrossingyhdistys.fi/wp-content/uploads/2016/02/WTstamp_47787.jpg',
        "Finland",
        1.80, 
      )
        var stamp2 = new Stamp(
        2,
        "Water xD",
        "1911",
        true,
        'https://www.posti.com/globalassets/news/2019-images/stamps/pilvia-saaristossa-postimerkki2017.jpg',
        "Finland",
        2.30, 
      )
        var stamp3 = new Stamp(
        3,    
        "Suicide Swan",
        "1934",
        true,
        'https://www.posti.com/globalassets/joutsenmerkki_600.jpg',
        "Finland",
        1.90,
      )
      
       
      stampCollection.push(stamp1, stamp2, stamp3)
}

var addStampToCollection = (stamp) =>{
    console.log("Trying to add stamp to the collection")
    if(stamp.id === null){
       
        stamp.id = stampCollection.length +1;
        if(stamp.StampToConsole != null) {
            stamp.StampToConsole();
        }
        stampCollection.push(stamp)
    }
    else{
        stamp.StampToAlert();
        
        let index = stampCollection.findIndex( x => x.id === stamp.id)
        if(index !== null){
            
           stampCollection[index] = stamp
        }
        else{
            alert("Something went wrong when updating the stamp.")
        }
    }

} 

export default {stampCollection,initDataManager,addStampToCollection}