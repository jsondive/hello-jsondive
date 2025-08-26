import { JSONDive, type JSONDiveOptions } from "@jsondive/viewer"

import "@jsondive/viewer/dist/root.css"
import { useMemo } from "react"
import * as lucideReact from "lucide-react"

function App() {
	const options = useMemo(
		(): JSONDiveOptions => ({
			onValueMagnified(args) {
				console.log(`Value magnified: ${args.value}`)
			},

			icons: {
				magnify: lucideReact.Sun,
				image: lucideReact.Sailboat,
			},
		}),
		[]
	)

	return (
		<div style={{ width: 400, height: 400 }}>
			<JSONDive data={jsonDoc} options={options} />
		</div>
	)
}

const jsonDoc = {
	location: {
		name: "London",
		region: "City of London, Greater London",
		country: "United Kingdom",
		lat: 51.52,
		lon: -0.11,
		tz_id: "Europe/London",
		localtime_epoch: 1753357635,
		is_city: true,
		is_country: false,
	},
	current: {
		last_updated_epoch: 1753357635,
		temp_c: 11,
		temp_f: 51.8,
		is_day: 1,
		condition: {
			text: "Partly cloudy",
			icon: "https://cdn.weatherapi.com/weather/64x64/day/116.png",
			code: 1003,
		},
		wind_mph: 3.8,
		wind_kph: 6.1,
		wind_degree: 220,
		wind_dir: "SW",
		pressure_mb: 1009,
		pressure_in: 30.3,
		precip_mm: 0.1,
		precip_in: 0,
		humidity: 82,
		cloud: 75,
		feelslike_c: 9.5,
		feelslike_f: 49.2,
		vis_km: 10,
		vis_miles: 6,
		uv: 1,
		gust_mph: 10.5,
		gust_kph: 16.9,
		air_quality: {
			co: 230.3,
			no2: 13.5,
			o3: 54.3,
			so2: 7.9,
			pm2_5: 8.6,
			pm10: 11.3,
			"us-epa-index": 1,
			"gb-defra-index": 1,
		},
	},
}

export default App
