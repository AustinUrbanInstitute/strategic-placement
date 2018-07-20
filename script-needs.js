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
                axis: name + "_" + "Jobs",
                value: d.final_job_score / 100
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
                axis: "Parks",
                value: d.park / 100
            },
            {
                axis: "Libraries",
                value: d.library / 100
            },
            {
                axis: "Groceries",
                value: d.grocery / 100
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

var margin = { top: 70, right: 100, bottom: 100, left: 100 },
    width = Math.min(700, window.innerWidth - 10) - margin.left - margin.right,
    height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);

////////////////////////////////////////////////////////////// 
////////////////////////// Data ////////////////////////////// 
////////////////////////////////////////////////////////////// 
/*
			var data = [
					  [//iPhone
						{axis:"Battery Life",value:0.22},
						{axis:"Brand",value:0.28},
						{axis:"Contract Cost",value:0.29},
						{axis:"Design And Quality",value:0.17},
						{axis:"Have Internet Connectivity",value:0.22},
						{axis:"Large Screen",value:0.02},
						{axis:"Price Of Device",value:0.21},
						{axis:"To Be A Smartphone",value:0.50}			
					  ],[//Samsung
						{axis:"Battery Life",value:0.27},
						{axis:"Brand",value:0.16},
						{axis:"Contract Cost",value:0.35},
						{axis:"Design And Quality",value:0.13},
						{axis:"Have Internet Connectivity",value:0.20},
						{axis:"Large Screen",value:0.13},
						{axis:"Price Of Device",value:0.35},
						{axis:"To Be A Smartphone",value:0.38}
					  ],[//Nokia Smartphone
						{axis:"Battery Life",value:0.26},
						{axis:"Brand",value:0.10},
						{axis:"Contract Cost",value:0.30},
						{axis:"Design And Quality",value:0.14},
						{axis:"Have Internet Connectivity",value:0.22},
						{axis:"Large Screen",value:0.04},
						{axis:"Price Of Device",value:0.41},
						{axis:"To Be A Smartphone",value:0.30}
					  ]
                    ];
                    
            */
////////////////////////////////////////////////////////////// 
//////////////////// Draw the Chart ////////////////////////// 
////////////////////////////////////////////////////////////// 

//#EDC951","#CC333F","#00A0B0
var color = d3.scale.ordinal()
    .range(["#909090", "#c1ff00", "0002e8", "ff8d00", "0ce898", "ff00a2"]);

var aui_color = d3.scale.ordinal()
    .range(["#909090", "#ff8d00"]);

var radarChartOptionsBig = {
    w: width,
    h: height,
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