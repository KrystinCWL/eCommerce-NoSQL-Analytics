# 🗄️ MongoDB Analysis

This section focuses on using **MongoDB** to query and analyze nested NoSQL data structures.  
All scripts are written in **Python (via PyMongo)** and **Mongo shell (mongosh)** for advanced querying and aggregation.

---

## 📚 Contents

mongodb/  
├── eCommerce_MongoDB_pymongo.ipynb  
├── eCommerce_MongoDB_operations.js  
├── eCommerce_MongoDB Compass screenshots.pdf  
├── eCommerce_results.txt  
└── README.md  

---

## 🧰 Operations:
### Insert data
i) Insert one document of nested levels [single_ecomm_doc.json].  
ii) Insert multiple documents of nested levels [multiple_ecomm_doc.json].  
### Delete data
iii) Delete a customer who has viewed products of Electronics category, has a wish list category of Books and have placed a order where the total price is greater than 1000.  
iv) Delete customers living in MD and having order history of less than 1000.  
### Update data
v)  If a customer has viewed products of category book with cart items having price greater than 100, change his email and set first item in his wish list priority of High.  
### Query
vi) Find customers who have items in cart greater than $100 and have viewed Electronic Products.  
vii) Find customers who are from MD and have viewed products of category both Electronics and Books.  
viii) Find customers who have products of Footwear in their wish list and have viewed Home Appliances.  
ix) Find Customers who have ordered more than $1500 goods and live in College Park.  
x) Find customers who have viewed Electronic Products and have items which are of Electronics category in their cart.  
xi) Find customers who have viewed Clothing products, have Books in their wishlist and live in Hyattsville.  
xii) Find customers who have placed an order in the year 2023, their cart items have a warranty and cart items have a category of Home Appliances.  
xiii) Find customers who live in VA, have viewed products of Electronics and have a product less than $200 in their cart.  
