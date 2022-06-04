
const jwt = require('jsonwebtoken');

module.exports = {
    registerPharma: async (req, res) => {

    },
    loginPharma: async (req, res) => {
        try {
            const email = req.body.email;
            const password = req.body.password;
            if (!email || !password) {
                return res.send({
                    status: 'error',
                    message: 'Please fill all the fields'
                })
            }
            if (email.includes('@') === false) {
                return res.send({
                    "status": "error",
                    "message": "Please enter a valid email"
                });
            }
            // check if user exists
            const user = []
            if (user.length === 0) {
                return res.send({
                    "status": "error",
                    "message": "User does not exist"
                });
            }
            // check if password is correct
            const hashedPassword = ""
            const isPasswordCorrect = await bcrypt.compare(password, hashedPassword)
            if (!isPasswordCorrect) {
                return res.send({
                    "status": "error",
                    "message": "Password is incorrect"
                });
            }
            // jwt auth
            // const email = user.properties.email.title[0].text.content
            const token = jwt.sign({ email }, process.env.ACCESS_TOKEN_SECRET);
            res.cookie('token', token)
            req.user = user;
            return res.send({
                "status": "success",
                "message": "User logged in successfully"
            });
        } catch (err) {
            console.log(err)
            SendMessage(err.stack.toString())
            SendMessage('The server has crashed')
            return res.send({
                "status": "error",
                "message": "Some error occurred"
            })
        }
    }
}