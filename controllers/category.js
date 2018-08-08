module.exports.getAll = function (req,res) {
    res.json({message: 'Categories'})
};

module.exports.getById = function (req,res) {
    res.status(200).json({
        register: true
    })
};

module.exports.remove = function (req,res) {
    res.status(200).json({
        register: true
    })
};

module.exports.create = function (req,res) {
    res.status(200).json({
        register: true
    })
};

module.exports.patch = function (req,res) {
    res.status(200).json({
        register: true
    })
};

