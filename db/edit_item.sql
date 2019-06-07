UPDATE store
SET 
    name = ${name},
    price = ${price},
    img = ${img}

WHERE id = ${id};

SELECT * FROM store;