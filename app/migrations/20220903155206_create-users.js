/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable("users", (table) => {
        table.increments("id");
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.string("first_name", 50);
        table.string("last_name", 50);
        table.string("username", 50);
        table.string("password", 50);
        table.boolean("is_cmd", 50);
        table.boolean("is_admin", 50);
        table.boolean("is_grt", 50);
        table.date('dob')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
};