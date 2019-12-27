import { NUMBER_OF_COORDINATES_IN_CIRCLE, RADIANS_BETWEEN_COORDINATES } from './constants'
import getCoordinate from './get-coordinate';

export default function circle({ center, radius }) {
    const coordinates = [];
    for (let i = 0; i < NUMBER_OF_COORDINATES_IN_CIRCLE; i++) {
        const radian = i * RADIANS_BETWEEN_COORDINATES;
        coordinates.push(getCoordinate({ center, radius, radian }));
    }
    return coordinates;
}