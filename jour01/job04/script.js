function bisextile(année) {
    if (année % 4 === 0) {
      if (année % 100 === 0) {
        if (année % 400 === 0) {
          console.log(année + " est une année bissextile.");
          return true;
        } else {
          console.log(année + " n'est pas une année bissextile.");
          return false;
        }
      } else {
        console.log(année + " est une année bissextile.");
        return true;
      }
    } else {
      console.log(année + " n'est pas une année bissextile.");
      return false;
    }
  }
  
  bisextile(2024);
  