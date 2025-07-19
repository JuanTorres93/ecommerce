# Requirements

- No user account is needed. -> **User**
- Username must be provided to access the app. -> **User**
- Items can be added to shopping cart. -> **Shopping cart**
- Items can be removed from shopping cart. -> **Shopping cart**
- Items can be updated from shopping cart. -> **Shopping cart**
- User must provide address, email and phone number on checkout. -> **User, shopping cart**
- Products must be shown to user. -> **Products**
- Products can be fetched by id -> **Products**
- Previous orders can be fetched using their id. -> **Orders**
- Previous orders show the items, price and quantity.-> **Orders**

# Feature categories

- User
- Cart
- Products
- Orders

# Pages

## Landing

- /

## Shopping cart

- /cart

## Products

- /product
- /product/:productId

## Orders

- /order/new
- /order/:orderId

## User

- /start

# Map features to state slices

- User: global UI state
- Cart: global UI state
- Products: global remote state
- Orders: global UI state (because I won't create a backend, in a real application this would be remote)

# Tech decisions

- **Routing**: React router
- **Styling**: CSS modules and sass
- **Remote state**: React router (React Query would be a better choice, but I want to explore React Router fetchin features)
- **UI state**: Redux
