function distanceFromHqInBlocks(currentStreet) {
    const hqStreet = 42; // Assuming HQ is located on street 42
    const distance = Math.abs(currentStreet - hqStreet); // Calculating the absolute difference between current street and HQ street
    return distance;
}

function distanceFromHqInFeet(currentStreet) {
    const distanceInBlocks = distanceFromHqInBlocks(currentStreet); // Reusing the distanceFromHqInBlocks() function
    const feetPerBlock = 264; // Assuming each block is 264 feet
    const distanceInFeet = distanceInBlocks * feetPerBlock; // Calculating the distance in feet
    return distanceInFeet;
}

function distanceTravelledInFeet(startStreet, destinationStreet) {
    const distanceInBlocks = Math.abs(destinationStreet - startStreet); // Calculating the absolute difference between start and destination streets
    const feetPerBlock = 264; // Assuming each block is 264 feet
    const distanceInFeet = distanceInBlocks * feetPerBlock; // Calculating the distance in feet
    return distanceInFeet;
}

function calculatesFarePrice(startStreet, destinationStreet) {
    const distanceInFeet = distanceTravelledInFeet(startStreet, destinationStreet); // Reusing the distanceTravelledInFeet() function
    // Checking if the distance is within the allowed limits
    if (distanceInFeet <= 400) {
      return 0; // Free sample
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      const pricePerFoot = 0.02; // 2 cents per foot
      const farePrice = (distanceInFeet - 400) * pricePerFoot; // Calculating the fare price
      return farePrice;
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      return 25; // $25 for a distance over 2000 feet
    } else {
      return "cannot travel that far"; // Rides over 2500 feet are not allowed
    }
}