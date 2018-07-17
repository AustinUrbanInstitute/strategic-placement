/**
 * Simple decision tree parser and traversal.
 * @author njmcode
 * @param data - object {
 *     initial: [], (list of choice IDs for the root node)
 *     choices: {}  (keyed object of all possible choices)
 * }
**/
var DecisionTree = function(data) {
  
  this.initial = data.initial;
  this.choices = data.choices;
  
  /* Return an array of choice objects for the root of the tree */
  this.getInitial = function() {
    
    if (!this.initial) throw 'DecisionTree: no initial choice(s) specified';
    return this.getChoices(this.initial);
    
  };
  
  /* Get full choice data by specific id */
  this.getChoice = function(id) {

    if (!(id in this.choices)) return false;
    if (!('id' in this.choices[id])) this.choices[id].id = id;
    return this.choices[id];
    
  };
  
  /* As above, but passing an array of choice IDs */
  this.getChoices = function(idList) {
    if(!idList) return [];
    var list = [];
    for(var i = 0, ln = idList.length; i < ln; i++) {
      var childChoice = this.getChoice(idList[i]);
      list.push(childChoice);
    }
    return list;
    
  };

  /* Get an array of choice data for a parent id */
  this.getChildren = function(parentId) {
    
    if (!(parentId in this.choices)) return false;
    if (!('children' in this.choices[parentId])) return false;
    
    var childIds = this.choices[parentId].children;
    return this.getChoices(childIds);
    
  };
  
  /* Get an array of choice data for the parent(s) of an id */
  this.getParents = function(id) {
    
    var parents = [];
    var node = this.getChoice(id);
    
    while(node.parent) {
      node = this.getChoice(node.parent);
      parents.unshift(node);
    }
    
    return parents;
    
  };
  
  /* Get just an array of ids for the parents of a specific id */
  this.getParentIds = function(id) {
    var parents = this.getParents(id);
    var parentIds = [];
    for(var i = 0, ln = parents.length; i < ln; i++) {
      parentIds.push(parents[i].id);
    }
    return parentIds;
  };
  
  /* Get the 'name' prop for the parent of an id */
  this.getParentName = function(id) {
    var parent = this.getParents(id).pop();
    if(!parent) {
      return false;
    } else {
      return parent.name;
    }
  };
  
  /* Init - insert ids into choice objects, check dups, associate parents, etc */
  this.init = function() {
    
    var idList = [];
    for(var k in this.choices) {
      if(idList.indexOf(k) !== -1) throw 'DecisionTree: duplicate ID "' + k + '" in choice set';
      
      var choice = this.getChoice(k);
      choice.id = k;
      
      var children = this.getChildren(k);
      for(var i = 0; i < children.length; i++) {
        
        var child = children[i];
        if(child.parent) throw 'DecisionTree: tried to assign parent "' + k + '" to child "' + choice.children[i] + '" which already has parent "' + child.parent + '"';
        child.parent = k;
       
      }
      
    }
    
    console.log('init', this.initial, this.choices);
    
  };
  
  this.init();
  
};

/*Weight variables*/
var final_weights = [
    //Main factor weights
    {
        name: 'job_weight',
        weight: 1
    }, 
    {
        name: 'health_weight',
        weight: 1
    },
    {
        name: 'edu_weight',
        weight: 1
    }, 
    {
        name: 'transport_weight',
        weight: 1
    }, 
    {
        name: 'community_weight',
        weight: 1
    },
    
    //Job sub-weights
    {
        name: 'walk_job_weight',
        weight: 1
    }, 
    {
        name: 'bike_job_weight',
        weight: 1
    }, 
    {
        name: 'drive_job_weight',
        weight: 1
    }, 

    //Edu sub weights
    {
        name: 'elementary_weight',
        weight: 1
    }, 
    {
        name: 'middle_weight',
        weight: 1
    }, 
    {
        name: 'high_weight',
        weight: 1
    }, 

    //Community sub weights
    {
        name: 'park_weight',
        weight: 1
    }, 
    {
        name: 'library_weight',
        weight: 1
    }, 
    {
        name: 'grocery_weight',
        weight: 1
    },
]

