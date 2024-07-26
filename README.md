# E-commerce Back End

## Description
This project is a back-end API for an e-commerce site built with Express.js and Sequelize to interact with a MySQL database. It serves as a foundation for managing products, categories, and tags in an e-commerce platform, showcasing CRUD operations through a RESTful API.

## User Story
As a manager at an internet retail company, I want a back end for my e-commerce website that uses the latest technologies so that my company can compete with other e-commerce companies.



Started the server and synced Sequelize models to the MySQL database.
Verified API GET routes for categories, products, and tags display data in formatted JSON.
Tested API POST, PUT, and DELETE routes to create, update, and delete data in the database.
Models
Category
id: Integer, primary key, auto-increment
category_name: String, non-null
Product
id: Integer, primary key, auto-increment
product_name: String, non-null
price: Decimal, non-null, validated as decimal
stock: Integer, non-null, default value 10, validated as numeric
category_id: Integer, references Category model's id
Tag
id: Integer, primary key, auto-increment
tag_name: String, non-null
ProductTag
id: Integer, primary key, auto-increment
product_id: Integer, references Product model's id
tag_id: Integer, references Tag model's id
Associations
Product belongs to Category: A category can have multiple products, but a product belongs to one category.
Category has many Products.
Product belongs to many Tags: Implemented via the ProductTag through model.
Tag belongs to many Products.
Getting Started
Prerequisites
Node.js
MySQL
## Installation

1. Clone the Repository:

git clone [https://github.com/coding-boot-camp/fantastic-umbrella]

2. Install Dependencies:

npm i

3. Set Up Environment Variables:

Create a .env file in the root directory with the following content:

DB_USER=your_mysql_username
DB_NAME=myapp_development
DB_PASSWORD=your_mysql_password

Create and Seed the Database:

npx sequelize-cli db:create
npx sequelize-cli db:migrate
npm run seed

4. Start the Server:

npm start


## API Routes
GET /api/categories: Retrieve all categories

GET /api/categories/:id: Retrieve a single category by ID

POST /api/categories: Create a new category

PUT /api/categories/:id: Update a category by ID

DELETE /api/categories/:id: Delete a category by ID

GET /api/products: Retrieve all products

GET /api/products/:id: Retrieve a single product by ID

POST /api/products: Create a new product

PUT /api/products/:id: Update a product by ID

DELETE /api/products/:id: Delete a product by ID

GET /api/tags: Retrieve all tags

GET /api/tags/:id: Retrieve a single tag by ID

POST /api/tags: Create a new tag

PUT /api/tags/:id: Update a tag by ID

DELETE /api/tags/:id: Delete a tag by ID

## Walkthrough Video
[Video Demonstration]()

## License
This project is licensed under the MIT License.