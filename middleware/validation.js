const { body, validationResult } = require('express-validator');

// Validation rules for lead data
exports.validateLead = [
  body('name')
    .notEmpty()
    .withMessage('Name is required')
    .isLength({ max: 100 })
    .withMessage('Name cannot exceed 100 characters')
    .trim(),
  
  body('email')
    .isEmail()
    .withMessage('Please enter a valid email')
    .normalizeEmail(),
  
  body('phone')
    .matches(/^(\+\d{1,3}[- ]?)?\d{10}$/)
    .withMessage('Please enter a valid phone number'),
  
  body('altPhone')
    .optional()
    .matches(/^(\+\d{1,3}[- ]?)?\d{10}$/)
    .withMessage('Please enter a valid phone number'),
  
  body('altEmail')
    .optional()
    .isEmail()
    .withMessage('Please enter a valid email')
    .normalizeEmail(),
  
  body('status')
    .optional()
    .isIn(['New', 'Contacted', 'Qualified', 'Lost'])
    .withMessage('Invalid status value'),
  
  body('qualification')
    .optional()
    .isIn(['High School', 'Bachelor', 'Master', 'PhD', 'Other'])
    .withMessage('Invalid qualification value'),
  
  body('interestField')
    .optional()
    .isIn(['Web Development', 'Data Science', 'Digital Marketing', 'Graphic Design', 'Other'])
    .withMessage('Invalid interest field value'),
  
  body('source')
    .isIn(['Website', 'Cold Call', 'Social Media', 'Referral', 'Campaign', 'Other'])
    .withMessage('Invalid source value'),
  
  body('assignedTo')
    .notEmpty()
    .withMessage('Assigned To is required'),
  
  body('passoutYear')
    .optional()
    .isInt({ min: 1900, max: new Date().getFullYear() + 5 })
    .withMessage('Passout year must be a valid year'),
  
  body('address')
    .optional()
    .isLength({ max: 500 })
    .withMessage('Address cannot exceed 500 characters'),
  
  body('notes')
    .optional()
    .isLength({ max: 1000 })
    .withMessage('Notes cannot exceed 1000 characters'),
  
  // Check for validation errors
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }
    next();
  }
];