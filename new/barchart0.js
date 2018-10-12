var a = 0;

d3.csv("scores-needs" + a + ".csv", function (data) {
  //Store all property objects here
  var properties = [];

  var factors_array = ['Safety', 'Health', 'Affordability', 'Jobs', 'K-12 Edu', 'Public Transit', 'Quietness']

  data.forEach(function (d, i) { // For each property...
    // All needs and scores var
    var safety_need = d.safety_need;
    var health_need = d.health_need;
    var afford_need = d.affordability_need;
    var job_need = d.job_need;
    var edu_need = d.edu_need;
    var transit_need = d.public_transport_need;
    var quiet_need = d.quiet_need;

    var safety_score = d.safety;
    var health_score = 0; //SPECIAL
    var afford_score = d.affordability;
    var job_score = 0; //SPECIAL
    var edu_score = 0; //SPECIAL
    var transit_score = d.public_transit_score;
    var quiet_score = d.quiet;

    var property_score = d.final_property_score;

    // For SPECIAL scores
    if(d.final_job_distance == 0 || d.final_job_distance == null){
      // Calc job by employment opp
      factors_array[4] = 'Job Opportunity';
      job_score = d.final_employment_score;
    } else{
      // Calc job by distance
      factors_array[4] = 'Job Distance';
      job_score = d.final_job_distance;
    }

    if(d.final_health_distance == 0 || d.final_health_distance == null){
      // Calc health by health quality
      factors_array[1] = 'Healthcare Quality';
      health_score = d.final_health_score;
    } else{
      // Calc health by distance
      factors_array[1] = 'Healthcare Distance';
      health_score = d.final_health_distance;
    }

    if(d.final_edu_distance == 0 || d.final_edu_distance == null){
      // Calc health by health quality
      factors_array[5] = 'K-12 Edu Quality';
      edu_score = d.final_edu_score;
    } else{
      // Calc health by distance
      factors_array[5] = 'K-12 Edu Distance';
      edu_score = d.final_edu_distance;
    }

    // Make array of factor scores ('Safety', 'Health', 'Affordability', 'Jobs', 'K-12 Edu', 'Public Transit', 'Quietness')
    var dataArray_scores = [];
    dataArray_scores.push(safety_score);
    dataArray_scores.push(health_score);
    dataArray_scores.push(afford_score);
    dataArray_scores.push(job_score);
    dataArray_scores.push(edu_score);
    dataArray_scores.push(transit_score);
    dataArray_scores.push(quiet_score);

    // Make array of needs
    var dataArray_needs = [];
    dataArray_needs.push(safety_need);
    dataArray_needs.push(health_need);
    dataArray_needs.push(afford_need);
    dataArray_needs.push(job_need);
    dataArray_needs.push(edu_need);
    dataArray_needs.push(transit_need);
    dataArray_needs.push(quiet_need);

    // Calculate match scores
    var match_score = calcMatchScore(dataArray_needs, dataArray_scores);

    var property = {
      name: d.name,
      address: d.address,
      dataArray_scores: dataArray_scores,
      dataArray_needs: dataArray_needs,
      property_score: property_score,
      match_score: match_score
    }

    console.log(property);
    properties.push(property);
    console.log(factors_array);

    // CREATE DATA VIZ
    // Create data array of values to visualize
    var scores = properties[i].dataArray_scores;
    var needs = properties[i].dataArray_needs;

    // Select, append to SVG, and add attributes to rectangles for bar chart
    var bar_height_mult = 2;
    var margin = 25;
    var bar_width = 40;
    var graph_height = 100 * bar_height_mult;
    var graph_width = bar_width*needs.length;
    var graph_margin = 50;

    // Create variable for the SVG
    var col = document.getElementById("column" + a);
    var svg = d3.select(col).append("svg")
    .attr("height",graph_height + graph_margin*2) //100%
    .attr("width",'100%') //100%
    .append("g")
    .attr("transform", "translate(" + graph_margin + "," + graph_margin + ")");

    // Title
    svg.append("text")
    .attr("x", (graph_width / 2))
    .attr("y", 0 - graph_margin/2)
    .attr("text-anchor", "middle")
    .style("font-size", "16px")
    .text(d.name);

    // Display property scores
    svg.append("text")
    .attr("x", (graph_width * (1/3)))
    .attr("y", 0)
    .attr("text-anchor", "middle")
    .style("font-size", "16px")
    .text("Property Score: " + Math.round(d.final_property_score));

    // Display match score
    svg.append("text")
    .attr("x", (graph_width * (2/3)))
    .attr("y", 0)
    .attr("text-anchor", "middle")
    .style("font-size", "16px")
    .text("Match Score: " + Math.round(match_score));

    // Select, append to SVG, and add attributes to text
    svg.selectAll("text")
    .data(scores)
    .enter().append("text")
    .text(function(d) {return Math.round(d)})
    .attr("class", "text")
    .attr("x", function(d, i) {return (i * bar_width) + bar_width/2})
    .attr("y", function(d, i) {return graph_height - (d * bar_height_mult)});

    // Display bars on graph
    svg.selectAll("rect_scores")
    .data(scores)
    .enter().append("rect")
    .attr("class", "bar_scores")
    .attr("height", function(d, i) {return (d * bar_height_mult)})
    .attr("width", bar_width)
    .attr("x", function(d, i) {return (i * bar_width) + margin})
    .attr("y", function(d, i) {return graph_height - (d * bar_height_mult)});

    svg.selectAll("rect_needs")
    .data(needs)
    .enter().append("rect")
    .attr("class", "bar_needs")
    .attr("height", function(d, i) {return (d * bar_height_mult)})
    .attr("width", bar_width)
    .attr("x", function(d, i) {return (i * bar_width) + margin})
    .attr("y", function(d, i) {return graph_height - (d * bar_height_mult)});

    // Axes
    var x = d3.scale.ordinal() //scaleLinear()
    .domain(factors_array)
    .rangePoints([graph_width/14, graph_width]);

    var y = d3.scale.linear()
    .domain([0, 100])
    .range([graph_height,0]);

    var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")
    .ticks(7);

    var yAxis = d3.svg.axis()
    .scale(y)
    .orient('left')
    .ticks(4);

    svg.append("g")
    .attr("transform", "translate(" + margin + "," + (graph_height) + ")")
    .attr("class","axis")
    .call(xAxis);

    svg.append("g")
    .attr("transform", "translate(" + margin + "," + 0 + ")")
    .attr("class","axis")
    .call(yAxis);
  });
});

function calcMatchScore(property_needs, property_scores){
  var score = 0;
  for(var i = 0; i < property_needs.length; i++){
    var need = property_needs[i]; //0, .25, .5, .75, 1
    var factor_score = property_scores[i]; //0-100
    if(need == 0){
      score++;
    } else if(factor_score/need >= 1){
      //No overflow
      score++;
    } else{
      score = score + (factor_score/need);
    }
  }
  //max score is 7
  return 100*(score/7);
}
