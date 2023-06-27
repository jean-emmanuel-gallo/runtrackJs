function jourtravaille(date) {
    var jour = date.getDate();
    var mois = date.getMonth() + 1; 
    var année = date.getFullYear();
    
    var joursFeries2020 = [
      "2020-01-01", 
      "2020-04-13", 
      "2020-05-01", 
      "2020-05-08", 
      "2020-05-21", 
      "2020-06-01", 
      "2020-07-14", 
      "2020-08-15", 
      "2020-11-01", 
      "2020-11-11", 
      "2020-12-25" 
    ];
    
    var dateStr = année + "-" + (mois < 10 ? "0" + mois : mois) + "-" + (jour < 10 ? "0" + jour : jour);
  
    if (joursFeries2020.includes(dateStr)) {
      console.log("Le " + jour + "/" + mois + "/" + année + " est un jour férié.");
    } else if (date.getDay() === 0 || date.getDay() === 6) {
      console.log("Non, le " + jour + "/" + mois + "/" + année + " est dans un week-end.");
    } else {
      console.log("Oui, le " + jour + "/" + mois + "/" + année + " est un jour où l'on travaille.");
    }
  }
  
  jourtravaille(new Date(2020, 0, 1)); 
  jourtravaille(new Date(2020, 4, 1)); 
  jourtravaille(new Date(2020, 6, 14)); 
  jourtravaille(new Date(2020, 2, 7)); 
  jourtravaille(new Date(2020, 10, 11)); 
  jourtravaille(new Date(2020, 8, 21)); 
  