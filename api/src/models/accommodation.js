module.exports = function (sequelize, DataTypes) { // esta funcionalidad se autoejecuta cuando llamo el archivo y me dice que puede ser llamada (la funcion) por otro archivo
  const Accommodation = sequelize.define('Accommodation',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      signatura: {
        type: DataTypes.STRING,
        allowNull: true
      },
      denominaci_comercial: {
        type: DataTypes.STRING,
        allowNull: true
      },
      grup: {
        type: DataTypes.STRING,
        allowNull: true
      },
      subgrup: {
        type: DataTypes.STRING,
        allowNull: true
      },
      inici_d_activitat: {
        type: DataTypes.DATE,
        allowNull: true
      },
      estat: {
        type: DataTypes.STRING,
        allowNull: true
      },
      municipi: {
        type: DataTypes.STRING,
        allowNull: true
      },
      localitat: {
        type: DataTypes.STRING,
        allowNull: true
      },
      direcci: {
        type: DataTypes.STRING,
        allowNull: true
      },
      utm_x: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      utm_y: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      places: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      unitats: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      explotador_s: {
        type: DataTypes.STRING,
        allowNull: true
      },
      latitud: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      longitud: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      deletedAt: {
        type: DataTypes.DATE
      }
    }, {
      DataTypes,
      tableName: 'accommodation', // esto me dice que está interactuando con la tabla 'users'
      timestamps: true, // esto pone la fecha del momento en que se crea o se modifica un dato
      paranoid: true, // esto me asegura que me muestre los datos de la tabla con delete null
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [
            { name: 'id' }
          ]
        }
      ]
    }
  )

  Accommodation.associate = function (models) {

  }

  return Accommodation // aqui le aclaro si el modelo esta relacionado con otros modelos
}
