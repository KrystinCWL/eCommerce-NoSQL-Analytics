# 🕸️ Neo4J Graph Analysis

This section explores **graph database analytics** using Neo4J and Cypher queries to model complex relationships between entities such as customers, products, hospitals, departments, and patients.

---

## 📚 Contents
neo4j/  
├── eCommerce_Neo4j_py2neo.ipynb  
├── eCommerce_Neo4j_create data.cypher  
├── eCommerce_Neo4j_query.txt.cypher  
├── instances graph  
├── overview schema graph  
├── JSON   # results exported in JSON  
│ ├── Query 1  
│ ├── Query 2  
│ ├── ...  
│ └── Query 10  
├── Query Outputs   # results exported nodes in PNG  
├── Screenshots   # screenshots from Neo4J  
├── text cypher  
│ └── eCommerce_Neo4j_create data.txt  
│ └── eCommerce_Neo4j_query.txt  
└── README.md  

---

## ⚙️ Setup Instructions

1. **Open Neo4J Desktop or Browser**
2. **Create a new database**
   ```bash
   CREATE DATABASE eCommerce;
   ```
3. **Load data**
   ```bash
   :source cypher_queries/data_insertion.cypher
   ```
4. **Run queries**
   ```bash
   :source cypher_queries/analytical_queries.cypher
   ```
---

## 🔍 Key Cypher Queries
#1️⃣ Create Nodes & Relationships
```cypher
CREATE (c:Customer {name:'Alice', city:'New York'})
CREATE (p:Product {name:'iPhone 15', category:'Smartphone'})
CREATE (c)-[:PURCHASED]->(p)
```

#2️⃣ Analyze Relationships
```cypher
MATCH (c:Customer)-[:PURCHASED]->(p:Product)
RETURN c.name, collect(p.name) AS PurchasedProducts
```

#3️⃣ Visualize Department-Patient Networks
```cypher
MATCH (h:Hospital)-[:HAS_DEPARTMENT]->(d:Department)-[:TREATS]->(p:Patient)
RETURN h.name, d.name, count(p) AS patient_count
```

---

## 🧩 Data Model Overview
```cypher
(Customer)-[:PLACED]->(Order)-[:CONTAINS]->(Product)
```

---

## 📊 Deliverables

* Cypher scripts for data creation and analytics
* Graph visualization screenshots
* Analytical notebook for insight explanation

---

## 🧠 Learning Focus

* Cypher query patterns (MATCH, WITH, RETURN, COUNT)
* Graph modeling of one-to-many and many-to-many relationships
* Visualization of entity connections for operational insights
