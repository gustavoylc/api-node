class CategoryService {
  constructor() {}
  async create(data) {}

  async find() {}

  async findOne(id) {}

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }
}

module.exports = CategoryService;
