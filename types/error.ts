type TResponse = {
    statusText: string,
    data: {
        success: boolean,
        message: string
    },
    status: number,

}

export default class UnknownError extends Error {
    response: TResponse;
    
    constructor(message: string, response: TResponse) {
        super(message);
        this.response = response
        Object.setPrototypeOf(this, UnknownError.prototype);
    }
    
}