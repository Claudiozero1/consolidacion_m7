const User = require('../models/user');
const Bootcamp = require('../models/bootcamp');

const createUser = async (user) => {
    const newUser = await User.create(user);
    return newUser;
};

const findUserById = async (id) => {
    const userFound = await User.findByPk(id, {
        include: [Bootcamp]
    });
    return userFound;
};

const findAll = async () => {
    const usersAndBootcamps = await User.findAll({
        include: [Bootcamp]
    });
    return usersAndBootcamps;
};

const updateUserById = async (id, newInfo) => {
    const editUser = await User.update(newInfo, {
        where: {
            id,
        },
    });
    return editUser;
}

const deleteUserById = async (id) => {
    const deletedUser = await User.destroy({
        where: {
            id,
        }
    });
    return deletedUser
}

module.exports = {
    createUser,
    findUserById,
    findAll,
    updateUserById,
    deleteUserById,
}