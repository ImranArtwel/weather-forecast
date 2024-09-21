import { DateTime } from "luxon";

export const getTimezone = async (lat, lng) => {
  const apiKey = "EGYHIORXC660";
  const url = `https://api.timezonedb.com/v2.1/get-time-zone?key=${apiKey}&format=json&by=position&lat=${lat}&lng=${lng}`;

  const response = await fetch(url);
  const data = await response.json();
  return data.zoneName;
};

export const formatToLocalTime = (
  secs,
  zone,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => {
  const utcDateTime = DateTime.fromSeconds(secs, { zone: "utc" });

  // Step 2: Convert to the specified timezone
  const localDateTime = utcDateTime.setZone(zone);

  return localDateTime.toFormat(format);
};
