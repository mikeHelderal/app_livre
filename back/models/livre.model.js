
export default (connection, DataTypes) => {
    connection.define(
        'livre',
        {
            nom: {
                type: DataTypes.STRING,
                allowNull: false
            },
            prenom: {
                type: DataTypes.STRING,
                allowNull: false
            },
        }
    );
}