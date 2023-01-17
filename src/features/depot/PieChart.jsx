import { Cell, Legend, Pie, PieChart } from "recharts";

const StockPieChart = ({ portfolioData }) => {
  const data = portfolioData.map((stock) => {
    return {
      value: stock.quantity * stock.value,
      label: stock.name,
    };
  });
  console.log(data);
  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#8884d8",
    "#4532d4",
    "#245236",
    "#194755",
  ];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <PieChart className="pie" width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#8884d8"
      >
        {data.map((entry, index) => (
          <Cell key={index} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend
        align="right"
        layout="horizontal"
        payload={data.map((item, index) => {
          return { value: item.label, color: COLORS[index % COLORS.length] };
        })}
      />
    </PieChart>
  );
};

export default StockPieChart;
