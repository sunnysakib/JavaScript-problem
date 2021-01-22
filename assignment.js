
// https://github.com/sunnysakib/JavaScript-problem

// Question 1
    
    function kilometerToMeter(kilo){
    if(kilo > 0){
        var meter = kilo * 1000;
        return meter;
    }
    else {
        
        return 'distance can not be a nagative value.';
    }
}


// Question 2
   
    function budgetCalculator(watch, phone, laptop){
    var watchCost, phoneCost, laptopCost, total;
    if (watch > 0 && phone > 0 && laptop > 0){
        watchCost = watch * 50;
        phoneCost = phone * 100;
        laptopCost = laptop * 500;
        total = watchCost + phoneCost + laptopCost;
        return total;
    }
    else {
        return 'product value can not be negative';
    }
}



// Question 3
    
function hotelCost(day){
     if(day > 0 && day <= 10){          
     var totalCost = Math.ceil(day) *  100;
     return totalCost;
      }
     if(day > 10 && day <= 20){         
     totalCost = 10 * 100 + ((Math.ceil(day)-10) * 80);
     return totalCost;
      }
     if(day > 20){                      
     totalCost = 1800 + ((Math.ceil(day)-20) * 50);
      return totalCost;
       }
     else{
     return 'day cannot be negative';
     }
}



 // Question 5

function megaFriend(friends){
    var length = 0;
    var mega = '';
    for(var i = 0;i < friends.length; i++){
         var element = friends[i];                 
        if(element.length > length){
        length = element.length;
        mega = element;
        }
    }
     return mega;
}
   
   