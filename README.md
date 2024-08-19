# Earthquake Data Visualization

## Background
The United States Geological Survey (USGS) is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change. USGS scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.

The USGS aims to build a new set of tools to visualize their earthquake data. They collect massive amounts of data from all over the world each day, but they lack a meaningful way of displaying it. This project involves developing a way to visualize USGS data to better educate the public and other government organizations, thereby securing more funding on issues facing our planet.

## Project Overview
This project consists of two parts:
1. **Create the Earthquake Visualization**: Visualize an earthquake dataset.
2. **Gather and Plot More Data** : 
Plot a second dataset to illustrate the relationship between tectonic plates and seismic activity.

## Part 1: Create the Earthquake Visualization
### Step 1: Get the Dataset
1. The USGS provided earthquake data in several different formats, updated every 5 minutes. The USGS GeoJSON Feed page was visited to choose a dataset to visualize.
When a dataset (such as "All Earthquakes from the Past 7 Days") was clicked, a JSON representation of that data was provided. The URL of this JSON was used to pull in the data for the visualization.
### Step 2: Import and Visualize the Data

1. Using Leaflet, a map was created to plot all the earthquakes from the dataset based on their longitude and latitude.
2. The data markers reflected the magnitude of the earthquake by their size and the depth of the earthquake by color. Earthquakes with higher magnitudes appeared larger, and earthquakes with greater depth appeared darker in color.
3. Popups were included to provide additional information about the earthquake when its associated marker was clicked.
4. A legend was created to provide context for the map data.
5. The visualization looked something like the map below:


