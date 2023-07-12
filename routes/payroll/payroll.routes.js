import { Router } from "express";
import { payrollCtrl } from "../../controller/payroll/payroll.controller.js";
import { payrollVali } from "../../validations/payroll/payroll.validation.js";

const {
  validateExistPayroll,
  validateRegisterPayroll,
  validateUpdatePayroll,
  validateHeaders,
} = payrollVali;

const {
  getPayRollId,
  getPayRolls,
  registerPayRoll,
  updatePayRolls,
  payPayRoll,
  deletePayRolls,
  deliverPayRoll,
} = payrollCtrl;

const routerPayroll = Router();

routerPayroll.get("/:id", validateExistPayroll, getPayRollId);
routerPayroll.get("/", validateHeaders, getPayRolls);
routerPayroll.post("/register", validateRegisterPayroll, registerPayRoll);
routerPayroll.put("/pay/:id", validateExistPayroll, payPayRoll);
routerPayroll.put("/deliver/:id", validateExistPayroll, deliverPayRoll);
routerPayroll.put("/update/:id", validateUpdatePayroll, updatePayRolls);
routerPayroll.delete("/delete/:id", validateExistPayroll, deletePayRolls);

export { routerPayroll };
