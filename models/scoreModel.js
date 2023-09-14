module.exports = (sequelize, DataTypes) => {
    const History = sequelize.define("history", {
      scoreId:{type:DataTypes.UUIDV4,allowNull:false,primaryKey:true,unique:true, defaultValue: DataTypes.UUIDV4,
        validate: { len: [3, 40] }},
      email: { type: DataTypes.STRING, allowNull: false},
      quizId: { type: DataTypes.INTEGER, allowNull: false,references:{model:"types",key:"quizId"} },
      score: { type: DataTypes.INTEGER, allowNull: false },
      // playedAt:{type:DataTypes.DATE,allowNull:false}
    });
    return History
  };
