function fetchProduct(id) {
    return fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json());
}

// fetchProduct(1).then(product => {
//   console.log("Single Product:", product);
// });


Promise.all([
    fetchProduct(1),
    fetchProduct(2),
    fetchProduct(3)
])
    .then(products => {
        console.log("✅ All products fetched:", products);
    })
    .catch(err => {
        console.error("❌ One request failed:", err);
    });
