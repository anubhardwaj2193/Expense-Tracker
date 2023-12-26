import { MDBBtn } from 'mdb-react-ui-kit';
import React from 'react';
import { useSelector } from 'react-redux';

const CsvDownloadButton = () => {
  const data = useSelector((state) => state.expense.expenses);

  function generateBlob(data) {
    const blob = new Blob([JSON.stringify(data)], { type: 'text/csv' });
    return blob;
  }
  

  function handleDownloadClick(data) {
    const blob = generateBlob(data);
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'expenses.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  return (
    <MDBBtn className='m-2' onClick={() => handleDownloadClick(data)}>Download CSV</MDBBtn>
  );
};

export default CsvDownloadButton;
