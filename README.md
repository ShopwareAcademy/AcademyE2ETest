# AcademyE2ETest

A plugin which shows how to write a simple cypress e2e tests for Shopware 6

## Features

- Adds border radius to all buttons (class: .btn)
- Run cypress e2e test

## Run test locally

```shell
# Plugin directory where your package.json is located

cd custom/plugins/AcademyE2ETest/src/Resources/app/dev/test/e2e
CYPRESS_baseUrl=http://production.local node_modules/.bin/cypress run --browser chrome 
```
