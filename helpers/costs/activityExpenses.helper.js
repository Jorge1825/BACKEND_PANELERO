import ActivityExpenses from "../../models/costs/activityExpenses.js"
import Work from "../../models/maintenance/Work.js"
const activityExpensesHelper = {};

activityExpensesHelper.validateExistActivityExpensesById = async (id) => {
  try{
    const activityExpenses = await ActivityExpenses.findById(id);
    if (!activityExpenses){
      throw new Error();
    }
  }catch (error){
    throw new Error ( `El gasto de actividad con el id ${id} no existe`);
  }
};

activityExpensesHelper.validateExistWorkById = async (id) => {
  try{
    const work = await Work.find({ _id: id, status: 0 });
    if (!work){
      throw new Error();
    }
  }catch (error){
    throw new Error ( `El trabajo con el id ${id} no existe`);
  }
};


export { activityExpensesHelper};
