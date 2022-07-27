import { Aggregate, Document, FilterQuery, Model, UpdateQuery } from 'mongoose'

export abstract class DocumentRepository<T extends Document> {
  constructor(protected readonly entityModel: Model<T>) {}

  async findWithAggregate(pipeline: any[]): Promise<Aggregate<T[]> | null> {
    return this.entityModel.aggregate<T>(pipeline)
  }

  async findOne(
    entityFilterQuery: FilterQuery<T>,
    projection?: Record<string, unknown>
  ): Promise<T | null> {
    return this.entityModel
      .findOne(entityFilterQuery, {
        __v: 0,
        ...projection
      })
      .exec()
  }

  async find(entityFilterQuery: FilterQuery<T>): Promise<T[] | null> {
    return this.entityModel.find(entityFilterQuery)
  }

  async create(createEntityData: unknown): Promise<T> {
    return this.entityModel.create(createEntityData)
  }

  async findOneAndUpdate(
    entityFilterQuery: FilterQuery<T>,
    updateEntityData: UpdateQuery<unknown>
  ): Promise<T | null> {
    return this.entityModel.findOneAndUpdate(
      entityFilterQuery,
      updateEntityData,
      {
        new: true
      }
    )
  }

  async deleteMany(entityFilterQuery: FilterQuery<T>): Promise<boolean> {
    const deleteResult = await this.entityModel.deleteMany(entityFilterQuery)
    return deleteResult.deletedCount >= 1
  }
}
