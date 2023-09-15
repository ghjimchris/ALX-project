
const serverUrl = () => {
    const { 
        VITE_PROD_SERVER, VITE_DEV_SERVER, VITE_MODE 
    } = import.meta.env;

    const mode = VITE_MODE || 'dev';
    const prod_server = VITE_PROD_SERVER || '';

    if(['prod', 'production'].includes(mode.toLowerCase()) && prod_server.length > 8){
        return VITE_PROD_SERVER || 'http://127.0.0.1:90'
    }

    return VITE_DEV_SERVER || 'http://127.0.0.1:90'
}

const SERVER = serverUrl();
export default SERVER;