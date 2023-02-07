import * as api from '$lib/api.js';
import {redirect} from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals, cookies}) {
        if(!cookies.get('jwt'))
        {
                throw redirect(307, '/login')
        }
        let token = cookies.get('jwt');

        const [locations,user] = await Promise.all([
                api.get('locations', token),
                api.get('users/me',token)
        ]);
        return{
                roger:locations,
                token,
                user
        };
}
export const actions ={
        createLocation: async ({ cookies, request }) => {
                const data = await request.formData();
                const location = {
                    geolocation:{
                        coordinates: [parseFloat(data.get('lattitude')),parseFloat(data.get('longitude'))],
                        type: "Point"
                    },
                    filmType: data.get('filmType'),
                    filmProducerName: data.get('filmProducerName'),
                    endDate: new Date(data.get('endDate')),
                    filmName: data.get('filmName'),
                    district: data.get('district'),
                    sourceLocationId: data.get('sourceLocationId'),
                    filmDirectorName: data.get('filmDirectorName'),
                    address: data.get('address'),
                    startDate: new Date(data.get('startDate')),
                    year: data.get('year'),
        
                };
                await api.post(
                    `locations/`,
                    location,
                    cookies.get('jwt')
                );
            },

	deleteLocation: async ({ cookies, url }) => {
		const id = url.searchParams.get('id');
		const result = await api.del(`locations/${id}`, cookies.get('jwt'));

		if (result.error) throw error(result.status, result.error);
	},

	editLocation: async ({ cookies,url }) => {
                const id = url.searchParams.get('id');
            },
};
