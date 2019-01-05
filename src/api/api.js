
export let getAllProducts = (initialize) => {
  const url = "https://nordic-shop-api.herokuapp.com/";
  let query = `query products {
    products {
      id
      name
      rating
      price
      images {
        url
        alt
      }
    }
  }`;

  fetch(url,{
      method: "POST",
      mode: "cors",
      credentials: "omit",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
        variables: {},
        query: query,
      })
  }).then(response => response.json())
    .then(json => {
      let products = [];
      Object.values(json.data.products).forEach(product => {
        products.push(product);
      });
      initialize(products);
  })
}


