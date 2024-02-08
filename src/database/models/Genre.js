module.exports = (sequelize, DataTypes) =>{
    const alias = 'Genre';
    const cols ={
        id:{
            type:DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            unsigne: true
        },
        name:{
            type:DataTypes.STRING(100),
            allowNull: false
        },
        ranking:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unique:true,
            unsigne:true
        },
        active:{
            type: DataTypes.TINYINT(1),
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            field: 'created_at'
        },
    
    updatedAt: {
            type: DataTypes.DATE,
            field: 'updated_at'
        }
    };
    const config = {
        tablename: "genres",
        timestamp: true
    };
    const Genre= sequelize.define(alias,cols,config);
    return Genre;
}