var app = angular.module("myApp", []);

app.controller('MainController', ['$scope', function($scope) {
  $scope.counter = {    pvs: 0,
                        ps: 0,
                        pm: 0,
                        pp: 0,
                        ba: 0,
                        bs: 0,
                        bp: 0 };

  $scope.score = {  pvs1: [0, 0, 0, 0],
                    ps1: [0, 0, 0, 0],
                    ps2: [0, 0, 0, 0],
                    ps3: [0, 0, 0, 0],
                    ps4: [0, 0, 0, 0],
                    pm1: [0, 0, 0, 0],
                    pm2: [0, 0, 0, 0],
                    pm3: [0, 0, 0, 0],
                    pm4: [0, 0, 0, 0],
                    pm5: [0, 0, 0, 0],
                    pm6: [0, 0, 0, 0],
                    pp1: [0, 0, 0, 0],
                    pp2: [0, 0, 0, 0],
                    pp3: [0, 0, 0, 0],
                    pp4: [0, 0, 0, 0],
                    pp5: [0, 0, 0, 0],
                    ba1: [0, 0, 0],
                    bs1: [0, 0, 0],
                    bs2: [0, 0, 0],
                    bs3: [0, 0, 0],
                    bs4: [0, 0, 0],
                    bp1: [0, 0, 0],
                    bp2: [0, 0, 0],
                    bp3: [0, 0, 0],
                    bp4: [0, 0, 0],
                    bp5: [0, 0, 0],
                    bp6: [0, 0, 0],
                    bp7: [0, 0, 0]
                }

  $scope.section = [
  	{   header: 'Variant type and gene variant profile',
    	criteria: [['PVS1', 'Description', ['PVS1', 'Not applied']],
    	           ['PM4', 'Description', ['PM4', 'Not applied']],
    	           ['PP2', 'Description', ['PP2', 'Not applied']],
    	           ['BP1', 'Description', ['BP1', 'Not applied']],
    	           ['BP3', 'Description', ['BP3', 'Not applied']]]
  	},
  	{   header: 'Frequency data',
    	criteria: [['PS4', 'Description', ['PS4', 'Not applied']],
    	           ['PM2', 'Description', ['PM2', 'Not applied']],
    	           ['BA1', 'Description', ['BA1', 'Not applied']],
    	           ['BS1', 'Description', ['BS1', 'Not applied']],
    	           ['BS2', 'Description', ['BS2', 'Not applied']]]
  	},
  	{   header: 'Review of literature and databases',
    	criteria: [['PS1', 'Description', ['PS1', 'Not applied']],
    	           ['PM1', 'Description', ['PM1', 'Not applied']],
    	           ['PM5', 'Description', ['PM5', 'Not applied']],
    	           ['PP5', 'Description', ['PP5', 'Not applied']],
    	           ['BP6', 'Description', ['BP6', 'Not applied']]]
  	},
  	{   header: 'Functional studies',
    	criteria: [['PS3', 'Description', ['PS3', 'Not applied']],
    	           ['BS3', 'Description', ['BS3', 'Not applied']]]
  	},
  	{   header: 'Computer predictions',
    	criteria: [['PP3', 'Description', ['PP3', 'Not applied']],
    	           ['BP4', 'Description', ['BP4', 'Not applied']],
    	           ['BP7', 'Description', ['BP7', 'Not applied']]]
  	},
  	{   header: 'De novo variants',
    	criteria: [['PS2', 'Description', ['PS2', 'Not applied']],
    	           ['PM6', 'Description', ['PM6', 'Not applied']]]
  	},
  	{   header: 'Phenotype and family history information',
    	criteria: [['PP1', 'Description', ['PP1', 'Not applied']],
    	           ['PP4', 'Description', ['PP4', 'Not applied']],
    	           ['BS4', 'Description', ['BS4', 'Not applied']]]
  	},
  	{   header: 'Multiple variants identified in a patient',
    	criteria: [['PM3', 'Description', ['PM3', 'Not applied']],
    	           ['BP2', 'Description', ['BP2', 'Not applied']],
    	           ['BP5', 'Description', ['BP5', 'Not applied']]]
  	}
  	];
}]);
