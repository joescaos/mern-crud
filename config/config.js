const config = {
    env: process.env.NODE_ENV || "development",
    port: process.env.port || 3000,
    jwtSecret: process.env.JWT_SECRET || "my-secret-key",
    
}

export default config