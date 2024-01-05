const { Pokemon, Type, Image } = require("../db");

const deletePoke = async (id) => {
  try {
    if (id.toString().length > 5) {
      const pokemon = await Pokemon.findByPk(id, {
        include: [{ model: Type }],
      });

      if (!pokemon) {
        throw new Error(`Pokemon with ID ${id} not found`);
      }

      // Eliminar el Pokémon y las asociaciones (types, images, etc.) de la base de datos
      await pokemon.destroy();

      // Devolver información sobre el Pokémon eliminado
      return {
        id: pokemon.id,
        name: pokemon.name,
        // Otras propiedades que desees devolver
      };
    } else {
      throw new Error("Invalid ID");
    }
  } catch (error) {
    throw new Error(`Error deleting Pokemon: ${error.message}`);
  }
};

module.exports = deletePoke;