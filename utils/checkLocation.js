/**
 * Returns true if the distance between two geo‑points is within maxDistance.
 *
 * @param {number} lat1 - Latitude of point A in decimal degrees
 * @param {number} lon1 - Longitude of point A in decimal degrees
 * @param {number} lat2 - Latitude of point B in decimal degrees
 * @param {number} lon2 - Longitude of point B in decimal degrees
 * @param {number} maxDistance - Maximum allowed distance in meters
 * @returns {boolean}
 */
export const validateLocation = (lat1, lon1, lat2, lon2, maxDistance) => {
  const toRad = (deg) => (deg * Math.PI) / 180;

  const R = 6371000; // Earth radius in meters
  const φ1 = toRad(lat1);
  const φ2 = toRad(lat2);
  const Δφ = toRad(lat2 - lat1);
  const Δλ = toRad(lon2 - lon1);

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  console.log(distance <= maxDistance);
  return distance <= maxDistance;
};

export default validateLocation;
