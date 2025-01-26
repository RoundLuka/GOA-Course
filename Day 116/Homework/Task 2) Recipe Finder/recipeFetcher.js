// import axios from 'axios' broswer ran error because broswer doesn't understand node import
// could have used parcel for packing but just linked import in html script tag

const APP_ID = ''
const APP_KEY = ''
const BASE_URL = ''

export async function fetchRecipes (ingredient) {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                q: ingredient,
                app_id: APP_ID,
                app_key: APP_KEY,
            },
        });
        return response.data.hits;
    } catch (error) {
        console.log("Error fetching recipies", error);
        return [];
    }
}