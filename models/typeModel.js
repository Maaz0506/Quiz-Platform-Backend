module.exports=(sequelize,DataTypes)=>{
    const Type=sequelize.define("type",{
        quizId:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
        quizName:{type:DataTypes.STRING,allowNull:false}
    })
    return Type
}