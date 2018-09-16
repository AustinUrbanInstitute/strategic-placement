var counter = -1;
var dataArray_radar = [];
var standard_properties = []; //All normal weight properties

d3.csv("scores-needs0-old.csv", function (data) {
    var col = document.getElementById('profile_0');
    var dataArray = [];
    counter = -1;
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

        //Store all data in single property object
        var property = {
            name: name,
            preference: preference,
            address: address,

            walk_job: d.walk_job,
            walk_job_weight: d.walk_job_weight,
            bike_job: d.bike_job,
            bike_job_weight: d.bike_job_weight,
            drive_job: d.drive_job,
            drive_job_weight: d.drive_job_weight,
            //job_score: (walk_job*walk_job_weight) + (bike_job*bike_job_weight) + (drive_job*drive_job_weight),
            job_score: d.job_score,
            employ: d.employ,
            //final_job_score: (job_score*0.5) + (employ*0.5),
            final_job_score: d.final_job_score,

            healthcare: d.healthcare,
            physicians: d.physicians,
            final_health_score: d.final_health_score,

            elementary: d.elementary,
            elementary_weight: d.elementary_weight,
            middle: d.middle,
            middle_weight: d.middle_weight,
            high: d.high,
            high_weight: d.high_weight,
            //final_edu_score:  (elementary*elementary_weight) + (middle*middle_weight) + (high*high_weight),
            final_edu_score: d.final_edu_score,

            walk: d.walk,
            walk_weight: d.walk_weight,
            bike: d.bike,
            bike_weight: d.bike_weight,
            public_transit_score: d.public_transit_score,
            mobility_score: d.mobility_score,

            park: d.park,
            library: d.library,
            grocery: d.grocery,

            job_need: d.job_need,
            health_need: d.health_need,
            edu_need: d.edu_need,
            public_transport_need: d.public_transport_need,
            park_need: d.park_need,
            library_need: d.library_need,
            grocery_need: d.grocery_need,
            mobility_need: d.mobility_need,

            final_property_score: d.final_property_score
        }
        dataArray.push(property);

        //Prep data for chart
        var temp_dataArray_radar = [];

        var property_radar_standard = [
            {
                axis: name + "_" + "Job Opportunity",
                value: d.final_job_score / 100
            },
            {
                axis: name + "_" + "Public Transit",
                value: d.public_transit_score / 100
            },

            {
                axis: name + "_" + "Mobility",
                value: d.mobility_score / 100
            },


            {
                axis: name + "_" + "Safety",
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
                axis: name + "_" + "Groceries",
                value: d.grocery / 100
            }, 
            {
                axis: name + "_" + "Libraries",
                value: d.library / 100
            },
            {
                axis: name + "_" + "Parks",
                value: d.park / 100
            }

        ];

        temp_dataArray_radar.push(property_radar_standard);
        standard_properties.push(property_radar_standard);

        dataArray_radar.push(property_radar_standard);

        var unit = col.getElementsByClassName('chart-unit')[counter];
        //Make chart
        RadarChart(unit, temp_dataArray_radar, radarChartOptionsSmall);
        console.log("I drew a small chart!");
        //Add chart title
        var title = unit.getElementsByClassName('chart-unit-title')[0];
        //var title = unit[0];
        title.innerHTML = name;

        //Add overall score
        var score_name = "score_" + counter;
        var score = unit.getElementsByClassName('chart-unit-score')[0];
        //var score = unit[1];
        score.innerHTML = "Overall score: " + Math.round(final_property_score);

    });
    rank_top_five(dataArray, 0);
});

