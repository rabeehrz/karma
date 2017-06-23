/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wpCommentmeta', {
    metaId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'meta_id'
    },
    commentId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0',
      field: 'comment_id'
    },
    metaKey: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'meta_key'
    },
    metaValue: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'meta_value'
    }
  }, {
    tableName: 'wp_commentmeta'
  });
};