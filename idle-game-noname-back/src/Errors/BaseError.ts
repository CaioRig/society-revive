export abstract class BaseError extends Error {
    constructor(message: string, code: number) {
        super(message)
    }
}

