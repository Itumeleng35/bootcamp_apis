export default function totalPhoneBill(data) {
    var callsAndSms = data.split(', ');
    var callCost = 2.75;
    var smsCost = 0.65;
    var totalCost = 0;
    
    for (var i = 0; i < callsAndSms.length; i++) {
      var current = callsAndSms[i];
      if (current === 'call') {
        totalCost += callCost;
      } else if (current === 'sms') {
        totalCost += smsCost;
      }
    }
    
    return 'R' + totalCost.toFixed(2);
  }