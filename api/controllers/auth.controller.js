export const register= async(req, res) => {


    try {
        const newUser = new User({
            username:"admin",
            email: "admin@freeluncer.com",
            password: "admin123",
            isAdmin: true,
        })

        await newUser.save();
        res.status(200).send("User registered successfully");
        
    } catch (error) {
        res.status(404).send("something went wrong");
        
    }
}

export const login= async(req, res) => {
    
}

export const logout= async(req, res) => {
    
}