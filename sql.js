const sqlite3 = require('sqlite3').verbose();
var moment = require('moment');

let db = new sqlite3.Database('/home/pi/blue_hydra/blue_hydra.db')
let STOP_TIME = moment.utc().format('YYYY-MM-DD h:mm:ss')
let START_TIME = moment.utc(STOP_TIME).local().subtract(1, "day").format('YYYY-MM-DD h:mm:ss')
let sql = `SELECT address, name, vendor, company, manufacturer, classic_mode AS classic, le_mode AS le, le_address_type, updated_at, classic_major_class, classic_minor_class, classic_class
    FROM blue_hydra_devices
    WHERE updated_at BETWEEN '${START_TIME}' AND '${STOP_TIME}'`;
console.log(sql)
db.all(sql, [], (err, rows) => {
  if (err) {
    throw err;
  }
  rows.forEach((row) => {
    if(row.name != null && row.classic == 't'){
        console.log(row);
    }
  });
});
db.close();