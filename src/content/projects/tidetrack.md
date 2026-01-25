# TideTrack
## A Harmful Algae Tracking and Forecast System

[View Demo](https://gentle-tree-0c507cb0f.5.azurestaticapps.net/)

## Goal

The goal of this project is to utilize machine learning algorithms to develop a model for providing predictions of Harmful Algae Blooms (HABs) severity in the West Florida Shelf area of the Gulf of Mexico. HABs due to the algae Karenia Brevis, happen seasonally in the Gulf under similar circumstances every year from roughly August to December.

## Introduction

Karenia Brevis releases a neurotoxin into the water it inhabits, poisoning the ocean life in the area making them unfit for human consumption. This causes these blooms to be particularly damaging, both to people's health and the economic viability of the area. Fisheries operating in the Gulf have an incentive to avoid these blooms in order to not lose revenue due to wasted catches, labor, and wear on fishing equipment. In addition to that, scientists studying such blooms in the area can save on labor costs by seeing if HABs are likely in an area before committing to field work. The severity predictions displayed on this system will help these groups avoid these potential economic losses.

## My Role in This Project

This project is a collaborative effort, and my role is that of a Full-stack Developer. I am responsible for designing and implementing both the frontend and backend API endpoints. Additionally, I have experimented with various machine learning models and am hosting this project on an Azure server.

## System View

### Historical Data Search

![TideTrack History](/images/tidetrack/tide1.webp "width:800")

In the search tab, users can select a date range and intensity level to view the historical data of Harmful Algal Blooms (HABs) in the Gulf of Mexico. The map displays various intensities of HABs, ranging from "Not Observed" to "High." Clicking on an individual point on the map opens a popup window that provides detailed data for that specific point, including the date collected, cell count, salinity, and other relevant parameters.

### Forecast View

![TideTrack Forecast](/images/tidetrack/tide2.webp "width:800")

In the forecast tab, users can select a predefined area to view prediction results based on forecast data collected from various sources. This feature allows users to access and analyze predictive insights about future conditions in the selected regions.

## Data ETL

The Extraction-Transformation-Loading (ETL) is used to update the TideTrack database with real-time historical and forecasted HAB and weather data. The datasets used are provided by the National Oceanic and Atmospheric Administration (NOAA). Forecasted weather datasets are from the NOAA Operational Forecast System (OFS). The HAB dataset is the primary dataset, which includes some weather data parameters. As the weather data parameters are often missing values, historical weather data from different datasets are used to perform merging by time and location. The forecasted weather data are used as an input to the TideTrack HAB prediction model.

## Model Performance

![Random Forest Performance](/images/tidetrack/tide3.webp "width:800")

After evaluating various methods—including linear regression, decision trees, and neural networks, we have chosen the random forest algorithm for our prediction model due to its superior performance. We trained several candidate models with different attributes and training cycles. Our dataset spans historical data from 1955 to 2022, which we divided using the 80-20 rule.

We assess our model's performance primarily through accuracy, which has reached approximately 80%. However, we've noticed an imbalance in the dataset's distribution, which might be skewing our performance metrics. Particularly, the recall rate for each class is not as high as desired.

The accuracy is calculated using the formula: `(TP+TN)/(TP+TN+FP+FN)`

The predominance of the "not observed" class in the dataset results in an exceptionally high number of true positives (TP), contributing significantly to the inflated accuracy.

## Future Plans

We have a number of ideas for future progress on this project that goes beyond what we were able to create during the allotted time.

### Data Extract and Clean
- When acquiring additional data to fill gaps, we merge data from the closest data point. However, this method has the potential to contaminate the original dataset. To maintain the integrity of our data, we will create a separate table specifically for merged data, ensuring that the original data remains clean and unaltered.
- Implement an improved data merging program that accurately calculates the closest distance and ensures scientific validity.

### Automation of Weather and Forecast Data
- Using Azure ML Studio, we can create an API endpoint for ML predictions.

### Increase Accuracy of Predictions
Currently skewed towards "Not Observed":
- Data cleaning/Collection
- Reduce area for prediction and data, have areas weighted by location to center of "prediction area"
- Increase considered attributes, nutrient levels, nitrogen, and dissolved oxygen
- Change to recursive model type

### Front-End Functionality
- Feature for users to submit data to confirm conditions at location. Either pictures or lab results

## Technology & Tools

### Front-end
- React (JavaScript)
- ArcGIS API

### Back-end
- MySQL
- Django (Python)

### Software Tools
- GitHub
- MySQL Workbench
- Azure Cloud

We utilize the Azure CI/CD framework for automated deployment, which is integrated with our GitHub repository. This setup enables continuous integration and continuous deployment, streamlining the development and release processes.
