/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Modal from 'react-modal';
import MembershipCard from '../components/MembershipCard';
import { cards } from '../data/cards';
import MainTemplate from '../templates/MainTemplate';

const Membership = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null); // dodana zmienna stanu

  const handleOpenModal = (card) => {
    // przekazywanie wybranego planu
    setSelectedCard(card);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleCloseModal();
  };

  return (
    <div>
      <MainTemplate>
        <div className="flex flex-col items-center">
          <h3>Our pricing</h3>
          <h1 className="font-bold text-primary shadow-green-100 drop-shadow-md">
            Choose Your Best Plan
          </h1>
          <p>Choose the plan that suits you</p>
        </div>
        <div className="my-6 flex gap-4">
          {cards.map(({ title, price, benefits }) => (
            // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
            <div key={title} onClick={() => handleOpenModal(title)}>
              {' '}
              {/* przekazywanie tytułu planu */}
              <MembershipCard title={title} price={price} benefits={benefits} />
            </div>
          ))}
        </div>
        <Modal
          className="custom-modal fixed left-2/4 top-1/2 h-[70%] w-1/2 -translate-x-1/2 -translate-y-1/2 bg-white shadow-xl shadow-primary"
          isOpen={showModal}
          onRequestClose={handleCloseModal}
          contentLabel="Membership Plan"
          overlayStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
        >
          <h2 className="py-8 text-center">
            You chose plan:
            <br />
            <strong style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
              {selectedCard}
            </strong>
          </h2>

          <form onSubmit={handleSubmit} />
          <button
            onClick={handleCloseModal}
            className="absolute right-4 top-[-10px] translate-x-full rounded-3xl bg-primary p-2 text-white"
          >
            X
          </button>
        </Modal>
      </MainTemplate>
    </div>
  );
};
export default Membership;
