import axios from 'axios';

export async function getItem(item_id) {
    try {
        const response = await axios.get(`/api/ajax/product/${item_id}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}