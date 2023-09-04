module.exports = (sequelize, DataTypes) => {
    const History = sequelize.define("history", {
      scoreId:{type:DataTypes.INTEGER,allowNull:false,primaryKey:true,unique:true},
      userId: { type: DataTypes.UUID, allowNull: false,references:{model:"users",key:"userId"},default:DataTypes.UUIDV4 ,validate:{len:[3,40]}},
      quizId: { type: DataTypes.INTEGER, allowNull: false,references:{model:"types",key:"quizId"} },
      score: { type: DataTypes.INTEGER, allowNull: false },
      playedAt:{type:DataTypes.DATE,allowNull:false}
    });
    return History
  };
  