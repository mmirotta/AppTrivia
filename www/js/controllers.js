angular.module('starter.controllers', [])

.controller('IngresoCtrl', function($scope, $state) {
  $scope.usuario = {};
  $scope.usuario.nombre = "";

  $scope.Ingresar = function(){

    var param = JSON.stringify($scope.usuario);
    $state.go('tab.juego', {usuario:param});
  
  };
})

.controller('JuegoCtrl', function($scope, $state, $stateParams) {

  //$scope.usuario = $stateParams;

  $scope.usuario = "Matias";

  var mensajeReferencia = new Firebase('https://trivia-bea4e.firebaseio.com/preguntas/');
  $scope.preguntasElegidas = [];
  $scope.pregunta = {};
  $scope.preguntasCorrectas = "0";
  $scope.preguntasIncorrectas = "0";
  $scope.preguntasTotal = "0";
  $scope.numeroRandom = Math.floor((Math.random() * 10) + 1);
 
  mensajeReferencia.on('child_added', function (snapshot) {
    var preguntas = snapshot.val();
    
    if (preguntas.numero == $scope.numeroRandom){
      $scope.pregunta.pregunta = preguntas.pregunta;
      $scope.pregunta.opcion1 = preguntas.opcion1;
      $scope.pregunta.opcion2 = preguntas.opcion2;
      $scope.pregunta.opcion3 = preguntas.opcion3;
      $scope.pregunta.opcion4 = preguntas.opcion4;
      $scope.pregunta.correcta = preguntas.correcta;
      $scope.pregunta.puntaje = preguntas.puntaje;
      $scope.pregunta.numero = preguntas.numero;
      $scope.pregunta.correcta = preguntas.correcta;
      $scope.preguntasElegidas.push($scope.numeroRandom);
      console.log($scope.preguntasElegidas);
    } 
  });


  $scope.Comprobar = function(opcion){
    if (parseInt(opcion) == parseInt($scope.pregunta.correcta))
    {
      $scope.preguntasCorrectas = parseInt($scope.preguntasCorrectas) + 1;
    }
    else
    {
      $scope.preguntasIncorrectas = parseInt($scope.preguntasIncorrectas) + 1;
    }
    $scope.preguntasTotal = parseInt($scope.preguntasTotal) + 1;
    if (parseInt($scope.preguntasTotal) < 6)
    {
      otraPregunta();
    }
    else
    {
      //guardar los resultados y pasar a la pagina resultado final
    }
  };

  function otraPregunta(){
    var existe = 0;
    do {
      $scope.numeroRandom = Math.floor((Math.random() * 10) + 1);
      existe = 0;
      for (var i = $scope.preguntasElegidas.length - 1; i >= 0; i--) {
        if (parseInt($scope.numeroRandom) == parseInt($scope.preguntasElegidas[i]))
        {
          existe = 1;
        }
      };

    }
    while (existe == 1);     

    mensajeReferencia.on('child_added', function (snapshot) {
      var preguntas = snapshot.val();
      
      if (preguntas.numero == $scope.numeroRandom){
        $scope.pregunta.pregunta = preguntas.pregunta;
        $scope.pregunta.opcion1 = preguntas.opcion1;
        $scope.pregunta.opcion2 = preguntas.opcion2;
        $scope.pregunta.opcion3 = preguntas.opcion3;
        $scope.pregunta.opcion4 = preguntas.opcion4;
        $scope.pregunta.correcta = preguntas.correcta;
        $scope.pregunta.puntaje = preguntas.puntaje;
        $scope.pregunta.numero = preguntas.numero;
        $scope.pregunta.correcta = preguntas.correcta;
        $scope.preguntasElegidas.push($scope.numeroRandom);
        console.log($scope.preguntasElegidas);
      } 
    });
  }

})

.controller('PreguntasCtrl', function($scope) {

  var mensajeReferencia = new Firebase('https://trivia-bea4e.firebaseio.com/preguntas/');
    $scope.preguntaNueva = {};
    $scope.preguntaNueva.pregunta = "";
    $scope.preguntaNueva.opcion1 = "";
    $scope.preguntaNueva.opcion2 = "";
    $scope.preguntaNueva.opcion3 = "";
    $scope.preguntaNueva.opcion4 = "";
    $scope.preguntaNueva.correcta = "";
    $scope.preguntaNueva.puntaje = "";
    $scope.preguntaNueva.numero = "";

  $scope.Agregar = function(){

    mensajeReferencia.push({pregunta:$scope.preguntaNueva.pregunta, opcion1:$scope.preguntaNueva.opcion1, opcion2:$scope.preguntaNueva.opcion2, opcion3:$scope.preguntaNueva.opcion4, opcion4:$scope.preguntaNueva.opcion4, correcta:$scope.preguntaNueva.correcta, puntaje:$scope.preguntaNueva.puntaje, numero:$scope.preguntaNueva.numero});
    $scope.preguntaNueva.pregunta = "";
    $scope.preguntaNueva.opcion1 = "";
    $scope.preguntaNueva.opcion2 = "";
    $scope.preguntaNueva.opcion3 = "";
    $scope.preguntaNueva.opcion4 = "";
    $scope.preguntaNueva.correcta = "";
    $scope.preguntaNueva.puntaje = "";
    $scope.preguntaNueva.numero = "";
  };

})

/*.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})*/

.controller('PerfilCtrl', function($scope) {
});
