export class Coord {
  lat: number;
  lon: number;
}

export class City {
  id: number;
  name: string;
  coord: Coord;
  country: string;
  timezone: number;
  sunrise: number;
  sunset: number;
}

export class Clouds {
  all: number;
}

export class Wind {
  speed: number;
  deg: string;
}

export class Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

export class Sys {
  pod: string;
}

export class Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export class List {
  dt: number;
  main: Main;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  sys: Sys;
  dt_txt: string;
}

export class WeatherResponse {
  cod: string;
  message: number;
  cnt: number;
  list: List[];
  city:City;
}
