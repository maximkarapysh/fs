module.exports.overview = function (req,res) {
    res.status(200).json({
        login: false
    })
};

module.exports.analytics = function (req,res) {
    res.status(200).json({
        register: true
    })
};
