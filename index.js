// Définition des jetons de l'adversaire
var adversaire = [
    { couleur: 'rouge', valeur: 5, nombre: 3 },
    { couleur: 'bleu', valeur: 10, nombre: 2 },
    { couleur: 'vert', valeur: 2, nombre: 6 }
  ];
  
  // Fonction pour calculer la valeur totale des jetons de l'adversaire
  function calculerValeurTotale(jetons) {
    var valeurTotale = 0;
    
    for (var i = 0; i < jetons.length; i++) {
      var jeton = jetons[i];
      valeurTotale += jeton.valeur * jeton.nombre;
    }
    
    return valeurTotale;
  }
  
  // Calcul de la valeur totale des jetons de l'adversaire
  var valeurAdversaire = calculerValeurTotale(adversaire);
  
  // Affichage du résultat
  console.log("La valeur totale des jetons de l'adversaire est de : " + valeurAdversaire);
  