var counter = -1;
var dataArray = [];
var dataArray_radar = [];

d3.csv("/scores-needs0.csv", function (data) {
    data.forEach(function (d) {
        counter++;
        var name = d.name;
        console.log("NAME: " + name);

        var preference = d.preference;
        console.log("PREFERENCE: " + preference);

        var address = d.address;
        console.log("ADDRESS: " + address);

        var final_property_score = d.final_property_score;

        var walk_job_weight = d.walk_job_weight;
        var drive_job_weight = d.drive_job_weight;
        var bike_job_weight = d.bike_job_weight;

        //Prep data for chart
        var temp_dataArray_radar = [];

        var property_radar = [
            {
                axis: name + "_" + "Job Opportunity",
                value: d.final_job_score / 100
            },
            {
                axis: "Public Transit",
                value: d.public_transit_score / 100
            },

            {
                axis: "Mobility",
                value: d.mobility_score / 100
            },

            {
                axis: "Safety",
                value: d.safety / 100
            },
            {
                axis: name + "_" + "Health",
                value: d.final_health_score / 100
            },
            {
                axis: name + "_" + "Education",
                value: d.final_edu_score / 100
            },
            {
                axis: "Groceries",
                value: d.grocery / 100
            },
        
            {
                axis: "Libraries",
                value: d.library / 100
            },
            {
                axis: "Parks",
                value: d.park / 100
            }

        ];

        //temp_dataArray_radar.push(ideal_radar);
        temp_dataArray_radar.push(property_radar);

        dataArray_radar.push(property_radar);
        var unit_name = "unit_" + counter;
        var unit = document.getElementById(unit_name);
        //Make chart
        RadarChart(unit, temp_dataArray_radar, radarChartOptionsSmall);
        //Add chart title
        var title_name = "title_" + counter;
        var title = document.getElementById(title_name);
        title.innerHTML = name;
        //Add overall score
        var score_name = "score_" + counter;
        var score = document.getElementById(score_name);
        score.innerHTML = "Overall score: " + Math.round(d.final_property_score);

    });
    console.log("FINAL DATA ARRAY: " + dataArray);
    console.log("FINAL RADAR DATA ARRAY: " + dataArray_radar);
    //Big chart
    RadarChart("#together-chart", dataArray_radar, radarChartOptionsBig);
    console.log("I drew a big chart!");
});



/* Radar chart design created by Nadieh Bremer - VisualCinnamon.com */

////////////////////////////////////////////////////////////// 
//////////////////////// Set-Up ////////////////////////////// 
////////////////////////////////////////////////////////////// 

var margin = { top: 90, right: 100, bottom: 100, left: 100 },
    width = Math.min(700, window.innerWidth - 10) - margin.left - margin.right,
    height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);

////////////////////////////////////////////////////////////// 
//////////////////// Draw the Chart ////////////////////////// 
////////////////////////////////////////////////////////////// 

//#EDC951","#CC333F","#00A0B0
var color = d3.scale.ordinal()
    .range(["#909090", "#c1ff00", "0002e8", "ff8d00", "0ce898", "ff00a2"]);

var aui_color = d3.scale.ordinal()
    .range(["#909090", "#ff8d00"]);

var radarChartOptionsBig = {
    w: 400,
    h: 400,
    margin: margin,
    maxValue: 0.5,
    levels: 5,
    roundStrokes: true,
    color: color
};

var w = 250
var h = w;

var radarChartOptionsSmall = {
    w: w,
    h: h,
    margin: margin,
    maxValue: 0.5,
    levels: 5,
    roundStrokes: true,
    color: aui_color
};