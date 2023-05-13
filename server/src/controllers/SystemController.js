const SystemService = require("../services/SystemService");

const getKey = async (req, res) => {
    try {
        const userId = req.user._id;
        const response = await SystemService.getKey(userId);
        if (response.error) {
            return res.status(400).json({
                error: response.error
            })
        }
        res.status(200).json({
            userId: userId,
            key: response.key
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
}

module.exports = {
    getKey
}