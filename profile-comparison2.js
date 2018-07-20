var counter = -1;
var dataArray_radar = [];

d3.csv("scores-profile0.csv", function (data) {
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

           //JOBS
           var walk_job = +d.walk_job;
           var walk_job_weight = +d.walk_job_weight;
           console.log("WALK JOB: " + walk_job + " WEIGHTED " + walk_job_weight);

           var bike_job = +d.bike_job;
           var bike_job_weight = +d.bike_job_weight;
           console.log("BIKE JOB : " + bike_job + " WEIGHTED " + bike_job_weight);

           var drive_job = +d.drive_job;
           var drive_job_weight = +d.drive_job_weight;
           console.log("DRIVE JOB: " + drive_job + " WEIGHTED " + drive_job_weight);

           //var job_score = (walk_job*walk_job_weight) + (bike_job*bike_job_weight) + (drive_job*drive_job_weight);
           var job_score = d.job_score;
           console.log("JOB SCORE CALC: " + job_score + " VS ACTUAL: " + d.job_score);

           var employ = +d.employ;
           console.log("EMPLOY: " + employ);

           //var final_job_score = (employ*0.5) + (job_score*0.5);
           var final_job_score = d.final_job_score;
           console.log("FINAL JOB SCORE CALC: " + final_job_score + " VS ACTUAL: " + d.final_job_score);

           //HEALTH
           var healthcare = +d.healthcare;
           console.log("HEALTHCARE: " + healthcare);

           var physicians = +d.physicians;
           console.log("PHYSICIANS: " + physicians);

           var final_health_score = +d.final_health_score;
           console.log("FINAL HEALTH SCORE: " + final_health_score);

           //EDU
           var elementary = +d.elementary;
           var elementary_weight = +d.elementary_weight;
           console.log("ELEMENETARY: " + elementary + " WEIGHTED " + elementary_weight);

           var middle = +d.middle;
           var middle_weight = +d.middle_weight;
           console.log("MIDDLE: " + middle + " WEIGHTED " + middle_weight);

           var high = +d.high;
           var high_weight = +d.high_weight;
           console.log("HIGH: " + high + " WEIGHTED " + high_weight);

           //var final_edu_score = (elementary*elementary_weight) + (middle*middle_weight) + (high*high_weight);
           var final_edu_score = d.final_edu_score;
           console.log("FINAL EDU SCORE CALC: " + final_edu_score + " VS ACTUAL: " + d.final_edu_score);

           //TRANSPORT
           var walk = +d.walk;
           var walk_weight = +d.walk_weight;
           console.log("WALK: " + walk + " WEIGHTED " + walk_weight);

           var bike = +d.bike;
           var bike_weight = +d.bike_weight;
           console.log("BIKE: " + bike + " WEIGHTED " + bike_weight);

           var transit = +d.transit;
           var transit_weight = +d.transit_weight;
           console.log("TRANSIT: " + transit + " WEIGHTED " + transit_weight);

           //var final_transport_score = (walk*walk_weight) + (bike*bike_weight) + (transit*transit_weight);
           var final_transport_score = d.final_transport_score;
           console.log("FINAL TRANSPORT SCORE CALC: " + final_transport_score + " VS ACTUAL: " + d.final_transport_score);

           //COMMUNITY
           var safety = +d.safety;
           console.log("SAFETY: " + safety);

           var park = +d.park;
           var park_weight = +d.park_weight;
           console.log("PARK: " + park + " WEIGHTED " + park_weight);

           var library = +d.library;
           var library_weight = +d.library_weight;
           console.log("LIBRARY: " + library + " WEIGHTED " + library_weight);

           var grocery = +d.grocery;
           var grocery_weight = +d.grocery_weight;
           console.log("GROCERY: " + grocery + " WEIGHTED " + grocery_weight);

           //var amenities_score = (park*park_weight) + (library*library_weight) + (grocery*grocery_weight);
           var amenities_score = d.amenities_score;
           console.log("AMENITIES SCORE CALC: " + amenities_score + " VS ACTUAL: " + d.amenities_score);

           //var final_community_score = (amenities_score*0.5) + (safety*0.5);
           var final_community_score = d.final_community_score;
           console.log("FINAL COMMUNITY SCORE CALC: " + final_community_score + " VS ACTUAL: " + d.final_community_score);

           //FINAL WEIGHTS
           var job_weight = +d.job_weight;
           console.log("FINAL JOB WEIGHT: " + job_weight);

           var health_weight = +d.health_weight;
           console.log("FINAL HEALTH WEIGHT: " + health_weight);

           var edu_weight = +d.edu_weight;
           console.log("FINAL EDU WEIGHT: " + edu_weight);

           var transport_weight = +d.transport_weight;
           console.log("FINAL TRANSPORT WEIGHT: " + transport_weight);

           var community_weight = +d.community_weight;
           console.log("FINAL COMMUNITY WEIGHT: " + community_weight);

           //var final_property_score = (final_job_score*job_weight) + (final_health_score*health_weight) + (final_edu_score*edu_weight) + (final_community_score*community_weight);
           var final_property_score = d.final_property_score;
           console.log("FINAL PROPERTY SCORE CALC: " + final_property_score + " VS ACTUAL: " + d.final_property_score);

           //Store all data in single property object
            var property = {
                name: name,
                preference: preference,
                address: address,

                walk_job: walk_job,
                walk_job_weight: walk_job_weight,
                bike_job: bike_job,
                bike_job_weight: bike_job_weight,
                drive_job: drive_job,
                drive_job_weight: drive_job_weight,
                //job_score: (walk_job*walk_job_weight) + (bike_job*bike_job_weight) + (drive_job*drive_job_weight),
                job_score: d.job_score,
                employ: employ,
                //final_job_score: (job_score*0.5) + (employ*0.5),
                final_job_score: d.final_job_score,
                
                healthcare: healthcare,
                physicians: physicians,
                final_health_score: final_health_score,

                elementary: elementary,
                elementary_weight: elementary_weight,
                middle: middle,
                middle_weight: middle_weight,
                high: high,
                high_weight: high_weight,
                //final_edu_score:  (elementary*elementary_weight) + (middle*middle_weight) + (high*high_weight),
                final_edu_score: d.final_edu_score,

                walk: walk,
                walk_weight: walk_weight,
                bike: bike,
                bike_weight: bike_weight,
                transit: transit,
                transit_weight: transit_weight, 
                //final_transport_score: (walk*walk_weight) + (bike*bike_weight) + (transit*transit_weight),
                final_transport_score: d.final_transport_score,

                park: park,
                park_weight: park_weight,
                library: library,
                library_weight: library_weight,
                grocery: grocery,
                grocery_weight: grocery_weight,
                //amenities_score:  (park*park_weight) + (library*library_weight) + (grocery*grocery_weight),
                amenities_score: d.amenities_score,
                //final_community_score:  (amenities_score*0.5) + (safety*0.5),
                final_community_score: d.final_community_score,

                job_weight: job_weight,
                health_weight: health_weight,
                edu_weight: edu_weight,
                transport_weight: transport_weight,
                community_weight: community_weight,
                //final_property_score: (final_job_score*job_weight) + (final_health_score*health_weight) + (final_edu_score*edu_weight) + (final_community_score*community_weight)
                final_property_score: d.final_property_score
            }
            dataArray.push(property);

        //Prep data for chart
        var temp_dataArray_radar = [];

        var property_radar = [];
        var job = {
            axis: name + "_" + "Jobs",
            value: final_job_score*job_weight/100
        }

        var health = {
            axis: name + "_" + "Health",
            value: final_health_score * health_weight/ 100
        }

        var edu = {
            axis: name + "_" + "Education",
            value: final_edu_score * edu_weight/ 100
        }

        var transport = {
            axis: "Transportation",
            value: final_transport_score* transport_weight / 100
        }

        var community = {
            axis: "Community",
            value: final_community_score *community_weight/ 100
        }

        var ideal_radar = [];
        var ideal_job = {
            axis: name + "_" + "Jobs",
            value: job_weight
        }

        var ideal_health = {
            axis: name + "_" + "Health",
            value: health_weight
        }

        var ideal_edu = {
            axis: name + "_" + "Education",
            value: edu_weight
        }

        var ideal_transport = {
            axis: "Transportation",
            value: transport_weight
        }

        var ideal_community = {
            axis: "Community",
            value: community_weight
        }

        ideal_radar.push(ideal_job);
        ideal_radar.push(ideal_health);
        ideal_radar.push(ideal_edu);
        ideal_radar.push(ideal_transport);
        ideal_radar.push(ideal_community);

        property_radar.push(job);
        property_radar.push(health);
        property_radar.push(edu);
        property_radar.push(transport);
        property_radar.push(community);

        temp_dataArray_radar.push(ideal_radar);
        temp_dataArray_radar.push(property_radar);
        
        dataArray_radar.push(property_radar);

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

d3.csv("scores-profile1.csv", function (data) {
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

           //JOBS
           var walk_job = +d.walk_job;
           var walk_job_weight = +d.walk_job_weight;
           console.log("WALK JOB: " + walk_job + " WEIGHTED " + walk_job_weight);

           var bike_job = +d.bike_job;
           var bike_job_weight = +d.bike_job_weight;
           console.log("BIKE JOB : " + bike_job + " WEIGHTED " + bike_job_weight);

           var drive_job = +d.drive_job;
           var drive_job_weight = +d.drive_job_weight;
           console.log("DRIVE JOB: " + drive_job + " WEIGHTED " + drive_job_weight);

           //var job_score = (walk_job*walk_job_weight) + (bike_job*bike_job_weight) + (drive_job*drive_job_weight);
           var job_score = d.job_score;
           console.log("JOB SCORE CALC: " + job_score + " VS ACTUAL: " + d.job_score);

           var employ = +d.employ;
           console.log("EMPLOY: " + employ);

           //var final_job_score = (employ*0.5) + (job_score*0.5);
           var final_job_score = d.final_job_score;
           console.log("FINAL JOB SCORE CALC: " + final_job_score + " VS ACTUAL: " + d.final_job_score);

           //HEALTH
           var healthcare = +d.healthcare;
           console.log("HEALTHCARE: " + healthcare);

           var physicians = +d.physicians;
           console.log("PHYSICIANS: " + physicians);

           var final_health_score = +d.final_health_score;
           console.log("FINAL HEALTH SCORE: " + final_health_score);

           //EDU
           var elementary = +d.elementary;
           var elementary_weight = +d.elementary_weight;
           console.log("ELEMENETARY: " + elementary + " WEIGHTED " + elementary_weight);

           var middle = +d.middle;
           var middle_weight = +d.middle_weight;
           console.log("MIDDLE: " + middle + " WEIGHTED " + middle_weight);

           var high = +d.high;
           var high_weight = +d.high_weight;
           console.log("HIGH: " + high + " WEIGHTED " + high_weight);

           //var final_edu_score = (elementary*elementary_weight) + (middle*middle_weight) + (high*high_weight);
           var final_edu_score = d.final_edu_score;
           console.log("FINAL EDU SCORE CALC: " + final_edu_score + " VS ACTUAL: " + d.final_edu_score);

           //TRANSPORT
           var walk = +d.walk;
           var walk_weight = +d.walk_weight;
           console.log("WALK: " + walk + " WEIGHTED " + walk_weight);

           var bike = +d.bike;
           var bike_weight = +d.bike_weight;
           console.log("BIKE: " + bike + " WEIGHTED " + bike_weight);

           var transit = +d.transit;
           var transit_weight = +d.transit_weight;
           console.log("TRANSIT: " + transit + " WEIGHTED " + transit_weight);

           //var final_transport_score = (walk*walk_weight) + (bike*bike_weight) + (transit*transit_weight);
           var final_transport_score = d.final_transport_score;
           console.log("FINAL TRANSPORT SCORE CALC: " + final_transport_score + " VS ACTUAL: " + d.final_transport_score);

           //COMMUNITY
           var safety = +d.safety;
           console.log("SAFETY: " + safety);

           var park = +d.park;
           var park_weight = +d.park_weight;
           console.log("PARK: " + park + " WEIGHTED " + park_weight);

           var library = +d.library;
           var library_weight = +d.library_weight;
           console.log("LIBRARY: " + library + " WEIGHTED " + library_weight);

           var grocery = +d.grocery;
           var grocery_weight = +d.grocery_weight;
           console.log("GROCERY: " + grocery + " WEIGHTED " + grocery_weight);

           //var amenities_score = (park*park_weight) + (library*library_weight) + (grocery*grocery_weight);
           var amenities_score = d.amenities_score;
           console.log("AMENITIES SCORE CALC: " + amenities_score + " VS ACTUAL: " + d.amenities_score);

           //var final_community_score = (amenities_score*0.5) + (safety*0.5);
           var final_community_score = d.final_community_score;
           console.log("FINAL COMMUNITY SCORE CALC: " + final_community_score + " VS ACTUAL: " + d.final_community_score);

           //FINAL WEIGHTS
           var job_weight = +d.job_weight;
           console.log("FINAL JOB WEIGHT: " + job_weight);

           var health_weight = +d.health_weight;
           console.log("FINAL HEALTH WEIGHT: " + health_weight);

           var edu_weight = +d.edu_weight;
           console.log("FINAL EDU WEIGHT: " + edu_weight);

           var transport_weight = +d.transport_weight;
           console.log("FINAL TRANSPORT WEIGHT: " + transport_weight);

           var community_weight = +d.community_weight;
           console.log("FINAL COMMUNITY WEIGHT: " + community_weight);

           //var final_property_score = (final_job_score*job_weight) + (final_health_score*health_weight) + (final_edu_score*edu_weight) + (final_community_score*community_weight);
           var final_property_score = d.final_property_score;
           console.log("FINAL PROPERTY SCORE CALC: " + final_property_score + " VS ACTUAL: " + d.final_property_score);

           //Store all data in single property object
            var property = {
                name: name,
                preference: preference,
                address: address,

                walk_job: walk_job,
                walk_job_weight: walk_job_weight,
                bike_job: bike_job,
                bike_job_weight: bike_job_weight,
                drive_job: drive_job,
                drive_job_weight: drive_job_weight,
                //job_score: (walk_job*walk_job_weight) + (bike_job*bike_job_weight) + (drive_job*drive_job_weight),
                job_score: d.job_score,
                employ: employ,
                //final_job_score: (job_score*0.5) + (employ*0.5),
                final_job_score: d.final_job_score,
                
                healthcare: healthcare,
                physicians: physicians,
                final_health_score: final_health_score,

                elementary: elementary,
                elementary_weight: elementary_weight,
                middle: middle,
                middle_weight: middle_weight,
                high: high,
                high_weight: high_weight,
                //final_edu_score:  (elementary*elementary_weight) + (middle*middle_weight) + (high*high_weight),
                final_edu_score: d.final_edu_score,

                walk: walk,
                walk_weight: walk_weight,
                bike: bike,
                bike_weight: bike_weight,
                transit: transit,
                transit_weight: transit_weight, 
                //final_transport_score: (walk*walk_weight) + (bike*bike_weight) + (transit*transit_weight),
                final_transport_score: d.final_transport_score,

                park: park,
                park_weight: park_weight,
                library: library,
                library_weight: library_weight,
                grocery: grocery,
                grocery_weight: grocery_weight,
                //amenities_score:  (park*park_weight) + (library*library_weight) + (grocery*grocery_weight),
                amenities_score: d.amenities_score,
                //final_community_score:  (amenities_score*0.5) + (safety*0.5),
                final_community_score: d.final_community_score,

                job_weight: job_weight,
                health_weight: health_weight,
                edu_weight: edu_weight,
                transport_weight: transport_weight,
                community_weight: community_weight,
                //final_property_score: (final_job_score*job_weight) + (final_health_score*health_weight) + (final_edu_score*edu_weight) + (final_community_score*community_weight)
                final_property_score: d.final_property_score
            }
            dataArray.push(property);
        //Prep data for chart
        var temp_dataArray_radar = [];

        var property_radar = [];
        var job = {
            axis: name + "_" + "Jobs",
            value: final_job_score*job_weight/100
        }

        var health = {
            axis: name + "_" + "Health",
            value: final_health_score * health_weight/ 100
        }

        var edu = {
            axis: name + "_" + "Education",
            value: final_edu_score * edu_weight/ 100
        }

        var transport = {
            axis: "Transportation",
            value: final_transport_score* transport_weight / 100
        }

        var community = {
            axis: "Community",
            value: final_community_score *community_weight/ 100
        }

        var ideal_radar = [];
        var ideal_job = {
            axis: name + "_" + "Jobs",
            value: job_weight
        }

        var ideal_health = {
            axis: name + "_" + "Health",
            value: health_weight
        }

        var ideal_edu = {
            axis: name + "_" + "Education",
            value: edu_weight
        }

        var ideal_transport = {
            axis: "Transportation",
            value: transport_weight
        }

        var ideal_community = {
            axis: "Community",
            value: community_weight
        }

        ideal_radar.push(ideal_job);
        ideal_radar.push(ideal_health);
        ideal_radar.push(ideal_edu);
        ideal_radar.push(ideal_transport);
        ideal_radar.push(ideal_community);

        property_radar.push(job);
        property_radar.push(health);
        property_radar.push(edu);
        property_radar.push(transport);
        property_radar.push(community);

        temp_dataArray_radar.push(ideal_radar);
        temp_dataArray_radar.push(property_radar);
        dataArray_radar.push(property_radar);

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
    rank_top_five(dataArray, 1);
});

d3.csv("scores-profile2.csv", function (data) {
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

           //JOBS
           var walk_job = +d.walk_job;
           var walk_job_weight = +d.walk_job_weight;
           console.log("WALK JOB: " + walk_job + " WEIGHTED " + walk_job_weight);

           var bike_job = +d.bike_job;
           var bike_job_weight = +d.bike_job_weight;
           console.log("BIKE JOB : " + bike_job + " WEIGHTED " + bike_job_weight);

           var drive_job = +d.drive_job;
           var drive_job_weight = +d.drive_job_weight;
           console.log("DRIVE JOB: " + drive_job + " WEIGHTED " + drive_job_weight);

           //var job_score = (walk_job*walk_job_weight) + (bike_job*bike_job_weight) + (drive_job*drive_job_weight);
           var job_score = d.job_score;
           console.log("JOB SCORE CALC: " + job_score + " VS ACTUAL: " + d.job_score);

           var employ = +d.employ;
           console.log("EMPLOY: " + employ);

           //var final_job_score = (employ*0.5) + (job_score*0.5);
           var final_job_score = d.final_job_score;
           console.log("FINAL JOB SCORE CALC: " + final_job_score + " VS ACTUAL: " + d.final_job_score);

           //HEALTH
           var healthcare = +d.healthcare;
           console.log("HEALTHCARE: " + healthcare);

           var physicians = +d.physicians;
           console.log("PHYSICIANS: " + physicians);

           var final_health_score = +d.final_health_score;
           console.log("FINAL HEALTH SCORE: " + final_health_score);

           //EDU
           var elementary = +d.elementary;
           var elementary_weight = +d.elementary_weight;
           console.log("ELEMENETARY: " + elementary + " WEIGHTED " + elementary_weight);

           var middle = +d.middle;
           var middle_weight = +d.middle_weight;
           console.log("MIDDLE: " + middle + " WEIGHTED " + middle_weight);

           var high = +d.high;
           var high_weight = +d.high_weight;
           console.log("HIGH: " + high + " WEIGHTED " + high_weight);

           //var final_edu_score = (elementary*elementary_weight) + (middle*middle_weight) + (high*high_weight);
           var final_edu_score = d.final_edu_score;
           console.log("FINAL EDU SCORE CALC: " + final_edu_score + " VS ACTUAL: " + d.final_edu_score);

           //TRANSPORT
           var walk = +d.walk;
           var walk_weight = +d.walk_weight;
           console.log("WALK: " + walk + " WEIGHTED " + walk_weight);

           var bike = +d.bike;
           var bike_weight = +d.bike_weight;
           console.log("BIKE: " + bike + " WEIGHTED " + bike_weight);

           var transit = +d.transit;
           var transit_weight = +d.transit_weight;
           console.log("TRANSIT: " + transit + " WEIGHTED " + transit_weight);

           //var final_transport_score = (walk*walk_weight) + (bike*bike_weight) + (transit*transit_weight);
           var final_transport_score = d.final_transport_score;
           console.log("FINAL TRANSPORT SCORE CALC: " + final_transport_score + " VS ACTUAL: " + d.final_transport_score);

           //COMMUNITY
           var safety = +d.safety;
           console.log("SAFETY: " + safety);

           var park = +d.park;
           var park_weight = +d.park_weight;
           console.log("PARK: " + park + " WEIGHTED " + park_weight);

           var library = +d.library;
           var library_weight = +d.library_weight;
           console.log("LIBRARY: " + library + " WEIGHTED " + library_weight);

           var grocery = +d.grocery;
           var grocery_weight = +d.grocery_weight;
           console.log("GROCERY: " + grocery + " WEIGHTED " + grocery_weight);

           //var amenities_score = (park*park_weight) + (library*library_weight) + (grocery*grocery_weight);
           var amenities_score = d.amenities_score;
           console.log("AMENITIES SCORE CALC: " + amenities_score + " VS ACTUAL: " + d.amenities_score);

           //var final_community_score = (amenities_score*0.5) + (safety*0.5);
           var final_community_score = d.final_community_score;
           console.log("FINAL COMMUNITY SCORE CALC: " + final_community_score + " VS ACTUAL: " + d.final_community_score);

           //FINAL WEIGHTS
           var job_weight = +d.job_weight;
           console.log("FINAL JOB WEIGHT: " + job_weight);

           var health_weight = +d.health_weight;
           console.log("FINAL HEALTH WEIGHT: " + health_weight);

           var edu_weight = +d.edu_weight;
           console.log("FINAL EDU WEIGHT: " + edu_weight);

           var transport_weight = +d.transport_weight;
           console.log("FINAL TRANSPORT WEIGHT: " + transport_weight);

           var community_weight = +d.community_weight;
           console.log("FINAL COMMUNITY WEIGHT: " + community_weight);

           //var final_property_score = (final_job_score*job_weight) + (final_health_score*health_weight) + (final_edu_score*edu_weight) + (final_community_score*community_weight);
           var final_property_score = d.final_property_score;
           console.log("FINAL PROPERTY SCORE CALC: " + final_property_score + " VS ACTUAL: " + d.final_property_score);

           //Store all data in single property object
            var property = {
                name: name,
                preference: preference,
                address: address,

                walk_job: walk_job,
                walk_job_weight: walk_job_weight,
                bike_job: bike_job,
                bike_job_weight: bike_job_weight,
                drive_job: drive_job,
                drive_job_weight: drive_job_weight,
                //job_score: (walk_job*walk_job_weight) + (bike_job*bike_job_weight) + (drive_job*drive_job_weight),
                job_score: d.job_score,
                employ: employ,
                //final_job_score: (job_score*0.5) + (employ*0.5),
                final_job_score: d.final_job_score,
                
                healthcare: healthcare,
                physicians: physicians,
                final_health_score: final_health_score,

                elementary: elementary,
                elementary_weight: elementary_weight,
                middle: middle,
                middle_weight: middle_weight,
                high: high,
                high_weight: high_weight,
                //final_edu_score:  (elementary*elementary_weight) + (middle*middle_weight) + (high*high_weight),
                final_edu_score: d.final_edu_score,

                walk: walk,
                walk_weight: walk_weight,
                bike: bike,
                bike_weight: bike_weight,
                transit: transit,
                transit_weight: transit_weight, 
                //final_transport_score: (walk*walk_weight) + (bike*bike_weight) + (transit*transit_weight),
                final_transport_score: d.final_transport_score,

                park: park,
                park_weight: park_weight,
                library: library,
                library_weight: library_weight,
                grocery: grocery,
                grocery_weight: grocery_weight,
                //amenities_score:  (park*park_weight) + (library*library_weight) + (grocery*grocery_weight),
                amenities_score: d.amenities_score,
                //final_community_score:  (amenities_score*0.5) + (safety*0.5),
                final_community_score: d.final_community_score,

                job_weight: job_weight,
                health_weight: health_weight,
                edu_weight: edu_weight,
                transport_weight: transport_weight,
                community_weight: community_weight,
                //final_property_score: (final_job_score*job_weight) + (final_health_score*health_weight) + (final_edu_score*edu_weight) + (final_community_score*community_weight)
                final_property_score: d.final_property_score
            }
            dataArray.push(property);

        //Prep data for chart
        var temp_dataArray_radar = [];

        var property_radar = [];
        var job = {
            axis: name + "_" + "Jobs",
            value: final_job_score*job_weight/100
        }

        var health = {
            axis: name + "_" + "Health",
            value: final_health_score * health_weight/ 100
        }

        var edu = {
            axis: name + "_" + "Education",
            value: final_edu_score * edu_weight/ 100
        }

        var transport = {
            axis: "Transportation",
            value: final_transport_score* transport_weight / 100
        }

        var community = {
            axis: "Community",
            value: final_community_score *community_weight/ 100
        }

        var ideal_radar = [];
        var ideal_job = {
            axis: name + "_" + "Jobs",
            value: job_weight
        }

        var ideal_health = {
            axis: name + "_" + "Health",
            value: health_weight
        }

        var ideal_edu = {
            axis: name + "_" + "Education",
            value: edu_weight
        }

        var ideal_transport = {
            axis: "Transportation",
            value: transport_weight
        }

        var ideal_community = {
            axis: "Community",
            value: community_weight
        }

        ideal_radar.push(ideal_job);
        ideal_radar.push(ideal_health);
        ideal_radar.push(ideal_edu);
        ideal_radar.push(ideal_transport);
        ideal_radar.push(ideal_community);

        property_radar.push(job);
        property_radar.push(health);
        property_radar.push(edu);
        property_radar.push(transport);
        property_radar.push(community);

        temp_dataArray_radar.push(ideal_radar);
        temp_dataArray_radar.push(property_radar);
        dataArray_radar.push(property_radar);

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
    rank_top_five(dataArray, 2);
});

d3.csv("scores-profile3.csv", function (data) {
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

           //JOBS
           var walk_job = +d.walk_job;
           var walk_job_weight = +d.walk_job_weight;
           console.log("WALK JOB: " + walk_job + " WEIGHTED " + walk_job_weight);

           var bike_job = +d.bike_job;
           var bike_job_weight = +d.bike_job_weight;
           console.log("BIKE JOB : " + bike_job + " WEIGHTED " + bike_job_weight);

           var drive_job = +d.drive_job;
           var drive_job_weight = +d.drive_job_weight;
           console.log("DRIVE JOB: " + drive_job + " WEIGHTED " + drive_job_weight);

           //var job_score = (walk_job*walk_job_weight) + (bike_job*bike_job_weight) + (drive_job*drive_job_weight);
           var job_score = d.job_score;
           console.log("JOB SCORE CALC: " + job_score + " VS ACTUAL: " + d.job_score);

           var employ = +d.employ;
           console.log("EMPLOY: " + employ);

           //var final_job_score = (employ*0.5) + (job_score*0.5);
           var final_job_score = d.final_job_score;
           console.log("FINAL JOB SCORE CALC: " + final_job_score + " VS ACTUAL: " + d.final_job_score);

           //HEALTH
           var healthcare = +d.healthcare;
           console.log("HEALTHCARE: " + healthcare);

           var physicians = +d.physicians;
           console.log("PHYSICIANS: " + physicians);

           var final_health_score = +d.final_health_score;
           console.log("FINAL HEALTH SCORE: " + final_health_score);

           //EDU
           var elementary = +d.elementary;
           var elementary_weight = +d.elementary_weight;
           console.log("ELEMENETARY: " + elementary + " WEIGHTED " + elementary_weight);

           var middle = +d.middle;
           var middle_weight = +d.middle_weight;
           console.log("MIDDLE: " + middle + " WEIGHTED " + middle_weight);

           var high = +d.high;
           var high_weight = +d.high_weight;
           console.log("HIGH: " + high + " WEIGHTED " + high_weight);

           //var final_edu_score = (elementary*elementary_weight) + (middle*middle_weight) + (high*high_weight);
           var final_edu_score = d.final_edu_score;
           console.log("FINAL EDU SCORE CALC: " + final_edu_score + " VS ACTUAL: " + d.final_edu_score);

           //TRANSPORT
           var walk = +d.walk;
           var walk_weight = +d.walk_weight;
           console.log("WALK: " + walk + " WEIGHTED " + walk_weight);

           var bike = +d.bike;
           var bike_weight = +d.bike_weight;
           console.log("BIKE: " + bike + " WEIGHTED " + bike_weight);

           var transit = +d.transit;
           var transit_weight = +d.transit_weight;
           console.log("TRANSIT: " + transit + " WEIGHTED " + transit_weight);

           //var final_transport_score = (walk*walk_weight) + (bike*bike_weight) + (transit*transit_weight);
           var final_transport_score = d.final_transport_score;
           console.log("FINAL TRANSPORT SCORE CALC: " + final_transport_score + " VS ACTUAL: " + d.final_transport_score);

           //COMMUNITY
           var safety = +d.safety;
           console.log("SAFETY: " + safety);

           var park = +d.park;
           var park_weight = +d.park_weight;
           console.log("PARK: " + park + " WEIGHTED " + park_weight);

           var library = +d.library;
           var library_weight = +d.library_weight;
           console.log("LIBRARY: " + library + " WEIGHTED " + library_weight);

           var grocery = +d.grocery;
           var grocery_weight = +d.grocery_weight;
           console.log("GROCERY: " + grocery + " WEIGHTED " + grocery_weight);

           //var amenities_score = (park*park_weight) + (library*library_weight) + (grocery*grocery_weight);
           var amenities_score = d.amenities_score;
           console.log("AMENITIES SCORE CALC: " + amenities_score + " VS ACTUAL: " + d.amenities_score);

           //var final_community_score = (amenities_score*0.5) + (safety*0.5);
           var final_community_score = d.final_community_score;
           console.log("FINAL COMMUNITY SCORE CALC: " + final_community_score + " VS ACTUAL: " + d.final_community_score);

           //FINAL WEIGHTS
           var job_weight = +d.job_weight;
           console.log("FINAL JOB WEIGHT: " + job_weight);

           var health_weight = +d.health_weight;
           console.log("FINAL HEALTH WEIGHT: " + health_weight);

           var edu_weight = +d.edu_weight;
           console.log("FINAL EDU WEIGHT: " + edu_weight);

           var transport_weight = +d.transport_weight;
           console.log("FINAL TRANSPORT WEIGHT: " + transport_weight);

           var community_weight = +d.community_weight;
           console.log("FINAL COMMUNITY WEIGHT: " + community_weight);

           //var final_property_score = (final_job_score*job_weight) + (final_health_score*health_weight) + (final_edu_score*edu_weight) + (final_community_score*community_weight);
           var final_property_score = d.final_property_score;
           console.log("FINAL PROPERTY SCORE CALC: " + final_property_score + " VS ACTUAL: " + d.final_property_score);

           //Store all data in single property object
            var property = {
                name: name,
                preference: preference,
                address: address,

                walk_job: walk_job,
                walk_job_weight: walk_job_weight,
                bike_job: bike_job,
                bike_job_weight: bike_job_weight,
                drive_job: drive_job,
                drive_job_weight: drive_job_weight,
                //job_score: (walk_job*walk_job_weight) + (bike_job*bike_job_weight) + (drive_job*drive_job_weight),
                job_score: d.job_score,
                employ: employ,
                //final_job_score: (job_score*0.5) + (employ*0.5),
                final_job_score: d.final_job_score,
                
                healthcare: healthcare,
                physicians: physicians,
                final_health_score: final_health_score,

                elementary: elementary,
                elementary_weight: elementary_weight,
                middle: middle,
                middle_weight: middle_weight,
                high: high,
                high_weight: high_weight,
                //final_edu_score:  (elementary*elementary_weight) + (middle*middle_weight) + (high*high_weight),
                final_edu_score: d.final_edu_score,

                walk: walk,
                walk_weight: walk_weight,
                bike: bike,
                bike_weight: bike_weight,
                transit: transit,
                transit_weight: transit_weight, 
                //final_transport_score: (walk*walk_weight) + (bike*bike_weight) + (transit*transit_weight),
                final_transport_score: d.final_transport_score,

                park: park,
                park_weight: park_weight,
                library: library,
                library_weight: library_weight,
                grocery: grocery,
                grocery_weight: grocery_weight,
                //amenities_score:  (park*park_weight) + (library*library_weight) + (grocery*grocery_weight),
                amenities_score: d.amenities_score,
                //final_community_score:  (amenities_score*0.5) + (safety*0.5),
                final_community_score: d.final_community_score,

                job_weight: job_weight,
                health_weight: health_weight,
                edu_weight: edu_weight,
                transport_weight: transport_weight,
                community_weight: community_weight,
                //final_property_score: (final_job_score*job_weight) + (final_health_score*health_weight) + (final_edu_score*edu_weight) + (final_community_score*community_weight)
                final_property_score: d.final_property_score
            }
            dataArray.push(property);

        //Prep data for chart
        var temp_dataArray_radar = [];

        var property_radar = [];
        var job = {
            axis: name + "_" + "Jobs",
            value: final_job_score*job_weight/100
        }

        var health = {
            axis: name + "_" + "Health",
            value: final_health_score * health_weight/ 100
        }

        var edu = {
            axis: name + "_" + "Education",
            value: final_edu_score * edu_weight/ 100
        }

        var transport = {
            axis: "Transportation",
            value: final_transport_score* transport_weight / 100
        }

        var community = {
            axis: "Community",
            value: final_community_score *community_weight/ 100
        }

        var ideal_radar = [];
        var ideal_job = {
            axis: name + "_" + "Jobs",
            value: job_weight
        }

        var ideal_health = {
            axis: name + "_" + "Health",
            value: health_weight
        }

        var ideal_edu = {
            axis: name + "_" + "Education",
            value: edu_weight
        }

        var ideal_transport = {
            axis: "Transportation",
            value: transport_weight
        }

        var ideal_community = {
            axis: "Community",
            value: community_weight
        }

        ideal_radar.push(ideal_job);
        ideal_radar.push(ideal_health);
        ideal_radar.push(ideal_edu);
        ideal_radar.push(ideal_transport);
        ideal_radar.push(ideal_community);

        property_radar.push(job);
        property_radar.push(health);
        property_radar.push(edu);
        property_radar.push(transport);
        property_radar.push(community);

        temp_dataArray_radar.push(ideal_radar);
        temp_dataArray_radar.push(property_radar);
        dataArray_radar.push(property_radar);

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
    rank_top_five(dataArray, 3);
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
    w: 180,
    h: 180,
    margin: margin,
    maxValue: 0.5,
    levels: 5,
    roundStrokes: true,
    color: aui_color
};

function rank_top_five(dataArray, col) {
    var tempArray = dataArray; //Make copy
    var rank_text = document.getElementsByClassName('column-ranks')[col];
    rank_text.innerHTML = "Top 5 Properties:" + "<br>";
    for (var x = 0; x < 5; x++) {
        var max = 0;
        var max_position = 0;
        for (var i = 0; i < 18; i++) {
            var tempScore = Math.round(tempArray[i].final_property_score);
            console.log("SCORE TO COMPARE: " + tempScore);
            if(tempScore >= max){
                max = tempScore;
                max_position = i;
            }
        }
        rank_line = (x + 1) + ". " + tempArray[max_position].name + " " + Math.round(tempArray[max_position].final_property_score) + "<br>";
        rank_text.innerHTML = rank_text.innerHTML + rank_line;
        tempArray[max_position].final_property_score = 0;
    }
    
}

//Small charts
/*for(var c = 0; c < 3; c++){
   var col = document.getElementsByClassName('column')[c];
   for(var u = 0; u < 6; u++){
       var cell = col.getElementsByClassName('chart-unit')[u];
       RadarChart(cell, data, radarChartOptionsSmall);
       console.log("I drew a small chart!");
   }
}*/



