import axios from 'axios';

export async function updateCount(item_id, count) {
    axios.post('/api/cart-add/' + item_id + '/' + count, null, {
        headers: {
            'X-Requested-With': 'XMLHttpRequest'
        }
    })
    .then(response => {
    })
    .catch(error => {
    });
}
