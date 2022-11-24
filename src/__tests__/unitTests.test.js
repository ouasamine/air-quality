import { getCityAirData, getCityName } from '../func/helperFunctions';

describe('Unit Tests', () => {
  const storedCitiesData = [
    {
      id: '98bfa187-74f4-4cef-b80f-d418acc580f9',
      city: 'Casablanca',
      data: {
        main: { aqi: 4 },
        components: {
          co: 303.75,
          no: 9.84,
          no2: 23.99,
          o3: 22.35,
          so2: 32.42,
          pm2_5: 29.98,
          pm10: 38.28,
          nh3: 0,
        },
        dt: 1669283682,
      },
    },
  ];
  const cityId = '98bfa187-74f4-4cef-b80f-d418acc580f9';

  test('Testing getCityAirData()', () => {
    const result = getCityAirData(cityId, storedCitiesData);
    const expectedResult = [
      { name: 'CO', value: 303.75 },
      { name: 'NO', value: 9.84 },
      { name: 'NO<sub>2<sub/>', value: 23.99 },
      { name: 'O<sub>3</sub>', value: 22.35 },
      { name: 'SO<sub>2</sub>', value: 32.42 },
      { name: 'PM<sub>2.5</sub>', value: 29.98 },
      { name: 'PM<sub>10</sub>', value: 38.28 },
      { name: 'NH<sub>3</sub>', value: 0 },
    ];
    expect(result).toEqual(expectedResult);
  });

  test('Testing getCityName()', () => {
    const result = getCityName(cityId, storedCitiesData);
    const expectedResult = 'Casablanca';
    expect(result).toEqual(expectedResult);
  });
});
