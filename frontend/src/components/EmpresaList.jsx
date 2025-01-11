import React, { useEffect, useState } from 'react';
import api from '../api';
import { toast } from 'react-toastify';
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  TextField,
  Box,
  Grid,
  Pagination,
  Divider,
  Dialog,
  DialogTitle,
  DialogActions,
  Fab,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import BusinessIcon from '@mui/icons-material/Business';

const EmpresaList = () => {
  const [empresas, setEmpresas] = useState([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedEmpresa, setSelectedEmpresa] = useState(null);
  const itemsPerPage = 6;

  useEffect(() => {
    api.get('/empresas')
      .then((response) => {
        setEmpresas(response.data);
      })
      .catch((error) => {
        toast.error('Erro ao buscar empresas.');
        console.error('Erro ao buscar empresas:', error);
      });
  }, []);

  const handleDelete = (id) => {
    setDialogOpen(true);
    setSelectedEmpresa(id);
  };

  const confirmDelete = () => {
    api.delete(`/empresas/${selectedEmpresa}`)
      .then(() => {
        setEmpresas(empresas.filter((empresa) => empresa.id !== selectedEmpresa));
        toast.success('Empresa excluída com sucesso!');
      })
      .catch((error) => {
        toast.error('Erro ao excluir empresa.');
        console.error('Erro ao deletar empresa:', error);
      })
      .finally(() => {
        setDialogOpen(false);
        setSelectedEmpresa(null);
      });
  };

  const filteredEmpresas = empresas.filter((empresa) =>
    empresa.nome.toLowerCase().includes(search.toLowerCase())
  );

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedEmpresas = filteredEmpresas.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const totalPages = Math.ceil(filteredEmpresas.length / itemsPerPage);

  return (
    <Box sx={{ maxWidth: 800, margin: '0 auto', padding: 2 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Lista de Empresas
      </Typography>

      {/* Campo de Busca */}
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 3 }}>
        <SearchIcon sx={{ marginRight: 1 }} />
        <TextField
          label="Buscar por nome"
          variant="outlined"
          fullWidth
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Box>

      <Divider sx={{ marginBottom: 2 }} />

      {/* Lista de Empresas */}
      <Grid container spacing={2}>
        {paginatedEmpresas.length > 0 ? (
          paginatedEmpresas.map((empresa) => (
            <Grid item xs={12} sm={6} key={empresa.id}>
              <Card sx={{ transition: '0.3s', '&:hover': { transform: 'scale(1.02)' } }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    <BusinessIcon sx={{ verticalAlign: 'middle', marginRight: 1 }} />
                    {empresa.nome}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    <strong>CNPJ:</strong> {empresa.cnpj}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    <LocationOnIcon sx={{ verticalAlign: 'middle', marginRight: 1 }} />
                    Endereço: {empresa.endereco}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    <PhoneIcon sx={{ verticalAlign: 'middle', marginRight: 1 }} />
                    Telefone: {empresa.telefone}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleDelete(empresa.id)}
                    startIcon={<DeleteIcon />}
                    fullWidth
                  >
                    Excluir
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="body2" color="textSecondary" align="center" sx={{ width: '100%' }}>
            Nenhuma empresa encontrada.
          </Typography>
        )}
      </Grid>

      {/* Paginação */}
      {totalPages > 1 && (
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={(event, value) => setCurrentPage(value)}
          sx={{ marginTop: 3, display: 'flex', justifyContent: 'center' }}
        />
      )}

      {/* Botão Flutuante */}
      <Fab
        color="primary"
        aria-label="add"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
        onClick={() => toast.info('Adicionar nova empresa!')}
      >
        <AddIcon />
      </Fab>

      {/* Diálogo de Confirmação */}
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Confirmar Exclusão</DialogTitle>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)} color="primary">
            Cancelar
          </Button>
          <Button onClick={confirmDelete} color="secondary">
            Excluir
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default EmpresaList;
