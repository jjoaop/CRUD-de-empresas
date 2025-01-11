const db = require('../db/database');

//criar empresa
exports.createEmpresa = (req, res) => {
    const { nome, cnpj, endereco, telefone } = req.body;
  
    // Verifica se todos os campos obrigatórios foram enviados
    if (!nome || !cnpj || !endereco || !telefone) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios!' });
    }
  
    const query = `
      INSERT INTO empresas (nome, cnpj, endereco, telefone)
      VALUES (?, ?, ?, ?)
    `;
  
    db.run(query, [nome, cnpj, endereco, telefone], function (err) {
      if (err) {
        return res.status(500).json({ error: 'Erro ao criar empresa', details: err.message });
      }
      res.status(201).json({ message: 'Empresa criada com sucesso!', id: this.lastID });
    });
  };
  

// Listar todas as empresas
exports.getEmpresas = (req, res) => {
    const query = `SELECT * FROM empresas`;
  
    db.all(query, [], (err, rows) => {
      if (err) {
        return res.status(500).json({ error: 'Erro ao buscar empresas', details: err.message });
      }
      res.status(200).json(rows);
    });
  };
  
// Atualizar uma empresa
exports.updateEmpresa = (req, res) => {
    const { id } = req.params;
    const { nome, cnpj, endereco, telefone } = req.body;
  
    const query = `
      UPDATE empresas
      SET nome = ?, cnpj = ?, endereco = ?, telefone = ?
      WHERE id = ?
    `;
  
    db.run(query, [nome, cnpj, endereco, telefone, id], function (err) {
      if (err) {
        return res.status(500).json({ error: 'Erro ao atualizar empresa', details: err.message });
      }
      if (this.changes === 0) {
        return res.status(404).json({ error: 'Empresa não encontrada' });
      }
      res.status(200).json({ message: 'Empresa atualizada com sucesso!' });
    });
  };
  
// Deletar uma empresa
exports.deleteEmpresa = (req, res) => {
    const { id } = req.params;
  
    const query = `DELETE FROM empresas WHERE id = ?`;
  
    db.run(query, [id], function (err) {
      if (err) {
        return res.status(500).json({ error: 'Erro ao deletar empresa', details: err.message });
      }
      if (this.changes === 0) {
        return res.status(404).json({ error: 'Empresa não encontrada' });
      }
      res.status(200).json({ message: 'Empresa deletada com sucesso!' });
    });
  };
  