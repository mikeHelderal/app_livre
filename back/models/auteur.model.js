export default (connection, DataTypes) => {
    connection.define(
        'Auteur',
        {           
            nom: {
                type: DataTypes.STRING,
                allowNull: false
            },
            prenom: {
                type: DataTypes.DATE,
                allowNull: false
            }
            
        }
    );
}