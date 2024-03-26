// https://chat.openai.com

// ^ start of the string

// const check=/(https:)([A-Z])|([a-z])+(.com)/;
// const check =/(https:)([A-Z]|[a-z]+)(\.com)$/;
const check = /^https|http:\/\/[a-zA-Z0-9.-:]+\.?[a-z]+?\/?[a-zA-z0-9./@!&*?+-=#%]+$/; 
function validation(url){
  return check.test(url);
}

// const url1="https://chat.openai.com";
// const url1="https://www.thapar.org/"
// const url1="https://hackmdio.com";
// const url1="https://poc.leapmax.ai/";
// const url1="http://chat.kocharsoft";
// const url1="https://regexr.com/";
// const url1="https://localhost:8000/";
// const url1="https://unstop.com/practice";
// const url1="https://172.17.42.164:8090/httpclient.html";

// const url1="https://poc.leapmax.ai/auth/realms/LeapPoc/protocol/openid-connect/auth?client_id=leap-frontend&redirect_uri=https%3A%2F%2Fpoc.leapmax.ai%2Fdashboard&state=5f5610d5-903a-439e-9ee8-948ccece414c&response_mode=fragment&response_type=code&scope=openid&nonce=4b12ec0f-63c8-4aa2-8e93-7672795b0209";
// const url1="https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/39659822?start=75#overview"
const url1="https://github.com/drishtikundra/Valid-URL-Checker";
console.log(validation(url1));