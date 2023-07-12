import ActivityExpenses from "../../models/costs/activityExpenses.js";
import Pay from "../../models/maintenance/Pay.js";
import People from "../../models/maintenance/People.js";
import Payroll from "../../models/payroll/Payroll.js";


const payrollHelper = {};

//get exist people by id in the db
payrollHelper.validateExistPeopleById = async (id, farm) => {
  try {
    const people = await People.findById(id, { farm });
    if (!people) {
      throw new Error();
    }
  } catch (error) {
    throw new Error(`La persona no existe`);
  }
};

//validate model of order
payrollHelper.validateExistPayrollById = async (id, farm) => {
  try {
    const payroll = await Payroll.findById(id, { farm });
    if (!payroll) {
      throw new Error();
    }
  } catch (error) {
    throw new Error(`El pago con el id ${id} no existe`);
  }
};

//validate client of order
payrollHelper.validateExistTypePayById = async (id, farm) => {
  try {
    const typePay = await Pay.findById(id, { farm });
    if (!typePay) {
      throw new Error();
    }
  } catch (error) {
    throw new Error(`El tipo de pago con el id ${id} no existe`);
  }
}

//validate model of order
payrollHelper.validateExistActivityById = async (id, farm) => {
    try {
      const activity = await ActivityExpenses.findById(id, { farm });
      if (!activity) {
        throw new Error();
      }
    } catch (error) {
      throw new Error(`La actividad con el id ${id} no existe`);
    }
  };
  

export { payrollHelper };
