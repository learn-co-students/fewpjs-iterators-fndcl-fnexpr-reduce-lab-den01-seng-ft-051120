const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const totalBatteries = reduceBatteries(batteryBatches)

function reduceBatteries(batteryBatches) {
  return batteryBatches.reduce((battery, total) => {
    return total += battery
  }, 0)
}

