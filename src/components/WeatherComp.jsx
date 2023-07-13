import ReactWeather, { useVisualCrossing } from 'react-open-weather';

const customStyles = {
	fontFamily:  'Helvetica, sans-serif',
	gradientStart:  '#0181C2',
	gradientMid:  '#04A7F9',
	gradientEnd:  '#4BC4F7',
	locationFontColor:  '#FFF',
	todayTempFontColor:  '#FFF',
	todayDateFontColor:  '#B5DEF4',
	todayRangeFontColor:  '#B5DEF4',
	todayDescFontColor:  '#B5DEF4',
	todayInfoFontColor:  '#B5DEF4',
	todayIconColor:  '#FFF',
	forecastBackgroundColor:  '#FFF',
	forecastSeparatorColor:  '#DDD',
	forecastDateColor:  '#777',
	forecastDescColor:  '#777',
	forecastRangeColor:  '#777',
	forecastIconColor:  '#4BC4F7',
};

const WeatherComp = () => {
    const { data, isLoading, errorMessage } = useVisualCrossing({
        key: '9D59463HCY6SGWEFZP43THZAR',
        lat: '48.137154',
        lon: '11.576124',
        lang: 'en',
        unit: 'metric', // values are (metric,us,uk)
      });
  return (
    <ReactWeather
    theme={customStyles}
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang="en"
      locationLabel="Munich"
      unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
      showForecast
    />
  );
};

export default WeatherComp;