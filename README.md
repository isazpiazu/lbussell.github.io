## Inspiration
Our primary influence in creating SafeGa.Tech was predictive policing algorithms that use past crime data to predict where future crimes may occur and better allocate police resources. We decided to build a similar program to give students the ability to choose safer paths in and around campus based on the same data.
## What it does
SafeGa.Tech gives students the ability to generate safe paths through and around Georgia Tech's campus. Users can select pick a destination, and SafeGa.Tech will generate a walking route that avoids unsafe areas with previous criminal activity. SafeGa.Tech also provides a heat map of the density of police-recorded crimes over Atlanta, so students can avoid unsafe areas throughout the city.
## How we built it
SafeGa.Tech is built in JavaScript using Esri's ArcGIS Platform and deployed as a Python Flask app on Microsoft's Azure Cloud.

ArcGIS is a mapping and analytics platform that we used to visualize and utilize crime data. Using public data from over 20,000 Atlanta crimes, we calculated clusters of events that highlight areas that may exhibit a high likelihood of crimes occuring in the future. We calculated the centroids of these clusters and used ArcGIS tooling to generate polygonal crime areas based on the walking time from the centroids. We then used the polygons as barriers for pathfinding to allow users to avoid high-crime areas. 

We utilized Python Flask and Azure Cloud for quick and easy deployment of our web application. The Flask framework gives us ability to post data to and from the Javascript front-end and Python Backend. Python Flask also enables us to report new crime data in real-time, allowing for dynamic updating of our map. We used Microsoft Azure Cloud to create a cloud-based server to host our web application remotely.
## Challenges we ran into
Our primary challenge when building SafeGa.Tech was the limit on the number of barriers used in ArcGIS's routing-finding functionality. With our dataset of 20,000 crimes, we generated barriers that were too numerous and too complex for route-finding. Thus, we pivoted our goals to focus on the community surrounding Georgia Tech's campus. 
## Accomplishments that we're proud of
Despite the limits of ArcGIS's route-finding capabilities, we were able to create an application that allows the Georgia Tech and surrounding community to find safe routes home that avoid areas with high incidences of crime. We believe that the app cleanly displays information about crime data and enables users to find safe paths home easily via computer or phone.
## What we learned
We learned most by building with platforms we previously had little experience with, primarily ArcGIS and Azure Cloud, and were very impressed with the depth of both technologies. In the future, we could use ArcGIS for other projects involving social good. Azure Cloud is incredibly versatile and can be used to deploy diverse range of applications.
## What's next for SafeGa.Tech
Next, we plan to expand the areas available for safe route-finding to the Greater Atlanta area, other college campuses, and other cities. Our application can process crime data from anywhere in the world, and, therefore, can be used by anyone to find safe routes. We may develop functionality to dynamically generate small groups of barriers depending on a user's view to mitigate the size limitations of ArcGI's path-finding functionality. Ultimately, we believe SafeGa.Tech is a scalable application that can be expanded to areas beyond Georgia Tech's campus.
