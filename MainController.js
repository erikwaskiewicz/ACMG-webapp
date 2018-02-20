var app = angular.module("myApp", []);

app.controller('MainController', ['$scope', function($scope) {
  $scope.summary = ['PVS', 'PS', 'PM', 'PP', 'BA', 'BS', 'BM', 'BP'];

  $scope.counter = [{ pvs: 0,
                    ps: 0,
                    pm: 0,
                    pp: 0,
                    ba: '0',
                    bs: 0,
                    bm: 0,
                    bp: 0 }];
  $scope.section = [
  	{   header: 'Variant type and gene variant profile',
    	criteria: [['PVS1', 'Description'],
    	           ['PM4', 'Description'],
    	           ['PP2', 'Description'],
    	           ['BP1', 'Description'],
    	           ['BP3', 'Description']]
  	},
  	{   header: 'Frequency data',
    	criteria: [['PS4', 'Description'],
    	           ['PM2', 'Description'],
    	           ['BA1', 'Description'],
    	           ['BS1', 'Description'],
    	           ['BS2', 'Description']]
  	},
  	{   header: 'Review of literature and databases',
    	criteria: [['PS1', 'Description'],
    	           ['PM1', 'Description'],
    	           ['PM5', 'Description'],
    	           ['PP5', 'Description'],
    	           ['BP6', 'Description']]
  	},
  	{   header: 'Functional studies',
    	criteria: [['PS3', 'Description'],
    	           ['BS3', 'Description']]
  	},
  	{   header: 'Computer predictions',
    	criteria: [['PP3', 'Description'],
    	           ['BP4', 'Description'],
    	           ['BP7', 'Description']]
  	},
  	{   header: 'De novo variants',
    	criteria: [['PS2', 'Description'],
    	           ['PM6', 'Description']]
  	},
  	{   header: 'Phenotype and family history information',
    	criteria: [['PP1', 'Description'],
    	           ['PP4', 'Description'],
    	           ['BS4', 'Description']]
  	},
  	{   header: 'Multiple variants identified in a patient',
    	criteria: [['PM3', 'Description'],
    	           ['BP2', 'Description'],
    	           ['BP5', 'Description']]
  	}
  	];
}]);
