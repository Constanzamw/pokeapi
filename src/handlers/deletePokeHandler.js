const deletePoke = require ("../controllers/deletePoke")

const deletePokeHandler = async (req, res) => {
    try {
        const {id} = req.params;
        const deletedPokemon = await deletePoke(id);
        return res.status(200).json({ message: "Pokemon deleted successfully", deletedPokemon });
    } catch (error) {
        return res.status(404).json({ error: error.message })
    }
};

module.exports = deletePokeHandler