# REST API week3/week4

Install project :

```
npm install
```

Run project :

```
npm run dev
```

# CATEGORIES

[GET] get all category

```
/category
```

[POST] insert category

```
/category
```

body:

```
{
    "name": "Baju Bola"
}
```

[PUT] update category

```
/category/1
```

body:

```
{
    "name": "Baju"
}
```

[DELETE] delete category

```
/category/1
```

# PRODUCT

[GET] get all product with join category

```
/product
```

[GET] get product with sortby, sort, page dan limit

```
/products/b?sortby=stock&sort=ASC&limit=5&page=1
```

[GET] get product with searching

```
/products/a?search=Ni
```

[POST] insert product

```
/products
```

body:

```
{
    "name": "Adidas",
    "stock": 100,
    "price": 200000,
    "categories_id": 1
}
```

[PUT] update product

```
/products/3
```

body:

```
{
    "name": "Sepatu Nike",
    "stock": 200,
    "price": 300000,
    "categories_id": 1
}
```

[DELETE] delete product

```

body:

```
{
    "name": "gian",
    "email": "gian@gmail.com"
}
```


[DELETE] delete customers

```


# TRANSACTIONS

```
/transactions
```

body:

```
{
    "customers_id": 1,
    "products_id": 4,
    "amount": 30,
    "total": 30000,
    "status_id": 2
}
```

```
/transactions/4
```

body:

```
{
    "customers_id": 2,
    "products_id": 3,
    "amount": 3,
    "total": 30000,
    "status_id": 2
}
```


```
/transactions/4
```

body:

```
{
    "customers_id": 2,
    "products_id": 3,
    "amount": 3,
    "total": 30000,
    "status_id": 2
}
```
