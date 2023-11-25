class ErrorHandler {
    constructor(status,message){
        this.status = status;
        this.message = message

    }
  static  validationError(message = "Fields are required"){
       return new ErrorHandler(422,message)
    }
    static  serverError(message = "Internal Server Error"){
        return new ErrorHandler(500,message)
    }
}
module.exports = ErrorHandler