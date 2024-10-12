import { DataTypes } from 'sequelize'

export default async function (sequelize) {
  return sequelize.define(
    'Review',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      u_photo: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      user: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      shop: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      comment: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      tableName: 'review', //直接提供資料表名稱
      timestamps: true, // 使用時間戳
      paranoid: false, // 軟性刪除
      underscored: true, // 所有自動建立欄位，使用snake_case命名
      createdAt: 'created_at', // 建立的時間戳
      updatedAt: 'updated_at', // 更新的時間戳
    }
  )
}
