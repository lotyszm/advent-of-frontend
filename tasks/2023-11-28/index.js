"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processBirdObservations = void 0;
function processBirdObservations(observations) {
    return observations.reduce((result, bird) => {
        const birdData = result[bird.name];
        if (!birdData) {
            result[bird.name] = {
                dates: [bird.date],
                averageCoordinates: {
                    latitude: bird.coordinates.latitude,
                    longitude: bird.coordinates.longitude,
                }
            };
        }
        else {
            birdData.dates.push(bird.date);
            birdData.averageCoordinates.latitude = (birdData.averageCoordinates.latitude + bird.coordinates.latitude) / 2;
            birdData.averageCoordinates.longitude = (birdData.averageCoordinates.longitude + bird.coordinates.longitude) / 2;
        }
        return result;
    }, {});
}
exports.processBirdObservations = processBirdObservations;
