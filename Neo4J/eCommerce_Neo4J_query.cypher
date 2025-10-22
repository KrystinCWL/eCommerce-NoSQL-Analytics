// 1. What is the relationship between Alice and her orders, and how are the products and categories connected to these orders?
MATCH (n1:Customer {name: "Alice"})-[r1:PLACED]->(n2:Order)-[r2:CONTAINS]->(n3:Product)-[r3:BELONGS_TO]->(n4:Category) 
RETURN n1,n2,n3,n4

// 2. How can we display all Smartphone purchases, including the details of the customers who made these purchases and the specifics of their orders?
MATCH (n1:Customer)-[r1:PLACED]->(n2:Order)-[r2:CONTAINS]->(n3:Product {name: "Smartphone"}) 
RETURN n1,n2,n3

// 3. Which customers placed orders in January 2024, and who are the customers they referred?
MATCH (n1:Customer)-[r1:PLACED]->(n2:Order) WHERE (n2.date STARTS WITH "2024-01")
MATCH (n3:Customer)-[r2:REFERRED_BY]->(n1:Customer)
RETURN n1,n2,n3

// 4. What is the average rating of reviews for each product?
MATCH (n1:Review)-[r:REVIEW_OF]->(n2:Product)
RETURN n2.name AS Product , AVG(n1.rating) AS AverageRating

// 5. Which orders were placed by customers who joined in 2023, and what products are associated with these orders?
MATCH (c:Customer)-[r1:PLACED]->(o:Order) -[r2:CONTAINS]->(p:Product) WHERE c.joinDate STARTS WITH "2023" RETURN c,o,p

// 6. How can we display the relationship between products and their reviews, filtering to show only reviews with ratings of 4 or higher?
MATCH (rev:Review)-[r:REVIEW_OF]->(p:Product) WHERE rev.rating >= 4 RETURN rev,p

// 7. Can you illustrate the chain of orders and the contained products for Charlie, emphasizing the product categories linked to these orders?
MATCH (c:Customer {name: "Charlie"} )-[r1:PLACED]->(o:Order)-[r2:CONTAINS]->(p:Product)-[r3:BELONGS_TO]->(cat:Category) RETURN c,o,p,cat

// 8. Which orders contain the Microwave Oven, and what customer details and product category information are associated with these orders?
MATCH (c:Customer)-[r1:PLACED]->(o:Order)-[r2:CONTAINS]->(p:Product {name:"Microwave Oven"})-[r3:BELONGS_TO]->(cat:Category) RETURN c,o,p,cat

// 9. Which customers have placed orders with a total price greater than $2000?
MATCH (c:Customer)-[r:PLACED]->(o:Order) WHERE o.total>2000
RETURN c.name AS Customer, o.orderID AS OrderID, o.total AS TotalPrice

// 10. What does the ecosystem of orders delivered in January 2024 look like, particularly in terms of the interconnected customers, products, and categories?
MATCH (c:Customer)-[r1:PLACED]->(o:Order {status: "Delivered"})
WHERE o.date STARTS WITH "2024-01"
WITH c,o
MATCH (o)-[r2:CONTAINS]->(p:Product)-[r3:BELONGS_TO]->(cat:Category)
RETURN c,o,p,cat