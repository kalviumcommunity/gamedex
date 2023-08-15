const User = require('../Modal/userModal')

module.exports = userSignup = async (request, response) => {
    try {
        const exist = await User.findOne({ userName: request.body.userName });
        if (exist) {
            return response.status(401).json({ message: 'Username already exist' });
        }

        const user = request.body;
        const newUser = new User(user);
        await newUser.save();
        response.status(200).json({ message: user });
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}

module.exports = userLogin = async (request, response) => {
    try {
        
        const username = request.body.userName;
        const password = request.body.password;

        let user = await User.findOne({ userName: username, password: password  });
        if (user) {
            return response.status(200).json(`${username} login successfull` );
        } else{
            return response.status(401).json(`Invalid Login`);
        }
    } catch (error) {
        response.status(500).json({ 'Error ': error.message});
    }
}