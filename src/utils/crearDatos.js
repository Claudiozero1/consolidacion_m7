const userController = require('../controllers/user');
const bootcampController = require('../controllers/bootcamp');

const createData = async () => {
    console.log('------------- CREANDO USUARIOS -------------');
    const user1 = await userController.createUser({
        firstName: 'Mateo', lastName: 'Diaz', email: 'mateo.diaz@correo.com'
    });
    const user2 = await userController.createUser({
        firstName: 'Santiago', lastName: 'Mejias', email: 'santiago.mejias@correo.com'
    });
    const user3 = await userController.createUser({
        firstName: 'Lucas', lastName: 'Rojas', email: 'lucas.rojas@correo.com'
    });
    const user4 = await userController.createUser({
        firstName: 'Facundo', lastName: 'Fernandez', email: 'facundo.fernandez@correo.com'
    });

    try {

        console.log('------------- CREANDO BOOTCAMPS -------------');
        const bootcamp1 = await bootcampController.createBootcamp({
            title: 'Introduciendo El Bootcamp De React', cue: 10, description: 'React es la librería más usada en JavaScript para el desarrollo de interfaces.'
        });

        const bootcamp2 = await bootcampController.createBootcamp({
            title: 'Bootcamp Desarrollo Web Full Stack', cue: 10, description: 'Crearás aplicaciones web utilizando las tecnologías y lenguajes más actuales y populares, como: JavaScript, nodeJS, Angular, MongoDB, ExpressJS.'
        });

        const bootcamp3 = await bootcampController.createBootcamp({
            title: 'Bootcamp Big Data, Inteligencia Artificial & Machine Learning', cue: 10, description: 'Domina Data Science, y todo el ecosistema de lenguajes y herramientas de Big Data, e intégralos con modelos avanzados de Artificial Intelligence y Machine Learning.'
        });
        
    } catch (error) {
        if (error.errors[0].value > error.errors[0].validatorArgs) {
            console.log(`El maximo aceptado es ${error.errors[0].validatorArgs} el valor ingresado a excedido este limite`)
            return;
        }
    }

    console.log('------------- ASIGNANDO USUARIOS -------------');
    await bootcampController.addUser(1, 1);
    await bootcampController.addUser(2, 1);
    await bootcampController.addUser(1, 2);
    await bootcampController.addUser(1, 3);
    await bootcampController.addUser(2, 3);
    await bootcampController.addUser(3, 3);

    console.log('------------- DATOS CREADOS EXITOSAMENTE -------------');
};

module.exports = createData;