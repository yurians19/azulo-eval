import { Repository } from 'typeorm'

export class RowRepository<T> extends Repository<T> {
  getAll() {
    return this.find()
  }

  async getOne(params: any): Promise<any> {
    console.log(this);
    
    return this.find(params)
  }

  async createOne(createEntityData: T) {
    return this.insert(createEntityData)
  }

  async updateOne(query: T, updateEntityData: T) {
    return this.update(query, updateEntityData)
  }

  async deleteBy(params: T): Promise<void> {
    const farm = await this.getOne(params)

    await this.remove(farm)
  }
}
