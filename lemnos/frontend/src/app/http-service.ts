import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Beache} from './beache';
import {WeatherResponse} from './weather';


@Injectable({providedIn: 'root'})
export class HttpService {
  BaseUrl = 'http://localhost:5000/';
  // BaseUrl = 'http://192.168.2.6:5000/';

  constructor(private http: HttpClient) {}

  get_beaches() {
    return this.http.get<Beache[]>(this.BaseUrl + 'beaches');
  }

  get_forecast_gr() {
    return this.http.get<WeatherResponse>(this.BaseUrl + 'forecast_gr');
  }

  get_forecast_en() {
    return this.http.get<WeatherResponse>(this.BaseUrl + 'forecast_eng');
  }

}
