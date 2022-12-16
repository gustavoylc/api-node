const boom = require('@hapi/boom');

function validatorHandler(schema, property) {
  return (req, res, next) => {
    /**
     * req[property] -> body -> POST
     * req[property] -> params -> GET
     * req[property] -> query -> QUERY
     */
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
      next(boom.badRequest(error));
    }
    next();
  };
}

module.exports = validatorHandler;
