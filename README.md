# Axis - Web App v2.0

## Tech stack:
Back-end - Node.js (^10.10.0) 
Package manager - Yarn (^1.9.4) 
Front-end - React (^16.5.0)  
Database - PostgreSQL (9.6)

Docker - 18.06.1  
docker-compose - 1.22.0

To start the app run:  
`yarn start`

## Branching practices
1. `production` will always contain commits deployed to production.
2. `testing` will be used for testing tickets
3. `development` branch will be used for active development. But *NO ONE* will commit directly to `development/testing/production`.
4. As mentioned on #3, everyone will create a branch for any fix/feature from `production`, accomplish task, run `git push origin BRANCH_NAME_HERE` and create a Pull Request (PR) against `development`. PR needs to get 2 approvals to be merged to `development`. After that it can be
merged to `development`.
5. If things work in `development`, feature branch is merged to `testing`.
6. If any fixes are needed to `development` or `testing` you branch from the the feature branch that cause the need for fix (read it again))), add fix, push to bitbucket, create PR, get 2 approvals, merge.
7. MUST add fix as well feature branch to the task card (Trello). If fix is needed at `development/testing` only, fix branch is added to feature card that caused the issue. If it comes from `production` it's added to separate card. *THERE CAN'T be environment specific bugs*
8. When feature is tested at `testing`, feature branch (and all fixes branches connected) are merged to the `production` branch by the DEVELOPER
10. For features, the branch names would be `feature/my-feature-name` etc. For bugs, we'll have names like `fix/creepy-bug`

