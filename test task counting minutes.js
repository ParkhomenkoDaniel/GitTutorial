
function FormatDate(min) {
  let hour = min / 60;
  let day = hour / 24;
  const MinsInTheDay = 1440;
     if (Number(min) >= MinsInTheDay) {
       return(Math.floor(day) + "d " 
       + '0' + Math.floor(hour % 24) +  "h " 
       + ('0' + min % 60).slice(-2) + "min");
     } else if (Number(min) >= 60) {
       return('0' + Math.floor(hour % 24) +  "h " 
       + ('0' + min % 60).slice(-2) + "min");
     } else {
        return(('0' + min % 60).slice(-2) + "min");
     }
   }
   
   alert(FormatDate(234));