//PROFILE 1
//Change name
d3.csv("scores-needs1.csv", function (data) {
    //Change name
    var col = document.getElementById('profile_1');
    var dataArray = [];
    counter = -1;
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

        var job_need = d.job_need;
        var health_need = d.health_need;
        var edu_need = d.edu_need;
        var public_transport_need = d.public_transit_need;
        var park_need = d.park_need;
        var library_need = d.library_need;
        var grocery_need = d.grocery_need;
        var mobility_need = d.mobility_need;
        var safety_need = d.safety_need;

        //Prep data for chart
        var temp_dataArray_radar = [];

        var property_radar = [
            {
                axis: name + "_" + "Job Opportunity",
                value: d.job_need
            },
            {
                axis: name + "_" + "Public Transit",
                value: d.public_transport_need
            },
            {
                axis: name + "_" + "Mobility",
                value: d.mobility_need
            },
            {
                axis: name + "_" + "Safety",
                value: d.safety_need
            },
            {
                axis: name + "_" + "Health",
                value: d.health_need
            },
            {
                axis: name + "_" + "Education",
                value: d.edu_need
            },
            {
                axis: name + "_" + "Groceries",
                value: d.grocery_need
            },
            {
                axis: name + "_" + "Libraries",
                value: d.library_need
            },
            {
                axis: name + "_" + "Parks",
                value: d.park_need
            },
        ];

        temp_dataArray_radar.push(standard_properties[counter]);
        temp_dataArray_radar.push(property_radar);
        dataArray_radar.push(property_radar);

        //Store all data in single property object
        var property = {
            name: name,
            preference: preference,
            address: address,

            job_need: job_need,
            health_need: health_need,
            edu_need: edu_need,
            public_transport_need: public_transport_need,
            park_need: park_need,
            library_need: library_need,
            grocery_need: grocery_need,
            mobility_need: mobility_need,
            safety_need: safety_need,

            final_property_score: d.final_property_score,

            match_score: calcMatchScore(property_radar, standard_properties[counter])
        }
        dataArray.push(property);

        var unit = col.getElementsByClassName('chart-unit')[counter];
        //Make chart
        RadarChart(unit, temp_dataArray_radar, radarChartOptionsSmall);
        console.log("I drew a small chart!");
        //Add chart title
        var title = unit.getElementsByClassName('chart-unit-title')[0];
        //var title = unit[0];
        title.innerHTML = name;

        //Add overall score
        var score_name = "score_" + counter;
        var score = unit.getElementsByClassName('chart-unit-score')[0];
        //var score = unit[1];
        score.innerHTML = "Overall score: " + Math.round(final_property_score) + "&nbsp &nbsp &nbsp" + "Match score: " + Math.round(property.match_score * 100);
    });
    //Change name
    rank_top_five_match(dataArray, 1);
});

//PROFILE 2
//Change name
d3.csv("scores-needs2.csv", function (data) {
    //Change name
    var col = document.getElementById('profile_2');
    var dataArray = [];
    counter = -1;
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

        var job_need = d.job_need;
        var health_need = d.health_need;
        var edu_need = d.edu_need;
        var public_transport_need = d.public_transit_need;
        var park_need = d.park_need;
        var library_need = d.library_need;
        var grocery_need = d.grocery_need;
        var mobility_need = d.mobility_need;
        var safety_need = d.safety_need;

        //Prep data for chart
        var temp_dataArray_radar = [];

        var property_radar = [
            {
                axis: name + "_" + "Job Opportunity",
                value: d.job_need
            },
            {
                axis: name + "_" + "Public Transit",
                value: d.public_transport_need
            },
            {
                axis: name + "_" + "Mobility",
                value: d.mobility_need
            },
            {
                axis: name + "_" + "Safety",
                value: safety_need
            },
            {
                axis: name + "_" + "Health",
                value: d.health_need
            },
            {
                axis: name + "_" + "Education",
                value: d.edu_need
            },
            {
                axis: name + "_" + "Groceries",
                value: d.grocery_need
            },
            {
                axis: name + "_" + "Libraries",
                value: d.library_need
            },
            {
                axis: name + "_" + "Parks",
                value: d.park_need
            },
        ];

        temp_dataArray_radar.push(standard_properties[counter]);
        temp_dataArray_radar.push(property_radar);
        dataArray_radar.push(property_radar);

        //Store all data in single property object
        var property = {
            name: name,
            preference: preference,
            address: address,

            job_need: job_need,
            health_need: health_need,
            edu_need: edu_need,
            public_transport_need: public_transport_need,
            park_need: park_need,
            library_need: library_need,
            grocery_need: grocery_need,
            mobility_need: mobility_need,
            safety_need: safety_need,

            final_property_score: d.final_property_score,

            match_score: calcMatchScore(property_radar, standard_properties[counter])
        }
        dataArray.push(property);

        var unit = col.getElementsByClassName('chart-unit')[counter];
        //Make chart
        RadarChart(unit, temp_dataArray_radar, radarChartOptionsSmall);
        console.log("I drew a small chart!");
        //Add chart title
        var title = unit.getElementsByClassName('chart-unit-title')[0];
        //var title = unit[0];
        title.innerHTML = name;

        //Add overall score
        var score_name = "score_" + counter;
        var score = unit.getElementsByClassName('chart-unit-score')[0];
        //var score = unit[1];
        score.innerHTML = "Overall score: " + Math.round(final_property_score) + "&nbsp &nbsp &nbsp" + "Match score: " + Math.round(property.match_score * 100);
    });
    //Change name
    rank_top_five_match(dataArray, 2);
});

