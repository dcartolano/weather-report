// import fs from 'node:fs/promises'; // grabbed from parks
import dotenv from 'dotenv';
dotenv.config();

// // TODO: Define an interface for the Coordinates object
// interface Park {
//   id: string;
//   fullName: string;
//   description: string;
//   url: string;
//   designation: string;
//   images: ParkImage[];
// }

// interface ParkImage {
//   url: string;
//   title: string;
//   altText: string;
// }

// interface ParkEvent {
//   id: string;
//   title: string;
//   location: string;
//   description: string;
//   infourl: string;
//   datestart: string;
//   dateend: string;
// }

// interface StateObject {
//   stateName: string;
//   stateCode: string;
// }

// TODO: Define a class for the Weather object
// class Weather {
  // name: string;
  // id: string;
  

  // constructor(name: string, id: string) {
  //   this.name = name;
  //   this.id = id;
  // }
// }


// TODO: Complete the WeatherService class
class WeatherService {
  // // TODO: Define the baseURL, API key, and city name properties

  // private baseURL?: string;

  // private apiKey?: string;

  // constructor() {
  //   this.baseURL = process.env.API_BASE_URL || '';

  //   this.apiKey = process.env.API_KEY || '';
  // }
  // // TODO: Create fetchLocationData method
  // private async fetchLocationData(query: string) {

  // }
  // // TODO: Create destructureLocationData method
  // // private destructureLocationData(locationData: Coordinates): Coordinates {}
  // // TODO: Create buildGeocodeQuery method
  // // private buildGeocodeQuery(): string {}
  // // TODO: Create buildWeatherQuery method
  // // private buildWeatherQuery(coordinates: Coordinates): string {}
  // // TODO: Create fetchAndDestructureLocationData method
  // // private async fetchAndDestructureLocationData() {}
  // // TODO: Create fetchWeatherData method
  // // private async fetchWeatherData(coordinates: Coordinates) {}
  // // TODO: Build parseCurrentWeather method
  // // private parseCurrentWeather(response: any) {}
  // // TODO: Complete buildForecastArray method
  // // private buildForecastArray(currentWeather: Weather, weatherData: any[]) {}
  // // TODO: Complete getWeatherForCity method
  // // async getWeatherForCity(city: string) {}

  // async getParksByState(state: string) {
  //   try {
  //     const response = await fetch(
  //       `${this.baseURL}/parks?limit=10&stateCode=${state}&api_key=${this.apiKey}`
  //     );

  //     const parks = await response.json();

  //     const mappedParks = await this.parkDataMapping(parks.data);
  //     return mappedParks;
  //   } catch (err) {
  //     console.log('Error:', err);
  //     return err;
  //   }
  // }

  // async parkDataMapping(parks: Park[]) {
  //   const parksArray: Park[] = parks.map((park) => {
  //     const parkObject: Park = {
  //       id: park.id,
  //       fullName: park.fullName,
  //       description: park.description,
  //       url: park.url,
  //       designation: park.designation,
  //       images: park.images,
  //     };

  //     return parkObject;
  //   });

  //   return parksArray;
  // }

  // async getClosestEventByState(state: string): Promise<ParkEvent | string> {
  //   try {
  //     const response = await fetch(
  //       `${this.baseURL}/events?limit=10&stateCode=${state}&api_key=${this.apiKey}`
  //     );

  //     const events = await response.json();

  //     const mappedEvents = await this.parkEventDataMapping(events.data);

  //     if (mappedEvents.length === 0) {
  //       return 'No events found';
  //     }

  //     const closestEvent = await this.findClosestParkEvent(mappedEvents);
  //     return closestEvent;
  //   } catch (err: any) {
  //     throw new Error(err);
  //   }
  // }

  // async parkEventDataMapping(parkEvent: ParkEvent[]) {
  //   const parkEventsArray: ParkEvent[] = parkEvent.map((occasion) => {
  //     const parkEventObject: ParkEvent = {
  //       id: occasion.id,
  //       title: occasion.title,
  //       location: occasion.location,
  //       description: occasion.description,
  //       infourl: occasion.infourl || 'No URL Available',
  //       datestart: occasion.datestart,
  //       dateend: occasion.dateend,
  //     };

  //     return parkEventObject;
  //   });

  //   return parkEventsArray;
  // }

  // async findClosestParkEvent(events: ParkEvent[]) {
  //   const today = new Date();
  //   const closestEvent = events.reduce((prev, current) => {
  //     const prevDate = new Date(prev.datestart);
  //     const currentDate = new Date(current.datestart);
  //     const prevDiff = Math.abs(today.getTime() - prevDate.getTime());
  //     const currentDiff = Math.abs(today.getTime() - currentDate.getTime());
  //     return prevDiff < currentDiff ? prev : current;
  //   });

  //   return closestEvent;
  // }

  // async convertStateCodeToName(stateCode: string) {
  //   const stateCodes = await this.read();
  //   const parsedStateCodes = JSON.parse(stateCodes);
  //   const foundState = parsedStateCodes.filter((stateObject: StateObject) => {
  //     //ensuring casing of input does not matter
  //     return stateObject.stateCode.toLowerCase() === stateCode.toLowerCase();
  //   });

  //   const stateName = foundState[0].stateName;
  //   return stateName;
  // }

  // private async read() {
  //   return await fs.readFile('db/stateCodes.json', {
  //     flag: 'a+',
  //     encoding: 'utf8',
  //   });
  // }
}

export default new WeatherService();
