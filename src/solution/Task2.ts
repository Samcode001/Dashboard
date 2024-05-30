interface Trip {
  pickUps: string[];
  dropPoints: string[];
  via?: string;
}

interface Shipment {
  pickUps: string[];
  dropPoints: string[];
}

const isShipmentFulfilled = (shipment: Shipment, trips: Trip[]): boolean => {
  const { pickUps, dropPoints } = shipment;
  const remainingPickUps = new Set(pickUps);
  const remainingDropPoints = new Set(dropPoints);
  const currentLocations = new Set<string>();

  for (const trip of trips) {
    // Process pick-up points for this trip
    for (const pickUp of trip.pickUps) {
      if (remainingPickUps.has(pickUp)) {
        currentLocations.add(pickUp);
        remainingPickUps.delete(pickUp);
      } else {
        return false; // Invalid if picking up from a non-specified location
      }
    }

    // Move shipments to via point if specified
    if (trip.via) {
      const locationsToMove = new Set(currentLocations);
      currentLocations.clear();
      for (const loc of locationsToMove) {
        currentLocations.add(trip.via);
      }
    }

    // Process drop points for this trip
    for (const dropPoint of trip.dropPoints) {
      if (currentLocations.has(trip.via || dropPoint)) {
        currentLocations.delete(trip.via || dropPoint);
        remainingDropPoints.delete(dropPoint);
      } else {
        return false; // Invalid if dropping off from a location that does not have items
      }
    }
  }

  // Final check: ensure all pick-ups and drop points have been processed
  return (
    remainingPickUps.size === 0 &&
    remainingDropPoints.size === 0 &&
    currentLocations.size === 0
  );
};

// Example usage
const shipment: Shipment = {
  pickUps: ["A", "B"],
  dropPoints: ["C", "D"],
};

const validTrips: Trip[] = [
  { pickUps: ["A"], dropPoints: [], via: "W" },
  { pickUps: ["B"], dropPoints: [], via: "W" },
  { pickUps: [], dropPoints: ["C"], via: "W" },
  { pickUps: [], dropPoints: ["D"], via: "W" },
];

const invalidTrips: Trip[] = [
  { pickUps: ["A"], dropPoints: [], via: "W1" },
  { pickUps: ["B"], dropPoints: [], via: "W2" },
  { pickUps: [], dropPoints: ["C"], via: "W3" },
  { pickUps: [], dropPoints: ["D"], via: "W4" },
];

console.log("Valid trips test:", isShipmentFulfilled(shipment, validTrips)); // Should return true
console.log("Invalid trips test:", isShipmentFulfilled(shipment, invalidTrips)); // Should return false
