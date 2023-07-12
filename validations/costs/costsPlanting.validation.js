import { check } from "express-validator";
import webToken from "../../middlewares/webToken.js";
import { validateFields } from "../../middlewares/validateFields.js";
import { costsHelper } from "../../helpers/costs/costsPlanting.helper.js";
import { spentsHelper } from "../../helpers/maintenance/spents.helper.js";


const { validateExistSpendById } = spentsHelper;
const { validateExistCostsById,validateExistLotById } = costsHelper;
const { validateToken, validateFarm } = webToken;

const costsVali = {};

//Validate if exists costs 
costsVali.validateExistCostsById = [
  check("id", "El id es obligatorio ").notEmpty().exists(),
  check("id", "El id no es valido").isMongoId(),
  check("id").custom(async (id) => {
    await validateExistCostsById(id);
  }),
  check('token').custom(async (token, { req }) => {
    await validateToken(token);
    await validateFarm(req.headers.farm);
  }),
  validateFields,
];

//Validate fields for register costs 
costsVali.validateRegisterCosts = [
  check("name", "El nombre del gasto de actividades es obligatorio").notEmpty(),
  check("lot", "El lote es obligatorio").notEmpty(),
  check("lot", "El lote no es valido").isMongoId(),
  check("lot").custom(async (lot) => {
    await validateExistLotById(lot);
  }),
  check("worth", "El valor del gasto de actividades es obligatorio").notEmpty(),
  check("worth", "El valor del gasto de actividades no es valido").isNumeric(),
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

//validate fields for update costs
costsVali.validateUpdateCosts = [
  check("id", "El id es obligatorio").notEmpty().exists(),
  check("id", "El id no es valido").isMongoId(),
  check("id").custom(async (id) => {
    await validateExistCostsById(id);
  }),
  check("name", "El nombre del gasto de actividades es obligatorio").notEmpty(),
  check("lot", "El lote es obligatorio").notEmpty(),
  check("lot", "El lote no es valido").isMongoId(),
  check("lot").custom(async (lot) => {
    await validateExistLotById(lot);
  }),
  check("worth", "El valor del gasto de actividades es obligatorio").notEmpty(),
  check("worth", "El valor del gasto de actividades no es valido").isNumeric(),
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
costsVali.validateToken = [
  check('token').custom(async (token, { req }) => {
    await validateToken(token);
    await validateFarm(req.headers.farm);
  }),
];
export { costsVali }