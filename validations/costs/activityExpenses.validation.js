import { check } from "express-validator";
import webToken from "../../middlewares/webToken.js";
import { validateFields } from "../../middlewares/validateFields.js";
import { activityExpensesHelper } from "../../helpers/costs/activityExpenses.helper.js";
import { spentsHelper } from "../../helpers/maintenance/spents.helper.js";

const { validateExistActivityExpensesById,validateExistWorkById } = activityExpensesHelper;
const { validateExistSpendById } = spentsHelper;
const { validateToken, validateFarm } = webToken;

const activityExpensesVali = {};

//Validate if exist expenses of activity
activityExpensesVali.validateExistActivityExpensesById = [
  check("id", "El id es obligatorio ").notEmpty(),
  check("id", "El id no es valido").isMongoId(),
  check("id").custom(async (id) => {
    await validateExistActivityExpensesById(id);
  }),
  check('token').custom(async (token, { req }) => {
    await validateToken(token);
    await validateFarm(req.headers.farm);
  }),
  validateFields,
];

//validate field for register expenses of activity
activityExpensesVali.validateRegisterActivityExpenses = [
  check("name", "El nombre del gasto de actividades es obligatorio").notEmpty(),
  check("worth", "El valor del gasto de actividades es obligatorio").notEmpty(),
  check("worth", "El valor del gasto de actividades no es valido").isNumeric(),
  check("work", "El trabajo es obligatorio").notEmpty(),
  check("work", "El trabajo no es valido").isMongoId(),
  check("work").custom(async (work) => {
    await validateExistWorkById(work); // modificar por pay
  }),
  check("spent", "El tipo de gasto es obligatorio").notEmpty(),
  check("spent", "El tipo de gasto no es valido").isMongoId(),
  check("spent").custom(async (spent) => {
    await validateExistSpendById(spent); 
  }),

  check('token').custom(async (token, { req }) => {
    await validateToken(token);
    await validateFarm(req.headers.farm);
  }),
  validateFields,
];

//validate field for update expenses of activity 
activityExpensesVali.validateUpdateActivityExpenses = [
  check("id", "El id es obligatorio").notEmpty(),
  check("id", "El id no es valido").isMongoId(),
  check("id").custom(async (id) => {
    await validateExistActivityExpensesById(id);
  }),
  check("name", "El nombre de la categoria es obligatorio").notEmpty(),
  check("worth", "El valor del gasto de actividades es obligatorio").notEmpty(),
  check("worth", "El valor del gasto de actividades no es valido").isNumeric(),
  check("work", "El trabajo es obligatorio").notEmpty(),
  check("work", "El trabajo no es valido").isMongoId(),
  check("work").custom(async (work) => {
    await validateExistWorkById(work); // modificar por pay
  }),
  check("spent", "El tipo de gasto es obligatorio").notEmpty(),
  check("spent", "El tipo de gasto no es valido").isMongoId(),
  check("spent").custom(async (spent) => {
    await validateExistSpendById(spent); 
  }),

  check('token').custom(async (token, { req }) => {
    await validateToken(token);
    await validateFarm(req.headers.farm);
  }),
  validateFields,
];

//validate token 
activityExpensesVali.validateHeaders = [
  check('token').custom(async (token, { req }) => {
    await validateToken(token);
    await validateFarm(req.headers.farm);
  }),
  validateFields,
];
export { activityExpensesVali }