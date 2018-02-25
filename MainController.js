var app = angular.module("myApp", []);

app.controller('MainController', ['$scope', function($scope) {
  $scope.classification = "vus2";

  $scope.classify = function() {
                        /* VUS - mixed */
                        if (($scope.path_vs() + $scope.path_s() + $scope.path_m() + $scope.path_p()) > 0 &&
                               ($scope.benign_a() + $scope.benign_s() + $scope.benign_p() > 0)) {
                            $scope.classification = "vus1"
                        /* pathogenic */
                        } else if ($scope.path_vs() === 1 && $scope.path_s() >= 1) {
                            $scope.classification = "pathogenic"
                        } else if ($scope.path_vs() === 1 && $scope.path_m() >= 2) {
                            $scope.classification = "pathogenic"
                        } else if ($scope.path_vs() === 1 && $scope.path_m() >= 1 && $scope.path_p() >= 1) {
                            $scope.classification = "pathogenic"
                        } else if ($scope.path_vs() === 1 && $scope.path_p() >= 2) {
                            $scope.classification = "pathogenic"
                        } else if ($scope.path_s() >= 2) {
                            $scope.classification = "pathogenic"
                        } else if ($scope.path_s() === 1 && $scope.path_m() >= 3) {
                            $scope.classification = "pathogenic"
                        } else if ($scope.path_s() === 1 && $scope.path_m() >= 2 && $scope.path_p() >=2) {
                            $scope.classification = "pathogenic"
                        } else if ($scope.path_s() === 1 && $scope.path_m() >= 1 && $scope.path_p() >=4) {
                            $scope.classification = "pathogenic"
                        /* likely pathogenic */
                        } else if ($scope.path_vs() === 1 && $scope.path_m() === 1) {
                            $scope.classification = "likely_pathogenic"
                        } else if ($scope.path_s() === 1 && $scope.path_m() === 1) {
                            $scope.classification = "likely_pathogenic"
                        } else if ($scope.path_s() === 1 && $scope.path_m() === 2) {
                            $scope.classification = "likely_pathogenic"
                        } else if ($scope.path_s() === 1 && $scope.path_p() >= 2) {
                            $scope.classification = "likely_pathogenic"
                        } else if ($scope.path_m() >= 3) {
                            $scope.classification = "likely_pathogenic"
                        } else if ($scope.path_m() === 2 && $scope.path_p() >= 2) {
                            $scope.classification = "likely_pathogenic"
                        } else if ($scope.path_m() === 1 && $scope.path_p() >= 4) {
                            $scope.classification = "likely_pathogenic"
                        /* benign */
                        } else if ($scope.benign_a() === 1) {
                            $scope.classification = "benign"
                        } else if ($scope.benign_s() >= 2) {
                            $scope.classification = "benign"
                        /* likely benign */
                        } else if ($scope.benign_s() === 1 && $scope.benign_p() === 1) {
                            $scope.classification = "likely_benign"
                        } else if ($scope.benign_p() >= 2) {
                            $scope.classification = "likely_benign"
                        /* VUS - not met criteria */
                        } else {$scope.classification = "vus2"
                        }
                        };
/*
    $scope.classify = function() {
                        $scope.classification = "vus";
                        };
*/
  $scope.path_vs = function() {
                       return (parseInt($scope.pvs1[0]) +
                               parseInt($scope.ps1[0]) +
                               parseInt($scope.ps2[0]) +
                               parseInt($scope.ps3[0]) +
                               parseInt($scope.ps4[0]) +
                               parseInt($scope.pm1[0]) +
                               parseInt($scope.pm2[0]) +
                               parseInt($scope.pm3[0]) +
                               parseInt($scope.pm4[0]) +
                               parseInt($scope.pm5[0]) +
                               parseInt($scope.pm6[0]) +
                               parseInt($scope.pp1[0]) +
                               parseInt($scope.pp2[0]) +
                               parseInt($scope.pp3[0]) +
                               parseInt($scope.pp4[0]) +
                               parseInt($scope.pp5[0])
                               );
                       };

  $scope.path_s = function() {
                       return (parseInt($scope.pvs1[1]) +
                               parseInt($scope.ps1[1]) +
                               parseInt($scope.ps2[1]) +
                               parseInt($scope.ps3[1]) +
                               parseInt($scope.ps4[1]) +
                               parseInt($scope.pm1[1]) +
                               parseInt($scope.pm2[1]) +
                               parseInt($scope.pm3[1]) +
                               parseInt($scope.pm4[1]) +
                               parseInt($scope.pm5[1]) +
                               parseInt($scope.pm6[1]) +
                               parseInt($scope.pp1[1]) +
                               parseInt($scope.pp2[1]) +
                               parseInt($scope.pp3[1]) +
                               parseInt($scope.pp4[1]) +
                               parseInt($scope.pp5[1])
                               );
                       };

  $scope.path_m = function() {
                       return (parseInt($scope.pvs1[2]) +
                               parseInt($scope.ps1[2]) +
                               parseInt($scope.ps2[2]) +
                               parseInt($scope.ps3[2]) +
                               parseInt($scope.ps4[2]) +
                               parseInt($scope.pm1[2]) +
                               parseInt($scope.pm2[2]) +
                               parseInt($scope.pm3[2]) +
                               parseInt($scope.pm4[2]) +
                               parseInt($scope.pm5[2]) +
                               parseInt($scope.pm6[2]) +
                               parseInt($scope.pp1[2]) +
                               parseInt($scope.pp2[2]) +
                               parseInt($scope.pp3[2]) +
                               parseInt($scope.pp4[2]) +
                               parseInt($scope.pp5[2])
                               );
                       };

  $scope.path_p = function() {
                       return (parseInt($scope.pvs1[3]) +
                               parseInt($scope.ps1[3]) +
                               parseInt($scope.ps2[3]) +
                               parseInt($scope.ps3[3]) +
                               parseInt($scope.ps4[3]) +
                               parseInt($scope.pm1[3]) +
                               parseInt($scope.pm2[3]) +
                               parseInt($scope.pm3[3]) +
                               parseInt($scope.pm4[3]) +
                               parseInt($scope.pm5[3]) +
                               parseInt($scope.pm6[3]) +
                               parseInt($scope.pp1[3]) +
                               parseInt($scope.pp2[3]) +
                               parseInt($scope.pp3[3]) +
                               parseInt($scope.pp4[3]) +
                               parseInt($scope.pp5[3])
                               );
                       };

    $scope.benign_a = function() {
                       return (parseInt($scope.ba1[0]) +
                               parseInt($scope.bs1[0]) +
                               parseInt($scope.bs2[0]) +
                               parseInt($scope.bs3[0]) +
                               parseInt($scope.bs4[0]) +
                               parseInt($scope.bp1[0]) +
                               parseInt($scope.bp2[0]) +
                               parseInt($scope.bp3[0]) +
                               parseInt($scope.bp4[0]) +
                               parseInt($scope.bp5[0]) +
                               parseInt($scope.bp6[0]) +
                               parseInt($scope.bp7[0])
                               );
                       };

  $scope.benign_s = function() {
                       return (parseInt($scope.ba1[1]) +
                               parseInt($scope.bs1[1]) +
                               parseInt($scope.bs2[1]) +
                               parseInt($scope.bs3[1]) +
                               parseInt($scope.bs4[1]) +
                               parseInt($scope.bp1[1]) +
                               parseInt($scope.bp2[1]) +
                               parseInt($scope.bp3[1]) +
                               parseInt($scope.bp4[1]) +
                               parseInt($scope.bp5[1]) +
                               parseInt($scope.bp6[1]) +
                               parseInt($scope.bp7[1])
                               );
                       };

$scope.benign_p = function() {
                       return (parseInt($scope.ba1[2]) +
                               parseInt($scope.bs1[2]) +
                               parseInt($scope.bs2[2]) +
                               parseInt($scope.bs3[2]) +
                               parseInt($scope.bs4[2]) +
                               parseInt($scope.bp1[2]) +
                               parseInt($scope.bp2[2]) +
                               parseInt($scope.bp3[2]) +
                               parseInt($scope.bp4[2]) +
                               parseInt($scope.bp5[2]) +
                               parseInt($scope.bp6[2]) +
                               parseInt($scope.bp7[2])
                               );
                       };

/* PVS1 */
  $scope.pvs1 = [0,0,0,0];
  $scope.pvs1_apply = function() {
        $scope.pvs1 = [1,0,0,0];
        $scope.classify();
        };
  $scope.pvs1_notapplied = function() {
        $scope.pvs1 = [0,0,0,0];
        $scope.classify();
        };

/* PS1 */
  $scope.ps1 = [0,0,0,0];
  $scope.ps1_apply = function() {
        $scope.ps1 = [0,1,0,0];
        $scope.classify();
        };
  $scope.ps1_notapplied = function() {
        $scope.ps1 = [0,0,0,0];
        $scope.classify();
        };

/* PS2 */
  $scope.ps2 = [0,0,0,0];
  $scope.ps2_apply = function() {
        $scope.ps2 = [0,1,0,0];
        $scope.classify();
        };
  $scope.ps2_notapplied = function() {
        $scope.ps2 = [0,0,0,0];
        $scope.classify();
        };

/* PS3 */
  $scope.ps3 = [0,0,0,0];
  $scope.ps3_apply = function() {
        $scope.ps3 = [0,1,0,0];
        $scope.classify();
        };
  $scope.ps3_notapplied = function() {
        $scope.ps3 = [0,0,0,0];
        $scope.classify();
        };

/* PS4 */
  $scope.ps4 = [0,0,0,0];
  $scope.ps4_apply = function() {
        $scope.ps4 = [0,1,0,0];
        $scope.classify();
        };
  $scope.ps4_notapplied = function() {
        $scope.ps4 = [0,0,0,0];
        $scope.classify();
        };

/* PM1 */
  $scope.pm1 = [0,0,0,0];
  $scope.pm1_apply = function() {
        $scope.pm1 = [0,0,1,0];
        $scope.classify();
        };
  $scope.pm1_notapplied = function() {
        $scope.pm1 = [0,0,0,0];
        $scope.classify();
        };

/* PM2 */
  $scope.pm2 = [0,0,0,0];
  $scope.pm2_apply = function() {
        $scope.pm2 = [0,0,1,0];
        $scope.classify();
        };
  $scope.pm2_notapplied = function() {
        $scope.pm2 = [0,0,0,0];
        $scope.classify();
        };

/* PM3 */
  $scope.pm3 = [0,0,0,0];
  $scope.pm3_apply = function() {
        $scope.pm3 = [0,0,1,0];
        $scope.classify();
        };
  $scope.pm3_notapplied = function() {
        $scope.pm3 = [0,0,0,0];
        $scope.classify();
        };

/* PM4 */
  $scope.pm4 = [0,0,0,0];
  $scope.pm4_apply = function() {
        $scope.pm4 = [0,0,1,0];
        $scope.classify();
        };
  $scope.pm4_notapplied = function() {
        $scope.pm4 = [0,0,0,0];
        $scope.classify();
        };

/* PM5 */
  $scope.pm5 = [0,0,0,0];
  $scope.pm5_apply = function() {
        $scope.pm5 = [0,0,1,0];
        $scope.classify();
        };
  $scope.pm5_notapplied = function() {
        $scope.pm5 = [0,0,0,0];
        $scope.classify();
        };

/* PM6 */
  $scope.pm6 = [0,0,0,0];
  $scope.pm6_apply = function() {
        $scope.pm6 = [0,0,1,0];
        $scope.classify();
        };
  $scope.pm6_notapplied = function() {
        $scope.pm6 = [0,0,0,0];
        $scope.classify();
        };

/* PP1 */
  $scope.pp1 = [0,0,0,0];
  $scope.pp1_apply = function() {
        $scope.pp1 = [0,0,0,1];
        $scope.classify();
        };
  $scope.pp1_notapplied = function() {
        $scope.pp1 = [0,0,0,0];
        $scope.classify();
        };

/* PP2 */
  $scope.pp2 = [0,0,0,0];
  $scope.pp2_apply = function() {
        $scope.pp2 = [0,0,0,1];
        $scope.classify();
        };
  $scope.pp2_notapplied = function() {
        $scope.pp2 = [0,0,0,0];
        $scope.classify();
        };

/* PP3 */
  $scope.pp3 = [0,0,0,0];
  $scope.pp3_apply = function() {
        $scope.pp3 = [0,0,0,1];
        $scope.classify();
        };
  $scope.pp3_notapplied = function() {
        $scope.pp3 = [0,0,0,0];
        $scope.classify();
        };

/* PP4 */
  $scope.pp4 = [0,0,0,0];
  $scope.pp4_apply = function() {
        $scope.pp4 = [0,0,0,1];
        $scope.classify();
        };
  $scope.pp4_notapplied = function() {
        $scope.pp4 = [0,0,0,0];
        $scope.classify();
        };

/* PP5 */
  $scope.pp5 = [0,0,0,0];
  $scope.pp5_apply = function() {
        $scope.pp5 = [0,0,0,1];
        $scope.classify();
        };
  $scope.pp5_notapplied = function() {
        $scope.pp5 = [0,0,0,0];
        $scope.classify();
        };

/* BA1 */
  $scope.ba1 = [0,0,0];
  $scope.ba1_apply = function() {
        $scope.ba1 = [1,0,0];
        $scope.classify();
        };
  $scope.ba1_notapplied = function() {
        $scope.ba1 = [0,0,0];
        $scope.classify();
        };

/* BS1 */
  $scope.bs1 = [0,0,0];
  $scope.bs1_apply = function() {
        $scope.bs1 = [0,1,0];
        $scope.classify();
        };
  $scope.bs1_notapplied = function() {
        $scope.bs1 = [0,0,0];
        $scope.classify();
        };

/* BS2 */
  $scope.bs2 = [0,0,0];
  $scope.bs2_apply = function() {
        $scope.bs2 = [0,1,0];
        $scope.classify();
        };
  $scope.bs2_notapplied = function() {
        $scope.bs2 = [0,0,0];
        $scope.classify();
        };

/* BS3 */
  $scope.bs3 = [0,0,0];
  $scope.bs3_apply = function() {
        $scope.bs3 = [0,1,0];
        $scope.classify();
        };
  $scope.bs3_notapplied = function() {
        $scope.bs3 = [0,0,0];
        $scope.classify();
        };

/* BS4 */
  $scope.bs4 = [0,0,0];
  $scope.bs4_apply = function() {
        $scope.bs4 = [0,1,0];
        $scope.classify();
        };
  $scope.bs4_notapplied = function() {
        $scope.bs4 = [0,0,0];
        $scope.classify();
        };

/* BP1 */
  $scope.bp1 = [0,0,0];
  $scope.bp1_apply = function() {
        $scope.bp1 = [0,0,1];
        $scope.classify();
        };
  $scope.bp1_notapplied = function() {
        $scope.bp1 = [0,0,0];
        $scope.classify();
        };

/* BP2 */
  $scope.bp2 = [0,0,0];
  $scope.bp2_apply = function() {
        $scope.bp2 = [0,0,1];
        $scope.classify();
        };
  $scope.bp2_notapplied = function() {
        $scope.bp2 = [0,0,0];
        $scope.classify();
        };

/* BP3 */
  $scope.bp3 = [0,0,0];
  $scope.bp3_apply = function() {
        $scope.bp3 = [0,0,1];
        $scope.classify();
        };
  $scope.bp3_notapplied = function() {
        $scope.bp3 = [0,0,0];
        $scope.classify();
        };

/* BP4 */
  $scope.bp4 = [0,0,0];
  $scope.bp4_apply = function() {
        $scope.bp4 = [0,0,1];
        $scope.classify();
        };
  $scope.bp4_notapplied = function() {
        $scope.bp4 = [0,0,0];
        $scope.classify();
        };

/* BP5 */
  $scope.bp5 = [0,0,0];
  $scope.bp5_apply = function() {
        $scope.bp5 = [0,0,1];
        $scope.classify();
        };
  $scope.bp5_notapplied = function() {
        $scope.bp5 = [0,0,0];
        $scope.classify();
        };

/* BP6 */
  $scope.bp6 = [0,0,0];
  $scope.bp6_apply = function() {
        $scope.bp6 = [0,0,1];
        $scope.classify();
        };
  $scope.bp6_notapplied = function() {
        $scope.bp6 = [0,0,0];
        $scope.classify();
        };

/* BP7 */
  $scope.bp7 = [0,0,0];
  $scope.bp7_apply = function() {
        $scope.bp7 = [0,0,1];
        $scope.classify();
        };
  $scope.bp7_notapplied = function() {
        $scope.bp7 = [0,0,0];
        $scope.classify();
        };

}]);
