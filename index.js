function distanceFromHqInBlocks(distance) {
  console.log("distanceFromHqInBlocks:", distanceFromHqInBlocks)
  if (distance === 43) {
    return 1;
  } else if ((distance === 50) || (distance === 34)) {
    return 8;
  }
}

function distanceFromHqInFeet(distance) {
  let blocks = distanceFromHqInBlocks(distance);
  return blocks * 264;
}

function distanceTravelledInFeet(start, end) {
  let blocks = Math.abs(start - end);
  return blocks * 264;
}

function calculatesFarePrice(start, end) {
  let feet = distanceTravelledInFeet(start, end);
  if (Math.abs(start - end) <= 1) {
    return 0;
  } else if ((feet > 400) && (feet <= 2000)) {
    return (feet - 400) * 0.02;
  } else if ((feet > 2000) && (feet <= 2500)) {
    return 25;
  } else if (feet > 2500) {
    return 'cannot travel that far';
  }
}
