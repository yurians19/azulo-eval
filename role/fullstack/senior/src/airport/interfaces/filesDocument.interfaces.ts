export interface IFilesDocument {
    key: string
    keyIntermediate?: string
    keyThumbnails?: string
    codeMd5: string
    path: string
    pathIntermediate?: string
    pathThumbnails?: string
    nameFile: string
    mimetype: string
    size: number
    encoding?: string,
    isPrivate: boolean
}
