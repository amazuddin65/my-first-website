function kilometerToMeter(Meter) {
     var KiloMeter = Meter /  1000;
     return KiloMeter;
}
var KiloMeter = kilometerToMeter(15000);

function kilometerToMeter(KiloMeter) {
    var Meter = KiloMeter /  1;
    return Meter;
}

function budgetCalculator(watch, phone, laptop) {
    var watchTotal = watch * 50;
    var phoneTotal = phone * 100;
    var laptopTotal = laptop * 500;
    return watchTotal+ phoneTotal + laptopTotal;

}

 function hotelCost(charge) {
     var  hotelCost = 100; 
     if (charge <= 10) {
         hotelCost = charge * 100;
     }
     else if (charge <= 20) {
         var tendays = 10 * 100;
         var twentydays = 10 * 80;
         var remaning = charge - 20
         var lastdays =  remaning * 50
         
         hotelCost = tendays + twentydays + lastdays;
     }
     return hotelCost;
 }
 
  function megaFriend(friend) {
      var maxword = friend [0];
      for (var i = 0; i < friend.lenghth; i++) {
          var Element = friend[i];
          if (Element.lenghth > maxword.lenghth){
              Element = maxword;
          }
      }
      return maxword;
  }
  var word = megaFriend(['Ronaldinho', 'Ronaldo', 'Messi', "Modric"]);
  console.log(word);