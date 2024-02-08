module.exports = (sequelize, DataTypes) =>{
    const alias = 'Movie';
    const cols ={
        id:{
            type:DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            unsigne: true
        },
        title:{
            type:DataTypes.STRING(500),
            allowNull: false
        },
        rating:{
            type: DataTypes.DECIMAL,
            allowNull: false,
            unsigne:true
        },
        awards:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unsigne: true
        },
        release_date:{
            type: DataTypes.DATE,
            allowNull: false
        },
        length:{
            type: DataTypes.INTEGER,
            unsigne:true
        },
        genre_id:{
            type: DataTypes.INTEGER,
            unsigne: true
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
        tablename: "movies",
        timestamps: true
    };
    const Movie= sequelize.define(alias,cols,config);
    return Movie;
}