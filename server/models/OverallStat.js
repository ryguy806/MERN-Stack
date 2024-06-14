import mongoose from "mongoose";

const OverallStatSchema = new mongoose.Schema(
  {
    totalCustomers: Number,
    yearlySalesTotal: Number,
    yearlyTotalSoldUnits: Number,
    year: Number,
    monthlyData: [{ month: String, totalUnits: Number, TotalSales: Number }],
    dailyData: [{ daily: String, totalUnits: Number, TotalSales: Number }],
    salesByCategory: { type: Map, of: Number },
  },
  { timestamps: true }
);

const OverallStat = mongoose.model("OverallStat", OverallStatSchema);
export default OverallStat;
