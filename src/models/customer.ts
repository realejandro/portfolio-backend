import { DataTypes, Model, Optional, Sequelize } from "sequelize";

interface CustomerAttributes {
    id: number;
    name:string;
    email: string;
    message: string;
}

interface CustomerCreationAttributes extends Optional<CustomerAttributes, 'id'> {};

export class Customer extends Model<CustomerAttributes, CustomerCreationAttributes> implements CustomerAttributes {
  public id!: number;
  public name!: string;
  public email!: string;
  public message!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

}


export function CustomerFactory(sequelize: Sequelize): typeof Customer {
  Customer.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      message: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: 'customers',
      sequelize,
      timestamps: true
    }
  );

  return Customer;
}

