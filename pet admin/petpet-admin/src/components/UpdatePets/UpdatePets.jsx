import React, { useEffect, useState } from "react";
import EditPetModal from "../EditPetModal/EditPetModal";
import "./UpdatePets.css";

const UpdatePets = () => {
  const [pets, setPets] = useState([]);
  const [editingPet, setEditingPet] = useState(null);

  useEffect(() => {
    const savedPets = JSON.parse(localStorage.getItem("pets")) || [];
    setPets(savedPets);
  }, []);

  const handleDelete = (id) => {
    const updatedPets = pets.filter((pet) => pet.id !== id);
    setPets(updatedPets);
    localStorage.setItem("pets", JSON.stringify(updatedPets));
  };

  const handleEdit = (pet) => {
    setEditingPet(pet);
  };

  const updatePet = (updatedPet) => {
    const updatedPets = pets.map((pet) =>
      pet.id === updatedPet.id ? updatedPet : pet
    );
    setPets(updatedPets);
    localStorage.setItem("pets", JSON.stringify(updatedPets));
    setEditingPet(null);
  };

  return (
    <div className="update-container">
      <h2>Manage Pets</h2>
      {pets.map((pet) => (
        <div key={pet.id} className="pet-card">
          <p><strong>{pet.name}</strong> - {pet.type}</p>
          <p>{pet.description}</p>
          <p>Price: Rs.{pet.price}</p>
          <p>Quantity: {pet.quantity}</p>
          <img src={pet.image} alt={pet.name} height={80} />
          <button onClick={() => handleEdit(pet)}>Edit</button>
          <button onClick={() => handleDelete(pet.id)}>Delete</button>
        </div>
      ))}
      {editingPet && (
        <EditPetModal
          pet={editingPet}
          onClose={() => setEditingPet(null)}
          onSave={updatePet}
        />
      )}
    </div>
  );
};

export default UpdatePets;
