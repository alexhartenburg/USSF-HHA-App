# USSF-HHA-App
## Services
### App
- Docker container running Node (version)
- App is built on NextJS using TypeScript
- The API is built within the app container using the NextJS API feature
### Database
- Docker container running postgres

## Docker
### CLI
- App
    - docker ps -a
        - find the container id for NAMES: ussf-hha-app-app-1, IMAGE: ussf-hha-app_app
    - docker exec -it [container id] sh
    - run node, npm, and npx commands, example:
        - npx knex migrate:latest
- DB
    - docker ps -a
        - find the container id for NAMES: ussf-hha-app-db-1, IMAGE: postgres
    - docker exec -it [container id] bash
    - psql -U postgres -d db
    - run sql commands
