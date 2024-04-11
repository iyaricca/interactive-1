function updateTime() {
  let d = new Date();

  // Date object methods - storing values as variables
  // https://www.w3schools.com/js/js_date_methods.asp
  let year = d.getFullYear();     // year as a four digit number (yyyy)
  let month = d.getMonth() + 1;   // month as a number (0-11), so + 1
  let date = d.getDate();         // day as a number (1-31)
  let hour = d.getHours();        // hour (0-23)
  let min = d.getMinutes();       // minute (0-59)
  let sec = d.getSeconds();       // second (0-59)


  // concatenate all the values for checking and print
  let now = year + "/" + month + "/" + date + ", " + hour + ":" + min + ":" + sec;
  console.log (now);
  
  // calculate the first box
  let w1 = sec * 6;
  let h1 = w1;
  let r1 = sec * 6; // ill let you figur this out


  document.querySelector(".clock").style.width = w1 + "px"; 
  document.querySelector(".clock").style.height = h1 + "px"; 
  document.querySelector(".clock").style.borderRadius = r1 + "px";
  document.querySelector(".clock").style.transform = "rotate(" + sec * 6 + "deg)"; 

  // calculate the second box
  let w2 = sec * 6;
  let h2 = w1;
  let r2 = 360 - (sec * 6); // ill let you figur this out

  document.querySelector(".clock2").style.width = w2 + "px"; 
  document.querySelector(".clock2").style.height = h2 + "px"; 
  document.querySelector(".clock2").style.borderRadius = r2 + "px";
  document.querySelector(".clock2").style.transform = "rotate(" + sec * 6 + "deg)"; 


}

// run the above function every second
setInterval(updateTime, 1000);