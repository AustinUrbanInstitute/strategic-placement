var unit_counter = 0;
function graph(profile_counter){
  //Go through each file (main, study 1, study 2, study 3)
  var factors_array = ['Safety', 'Health', 'Affordability', 'Jobs', 'K-12 Edu', 'Public Transit', 'Quietness'];
  var counter = 0;
  var properties = [];
  //Put all properties in file into data stuff
  d3.csv("scores-needs" + profile_counter + ".csv", function (data) {
    //Store all property objects here

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

      // Create data array of values to visualize
      var scores = properties[i].dataArray_scores;
      var needs = properties[i].dataArray_needs;
      var name = properties[i].name;

      //Add dummy repeats
      scores.push(scores[scores.length-1]);
      console.log(name + " SCORES: " + scores);
      needs.push(needs[needs.length-1]);
      console.log(name + " NEEDS: " + needs);

      //8th element repeat of last, necessary for this to work!!!
      var factors = ['Safety', 'Health', 'Affordability', 'Jobs', 'K-12 Edu', 'Public Transit', 'Quietness', ' '];

      var needs_plot = {
        x: factors,
        y: needs,
        mode: 'lines+markers',
        name: 'Resident Need',
        line: {shape: 'hv', color: 'rgba(255, 141, 0, 0.7)'},
        type: 'scatter',

        fill: 'tozeroy',
        fillcolor: 'rgba(255, 141, 0, 0.2)',
      };

      var scores_plot = {
        x: factors,
        y: scores,
        mode: 'lines+markers',
        name: 'Property Score',
        line: {shape: 'hv', color: 'rgba(9, 9, 9, 0.7)'},
        type: 'scatter',
        fill: 'tozeroy',
        fillcolor: 'rgba(1, 1, 1, 0.2)',
      };

      var resident_property = [scores_plot, needs_plot,];

      var layout = {
        title: 'HIIII',
        autosize: false,
        width: 300,
        height: 500,
        margin: {
          t: 100,
          l: 50,
          r: 50,
          b: 90
        },
        /*legend: {
          y: 0.5,
          traceorder: 'reversed',
          font: {size: 16},
          yref: 'paper',
        }*/
        showlegend: false
      };
      unit_counter++;
      console.log("GRAPHING: " + unit_counter + " PROPERTY: " + properties[i].name + " PROFILE: " + profile_counter);

      Plotly.newPlot('unit_' + unit_counter, resident_property, layout);

    });
  });
}

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
