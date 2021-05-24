export default {
    auth: {
        secret: process.env.APP_SECRET || 'secret',
        expiresIn: '15m'
    }
}