import { fail, redirect } from '@sveltejs/kit';
import * as api from '$lib/api.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ parent }) {
    const { user_ } = await parent();
    if (user_) throw redirect(307, '/');
}

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ cookies, request }) => {
        const data = await request.formData();

        const user_ = {
            username: data.get('username'),
            password: data.get('password')
        };

        const body = await api.post('users/login', user_);

        if (body.errors) {
            return fail(401, body);
        }
        const value = body.jwt;
        cookies.set('jwt', value, { path: '/' });

        throw redirect(307, '/location');
    }
};
