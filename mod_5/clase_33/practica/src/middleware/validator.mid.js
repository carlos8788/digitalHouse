const { body, validationResult } = require('express-validator');

const formValidator = [
    body('nombre').notEmpty().withMessage('El nombre es requerido'),
    body('color').notEmpty().withMessage('El color es requerido'),
    body('email').isEmail().withMessage('El email es requerido y debe ser válido'),
    body('edad').optional().isInt({ min: 0 }).withMessage('La edad debe ser un número válido'),
];

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.render('formulario', { data: undefined, errors: errors.array() });
    }
    next();
};

module.exports = {
    formValidator,
    validate,
};
