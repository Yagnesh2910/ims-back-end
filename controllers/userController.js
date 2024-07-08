const user = require("../Model/userSchema");

const addUser = async(req, res) => {
    console.log(req);
    const newuser = new user(req.body);
    try{
        await newuser.save();
        res.status(200).json({
            message: "User added successfully",
        });
    } catch(error){
        res.status(500).json({message: error.message});
    }
};


const verifyUser = (req, res) => {
    const { email, password, userType } = req.body;
    user.findOne({ email: email, userType: userType })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("Success")
                }
                else
                    res.json("the password is incorrect")

            } else {
                res.json("No record existed")
            }

        })
        .catch(err=>res.json(err));

};


module.exports = {addUser, verifyUser};