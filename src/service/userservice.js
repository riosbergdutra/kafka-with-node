const User = require('../model/usermodel');
const { runProducer } = require('../../producer');

class UserService {
  async createUser(nome) {
    try {
      const user = new User({ nome });
      await user.save();

      await runProducer('user-created', user.toObject());
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      throw error; 
    }
  }

  async updateUser(userId, updatedNome) {
    try {
      const updatedUser = await User.findByIdAndUpdate(userId, { nome: updatedNome }, { new: true });

      if (!updatedUser) {
        throw new Error('Usuário não encontrado');
      }

      await runProducer('user-updated', updatedUser.toObject());
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error);
      throw error;
    }
  }

  async deleteUser(userId) {
    try {
      const deletedUser = await User.findByIdAndDelete(userId);

      if (!deletedUser) {
        throw new Error('Usuário não encontrado');
      }

      await runProducer('user-deleted', deletedUser.toObject());
    } catch (error) {
      console.error('Erro ao excluir usuário:', error);
      throw error;
    }
  }

  async readUser(userId) {
    try {
      return await User.findById(userId);
    } catch (error) {
      console.error('Erro ao ler usuário:', error);
      throw error;
    }
  }
}

module.exports = new UserService();
