const data = [
  {
    location: "London",
    latitude: 51.5073219,
    longitude: -0.1276474,
  },
  {
    location: "Kolkata",
    latitude: 22.5726723,
    longitude: 88.3638815,
  },
  {
    location: "Dhaka",
    latitude: 23.7104,
    longitude: 90.40744,
  },
  {
    location: "Singapore",
    latitude: 1.2899175,
    longitude: 103.8519072,
  },
  {
    location: "New York",
    latitude: 40.7127281,
    longitude: -74.0060152,
  },
  {
    location: "Toronto",
    latitude: 43.6534817,
    longitude: -79.3839347,
  },
  {
    location: "Jessore",
    latitude: 23.16971,
    longitude: 89.21371,
  },
  {
    location: "Kushtia",
    latitude: 23.9028,
    longitude: 89.11943,
  },
  {
    location: "Sylhet",
    latitude: 24.89904,
    longitude: 91.87198,
  },
  {
    location: "Chittagong",
    latitude: 22.3384,
    longitude: 91.83168,
  },
  {
    location: "Khulna",
    latitude: 22.80979,
    longitude: 89.56439,
  },
];

function getLocations() {
  return data;
}

function getLocationByName(location) {
  if (!location) return null;
  const filtered = data.filter((item) => item.location === location);
  if (filtered.length > 0) {
    return filtered[0];
  } else {
    const defaultLocation = {
      location: "",
      latitude: 0,
      longitude: 0,
    };
    return defaultLocation;
  }
}

export { getLocationByName, getLocations };