/*Data*/
var job_tree = {
  initial: ['ask-job'],
  choices: {
    
    // TOP LEVEL, first job Q 
    'ask-job': {
      name: 'Do you have a job or plan on having a job?',
      children: ['job-no', 'job-yes']
    },
    
    // JOB answers
    'job-no': {
      name: 'No',
      endpoint: 'yes',
      next: 'health_concerns_tree',
      //children: ['romantic', 'scary', 'action', 'comedy'], //DO NOTHING, MOVE ONTO HEALTH
      new_weights: [
          {
              weight_name: 'job_weight', 
              new_weight: 0
            }
        ],
      
    },
    'job-yes': {
      //If select yes, ask commute
      name: 'Yes',
      children: ['ask-job-commute']
    },

    //Job commute q's
    
    'ask-job-commute': {
      name: 'How do you plan on commuting to work?',
      children: ['job-bike', 'job-walk', 'job-drive']
    },
    
    //Commute types
    'job-bike': {
      name: 'Bicycle',
      endpoint: 'yes',
      next: 'health_concerns_tree',
      new_weights: [
        {
            weight_name: 'bike_job_weight', 
            new_weight: 1
          },
          {
            weight_name: 'walk_job_weight', 
            new_weight: 0
          },
          {
            weight_name: 'drive_job_weight', 
            new_weight: 0
          },
      ],
    },
    'job-walk': {
      name: 'Walking',
      endpoint: 'yes',
      next: 'health_concerns_tree',
      new_weights: [
        {
            weight_name: 'bike_job_weight', 
            new_weight: 0
          },
          {
            weight_name: 'walk_job_weight', 
            new_weight: 1
          },
          {
            weight_name: 'drive_job_weight', 
            new_weight: 0
          },
      ],
    },
    'job-drive': {
        name: 'Driving',
        endpoint: 'yes',
        next: 'health_concerns_tree',
        new_weights: [
            {
                weight_name: 'bike_job_weight', 
                new_weight: 0
              },
              {
                weight_name: 'walk_job_weight', 
                new_weight: 0
              },
              {
                weight_name: 'drive_job_weight', 
                new_weight: 1
              },
          ],
      },
  }
};

