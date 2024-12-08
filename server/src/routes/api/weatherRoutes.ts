import { Router, type Request, type Response } from 'express';
const router = Router();

import HistoryService from '../../service/historyService.js';
import WeatherService from '../../service/weatherService.js';

// TODO: POST Request with city name to retrieve weather data
router.post('/', (req: Request, res: Response) => {
  // console.log("Request",req.body.cityName); 
  // TODO: GET weather data from city name
  try {
    const cityName = req.body.cityName;

    WeatherService.getWeatherForCity(cityName).then((data) => {
      // TODO: save city to search history
      HistoryService.addCity(cityName);

      res.json(data);
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

// TODO: GET search history
router.get('/history', async (req: Request, res: Response) => {
  try {
    const savedCities = await HistoryService.getCities();
    res.json(savedCities);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

export default router;
