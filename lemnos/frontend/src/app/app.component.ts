import { Component, OnInit} from '@angular/core';
import {HttpService} from './http-service';
import {Beache} from './beache';
import {WeatherResponse, List} from './weather';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'IpromLemnos';
  beaches: Beache[] = [];
  weather: WeatherResponse = undefined;
  forecast_beaches: Beache[] = [];
  forecast_beaches_images: string[] = [];
  lang = 'en'
  weather_en: WeatherResponse = undefined;

  next_days_weather_en: List[] = [];
  next_days_weather_gr: List[] = [];
  title_beaches_gr : string = '';
  title_beaches_en : string = '';

  errorHttp: boolean = true;

  icons = [];
  area = ['Προς Πειραιά', 'Προς Λαύριο', 'Από Λαύριο', 'Προς Καβάλα', 'Από Καβάλα', 'Προς Σαμοθράκη', 'Προς Αλεξανδρούπολη', 'Προς Άγιο Ευστράτιο', 'Προς Μυτιλήνη', 'Προς Χίο', 'Προς Σάμο',
    'To Peireus', 'To Lavrio', 'From Lavrio', 'To Kavala', 'From Kavala', 'To Samothraki', 'To Alexandroupoli', 'To Agios Eustratios', 'To Mytilini', 'To Xios', 'To Samos'];

  dromologia_peiraias_gr = [
    "Τρίτη 18:15 13:30",
    "Πεμπτη 20:25 16:25",
    "Κυριακή 12:25 10:05"];

  dromologia_peiraias_en = [
    "Tuesday 18:15 13:30",
    "Thursday 20:25 16:25",
    "Sunday 12:25 10:05"];

  dromologia_laurio_gr = [
    "Τρίτη 12:45 22:40",
    "Πεμπτη 00:45 11:00",
    "Παρασκευή* 22:00 12:45",
    "Κυριακή 20:45 07:00"
  ];

  dromologia_laurio_en = [
    "Tuesday 12:45 22:40",
    "Thursday 00:45 11:00",
    "Friday* 22:00 12:45",
    "Sunday 20:45 07:00"
  ];

  dromologia_from_laurio_gr = [
    "Δευτέρα 12:30 23:15",
    "Τετάρτη 01:00 11:30",
    "Πέμπτη 21:00 07:15",
    "Σάββατο* 16:00 07:00"
  ];

  dromologia_from_laurio_en = [
    "Monday 12:30 23:15",
    "Wednesday 01:00 11:30",
    "Thursday 21:00 07:15",
    "Saturday* 16:00 07:00"
  ];

  dromologia_kavala_gr = [
    "Τρίτη 00:30 04:45",
    "Τρίτη 09:35 12:40",
    "Τετάρτη 12:45 17:00",
    "Πεμπτη 10:55 14:00",
    "Παρασκευή 08:30 13:00",
    "Σάββατο 18:55 22:05",
    "Κυριακή 08:30 13:00"
  ];


  dromologia_from_kavala_gr = [
    "Τρίτη 07:30 11:30",
    "Τρίτη 15:00 18:05",
    "Τετάρτη 19:00 23:30",
    "Πεμπτη 17:00 20:05",
    "Παρασκευή 16:00 20:45",
    "Kυριακή 09:00 12:05",
    "Κυριακή 15:00 19:30"
  ];

  dromologia_kavala_en = [
    "Tuesday 00:30 04:45",
    "Tuesday 09:35 12:40",
    "Wednesday 12:45 17:00",
    "Thursday 10:55 14:00",
    "Friday 08:30 13:00",
    "Saturday 18:55 22:05",
    "Sunday 08:30 13:00"
  ];
  dromologia_from_kavala_en = [
    "Tuesday 07:30 11:30",
    "Tuesday 15:00 18:05",
    "Wednesday 19:00 23:30",
    "Thursday 17:00 20:05",
    "Friday 16:00 20:45",
    "Sunday 09:00 12:05",
    "Sunday 15:00 19:30"
  ];

  dromologia_samothraki_gr = [
    "Δευτέρα 07:00 09:50",
    "Τρίτη 15:30 18:20",
    "Τετάρτη 13:00 15:50",
  ];

  dromologia_samothraki_en = [
    "Monday 07:00 09:50",
    "Tuesday 15:30 20:30",
    "Wednesday 13:00 18:30",
  ];

  dromologia_alexamdroupoli_gr = [
    "Δευτέρα 07:00 12:20",
    "Τρίτη 15:30 18:20",
    "Τετάρτη 13:00 15:50",
  ];

  dromologia_alexamdroupoli_en = [
    "Monday 07:00 12:20",
    "Tuesday 15:30 18:20",
    "Wednesday 13:00 15:50",
  ];

  dromologia_eustratios_gr = [
    "Τρίτη 12:45 14:15",
    "Πέμπτη 00:45 02:15",
    "Παρασκευή 22:00 23:30",
    "Κυριακή 12:25 16:40",
  ];

  dromologia_eustratios_en = [
    "Tuesday 12:45 14:15",
    "Thursday 00:45 02:15",
    "Friday 22:00 23:30",
    "Sunday 12:25 16:40",
  ];

  dromologia_mytilini_gr = [
    "Τρίτη 18:25 22:30",
    "Πέμπτη 20:25 00:30",
    "Κυριακή 12:25 16:30",
  ];

  dromologia_mytilini_en = [
    "Tuesday 18:25 22:30",
    "Thursday 20:25 00:30",
    "Sunday 12:25 16:30",
  ];

  dromologia_xios_gr = [
    "Τρίτη 18:25 01:25",
    "Πέμπτη 20:25 03:45",
    "Παρασκευή 22:00 -",
    "Κυριακή 12:25 19:30",
  ];

  dromologia_xios_en = [
    "Tuesday 18:25 01:25",
    "Thursday 20:25 03:45",
    "Friday 22:00 -",
    "Sunday 12:25 19:30",
  ];

  dromologia_samos_gr = [
    "Τρίτη 18:25 -",
    "Πέμπτη 20:25 -",
    "Κυριακή 12:25 -",
  ];

  dromologia_samos_en = [
    "Tuesday 18:25 -",
    "Thursday 20:25 -",
    "Sunday 12:25 -",
  ];

  dromologia_total = [this.dromologia_peiraias_gr, this.dromologia_laurio_gr, this.dromologia_from_laurio_gr, this.dromologia_kavala_gr,
    this.dromologia_from_kavala_gr, this.dromologia_samothraki_gr,
    this.dromologia_alexamdroupoli_gr, this.dromologia_eustratios_gr, this.dromologia_mytilini_gr, this.dromologia_xios_gr, this.dromologia_samos_gr,
    this.dromologia_peiraias_en, this.dromologia_laurio_en, this.dromologia_from_laurio_en, this.dromologia_kavala_en, this.dromologia_from_kavala_en,
    this.dromologia_samothraki_en,
    this.dromologia_alexamdroupoli_en, this.dromologia_eustratios_en, this.dromologia_mytilini_en, this.dromologia_xios_en, this.dromologia_samos_en];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.get_beaches().pipe(catchError(this.handleError)).subscribe(
      data => {
        this.beaches = data;
        this.httpService.get_forecast_gr().subscribe(
          data => {
            this.errorHttp = false;
            this.weather = data;
            this.forecastBeaches();
            this.weather_icons();
            this.httpService.get_forecast_en().subscribe(
              data => {
                this.weather_en = data;
                this.store_next_days_gr();
              });
            this.weather_refresh();
            this.change_lang();
          }
        )
      }
    );
  }

  handleError(error) {
    let errorMessage = 'Error Code';
    return throwError(errorMessage);
    this.errorHttp = true;
  }

  store_next_days_gr() {
    let pos = 0;
    let curr_time = this.weather.list[0].dt_txt.split(' ')[1].split(':')[0];
    if(Number(curr_time) <= 12) {
      pos = pos + 8;
    }

    while(Number(curr_time) != 12) {
      pos ++;
      curr_time = this.weather.list[pos].dt_txt.split('-')[2].split(' ')[1].split(':')[0];
    }

    for(let i = 0; i < 4; i++) {
      this.next_days_weather_gr.push(this.weather.list[pos + i*8]);
      this.next_days_weather_en.push(this.weather_en.list[pos + i*8]);
    }
  }

  weather_refresh() {
    setInterval(()=> {
      this.httpService.get_forecast_gr().pipe(catchError(this.handleError)).subscribe(
        data => {
          this.errorHttp = false;
          this.weather = data;
          this.forecastBeaches();
          this.weather_icons();
        });

      this.httpService.get_forecast_en().pipe(catchError(this.handleError)).subscribe(
        data => {
          this.errorHttp = false;
          this.weather_en = data;
        });
    }, 1 * 1000 * 3600);
  }

  change_lang() {
    setInterval(()=> {
      if(this.lang == 'gr') {
        this.lang = 'en';
      } else {
        this.lang = 'gr';
      }
    }, 10 * 1000);
  }

  forecastBeaches() {

    if(Number(this.weather.list[0].dt_txt.split(' ')[1].split(':')[0]) > 20) {
      this.title_beaches_gr = 'Προτεινόμενες παραλίες για αύριο σύμφωνα με την κατευθυνση και την ένταση του ανέμου';
      this.title_beaches_en = 'Recommended beaches for tomorrow based on the direction and the speed of wind';

      let cur_pos = 0;
      let curr_time = this.weather.list[cur_pos].dt_txt.split(' ')[1].split(':')[0];
      while(Number(curr_time) != 12) {
        cur_pos ++;
        curr_time = this.weather.list[cur_pos].dt_txt.split('-')[2].split(' ')[1].split(':')[0];
      }

      console.log("empty data");
      //empty forecast data
      while (this.forecast_beaches.length != 0) {
        this.forecast_beaches.pop();
        this.forecast_beaches_images.pop();
      }

      if (this.weather.list[cur_pos].wind.speed < 4) { // if wind speed < 4 (not important wind)
        for (let i = 0; i < this.beaches.length; i++) {
          this.forecast_beaches.push(this.beaches[i]);
          let temp_name: string = '';

          for (let pos = 0; pos < this.beaches[i].name_eng.length; pos++) {
            if (this.beaches[i].name_eng[pos] != ' ') {
              temp_name += this.beaches[i].name_eng[pos];
            }
          }
          this.forecast_beaches_images.push("../assets/" + temp_name + ".jpg");
        }
      } else {
        let direction = this.weather.list[cur_pos].wind.deg; // direction of the wind
        for (let i = 0; i < this.beaches.length; i++) {
          if (direction != this.beaches[i].orientation) {
            this.forecast_beaches.push(this.beaches[i]);
            let temp_name: string = '';

            for (let pos = 0; pos < this.beaches[i].name_eng.length; pos++) {
              if (this.beaches[i].name_eng[pos] != ' ') {
                temp_name += this.beaches[i].name_eng[pos];
              }
            }
            this.forecast_beaches_images.push("../assets/" + temp_name + ".jpg");
          }
        }
      }
    }
    else {

      this.title_beaches_gr = 'Προτεινόμενες παραλίες για σήμερα σύμφωνα με την κατευθυνση και την ένταση του ανέμου';
      this.title_beaches_en = 'Recommended beaches for today based on the direction and the speed of wind';

      //empty forecast data
      while (this.forecast_beaches.length != 0) {
        this.forecast_beaches.pop();
        this.forecast_beaches_images.pop();
      }

      if (this.weather.list[0].wind.speed < 4) { // if wind speed < 4 (not important wind)
        for (let i = 0; i < this.beaches.length; i++) {
          this.forecast_beaches.push(this.beaches[i]);
          let temp_name: string = '';

          for (let pos = 0; pos < this.beaches[i].name_eng.length; pos++) {
            if (this.beaches[i].name_eng[pos] != ' ') {
              temp_name += this.beaches[i].name_eng[pos];
            }
          }
          this.forecast_beaches_images.push("../assets/" + temp_name + ".jpg");
        }
      } else {
        let direction = this.weather.list[0].wind.deg; // direction of the wind
        for (let i = 0; i < this.beaches.length; i++) {
          if (direction != this.beaches[i].orientation) {
            this.forecast_beaches.push(this.beaches[i]);
            let temp_name: string = '';

            for (let pos = 0; pos < this.beaches[i].name_eng.length; pos++) {
              if (this.beaches[i].name_eng[pos] != ' ') {
                temp_name += this.beaches[i].name_eng[pos];
              }
            }
            this.forecast_beaches_images.push("../assets/" + temp_name + ".jpg");
          }
        }
      }
    }

    console.log(this.forecast_beaches_images);
    console.log(this.forecast_beaches);

  }

  weather_icons() {
    for(let i = 0; i < 5; i++) {
      let temp_name = 'assets/';
      if(this.weather.list[i*8].weather[0].icon == '01d') {
        temp_name += 'wi-day-sunny.png';
      }else if(this.weather.list[i*8].weather[0].icon == '01n') {
        temp_name += 'wi-night-clear.png';
      }else if(this.weather.list[i*8].weather[0].icon == '02d') {
        temp_name += 'wi-day-cloudy.png';
      }else if(this.weather.list[i*8].weather[0].icon == '02n') {
        temp_name += 'wi-night-alt-cloudy.png';
      }else if(this.weather.list[i*8].weather[0].icon == '03d') {
        temp_name += 'wi-day-cloudy.png';
      }else if(this.weather.list[i*8].weather[0].icon == '03n') {
        temp_name += 'wi-night-alt-cloudy.png';
      }else if(this.weather.list[i*8].weather[0].icon == '04d') {
        temp_name += 'wi-cloudy.png';
      }else if(this.weather.list[i*8].weather[0].icon == '04n') {
        temp_name += 'wi-cloudy.png';
      }else if(this.weather.list[i*8].weather[0].icon == '09d') {
        temp_name += 'wi-day-showers.png';
      }else if(this.weather.list[i*8].weather[0].icon == '09n') {
        temp_name += 'wi-night-alt-showers.png';
      }else if(this.weather.list[i*8].weather[0].icon == '10d') {
        temp_name += 'wi-day-rain.png';
      }else if(this.weather.list[i*8].weather[0].icon == '10n') {
        temp_name += 'wi-night-alt-rain.png';
      }else if(this.weather.list[i*8].weather[0].icon == '11d') {
        temp_name += 'wi-day-sunny.png';
      }else if(this.weather.list[i*8].weather[0].icon == '11n') {
        temp_name += 'wi-night-clear.png';
      }
      this.icons.push(temp_name);
    }
  }
}
