module.exports = async function mailer(req, res) {
    const { body } = req;
    console.log(body);
    console.log("response: ", res)
    res.send(body);
};


