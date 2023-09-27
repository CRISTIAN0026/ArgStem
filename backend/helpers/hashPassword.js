import bcrypt from 'bcrypt';

/**
 * password encryption function
 * @param {String} password 
 * @returns  encrypted password
 */

const hashPassword = async (password) => {
    let salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);
    return password;
};

export default hashPassword;