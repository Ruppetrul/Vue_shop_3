import axios from 'axios';

export async function getItem(item_id) {
    try {
        const { data } = await axios.get(`/api/ajax/product/${item_id}`);
        return data;
    } catch (error) {
        console.error('Error getItem:', error);
        throw error;
    }
}