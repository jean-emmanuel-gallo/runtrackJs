function sommenombrespremiers(nombre1, nombre2) {
    if (estPremier(nombre1) && estPremier(nombre2)) {
      return nombre1 + nombre2;
    } else {
      return false;
    }
  }
  
  function estPremier(nombre) {
    if (nombre < 2) {
      return false;
    }
    for (var i = 2; i <= Math.sqrt(nombre); i++) {
      if (nombre % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  console.log(sommenombrespremiers(2, 3));
  console.log(sommenombrespremiers(7, 11));
  console.log(sommenombrespremiers(4, 5));
  console.log(sommenombrespremiers(13, 20));
  