import React, { useState, useEffect } from 'react';
import api from '../api';
import { toast } from 'react-toastify';
import { TextField, Button, Typography, Box } from '@mui/material';

const EmpresaForm = ({ onSuccess, empresaParaEditar = null }) => {
  const [form, setForm] = useState({
    nome: '',
    cnpj: '',
    endereco: '',
    telefone: '',
  });

  useEffect(() => {
    if (empresaParaEditar) {
      setForm(empresaParaEditar);
    }
  }, [empresaParaEditar]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const apiCall = empresaParaEditar
      ? api.put(`/empresas/${empresaParaEditar.id}`, form)
      : api.post('/empresas', form);

    apiCall
      .then(() => {
        toast.success(empresaParaEditar ? 'Empresa atualizada com sucesso!' : 'Empresa criada com sucesso!');
        onSuccess();
        setForm({ nome: '', cnpj: '', endereco: '', telefone: '' }); // Limpar formulário
      })
      .catch((error) => {
        toast.error('Erro ao salvar empresa. Tente novamente.');
        console.error('Erro ao salvar empresa:', error);
      });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 500, margin: '0 auto', padding: 2 }}>
      <Typography variant="h5" gutterBottom>
        {empresaParaEditar ? 'Editar Empresa' : 'Nova Empresa'}
      </Typography>
      <TextField
        label="Nome da Empresa"
        name="nome"
        value={form.nome}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="CNPJ"
        name="cnpj"
        value={form.cnpj}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Endereço"
        name="endereco"
        value={form.endereco}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Telefone"
        name="telefone"
        value={form.telefone}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        {empresaParaEditar ? 'Atualizar' : 'Salvar'}
      </Button>
    </Box>
  );
};

export default EmpresaForm;
