declare class OSPoint {
  northings: number;
  eastings: number;

  constructor(northings: string | number, eastings: string | number);

  toOSGB36(projection?: string): { longitude: number; latitude: number };
  toETRS89(projection?: string): { longitude: number; latitude: number };
  toWGS84(projection?: string): { longitude: number; latitude: number };
  mercatorToLatLon(): { longitude: number; latitude: number };

  static toRadians(degrees: number): number;
  static toDegrees(radians: number): number;
  static nu(a: number, F0: number, e2: number, lat: number): number;
  static rho(a: number, F0: number, e2: number, lat: number): number;
  static e2(a: number, b: number): number;
  static M(a: number, b: number, F0: number, lat: number, lat0: number): number;
  static eta2(nu: number, rho: number): number;
  static toDecimalFromDMS(degrees: number, minutes: number, seconds: number): number;
  static toCartesian(
    lon: number,
    lat: number,
    H: number,
    ellipsoid?: string
  ): { x: number; y: number; z: number };
  static toLatLon(
    x: number,
    y: number,
    z: number,
    ellipsoid?: string
  ): { latitude: number; longitude: number; height: number };
  static helmertTransformation(
    point: { x: number; y: number; z: number },
    transformation?: object
  ): { x: number; y: number; z: number };
}

export = OSPoint;
