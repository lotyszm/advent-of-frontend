export type BirdObservation = {
  name: string;
  date: string; // YYYY-MM-DD
  coordinates: { latitude: number; longitude: number };
};

export type ProcessedBirdData = {
  [birdName: string]: {
    dates: string[];
    averageCoordinates: { latitude: number; longitude: number };
  };
};

export function processBirdObservations(observations: BirdObservation[]): ProcessedBirdData {

  return observations.reduce((result, bird) => {
    const birdData = result[bird.name];

    if(!birdData) { 
      result[bird.name] = {
        dates: [bird.date],
        averageCoordinates: {
          latitude: bird.coordinates.latitude,
          longitude: bird.coordinates.longitude,
        }
      }
    } else {
      birdData.dates.push(bird.date);
      birdData.averageCoordinates.latitude = (birdData.averageCoordinates.latitude + bird.coordinates.latitude) / 2;
      birdData.averageCoordinates.longitude = (birdData.averageCoordinates.longitude + bird.coordinates.longitude) / 2;
    }

    return result;
  }, {} as ProcessedBirdData);
}
