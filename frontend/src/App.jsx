import { useState } from 'react';
import './App.css';
import EmpresaList from './components/EmpresaList';
import EmpresaForm from './components/EmpresaForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container, Typography, Box, Divider, AppBar, Toolbar, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Configuração do tema do Material-UI
const theme = createTheme({
  palette: {
    primary: { main: '#1976d2' },
    secondary: { main: '#d32f2f' },
  },
  typography: {
    h4: {
      fontWeight: 'bold',
    },
  },
});

const App = () => {
  const [updateList, setUpdateList] = useState(false);

  const handleSuccess = () => {
    setUpdateList(!updateList);
  };

  return (
    <>
      {/* Barra de Navegação */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Gerenciamento de Empresas
          </Typography>
          <Button color="inherit" onClick={() => alert('by - jjoaop')}>
            Sobre
          </Button>
          <Button color="inherit" onClick={() => alert('by - jjoaop')}>
            Contato
          </Button>
        </Toolbar>
      </AppBar>

      {/* Conteúdo Principal */}
      <Container maxWidth="md" sx={{ marginTop: 4, padding: 2 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Gerenciamento de Empresas
        </Typography>

        {/* Formulário de Criação */}
        <Box sx={{ marginBottom: 4, padding: 2, border: '1px solid #ddd', borderRadius: 2 }}>
          <EmpresaForm onSuccess={handleSuccess} />
        </Box>

        <Divider sx={{ marginBottom: 4 }} />

        {/* Lista de Empresas */}
        <Box>
          <EmpresaList key={updateList} />
        </Box>
      </Container>

      {/* Rodapé */}
      <Box
        component="footer"
        sx={{
          marginTop: 4,
          padding: 2,
          textAlign: 'center',
          backgroundColor: '#f5f5f5',
        }}
      >
        <Typography variant="body2" color="textSecondary">
          © {new Date().getFullYear()} by - jjoaop.
        </Typography>
      </Box>

      {/* Notificações */}
      <ToastContainer />
    </>
  );
};

// Envolvendo o componente `App` com o provedor de tema
const AppWithTheme = () => (
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);

export default AppWithTheme;
