import { useState, useEffect } from 'react';

function PropertyList() {
  const [properties, setProperties] = useState([]);
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Récupération des propriétés
        const propertiesResponse = await fetch('http://localhost:3002/api/properties');
        const propertiesData = await propertiesResponse.json();
        setProperties(propertiesData);

        // Récupération des options
        const optionsResponse = await fetch('http://localhost:3002/api/options');
        const optionsData = await optionsResponse.json();
        setOptions(optionsData);

        setLoading(false);
      } catch (err) {
        setError('Erreur lors de la récupération des données');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Liste des Propriétés</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {properties.map((property) => (
          <div key={property.id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{property.name}</h2>
            <p className="text-gray-600">{property.type}</p>
            <p className="text-gray-700">{property.description}</p>
            <p className="text-gray-600">Ville: {property.city}</p>
            <p className="text-gray-600">Surface: {property.surface} m²</p>
            <p className="font-bold text-green-600">Prix: {property.price}€</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold my-4">Options disponibles</h2>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <span key={option.id} className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
            {option.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default PropertyList;
