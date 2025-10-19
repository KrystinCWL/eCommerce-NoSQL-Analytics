# 🛍️ eCommerce NoSQL Analytics

**Data analysis project using MongoDB, Neo4J, and Python to explore customer behavior, product performance, and business insights in the e-commerce industry.**

---

## 📘 Overview

In today’s competitive e-commerce landscape, data-driven decision-making is key to understanding customer behavior, optimizing marketing strategies, and improving user experience.  
This project demonstrates how **NoSQL databases** (MongoDB and Neo4J) can be used to manage, query, and visualize complex, nested datasets representing customers, orders, products, and categories.

The project is divided into two major parts:

- **MongoDB Section (Document Database):** Querying nested JSON data, performing updates, deletions, and aggregations to uncover business insights.  
- **Neo4J Section (Graph Database):** Exploring relationships between customers, products, and orders using graph queries and visual analysis.

---

## 🧠 Objectives

- Manage and analyze large-scale nested JSON data efficiently.
- Execute advanced MongoDB queries using aggregation pipelines.
- Visualize customer-product-order relationships in Neo4J.
- Generate business insights for customer segmentation and product optimization.

---

## 🧩 Project Use Case: Data Analysis for e-Commerce Industry

In the competitive e-commerce landscape, data analysis is crucial for understanding customer behavior, optimizing strategies, and making informed decisions to drive growth and improve customer experience. It helps in understanding customer behavior and preferences by analyzing website traffic, purchase patterns, and customer demographics to understand what products are popular, when customers are most likely to buy, and what drives their purchasing decisions. It can enhance personalized experiences by using data to tailor product recommendations, marketing messages, and website content to individual customer preferences, leading to increased engagement and sales. It helps in improving user experience by analyzing user behavior on the website to identify areas where the user experience can be improved, such as optimizing navigation, checkout processes, and product pages. Track the performance of marketing campaigns to measure their ROI and identify areas for improvement, such as optimizing ad copy, targeting, and landing pages. Analyze sales data and competitor pricing to optimize pricing strategies and maximize profitability. Analyze historical sales data and market trends to forecast demand and optimize inventory levels, reducing the risk of stockouts or overstocking. Track the performance of individual products to identify best-selling items and those that are underperforming, allowing for better inventory decisions. Analyze data throughout the supply chain to identify bottlenecks and inefficiencies, leading to faster shipping times and lower costs.


---

## 🧮 Technologies Used

| Category | Tools / Libraries |
|-----------|------------------|
| Database | MongoDB, Neo4J |
| Language | Python |
| Libraries | PyMongo, Neo4J Python Driver, Pandas, Matplotlib |
| IDE / Tools | Jupyter Notebook, MongoDB Compass, Neo4J Desktop |

---

## 📊 Sample Queries

### 🗄️ MongoDB
```python
# Find customers who ordered more than $1500 and live in College Park
db.ecommerce.find({
    "orderHistory.totalPrice": { "$gt": 1500 },
    "address.city": "College Park"
})

### 🕸️ Neo4J (Cypher)
```cypher
# Retrieve all smartphone purchases and related customer/order details
MATCH (c:Customer)-[:PLACED]->(o:Order)-[:CONTAINS]->(p:Product {category: 'Smartphone'})
RETURN c.name, o.orderID, p.name, p.price


---

## 📈 Key Insights

- Customers purchasing electronics had higher average order values.
- The most connected product categories in Neo4J indicated strong cross-selling opportunities.
- Identified referral patterns and purchase clustering using graph relationships.

---

## 📚 Deliverables

1. Jupyter Notebooks for MongoDB and Neo4J
2. Screenshot evidence of query results
3. PDF Report summarizing methodology and insights

---

## 🧾 Author

Krystin Lee
M.S. in Information Systems @ University of Maryland
Data Analyst
