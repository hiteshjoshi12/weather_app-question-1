const gettime =(unix_timestamp)=>
  {
    var date = new Date(unix_timestamp * 1000);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var formattedTime = hours + ':' + minutes.substr(-2) ;
    console.log(formattedTime);
    return formattedTime;

  }

  export {gettime}