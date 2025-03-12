import React, { useState } from "react";

export const Home = () => {
  
  const [showForm, setShowForm] = useState(false);

  
  const [editingContact, setEditingContact] = useState(null);

  
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  
  const [contactToDelete, setContactToDelete] = useState(null);

  
  const contacts = [
    {
      id: 1,
      name: "Mike Anamendolla",
      address: "5842 Hillcrest Rd",
      phone: "(870) 288-4149",
      email: "mike.ana@example.com",
    },
    {
      id: 2,
      name: "Mike Anamendolla",
      address: "5842 Hillcrest Rd",
      phone: "(870) 288-4149",
      email: "mike.ana@example.com",
    },
    {
      id: 3,
      name: "Mike Anamendolla",
      address: "5842 Hillcrest Rd",
      phone: "(870) 288-4149",
      email: "mike.ana@example.com",
    },
  ];

  // Mostrar formulario para añadir contacto
  const handleAddContact = () => {
    setEditingContact(null);  // null => modo "nuevo"
    setShowForm(true);
  };

  // Mostrar formulario para editar contacto
  const handleEditContact = (contact) => {
    setEditingContact(contact);  // objeto => modo "editar"
    setShowForm(true);
  };

  // Ocultar formulario y volver a la lista
  const handleHideForm = () => {
    setShowForm(false);
  };

  
  const handleShowDeleteModal = (contact) => {
    setContactToDelete(contact);
    setShowDeleteModal(true);
  };

  // Cerrar el modal sin eliminar
  const handleHideDeleteModal = () => {
    setShowDeleteModal(false);
    setContactToDelete(null);
  };

  
  const handleConfirmDelete = () => {
    console.log("Deleting contact:", contactToDelete?.name);
    
    handleHideDeleteModal();
  };

  return (
    <div className="container mt-4">
      {/* LISTA DE CONTACTOS (cuando showForm = false) */}
      {!showForm && (
        <>
          {/* Encabezado con botón "Add new contact" */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2 className="m-0">Contact List</h2>
            <button className="btn btn-success" onClick={handleAddContact}>
              Add new contact
            </button>
          </div>

          {/* Lista de contactos */}
          <ul className="list-unstyled">
            {contacts.map((contact) => (
              <li key={contact.id} className="card mb-3 p-3">
                <div className="d-flex align-items-center">
                  {/* Imagen circular */}
                  <img
                    src="https://picsum.photos/id/522/200/300"
                    alt="Profile"
                    className="rounded-circle me-3"
                    style={{ width: "80px", height: "80px", objectFit: "cover" }}
                  />
                  {/* Datos del contacto */}
                  <div className="flex-grow-1">
                    <h5 className="mb-1">{contact.name}</h5>
                    <p className="mb-1">
                      <i className="fas fa-map-marker-alt me-2"></i>
                      {contact.address}
                    </p>
                    <p className="mb-1">
                      <i className="fas fa-phone me-2"></i>
                      {contact.phone}
                    </p>
                    <p className="mb-1">
                      <i className="fas fa-envelope me-2"></i>
                      {contact.email}
                    </p>
                  </div>

                  {/* Ícono de lápiz => Editar */}
                  <i
                    className="fas fa-pencil-alt me-3"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleEditContact(contact)}
                  ></i>

                  {/* Ícono de papelera => Eliminar (abre modal) */}
                  <i
                    className="fas fa-trash"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleShowDeleteModal(contact)}
                  ></i>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}

    

      {/* MODAL DE CONFIRMACIÓN PARA ELIMINAR (cuando showDeleteModal = true) */}
      {showDeleteModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "5px",
              maxWidth: "400px",
              width: "100%",
            }}
          >
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="m-0">Are you sure?</h5>
              <button className="btn-close" onClick={handleHideDeleteModal}></button>
            </div>
            <p>If you delete this thing the entire universe will go down!</p>
            <div className="d-flex justify-content-end">
              <button
                className="btn btn-secondary me-2"
                onClick={handleHideDeleteModal}
              >
                Oh no!
              </button>
              <button className="btn btn-primary" onClick={handleConfirmDelete}>
                Yes baby!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
