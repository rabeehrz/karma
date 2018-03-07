'use strict'

module.exports = function (sequelize, DataTypes) {
  var EntityParentChidAssociation = sequelize.define('entity_parent_child_association', {
    id: {
      type: DataTypes.INTEGER(),
      primaryKey: true,
      autoIncrement: true
    },
    parent_id: {
      type: DataTypes.INTEGER(),
      allowNull: false
    },
    child_id: {
      type: DataTypes.INTEGER(),
      allowNull: false
    }

  })

  EntityParentChidAssociation.associate = function (models) {
    models.Entities.entity_parent_child_association.belongsTo(models.Entities.entities, {
      onDelete: 'CASCADE',
      foreignKey: {
        name: 'parent_id'
        // allowNull: false -- already defined
      }
    })
    models.Entities.entity_parent_child_association.belongsTo(models.Entities.entities, {
      onDelete: 'CASCADE',
      foreignKey: {
        name: 'child_id'
        // allowNull: false -- already defined
      }
    })
  }

  return EntityParentChidAssociation
}
