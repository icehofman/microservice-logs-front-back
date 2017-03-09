angular.module("quotesMaker", []);
		angular.module("quotesMaker").controller("quotesMakerCtrl", function ($scope, $http, $location){
			$scope.app = "Get version!";
			$scope.quote = "rest-api version"
			$scope.getQuote = function(){
				var host = "localhost";
				if($location.host()) host = $location.host();
				var url = $location.protocol() + "://" + host + ":8000/version";
				console.log(url);
				$http.get(url).then(
					function successCallback(response){                        
						$scope.message = "name: " + response.data.name + " version: " + response.data.version;
						console.log($scope.quote);
					},
					function errorCallback(response){                        
						$scope.message = "Error getting version: (Status = " + response.status + ")" ;
                        console.log($scope.quote);
					});
			};
		});