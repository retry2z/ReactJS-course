import axios from 'axios';
import admin from './admin';
import cookieAdmin from './cookie';

const cookieHandler = cookieAdmin();
const { url } = admin();
const collection = 'rooms/';

const errorHandler = (data = 0) => {
    const message = {
        0: 'Something went wrong',
        403: 'Permission Denied',
        401: 'Unauthorized',
        404: 'Page not found',
    }
    const code = data.split(' code ')[1];

    return message[code]
}

const productService = {
    async list() {
        return await axios.get(url + collection);
    },

    async get(id) {
        return await axios.get(url + collection + id);
    },

    async post(data) {
        try {
            const token = cookieHandler.get() || '';

            if (!!token === false) {
                return
            }

            const response = await axios.post(url + collection, data, {
                headers: {
                    'Authorization': token
                }
            });

            return {
                isValid: true,
                data: response.data
            }
        }
        catch (e) {
            return {
                isValid: false,
                error: errorHandler(e.message)
            }
        }
    },

    async edit(id, data) {
        try {
            const token = cookieHandler.get() || '';

            if (!!token === false) {
                return
            }

            const response = await axios.patch(url + collection + id, data, {
                headers: {
                    'Authorization': token
                }
            });

            return {
                isValid: true,
                data: response.data
            }
        }
        catch (e) {
            return {
                isValid: false,
                error: errorHandler(e.message)
            }
        }
    },

    async remove(id) {
        try {
            const token = cookieHandler.get() || '';

            if (!!token === false) {
                return
            }

            const response = await axios.delete(url + collection + id, {
                headers: {
                    'Authorization': token
                }
            });

            return {
                isValid: true,
                data: response.data
            }
        }
        catch (e) {
            return {
                isValid: false,
                error: errorHandler(e.message)
            }
        }
    },

    async join(id) {
        try {
            const token = cookieHandler.get() || '';
            const data = {
                headers: {
                    'Authorization': token
                }
            }

            if (!!token === false) {
                data.headers = {};
            }

            const response = await axios.get(url + collection + id + '/join', data);

            return {
                isValid: true,
                data: response.data
            }
        }
        catch (e) {
            return {
                isValid: false,
                error: errorHandler(e.message)
            }
        }
    },

    async leave(id) {
        try {
            const token = cookieHandler.get() || '';
            const data = {
                headers: {
                    'Authorization': token
                }
            }

            if (!!token === false) {
                data.headers = {};
            }

            const response = await axios.get(url + collection + id + '/leave', data);

            return {
                isValid: true,
                data: response.data
            }
        }
        catch (e) {
            return {
                isValid: false,
                error: errorHandler(e.message)
            }
        }
    },

    async notify(id, data) {
        try {
            const token = cookieHandler.get() || '';

            if (!!token === false) {
                return
            }

            const response = await axios.post(url + collection + id + '/notification', data, {
                headers: {
                    'Authorization': token
                }
            });

            return {
                isValid: true,
                data: response.data
            }
        }
        catch (e) {
            return {
                isValid: false,
                error: errorHandler(e.message)
            }
        }
    },
}

export default productService;