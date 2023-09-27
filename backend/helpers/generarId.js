
/**
 * Unique token generator for each user
 * @returns Returns a token of type string
 */

const generarId = () => {
    const random = Math.random().toString(32).substring(2);
    const fecha = Date.now().toString(32);
    return random + fecha;
};

export default generarId;