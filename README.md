# E-Commerce-Backend

## Description

This e-commerce backend was built for an imagined online retailer, who wished to bring their company's API up to modern standards in order to compete with other online retailers. It utilizes node, express, MySQL, and sequelize to perform RESTful CRUD operations.

## Installation

After downloading, run `npm i` to install dependencies. Then run `npm run seed` to seed the database.

## Usage

Each of the follow API routes accept CRUD operations:

### **Product API Endpoints**

**/api/products**

- GET: Get all existing products.
- POST: Create a new product. Request must be structured as:
  ```
  {
      product_name: "Basketball",
      price: 200.00,
      stock: 3,
      tagIds: [1, 2, 3, 4]
    }
  ```

**/api/products/:id**

- GET: Get details for a product with specified ID.
- PUT: Update name of product with specified ID.
- DELETE: Delete product with specified ID.

### **Category API Endpoints**

**/api/categories**

- GET: Get all existing categories.
- POST: Create a new category. Request must be structured as:

  ```
  {"category_name": "name"}
  ```

**/api/categories/:id**

- GET: Get details for a category with specified ID.
- PUT: Update name of category with specified ID.
- DELETE: Delete a category with specified ID.

### **Tag API Endpoints**

**/api/tags**

- GET: Get a list of all available tags.
- POST: Create a tag. Request must be structured as:
  ```
  {"tag_name": "name"}
  ```

**/api/tags/:id**

- GET: Get details for a tag with specified ID.
- PUT: Update the name of tag with specified ID. Request must be structured as `example`
- DELETE: Delete tag with specified ID.

## Video Demo

## License

MIT. Please view LICENSE file for more details.
