<!DOCTYPE html>
<script>

function GetNum () {

let min = prompt('Введите число?', 0);
let hour = min / 60;
let day = hour / 24;

   if (Number(min) >= 1440) {
     alert(Math.floor(day) + "d " 
     + '0' + Math.floor(hour % 24) +  "h " 
     + ('0' + min % 60).slice(-2) + "min");
   } else if (Number(min) >= 60) {
     alert('0' + Math.floor(hour % 24) +  "h " 
     + ('0' + min % 60).slice(-2) + "min");
   } else {
     alert(('0' + min % 60).slice(-2) + "min");
  }
}
GetNum()
</script>