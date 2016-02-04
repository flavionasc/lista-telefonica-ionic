    angular.module('starter.controllers', [])
        .controller('AppCtrl',function($scope){
            $scope.app = "Lista Telefonica";
            $scope.contatos =[
                
                {nome: "Pedro",telefone: "999999999"},
                {nome: "Maria",telefone: "999977777"},
                {nome: "Joao",telefone: "9999966666"},
                {nome: "Antonio",telefone: "999955555"},
            
            ];
            $scope.adcionarContato = function(contato){
                $scope.contatos.push(angular.copy(contato));
                delete $scope.contato;
            };            
        });