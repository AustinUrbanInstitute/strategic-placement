# Strategic Placement Strategy for Incoming Austin Public Housing Residents
Calculates and visualizes match between incoming residents needs in factors such as healthcare access, education, job opportunities, and a public housing property's characteristics in those needs.

## To Run Project
Code uses d3.js, must run on server

In Commond Prompt or Terminal:

1. Install d3.js: `npm install d3`
2. Install Node's http-server: `npm install -g http-server`
3. Navigate to project: `cd C:\Enter\Path\Here\strategic-placement`
4. To run project on server: `http-server &`
5. Open [http://localhost:8080/](http://localhost:8080/)
6. To see data visualizations, open `needs-comparisons.html` in localhost

- Data available on (Google Sheets)[https://docs.google.com/spreadsheets/d/10pia1KXaKaT2KSeP93Vono1SGRbhOPeW71wLdyu9PLg/edit?usp=sharing]
### Sources
- United States Census Bureau
- Longitudinal Employer-Household Dynamics
- Yelp
- Walk Score
- Niche.com
- AreaVibes.com

### Example of resident-property match
![chalmers property match](/example-pics/chalmers-match.JPG)

## UPDATE: Project still in progress
Currently working on a new bar graph visualization method to improve accuracy of visualization display. To see new progress, check out `barchart.html` in `new` folder
- New data available on [Google Sheets](https://docs.google.com/spreadsheets/d/1HrSoPviefLvSqFhyPWWdX28v1bBHeqcqJtILdSzcG5g/edit?usp=sharing)
