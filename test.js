var request = require('request');
var options = {
  'method': 'GET',
  'url': 'http://192.168.43.10/D1/0',
  'headers': {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZDA3N2I0YmE2ODRhYzcwYTk5ZGNjYyIsIm5hbWUiOiJBbmltZXNoIiwiYXZhdGFyIjoiLy93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci8yMmNhMzA4OGM2MzllNDQ1MDBmZmIzZjk3Yzk1YjQ0Mz9zPTIwMCZyPXBnIiwiaWF0IjoxNTk0MTU0NDcyLCJleHAiOjE1OTQxNTgwNzJ9.w-zroBn4UEf7Hx-15RxPvXCpTUqxvnnCdwxlX2EJmZY'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});