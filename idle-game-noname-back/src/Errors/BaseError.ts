export abstract class BaseError extends Error {
    constructor(message: string, errorCode: number) {
        super(message)
    }
}

export class MissingInput extends BaseError {
    constructor(){
        super("Missing input. Please check your request", 400)
    }
}