const postPokemon = require ("../controllers/postPokemon")

const postPokemonHandler = async (req,res)=>{
    try {
        const{id, name, image, hitPoints,attack,defense,speed,height,weight,types} = req.body
        console.log(types)
        const pokemon = await postPokemon({id, name,image, hitPoints, attack,defense,speed,height,weight,types})
               return res.status(200).json(pokemon)
    } catch (error) {
        return res.status(404).json({error: error.message})
    }
}


module.exports= postPokemonHandler;