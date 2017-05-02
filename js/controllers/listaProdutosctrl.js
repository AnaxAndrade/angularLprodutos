angular.module("listaProdutos").controller("listaProdutosctrl", function ($scope, $http) {
		var self = this;
		$scope.tt = "Lista De Produtos";
		$scope.produtos=[];
		var carregarProdutos = function (){
			$http.get('http://anax.online:1337').then( function (response){
				$scope.produtos = response.data;
			});
		};

		$scope.ordenarPor = function (campo){
			$scope.criterioOrdenacao = campo;
			$scope.inverterOrdenacao = !$scope.inverterOrdenacao;
		};
		carregarProdutos();
	}); 

	/*angular.module("listaProdutos").component("listaProdutos",{
		templateUrl: 'view/listaProdutos.html', 
		controller:  function listaProdutosctrl($scope, $http){
			var self=this;
			$scope.tt="Lista De Produtos";

			var carregarProdutos = function (){
			$http.get('http://anax.online:1337').then( function (response){
				$scope.produtos = response.data;
			});
		};
			$scope.ordenarPor = function (campo){
			$scope.criterioOrdenacao = campo;
			$scope.inverterOrdenacao = !$scope.inverterOrdenacao;
		};
		carregarProdutos();
		 }
		 }); */