var health_concerns_tree = {
    initial: ['ask-health-concerns'],
    choices: {
      
      //TOP LEVEL, first job Q 
      'ask-health-concerns': {
        name: 'Do you have any disabilities or health concerns?',
        children: ['health-concerns-no', 'health-concerns-yes']
      },
      
      //Health concerns answers
      'health-concerns-no': {
        name: 'No',
        endpoint: 'yes',
        next: 'health_visits_tree'
        
      },

      'health-concerns-yes': {
        //If select yes, ask commute
        name: 'Yes',
        endpoint: 'yes',
        next: 'health_visits_tree',
        new_weights: [
            {
                weight_name: 'health_weight',
                new_weight: 1000, 
            }
        ],
      },
    }  
  };

  var health_visits_tree = {
    initial: ['ask-health-visits'],
    choices: {
      
      //TOP LEVEL, first job Q 
      'ask-health-visits': {
        name: 'How often to you visit a doctor?', 
        children: ['health-visits1', 'health-visits2']
      },
      
      //Health concerns answers
      'health-visits1': {
        name: 'Less than 1 times a month',
        endpoint: 'yes',
        next: 'edu_tree'
        
      },

      'health-visits2': {
        name: 'At least 2 times a month',
        endpoint: 'yes',
        next: 'edu_tree',
        new_weights: [
            {
                weight_name: 'health_weight',
                new_weight: 1000, //1000 = special code to just add 1 to current weight
            }
        ],
      },
    }  
  };

  var edu_tree = {
    initial: ['ask-number-kids'],
    choices: {
      
      //TOP LEVEL, first job Q 
      'ask-number-kids': {
        name: 'Do you have any children?',
        children: ['kids-no', 'kids-yes']
      },
      
      //kids num answers
      'kids-no': {
        name: 'No',
        endpoint: 'yes',
        new_weights: [
            {
                weight_name: 'edu_weight',
                new_weight: 0, 
            }
        ],
        next: 'transport_tree'
        
      },

      'kids-yes': {
        name: 'Yes',
        children: ['ask-kids-edu']
      },
      'ask-kids-edu': {
        name: 'What schools will they be attending?',
        children: ['elementary', 'middle', 'high', 'mult-schools']
      },

      'elementary': {
        name: 'Elementary school',
        endpoint: 'yes',
        new_weights: [
            {
                weight_name: 'elementary_weight',
                new_weight: 1, 
            },
            {
                weight_name: 'middle_weight',
                new_weight: 0, 
            },
            {
                weight_name: 'high_weight',
                new_weight: 0, 
            },
        ],
        next: 'transport_tree'
      },
      'middle': {
        name: 'Middle school',
        endpoint: 'yes',
        new_weights: [
            {
                weight_name: 'elementary_weight',
                new_weight: 0, 
            },
            {
                weight_name: 'middle_weight',
                new_weight: 1, 
            },
            {
                weight_name: 'high_weight',
                new_weight: 0, 
            },
        ],
        next: 'transport_tree'
      },
      'high': {
        name: 'High school',
        endpoint: 'yes',
        new_weights: [
            {
                weight_name: 'elementary_weight',
                new_weight: 0, 
            },
            {
                weight_name: 'middle_weight',
                new_weight: 0, 
            },
            {
                weight_name: 'high_weight',
                new_weight: 1, 
            },
        ],
        next: 'transport_tree'
      },
      'mult-schools': {
        name: 'Multiple schools',
        endpoint: 'yes',
        new_weights: [
            {
                weight_name: 'elementary_weight',
                new_weight: 100/3, 
            },
            {
                weight_name: 'middle_weight',
                new_weight: 100/3, 
            },
            {
                weight_name: 'high_weight',
                new_weight: 100/3, 
            },
        ],
        next: 'transport_tree'
      }
    }  
  };

  var transport_tree = {
    initial: ['ask-transport'],
    choices: {
      
      //TOP LEVEL, first job Q 
      'ask-transport': {
        name: 'How do you plan on getting around?',
        children: ['walk', 'bike', 'public-transit', 'car']
      },
      
      //transit types
      'walk': {
        name: 'Walk',
        endpoint: 'yes',
        new_weights: [
            {
                weight_name: 'walk_weight',
                new_weight: 1, 
            },
            {
                weight_name: 'bike_weight',
                new_weight: 0, 
            },
            {
                weight_name: 'transit_weight',
                new_weight: 0, 
            },
        ],
        next: 'park_tree'
        
      },
      'bike': {
        name: 'Bicycle',
        endpoint: 'yes',
        new_weights: [
            {
                weight_name: 'walk_weight',
                new_weight: 0, 
            },
            {
                weight_name: 'bike_weight',
                new_weight: 1, 
            },
            {
                weight_name: 'transit_weight',
                new_weight: 0, 
            },
        ],
        next: 'park_tree'
      },
      'public-transit': {
        name: 'Public transit',
        endpoint: 'yes',
        new_weights: [
            {
                weight_name: 'walk_weight',
                new_weight: 0, 
            },
            {
                weight_name: 'bike_weight',
                new_weight: 0, 
            },
            {
                weight_name: 'transit_weight',
                new_weight: 1, 
            },
        ],
        next: 'park_tree'
      },
      'car': {
        name: 'Car',
        endpoint: 'yes',
        new_weights: [
            {
                weight_name: 'transport_weight',
                new_weight: 0, 
            }
        ],
        next: 'park_tree'
      }
    }  
  };

  var park_tree = {
    initial: ['ask-park'],
    choices: {
      
      //TOP LEVEL, first job Q 
      'ask-park': {
        name: 'How many times do you visit the park per week?', 
        children: ['park-visit1', 'park-visit2', 'park-visit3']
      },
      
      //Health concerns answers
      'park-visit1': {
        name: '0 times a week',
        endpoint: 'yes',
        next: 'library_tree',
        new_weights: [
            {
                weight_name: 'park_weight',
                new_weight: 0, 
            }
        ],
      },

      'park-visit2': {
        name: '1-2 times a week',
        endpoint: 'yes',
        next: 'library_tree',
        new_weights: [
            {
                weight_name: 'park_weight',
                new_weight: 1, 
            }
        ],
      },

      'park-visit3': {
        name: 'At least 3 times a week',
        endpoint: 'yes',
        next: 'library_tree',
        new_weights: [
            {
                weight_name: 'park_weight',
                new_weight: 2, 
            }
        ],
      }
    }  
  };

  var library_tree = {
    initial: ['ask-library'],
    choices: {
      
      //TOP LEVEL, first job Q 
      'ask-park': {
        name: 'How many times do you visit the library per week?', 
        children: ['library-visit1', 'library-visit2', 'library-visit3']
      },
      
      //Health concerns answers
      'library-visit1': {
        name: '0 times a week',
        endpoint: 'yes',
        next: 'grocery_tree',
        new_weights: [
            {
                weight_name: 'library_weight',
                new_weight: 0, 
            }
        ],
      },

      'library-visit2': {
        name: '1-2 times a week',
        endpoint: 'yes',
        next: 'grocery_tree',
        new_weights: [
            {
                weight_name: 'library_weight',
                new_weight: 1, 
            }
        ],
      },

      'library-visit3': {
        name: 'At least 3 times a week',
        endpoint: 'yes',
        next: 'grocery_tree',
        new_weights: [
            {
                weight_name: 'library_weight',
                new_weight: 2, 
            }
        ],
      }
    }  
  };

