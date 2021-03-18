const connection = require("./connection");

class Database {
    constructor(connection) {
        this.connection = connection;
    }

    // METHOD - find all notes in DB 
    getNotes() {
        return this.connection.query("SELECT * FROM notes");
    }

    // METHOD -  create new note and store in DB
    createNote(title, notetext) {
        return this.connection.query("INSERT INTO notes (title, notetext) VALUES (?, ?);", [title, notetext])
    }

    // METHOD - delete one note in DB
    deleteNote(id) {
        return this.connection.query("Delete from notes where id = ?;", id);
    }

}

module.exports = new Database(connection);
