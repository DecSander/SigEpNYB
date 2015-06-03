DROP TABLE IF EXISTS events;
DROP TABLE IF EXISTS user_roles;
DROP TABLE IF EXISTS role_permissions;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS permissions;
DROP TABLE IF EXISTS tokens;
DROP TABLE IF EXISTS accounts;

source create-accounts.sql;
source create-tokens.sql;
source create-permissions.sql;
source create-roles.sql;
source create-role_permissions.sql;
source create-user_roles.sql;
source create-events.sql;