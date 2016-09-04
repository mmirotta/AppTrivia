angular.module('starter.controllers', [])

.controller('JuegoCtrl', function($scope) {})

.controller('PreguntasCtrl', function($scope) {

  var mensajeReferencia = new Firebase('https://trivia-bea4e.firebaseio.com/preguntas/');
    $scope.pregunta = {};
    $scope.pregunta.nombre = "";
    $scope.pregunta.opcion1 = "";
    $scope.pregunta.opcion2 = "";
    $scope.pregunta.opcion3 = "";
    $scope.pregunta.puntaje = "";
    $scope.pregunta.numero = "";

  $scope.Agregar = function(){

    mensajeReferencia.push({pregunta:$scope.pregunta.nombre, opcion1:$scope.pregunta.opcion1, opcion2:$scope.pregunta.opcion2, opcion3:$scope.pregunta.opcion3, puntaje:$scope.pregunta.puntaje, numero:$scope.pregunta.numero});
    $scope.pregunta.nombre = "";
    $scope.pregunta.opcion1 = "";
    $scope.pregunta.opcion2 = "";
    $scope.pregunta.opcion3 = "";
    $scope.pregunta.puntaje = "";
    $scope.pregunta.numero = "";
  };

})

/*.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})*/

.controller('PerfilCtrl', function($scope) {
});
