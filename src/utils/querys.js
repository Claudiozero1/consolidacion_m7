const bootcampController = require('../controllers/bootcamp');
const userController = require('../controllers/user');

const execQuerys = async () => {

    // Consultando el Bootcamp por id, incluyendo los usuarios.
    const bootcamp1 = await bootcampController.findById(1)
    console.log(JSON.stringify(bootcamp1, null, 4))
    
    // Listar todos los Bootcamp con sus usuarios.
    const bootcampsAndUsers = await bootcampController.findAll()
    console.log(JSON.stringify(bootcampsAndUsers, null, 4))

    // Consultar un usuario por id, incluyendo los Bootcamp.
    const user1 = await userController.findUserById(1);
    console.log(JSON.stringify(user1, null, 4))

    // Listar los usuarios con sus Bootcamp.
    const usersAndBootcamps = await userController.findAll();
    console.log(JSON.stringify(usersAndBootcamps, null, 4))

    // Actualizar el usuario según su id; por ejemplo: actualizar el usuario con id=1 por Pedro Sánchez.
    const editUser = await userController.updateUserById(1, {firstName: 'Pedro',lastName: 'Sanchez'});
    const edituser1 = await userController.findUserById(1);
    console.log(JSON.stringify(edituser1, null, 4));

    // Eliminar un usuario por id; por ejemplo: el usuario con id=1.
    const deletedUser = await userController.deleteUserById(3);
    console.log(JSON.stringify(deletedUser, null, 4));

}

module.exports = execQuerys;