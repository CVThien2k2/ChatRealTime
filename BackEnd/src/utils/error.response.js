const StatusCode = {
  FORBIDDEN: 403,
  CONFLICT: 409,
  NOT_FOUND: 404,
  UNAUTHORIZED: 401,
};

const ReasonStatusCode = {
  FORBIDDEN: "Forbidden error",
  CONFLICT: "Conflict error",
  NOT_FOUND: "Not found error",
  UNAUTHORIZED: "Unauthorized error",
};

class ErrorResponse extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}
class ConflictRequestError extends ErrorResponse {
  constructor(
    message = ReasonStatusCode.CONFLICT,
    statusCode = StatusCode.CONFLICT
  ) {
    super(message, statusCode);
  }
}
class BadRequestError extends ErrorResponse {
  constructor(
    message = ReasonStatusCode.FORBIDDEN,
    statusCode = StatusCode.FORBIDDEN
  ) {
    super(message, statusCode);
  }
}
class AuthFailureError extends ErrorResponse {
  constructor(
    message = ReasonStatusCode.UNAUTHORIZED,
    statusCode = StatusCode.UNAUTHORIZED
  ) {
    super(message, statusCode);
  }
}
class NotFoundError extends ErrorResponse {
  constructor(
    message = ReasonStatusCode.NOT_FOUND,
    statusCode = StatusCode.NOT_FOUND
  ) {
    super(message, statusCode);
  }
}

module.exports = {
  BadRequestError,
  ConflictRequestError,
  AuthFailureError,
  NotFoundError,
};
