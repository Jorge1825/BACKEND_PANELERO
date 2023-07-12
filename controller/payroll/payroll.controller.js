import Payroll from "../../models/payroll/Payroll.js";


const payrollCtrl = {};

//get all payrolls in the db
payrollCtrl.getPayRolls = async (req, res) => {
  const { farm } = req.headers;
  try {
    const payrolls = await Payroll.find({ farm}).populate("people").populate("typepay").populate("activity").populate("farm").sort({statuspay:1});
    
    //calcular el total de los pagos
    let total = 0;
    payrolls.forEach((payroll) => {
        total += payroll.worth;
    });
    res.json({ payrolls, worth: total });
    
  } catch (error) {
    res.status(400).json({ msg: "No fue posible terminar la operacion" });
  }
};

//get payroll by id in the db
payrollCtrl.getPayRollId = async (req, res) => {
  const { id } = req.params;
  try {
    const payroll = await Payroll.findById(id).populate("people").populate("typepay").populate("activity").populate("farm");
    res.json({ payroll });
  } catch (error) {
    res.status(400).json({ msg: "No fue posible terminar la operacion" });
  }
};

//register payroll in the db
payrollCtrl.registerPayRoll = async (req, res) => {
  const { people, typepay, activity, worth, statuspay } = req.body;
  const { farm } = req.headers;

  try {
    const newPayRoll = new Payroll({
      people,
      typepay,
      activity,
      worth,
      statuspay,
      farm,
      date: new Date(),
    });
    const payroll = await newPayRoll.save();
    res.json({ msg: "Pago registrado correctamente", payroll });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "No fue posible terminar la operacion" });
  }
};

//update payroll in the db
payrollCtrl.updatePayRolls = async (req, res) => {
  const { id } = req.params;
  const { people, typepay, activity, worth, statuspay } = req.body;

  try {
    const payroll = await Payroll.findByIdAndUpdate(id, {
        people,
        typepay,
        activity,
        worth,
        statuspay,
    }, {new: true});

    res.json({ msg: "Pago actualizado correctamente", payroll });
  } catch (error) {
    res.status(400).json({ msg: "No fue posible terminar la operacion" });
  }
};

//change status pay in the db
payrollCtrl.payPayRoll = async (req, res) => {
  const { id } = req.params;
  try {
    await Payroll.findByIdAndUpdate(id, { statuspay: 0 });
    res.json({ msg: "Pago realizado correctamente" });
  } catch (error) {
    res.status(400).json({ msg: "No fue posible terminar la operacion" });
  }
};

//deliver payroll in the db
payrollCtrl.deliverPayRoll = async (req, res) => {
  const { id } = req.params;
  try {
    await Payroll.findByIdAndUpdate(id, { statuspay: 1 });
    res.json({ msg: "Pago declinado correctamente" });
  } catch (error) {
    res.status(400).json({ msg: "No fue posible terminar la operacion" });
  }
};

//delete payroll in the db
payrollCtrl.deletePayRolls = async (req, res) => {
    const { id } = req.params;
    try {
        await Payroll.findByIdAndDelete(id);
        res.json({ msg: "Pago eliminado correctamente" });
    } catch (error) {
        res.status(400).json({ msg: "No fue posible terminar la operacion" });
    }
};


export { payrollCtrl };
