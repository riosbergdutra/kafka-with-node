const userService = require('../service/userservice')

class UserController {
  async createUser(req, res) {
    const { nome } = req.body;
    await userService.createUser(nome);
  }

  async updateUser(req, res) {
    const { userId, updatedNome } = req.body; // Alteração aqui
    await userService.updateUser(userId, updatedNome);
  }

  async deleteUser(req, res) {
    const { userId } = req.params;
    await userService.deleteUser(userId);
  }

  async readUser(req, res) {
    const { userId } = req.params;
    await userService.readUser(userId);
    
  }
}

module.exports = new UserController();
