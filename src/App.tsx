import React, { useState } from 'react';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import ProductDetails from './components/ProductDetails';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import Modal from './components/Modal';
import PurchaseForm from './components/PurchaseForm';
import { FormData } from './types';
import { sendOrderToTelegram } from './utils/telegramService';

function App() {
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  const handleOpenPurchaseModal = () => {
    setIsPurchaseModalOpen(true);
  };

  const handleClosePurchaseModal = () => {
    setIsPurchaseModalOpen(false);
  };

  const handleCloseConfirmationModal = () => {
    setIsConfirmationModalOpen(false);
  };

  const handleFormSubmit = async (formData: FormData) => {
    // Send order to Telegram
    await sendOrderToTelegram(formData);
    
    // Close purchase modal and open confirmation modal
    setIsPurchaseModalOpen(false);
    setIsConfirmationModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Hero onOpenModal={handleOpenPurchaseModal} />
      <Introduction />
      <Features />
      <HowItWorks />
      <Testimonials />
      <ProductDetails />
      <CallToAction onOpenModal={handleOpenPurchaseModal} />
      <Footer />

      {/* Purchase Modal */}
      <Modal isOpen={isPurchaseModalOpen} onClose={handleClosePurchaseModal}>
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Finalize seu Pedido Rivosex Gel
        </h2>
        <PurchaseForm onSubmit={handleFormSubmit} />
      </Modal>

      {/* Confirmation Modal */}
      <Modal isOpen={isConfirmationModalOpen} onClose={handleCloseConfirmationModal} modalType="confirmation">
        <h2 className="text-3xl font-bold text-green-600 mb-4">Pedido Confirmado! 🎉</h2>
        <p className="text-lg text-gray-700 mb-6">Seu pedido do Rivosex Gel foi recebido com sucesso!</p>
        <p className="text-md text-gray-600 mb-4">Aguarde a entrega em até 24 horas.</p>
        <button 
          onClick={handleCloseConfirmationModal}
          className="btn-primary inline-block text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
        >
          Fechar
        </button>
      </Modal>
    </div>
  );
}

export default App;