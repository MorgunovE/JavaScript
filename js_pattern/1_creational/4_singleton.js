class Database {
  constructor(data) {
    if(Database.existe) {
      return Database.instance
    }
    Database.instance = this
    Database.existe = true
    this.data = data
  }
  
  getData() {
    return this.data
  }
}

const mongo = new Database('MongoDB')
console.log(mongo.getData());
const mysql = new Database('MySQL')
console.log(mysql.getData());