interface Icloud {
    all: number;
}
interface Icoord {
    lat: number;
    lon: number;
}
interface Imain {
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
}
interface Isys {
    country: string;
    id: number;
    message: number;
    sunrise: number;
    sunset: number;
    type: number;
}
interface Iwheater {
    description: string;
    icon: string;
    main: string;
}
interface Iwind {
    deg: number;
    speed: number;
}

export interface IweatherList {
    clouds : Icloud,
    coord: Icoord,
    dt: number,
    id: number,
    main: Imain,
    name: string,
    sys: Isys,
    visibility: number,
    weather?: [Iweather],
    wind: Iwind
}

export interface Iweather {
    cnt: number;
    list: IweatherList
}
