// Built-in Module
const os = require('os');// Built-in Module

// info about current user
const user = os.userInfo();
console.log(user);

// methode's return's the system uptime in second's
console.log(`the system upTime is: ${os.uptime()} second's`)

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}
console.log(currentOS);