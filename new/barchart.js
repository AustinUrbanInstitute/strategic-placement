d3.csv("scores-needs0.csv", function (data) {
  data.forEach(function (d, i) { // For each property...
    // Determine exact factors first
    var factors_array = ['Safety', 'Health', 'Affordability', 'Jobs', 'K-12 Edu', 'Public Transit', 'Quietness']
    if(d.final_job_distance == 0 || d.final_job_distance == null){
      // Calc job by employment opp
      factors_array[4] = 'Job Opportunity'
    } else{
      // Calc job by distance
      factors_array[4] = 'Job Distance'
    }

    if(d.final_health_distance == 0 || d.final_health_distance == null){
      // Calc health by health quality
      factors_array[2] = 'Healthcare Quality'
    } else{
      // Calc health by distance
      factors_array[2] = 'Healthcare Distance'
    }

    if(d.final_edu_distance == 0 || d.final_edu_distance == null){
      // Calc health by health quality
      factors_array[5] = 'K-12 Edu Quality'
    } else{
      // Calc health by distance
      factors_array[5] = 'K-12 Edu Distance'
    }

    // Make array of factor scores
    var dataArray_scores = [];
    dataArray_scores.add(d.)

    // Make array of needs

    var property = {
      name: d.name,
      address: d.address,
      dataArray_scores: ???,
      dataArray_needs: ???
    }
    console.log(property);
/*
    // Create data array of values to visualize
    var dataArray_scores = [23, 13, 21, 14, 50, 15, 10];
    var dataArray_needs = [3, 43, 2, 4, 12, 53, 20];

    // Create variable for the SVG
    var svg = d3.select("body").append("svg")
    .attr("height","100%")
    .attr("width","100%");

    // Select, append to SVG, and add attributes to rectangles for bar chart
    var bar_height_mult = 6;
    var margin = 25;
    var bar_width = 80;
    var graph_height = 100 * bar_height_mult;
    var graph_width = bar_width*dataArray_needs.length;

    svg.selectAll("rect_scores")
    .data(dataArray_scores)
    .enter().append("rect")
    .attr("class", "bar_scores")
    .attr("height", function(d, i) {return (d * bar_height_mult)})
    .attr("width", bar_width)
    .attr("x", function(d, i) {return (i * bar_width) + margin})
    .attr("y", function(d, i) {return graph_height - (d * bar_height_mult)});

    svg.selectAll("rect_needs")
    .data(dataArray_needs)
    .enter().append("rect")
    .attr("class", "bar_needs")
    .attr("height", function(d, i) {return (d * bar_height_mult)})
    .attr("width", bar_width)
    .attr("x", function(d, i) {return (i * bar_width) + margin})
    .attr("y", function(d, i) {return graph_height - (d * bar_height_mult)});

    // Select, append to SVG, and add attributes to text
    svg.selectAll("text")
    .data(dataArray_scores)
    .enter().append("text")
    .text(function(d) {return d})
    .attr("class", "text")
    .attr("x", function(d, i) {return (i * bar_width) + bar_width/2})
    .attr("y", function(d, i) {return graph_height - (d * bar_height_mult)});

    // Axes
    var x = d3.scalePoint()
    // Fix order
    //.domain(['Safety', 'Jobs', 'Public Transit', 'K-12 Education', 'Healthcare', 'Quietness', 'Affordability'])
    .domain(factors_array)
    .range([graph_width * (1/(dataArray_needs.length * 2)), graph_width * (dataArray_needs.length*2-1)/(dataArray_needs.length*2)]);

    var y = d3.scaleLinear()
    .domain([0, 100])
    .range([graph_height,0]);

    var xAxis = d3.axisBottom()
    .scale(x)
    .ticks(1);

    var yAxis = d3.axisLeft()
    .scale(y)
    .ticks(4);

    svg.append("g")
    .attr("transform", "translate(" + margin + "," + (graph_height) + ")")
    .attr("class","axis")
    .call(xAxis);

    svg.append("g")
    .attr("transform", "translate(" + margin + "," + 0 + ")")
    .attr("class","axis")
    .call(yAxis);
*/
});
});
