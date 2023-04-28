export abstract class BaseError extends Error {
    constructor(message: string) {
        super(message)
    }
}

export class MissingInput extends BaseError {
    constructor(){
        super("Missing input. Please check your request")
    }
}