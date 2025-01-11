const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const empresasRoutes = require('./routes/empresas');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api/empresas', empresasRoutes);


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
