export const unknownServerError = "an unknown server error occurred";
export const invalidMessageError = "invalid message";
export const serviceError = "service error";
export const unknownDatabaseError = "an unknown database error occurred";
export const databaseError = "a database error occurred";
export const databaseConnectionError = "unable to connect to database server";
export const userNotFoundError = "user not found";
export const incorrectCredentials = "email or password is incorrect";
export const invalidLoginToken = "invalid onetime login token";
export const invalidToken = "invalid token";
export const jwtError = "a JWT error occurred";
export const noPermissionError = "you do not have permission";
export const adminPermissionError = "this is an admin protected route";
export const sellerPermissionError = "this is an seller protected route";
export const customerPermissionError = "this is an customer protected route";
export const unauthorizedError = "unauthorized";
export const unknownEventError = "webhook event not recognized";
export const resourceNotFoundError = "resource not found";
export const moduleError = "a module error occurred";
export const paystack = "a paystack error occurred";
export const initializeTransactionError = "error initializing transaction";
export const transactionNotSuccessful = "Transactional was not successful";
export const generateReferenceError = "error generating transaction reference";
export const enqueueError = "Enqueue error";
export const userAlreadySubscribedError =
  "User already on a plan, please wait till it expires";
export const userNotSubscribedError = "you are not subscribed to this plan";
export const subscriptionNotActiveError =
  "selected subscription is currently not active";
export const middlewareErrorLabel = "middleware error";
export const invalidUploadServer = "please use a valid upload server";
export const validationError = "a validation error occurred";
export const errorTranscodingVideo =
  "An error occurred while transcoding video";
export const SERVER_UNKNOWN = "an unknown server error occurred";
export const DATABASE_CONNECTION = "unable to connect to database server";
export const DATABASE = "a database error occurred";
export const COLUMN_LIMIT = "column value is too long";
export const NO_PERMISSION = "Permission not granted";
export const UNAUTHORIZED = "unauthorized";
export const invalidParam = (param: string) => `${param} is invalid`;
export const invalidId = (param: string) => `${param} id is invalid`;
export const notOwner = (param: string) => `you do not own this ${param}`;
export const existError = (param: string) => `${param} already exist`;
export const notExistError = (param: string) => `${param} does not exist`;
export const recordedError = (param: string) => `${param} already recorded`;
export const verifiedError = "account already verified";
export const customerCourseError = "sorry you can't add this course";
export const fieldRequired = (field: string) => `${field} is required`;
export const uploadError = (param: string) => `error uploading ${param}`;
export const certifcateError =
  "kindly complete course before requesting for certificate";
export const invalidEmailKey = "Email template key is invalid";
export const verifyError = "Kindly verify your account to continue";
export const transactionNotFoundError = "transaction with reference not found";
export const mismatchTransactionAmount = "transaction amount does not match";
export const updateTransactionError = "error updating transaction";
export const mismatchTransactionTypeError =
  "type does not match type of transaction with reference";
export const mismatchAmountTypeError =
  "amount does not match amount of transaction with reference";
export const transactionConfirmedError =
  "transaction with reference has already been confirmed";
export const discountWithCodeExist = "Discount with code already exist";
export const discountNotExist = "Discount not found";
export const transactionFailed = "Transaction was not successful";
export const transactionPending = "Transaction is still pending";
export const likeErrorMessage = "you have already liked his deal";
export const shareErrorMessage = "Transaction is still pending";
export const subscriptionError =
  "sorry Kindly subscribe for a plan to continue";
