# INIT

### Installation

```
npm i
```

### Starting docker services

```
docker-compose up
```

### URL

```
http://localhost:3000
```

### Run migrations

```
npm run migrate
```

### Run seeder

```
npm run seed
```

## Docker Services

Remove volumes

```
docker-compose down -v
```

# Test

## Use Material UI for designs and css

## Bonus points for making the website scale well.

### Make a /users page

1. Create a /users route in the API and navigationa
2. Get all users and display them in a table

### Make a /users/:id page

1. Since we are not testing on nextjs, a hint will be to make the route called /users/[id].
2. Have it display the user by that id.
3. If there is no user with that id display an error.

##### We are looking for how you break up your code, manage state, can reuse existing code, and knowledge of sequelize/material ui and react.
