SELECT
    products.name,
    providers.name
FROM products
    JOIN providers ON providers.id = products.id_providers
    JOIN categories ON categories.id = products.id_categories
WHERE products.id_categories = 6