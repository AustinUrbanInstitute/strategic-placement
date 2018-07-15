
     var dataArray = [];
     d3.csv("/scores.csv", function(data) {
       data.forEach(function(d) {
   
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

           var job_score = (walk_job*walk_job_weight) + (bike_job*bike_job_weight) + (drive_job*drive_job_weight);
           console.log("JOB SCORE CALC: " + job_score + " VS ACTUAL: " + d.job_score);

           var employ = +d.employ;
           console.log("EMPLOY: " + employ);

           var final_job_score = (employ*0.5) + (job_score*0.5);
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

           var final_edu_score = (elementary*elementary_weight) + (middle*middle_weight) + (high*high_weight);
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

           var final_transport_score = (walk*walk_weight) + (bike*bike_weight) + (transit*transit_weight);
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

           var amenities_score = (park*park_weight) + (library*library_weight) + (grocery*grocery_weight);
           console.log("AMENITIES SCORE CALC: " + amenities_score + " VS ACTUAL: " + d.amenities_score);

           var final_community_score = (amenities_score*0.5) + (safety*0.5);
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

           var final_property_score = (final_job_score*job_weight) + (final_health_score*health_weight) + (final_edu_score*edu_weight) + (final_community_score*community_weight);
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
                job_score: (walk_job*walk_job_weight) + (bike_job*bike_job_weight) + (drive_job*drive_job_weight),
                employ: employ,
                final_job_score: (job_score*0.5) + (employ*0.5),
                
                healthcare: healthcare,
                physicians: physicians,
                final_health_score: final_health_score,

                elementary: elementary,
                elementary_weight: elementary_weight,
                middle: middle,
                middle_weight: middle_weight,
                high: high,
                high_weight: high_weight,
                final_edu_score:  (elementary*elementary_weight) + (middle*middle_weight) + (high*high_weight),

                walk: walk,
                walk_weight: walk_weight,
                bike: bike,
                bike_weight: bike_weight,
                transit: transit,
                transit_weight: transit_weight, 
                final_transport_score: (walk*walk_weight) + (bike*bike_weight) + (transit*transit_weight),
                
                park: park,
                park_weight: park_weight,
                library: library,
                library_weight: library_weight,
                grocery: grocery,
                grocery_weight: grocery_weight,
                amenities_score:  (park*park_weight) + (library*library_weight) + (grocery*grocery_weight),
                final_community_score:  (amenities_score*0.5) + (safety*0.5),

                job_weight: job_weight,
                health_weight: health_weight,
                edu_weight: edu_weight,
                transport_weight: transport_weight,
                community_weight: community_weight,
                final_property_score: (final_job_score*job_weight) + (final_health_score*health_weight) + (final_edu_score*edu_weight) + (final_community_score*community_weight)
            }
            dataArray.push(property);
     });
     console.log("FINAL DATA ARRAY: " + dataArray);
     });

     /* Radar chart design created by Nadieh Bremer - VisualCinnamon.com */
      
			////////////////////////////////////////////////////////////// 
			//////////////////////// Set-Up ////////////////////////////// 
			////////////////////////////////////////////////////////////// 

			var margin = {top: 100, right: 100, bottom: 100, left: 100},
				width = Math.min(700, window.innerWidth - 10) - margin.left - margin.right,
				height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);
					
			////////////////////////////////////////////////////////////// 
			////////////////////////// Data ////////////////////////////// 
			////////////////////////////////////////////////////////////// 

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
                    
            
			////////////////////////////////////////////////////////////// 
			//////////////////// Draw the Chart ////////////////////////// 
			////////////////////////////////////////////////////////////// 

			var color = d3.scale.ordinal()
				.range(["#EDC951","#CC333F","#00A0B0"]);
				
			var radarChartOptions = {
			  w: width,
			  h: height,
			  margin: margin,
			  maxValue: 0.5,
			  levels: 5,
			  roundStrokes: true,
			  color: color
            };
            
            var radarChartOptionsSmall = {
                w: 250,
                h: 250,
                margin: margin,
                maxValue: 0.5,
                levels: 5,
                roundStrokes: true,
                color: color
              };
	

//Call function to draw the Radar chart
//Will expect that data is in %'s

//Big chart
RadarChart("#together-chart", data, radarChartOptions);
console.log("I drew a big chart!");

//Small charts
for(var c = 0; c < 3; c++){
    var col = document.getElementsByClassName('column')[c];
    for(var u = 0; u < 6; u++){
        var cell = col.getElementsByClassName('chart-unit')[u];
        RadarChart(cell, data, radarChartOptionsSmall);
        console.log("I drew a small chart!");
    }
}

