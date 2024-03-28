import axios from 'axios';

export async function getItems(params, is_paginate, items, setHasMore) {
    axios.get(`/api/ajax/products?${params.toString()}`)
        .then(response => {
            setHasMore(response.data.has_more);
            if (!is_paginate) {
                items.value = response.data.products.data;
            } else {
                items.value = items.value.concat(response.data.products.data);
            }
        })
        .catch(error => {
        });
}