var grocery_tree = {
    initial: ['ask-grocery'],
    choices: {
      
      //TOP LEVEL, first job Q 
      'ask-grocery': {
        name: 'How many times do you do grocery shopping per week?', 
        children: ['grocery-visit1', 'grocery-visit2', 'grocery-visit3']
      },
      
      //Health concerns answers
      'grocery-visit1': {
        name: '0 times a week',
        endpoint: 'yes',
        next: 'finish_quiz',
        new_weights: [
            {
                weight_name: 'grocery_weight',
                new_weight: 0, 
            }
        ],
      },

      'grocery-visit2': {
        name: '1-2 times a week',
        endpoint: 'yes',
        next: 'finish_quiz',
        new_weights: [
            {
                weight_name: 'grocery_weight',
                new_weight: 1, 
            }
        ],
      },

      'grocery-visit3': {
        name: 'At least 3 times a week',
        endpoint: 'yes',
        next: 'finish_quiz',
        new_weights: [
            {
                weight_name: 'grocery_weight',
                new_weight: 2, 
            }
        ],
      }
    }  
  };

/** TEST CODE **/
$(function() {
  
  var tree = new DecisionTree(job_tree);
  var $list = $('#choices');
  var $title = $('h1');
  
  var current_id = null;
  
  var renderList = function(items) {
    
    var title = tree.getParentName(items[0].id);
    if(title) {
      $title.text(title);
    } else {
      $title.text('Do what?');
    }
    
    $list.empty();
    for(var i = 0; i < items.length; i++) {
      var item = items[i];
      $list.append('<li><a href="#" data-choice="' + item.id + '">' + item.name + '</a></li>');
    }
  };
  
  //Set up questions
  var _doInitial = function() {
      var initData = tree.getInitial();
      current_id = null;
      renderList(initData);
  };

  var _nextQuestions = function(nextSet) {
    if(nextSet == 'health_concerns_tree'){
        tree = new DecisionTree(health_concerns_tree);
    } else if(nextSet == 'health_visits_tree'){
        tree = new DecisionTree(health_visits_tree);
    } else if(nextSet == 'edu_tree'){
        tree = new DecisionTree(edu_tree);
    } else if(nextSet == 'transport_tree'){
        tree = new DecisionTree(transport_tree);
    } else if(nextSet == 'park_tree'){
        tree = new DecisionTree(park_tree);
    } else if(nextSet == 'library_tree'){
        tree = new DecisionTree(library_tree);
    } else if(nextSet == 'grocery_tree'){
        tree = new DecisionTree(grocery_tree);
    } else if(nextSet == 'finish_quiz'){
        _finishQuiz;
    } 
    var initData = tree.getInitial();
    current_id = null;
    renderList(initData);
};
  
//On click
$(document).on('click', '#choices a', function(e) {
    e.preventDefault();
    var choiceId = $(this).data('choice');
    console.log('clicked', choiceId);
    
    var kids = tree.getChildren(choiceId);
    if(kids) {
      current_id = choiceId;
      renderList(kids);
    }

    //Check re-weighing
    if(tree.getChoice(choiceId).new_weights != null){
        console.log("RE-WEIGH TIME!");
        _reweigh(tree.getChoice(choiceId).new_weights);
    }

    //Check if endpoint
    var check_endpoint = tree.getChoice(choiceId).endpoint;
    if(check_endpoint == 'yes'){
        console.log("ENDPOINT REACHED");

         //Load next set questions
          var nextTree = tree.getChoice(choiceId).next;
          _nextQuestions(nextTree);
          console.log("MOVE ON TO: " + nextTree);
    }
  });

  //Re-weight function, take in array of new weights, update final weight array
  var _reweigh = function(new_weights){
    for(var i = 0; i < new_weights.length; i++){
        var temp = new_weights[i];
        for(var x = 0; x < final_weights.length; x++){
            if(temp.weight_name == final_weights[x].name){
                //Check for special weight code 1000
                if(temp.new_weight == 1000){
                    final_weights[x].weight++;
                } else{
                    final_weights[x].weight = temp.new_weight;
                }
                console.log(final_weights[x].name + " RE WEIGH TO " + final_weights[x].weight);
            }
        }
    }
  }

  
  $('#back').on('click', function(e) {
    e.preventDefault();
    if(!current_id) return false;
    console.log('back button clicked', current_id);
    
    var parents = tree.getParents(current_id);
   
    if(parents.length > 0) {
      var prev_node = parents.pop();
      current_id = prev_node.id;
      renderList(tree.getChildren(prev_node.id));
    } else {
      _doInitial();
    }
    
  });
  
  $('#go').on('click', function(e) {
    e.preventDefault();
    
    var cid = $('#show-id').val();
    if(!cid || !(cid in data,choices)) return false;
    console.log('show parents for', cid);
    
    var parentData = tree.getParents(cid);
    $('#results').val(JSON.stringify(parentData, null, 4));
    
  });

  var _finishQuiz = function(){
      
  }

  _doInitial();

  
});