//PROFILE 3
//Change name
d3.csv("scores-needs3.csv", function (data) {
    //Change name
    var col = document.getElementById('profile_3');
    var dataArray = [];
    counter = -1;
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

        var job_need = d.job_need;
        var health_need = d.health_need;
        var edu_need = d.edu_need;
        var public_transport_need = d.public_transit_need;
        var park_need = d.park_need;
        var library_need = d.library_need;
        var grocery_need = d.grocery_need;
        var mobility_need = d.mobility_need;
        var safety_need = d.safety_need;

        //Prep data for chart
        var temp_dataArray_radar = [];

        var property_radar = [
            {
                axis: name + "_" + "Job Opportunity",
                value: d.job_need
            },

    

            {
                axis: name + "_" + "Public Transit",
                value: d.public_transport_need
            },

            {
                axis: name + "_" + "Mobility",
                value: d.mobility_need
            },
            {
                axis: name + "_" + "Safety",
                value: d.safety_need
            },
            {
                axis: name + "_" + "Health",
                value: d.health_need
            },
            {
                axis: name + "_" + "Education",
                value: d.edu_need
            },
            {
                axis: name + "_" + "Groceries",
                value: d.grocery_need
            },
            {
                axis: name + "_" + "Libraries",
                value: d.library_need
            },
            {
                axis: name + "_" + "Parks",
                value: d.park_need
            }
    
        ];

        temp_dataArray_radar.push(standard_properties[counter]);
        temp_dataArray_radar.push(property_radar);
        dataArray_radar.push(property_radar);

        //Store all data in single property object
        var property = {
            name: name,
            preference: preference,
            address: address,

            job_need: job_need,
            health_need: health_need,
            edu_need: edu_need,
            public_transport_need: public_transport_need,
            park_need: park_need,
            library_need: library_need,
            grocery_need: grocery_need,
            mobility_need: mobility_need,
            safety_need: safety_need,

            final_property_score: d.final_property_score,

            match_score: calcMatchScore(property_radar, standard_properties[counter])
        }
        dataArray.push(property);

        var unit = col.getElementsByClassName('chart-unit')[counter];
        //Make chart
        RadarChart(unit, temp_dataArray_radar, radarChartOptionsSmall);
        console.log("I drew a small chart!");
        //Add chart title
        var title = unit.getElementsByClassName('chart-unit-title')[0];
        //var title = unit[0];
        title.innerHTML = name;

        //Add overall score
        var score_name = "score_" + counter;
        var score = unit.getElementsByClassName('chart-unit-score')[0];
        //var score = unit[1];
        score.innerHTML = "Overall score: " + Math.round(final_property_score) + "&nbsp &nbsp &nbsp" + "Match score: " + Math.round(property.match_score * 100);
    });
    //Change name
    rank_top_five_match(dataArray, 3);
});

/* Radar chart design created by Nadieh Bremer - VisualCinnamon.com */

////////////////////////////////////////////////////////////// 
//////////////////////// Set-Up ////////////////////////////// 
////////////////////////////////////////////////////////////// 

var margin = { top: 40, right: 100, bottom: 100, left: 100 },
    width = Math.min(700, window.innerWidth - 10) - margin.left - margin.right,
    height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);

////////////////////////////////////////////////////////////// 
//////////////////// Draw the Chart ////////////////////////// 
////////////////////////////////////////////////////////////// 

//#EDC951","#CC333F","#00A0B0
var color = d3.scale.ordinal()
    .range(["#c1ff00", "0002e8", "ff8d00", "0ce898", "ff00a2"]);

var aui_color = d3.scale.ordinal()
    .range(["#909090", "#ff8d00"]);

