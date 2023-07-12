import { check } from "express-validator";
import webToken from "../../middlewares/webToken.js";
import { validateFields } from "../../middlewares/validateFields.js";
import { payrollHelper } from "../../helpers/payroll/payroll.helper.js";

const { 
  validateExistPeopleById,
  validateExistPayrollById,
  validateExistTypePayById,
  validateExistActivityById
 } = payrollHelper;
const { validateToken, validateFarm } = webToken;

const payrollVali = {};


//validate if exist payroll
payrollVali.validateExistPayroll = [
  check("id", "El id es obligatorio").notEmpty(),
  check("id", "El id no es valido").isMongoId(),
  check("id").custom(async (id, { req }) => {
    await validateExistPayrollById(id, req.headers.farm);
  }),
  check("token").custom(async (token, { req }) => {
    await validateToken(token);
    await validateFarm(req.headers.farm);
  }),
  validateFields,
];

//validate fields for register payroll
payrollVali.validateRegisterPayroll = [
  check("people", "El trabajador es obligatorio").notEmpty(),
  check("people", "El trabajador no es valido").isMongoId(),
  check("people").custom(async (people, { req }) => {
    await validateExistPeopleById(people, req.headers.farm);
  }),
  check("typepay", "El tipo de pago es obligatorio").notEmpty(),
  check("typepay", "El tipo de pago no es valido").isMongoId(),
  check("typepay").custom(async (typepay, { req }) => {
    await validateExistTypePayById(typepay, req.headers.farm);
  }),
  check("activity", "La actividad es obligatoria").notEmpty(),
  check("activity", "La actividad no es valida").isMongoId(),
  check("activity").custom(async (activity, { req }) => {
    await validateExistActivityById(activity, req.headers.farm);
  }),
  check("worth", "El valor del pago es obligatorio").notEmpty(),
  check("worth", "El valor del pago no es valido").isNumeric(),
  check("statuspay", "El estado del pago es obligatorio").notEmpty(),
  check("statuspay", "El estado del pago no es valido").isFloat({ min: 0, max: 1 }),
  
  check("token").custom(async (token, { req }) => {
    await validateToken(token);
    await validateFarm(req.headers.farm);
  }),
  validateFields,
];

//validate fields for update payroll
payrollVali.validateUpdatePayroll = [
  check("id", "El id es obligatorio").notEmpty(),
  check("id", "El id no es valido").isMongoId(),
  check("id").custom(async (id, { req }) => {
    await validateExistPayrollById(id, req.headers.farm);
  }),
  check("people", "El trabajador es obligatorio").notEmpty(),
  check("people", "El trabajador no es valido").isMongoId(),
  check("people").custom(async (people, { req }) => {
    await validateExistPeopleById(people, req.headers.farm);
  }),
  check("typepay", "El tipo de pago es obligatorio").notEmpty(),
  check("typepay", "El tipo de pago no es valido").isMongoId(),
  check("typepay").custom(async (typepay, { req }) => {
    await validateExistTypePayById(typepay, req.headers.farm);
  }),
  check("activity", "La actividad es obligatoria").notEmpty(),
  check("activity", "La actividad no es valida").isMongoId(),
  check("activity").custom(async (activity, { req }) => {
    await validateExistActivityById(activity, req.headers.farm);
  }),
  check("worth", "El valor del pago es obligatorio").notEmpty(),
  check("worth", "El valor del pago no es valido").isNumeric(),
  check("statuspay", "El estado del pago es obligatorio").notEmpty(),
  check("statuspay", "El estado del pago no es valido").isFloat({ min: 0, max: 1 }),
 
  check("token").custom(async (token, { req }) => {
    await validateToken(token);
    await validateFarm(req.headers.farm);
  }),
  validateFields,
];

//validate token
payrollVali.validateHeaders = [
  check("token").custom(async (token, { req }) => {
    await validateToken(token);
    await validateFarm(req.headers.farm);
  }),
  validateFields,
];

export { payrollVali };
