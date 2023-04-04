import { Button } from '@mui/material';
import { useField } from 'formik';
import React from 'react';

export default function File({ label, ...props }) {
  const [field, meta, helpers] = useField(props);

  // console.log(field, meta, helpers);

  const changeHandle = e => {
    console.log(e.target);
    helpers.setValue(e.target.files[0]);
  };

  async function fileOpen() {
    try {
      const [fileHandle] = await window.showOpenFilePicker();
      const file = await fileHandle.getFile();
      helpers.setValue(file);
    } catch (err) {
      helpers.setValue('');
    }
  }

  return (
    <>
      <label>
        <span>{label}</span>
      </label>

      <Button onClick={fileOpen} type="button" variant="contained">
        {field.value ? 'File Choosen' : 'Choose File'}
      </Button>
    </>
  );
}
