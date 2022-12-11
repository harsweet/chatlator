import UserModel, { PRIMARY_LANGUAGES } from "../models/user.js";

const usersController = {
    getOneUser: async (req, res) => {
        return res.status(200).json({
            guid: "12d9d84c2cf243f1ae8754d5d8883087",
            name: "ABC",
            username: "userABC",
            email: "abc@gmail.com",
            primaryLanguage: 'English'
        })
    },

    createUser: async (req, res) => {
        try {
            const { name, username, email, primaryLanguage } = req.body;
            const newUser = await UserModel.createUser(name, username, email, primaryLanguage);
            return res.status(200).json({ success: true, newUser });
        } catch(error) {
            return res.status(500).json({ success: false, error: error });
        }
    },


    getUsers: async (req, res) => {
        try {
            const allUsers = await UserModel.getUsers();
            return res.status(200).json({ success: true, allUsers });
        } catch(error) {
            return res.status(500).json({ success: false, error: error });
        }
    },
};

export default usersController;