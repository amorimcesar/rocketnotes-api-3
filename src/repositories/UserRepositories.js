const sqliteConnection = require("../database/sqlite")

class UserRespository {
  async findByEmail(email){
    const database = await sqliteConnection()
    const user = await database.get("Select * from users WHERE email = (?)", [email])

    return user
  }

  async create({name, email, password}){
    const database = await sqliteConnection()

    const userId = await database.run(
      'INSERT INTO user (name, email, password) VALUES (?,?,?)',
      [name, email, password]
    )

    return {id : userId}
  }
}

module.exports = UserRespository