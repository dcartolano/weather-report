import { Router, type Request, type Response } from 'express';
const router = Router();

// import HistoryService from '../../service/historyService.js';
// import WeatherService from '../../service/weatherService.js';

// TODO: POST Request with city name to retrieve weather data
router.post('/', (req: Request, res: Response) => {
  console.log("Request",req.body.cityName); // from Roger - also comment out everything else you're not currently using to avoid typscript errors
  // const city = req.body.cityName;
  // TODO: GET weather data from city name
  fetch("api.openweathermap.org/data/2.5/forecast?lat=41.85&lon=-87.65&appid=6e24d9c3009dbb4d682b1917ea785b74")
  .then(response => {
    return response.json();
  })
  .then(data => {
    // console.log(data);
    res.json([data]);
  })
  // TODO: save city to search history
});

// TODO: GET search history
// router.get('/history', async (req: Request, res: Response) => {
//   try {
//     const savedCities = await HistoryService.getCities();
//     res.json(savedCities);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });


// * BONUS TODO: DELETE city from search history
// router.delete('/history/:id', async (req: Request, res: Response) => {
  // try {
  //   if (!req.params.id) {
  //     res.status(400).json({ msg: 'City id is required' });
  //   }
  //   await historyService.removeCity(req.params.id);
  //   res.json({ success: 'City successfully removed from search history' });
  // } catch (err) {
  //   console.log(err);
  //   res.status(500).json(err);
  // }
// });

export default router;
