import Modal from 'react-modal';
import { Header} from './components/Header';
import { Dashboard} from './components/Dashboard';
import { GlobalStyle } from './styles/global';
import { TransactionsTable } from './components/TransactionsTable';
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './TransactionsContext';


Modal.setAppElement('#root')

export function App() {
  
  const [isNewTransactionModalOpen, setIsNewTransactrionModalOpen]= useState(false);

  function handleOpenNewTransactionModal(){
      setIsNewTransactrionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
      setIsNewTransactrionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard/>
      <NewTransactionModal 
        isOpen = {isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}  
      />
      <TransactionsTable/>
      <GlobalStyle/>
    </TransactionsProvider>
  );
}


