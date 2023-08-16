export default function enoughAirtime(usageString, availableAirtime) {
    const costs = {
      call: 1.88,
      data: 12,
      sms: 0.75
    };
    const usage = usageString.split(',');
    let cost = 0;
    for (let i = 0; i < usage.length; i++) {
      cost += costs[usage[i]];
    }
    const airtimeLeft = availableAirtime - cost;
    return airtimeLeft >= 0 ? `R${airtimeLeft.toFixed(2)}` : 'R0.00';
  }