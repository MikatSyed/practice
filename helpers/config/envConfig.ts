export const getBaseUrl = (): any => {
    const environment = process.env.NODE_ENV;

    switch (environment) {
        case 'development':
            return 'http://localhost:6060/api/v1'; // Replace with your development API URL
        case 'production':
            return 'https://home-service-backend-ten.vercel.app/api/v1';// Replace with your production API URL
        default:
            return 'https://home-service-backend-ten.vercel.app/api/v1'; // Replace with a default API URL
    }
};