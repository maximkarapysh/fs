module.exports.getAll = function (req,res) {
    res.status(200).json({
        login: false
    })
};

module.exports.create = function (req,res) {
    res.status(200).json({
        register: true
    })
};
