const bday = () => {
  return;
};

//console.log(bday());

function timeConversion(s) {
  let currentHour = parseInt(s.slice(0, 2));
  let time = s.slice(0, s.length - 2);
  console.log(s.split("").indexOf("P"));
  if(s.split("").indexOf("P") !== -1) {
    let milTime = currentHour + 12  
    if(mil + 12 > 12) {
        
      }
  }
    ? `${currentHour + 12}${time.slice(2)}`
    : time;
}

console.log(timeConversion("07:05:45AM"));
