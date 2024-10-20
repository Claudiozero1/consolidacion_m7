const sequelize = require('./src/database');
const createData = require('./src/utils/crearDatos');
const execQuerys = require('./src/utils/querys');

const main = async() => {
    console.log('Sincronizando base de datos');
    await sequelize.sync({force: true});
    console.log('Sincronizacion exitosa!');

    await createData();
    await execQuerys();
}

main()