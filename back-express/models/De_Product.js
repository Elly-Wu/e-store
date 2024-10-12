import { DataTypes } from 'sequelize'

export default async function (sequelize) {
  return sequelize.define(
    'De_Product',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      category: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      brand: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      info: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      photo: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      size: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      tag: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      tableName: 'de_product', //直接提供資料表名稱
      timestamps: true, // 使用時間戳
      paranoid: false, // 軟性刪除
      underscored: true, // 所有自動建立欄位，使用snake_case命名
      createdAt: 'created_at', // 建立的時間戳
      updatedAt: 'updated_at', // 更新的時間戳
    }
  )
}
