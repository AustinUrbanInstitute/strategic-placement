for(var i = 0; i < 2; i++){

//8th element repeat of last, necessary for this to work!!!
var factors = ['Safety', 'Edu', 'Health', 'Jobs', 'Quiet', 'Transport', 'Pie', ' '];
var needs_plot = {
  x: factors,
  y: [100, 25, 60, 18, 26, 90, 100, 100],
  mode: 'lines+markers',
  name: 'Resident Need',
  line: {shape: 'hv'},
  type: 'scatter'
};

var scores_plot = {
  x: factors,
  y: [100, 75, 100, 50, 100, 50, 75, 75],
  mode: 'lines+markers',
  name: 'Property Score',
  line: {shape: 'hv'},
  type: 'scatter'
};

var resident_property = [trace5, trace6];

var layout = {legend: {
    y: 0.5,
    traceorder: 'reversed',
    font: {size: 16},
    yref: 'paper'
}};

Plotly.newPlot('myDiv' + i, resident_property, layout);
}