var radarChartOptionsSmall = {
    w: 190,
    h: 190,
    margin: margin,
    maxValue: 0.5,
    levels: 5,
    roundStrokes: true,
    color: aui_color
};

function rank_top_five(dataArray, col) { //Rank all, actually 
    var tempArray = dataArray; //Make copy
    var rank_text = document.getElementsByClassName('column-ranks')[col];
    rank_text.innerHTML = "<strong>Overall Property Rankings:<strong>" + "<br>";
    for (var x = 0; x < 18; x++) {
        var max = 0;
        var max_position = 0;
        for (var i = 0; i < 18; i++) {
            var tempScore = tempArray[i].final_property_score;
            console.log("SCORE TO COMPARE: " + tempScore);
            if (tempScore >= max) {
                max = tempScore;
                max_position = i;
            }
        }
        rank_line = (x + 1) + ". " + tempArray[max_position].name + " (" + Math.round(tempArray[max_position].final_property_score) + ")<br>";
        rank_text.innerHTML = rank_text.innerHTML + rank_line;
        tempArray[max_position].final_property_score = 0;
    }
}

//These aren't 100% accurate...
function rank_top_five_match(dataArray, col) { //top 18 for now
    var tempArray = dataArray; //Make copy
    var rank_text = document.getElementsByClassName('column-ranks')[col];
    rank_text.innerHTML = "<strong>Top Match Properties:<strong>" + "<br>";
    for (var x = 0; x < 18; x++) {
        var max = 0;
        var max_position = 0;
        for (var i = 0; i < 18; i++) {
            var tempScore = tempArray[i].match_score;
            console.log("SCORE TO COMPARE: " + tempScore + " to max " + max);
            if (tempScore >= max) {
                max = tempScore;
                max_position = i;
            }
        }
        rank_line = (x + 1) + ". " + tempArray[max_position].name + " (" + Math.round(tempArray[max_position].match_score * 100) + ")<br>";
        rank_text.innerHTML = rank_text.innerHTML + rank_line;
        tempArray[max_position].match_score = 0;
    }
}

function calcMatchScore(property_needs, property_standards) {
    var score = 0;
    for(var i = 0; i < property_needs.length; i++){
        var need = property_needs[i].value; //0, .25, .5, .75, 1
        var standard = property_standards[i].value; //0-100
        if(need == 0){
            score = score + 1;
        } else if(standard/need >= 1){
            //No overflow
            score++;
        } else{
            
            score = score + (standard/need);
        } 
    }
    //max score is 9
    return score/9;
}

function calcMaxScore(property_needs) {
    var score = 0;
    for (var i = 0; i < property_needs.length; i++) {
        var side_a = property_needs[i].value;
        var side_b = 0;
        if (i == property_needs.length - 1) { //If last, use first as next side
            side_b = property_needs[0].value;
        } else {
            side_b = property_needs[i + 1].value
        }
        score = score + 0.5 * side_a * side_b * Math.sin(40 * Math.PI / 180);
        console.log("PARTIAL SCORE: " + score);
    }
    console.log("MAX SCORE: " + score);
    return score;
}

function calcOverlapScore(property_needs, property_standards) {
    var score = 0;
    for (var i = 0; i < property_standards.length; i++) {
        console.log("Calculating between: " + property_needs[i].axis + " & axis clockwise");
        var side_a = 0;
        if (property_needs[i].value <= property_standards[i].value) {
            side_a = property_needs[i].value;
            console.log("Use needs value");
        } else {
            side_a = property_standards[i].value;
            console.log("Use standard value");
        }

        var side_b = 0;
        if (i == property_standards.length - 1) { //If last, use first as next side
            if (property_needs[0].value <= property_standards[0].value) {
                side_a = property_needs[0].value;
                console.log("Use needs value");
            } else {
                side_a = property_standards[0].value;
                console.log("Use standard value");
            }
        } else {
            if (property_needs[i + 1].value <= property_standards[i + 1].value) {
                side_b = property_needs[i + 1].value;
                console.log("Use needs value");
            } else {
                side_b = property_standards[i + 1].value
                console.log("Use standard value");
            }
        }
        score = score + 0.5 * side_a * side_b * Math.sin(40 * Math.PI / 180);
        console.log("PARTIAL SCORE: " + score);
    }
    console.log("STANDARD SCORE: " + score);
    return score;
}