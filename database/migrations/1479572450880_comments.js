'use strict'

const Schema = use('Schema')

class CommentsTableSchema extends Schema {

  up () {
    this.create('comments', (table) => {
      table.increments()
      table.text('comment')
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('event_id').unsigned().references('id').inTable('events')
      table.timestamps()
    })
  }

  down () {
    this.drop('comments')
  }

}

module.exports = CommentsTableSchema
