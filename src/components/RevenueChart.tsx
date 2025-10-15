import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    period: 'Now',
    revenue: 0.9,
    ebitda: 0.45,
  },
  {
    period: 'Year 1',
    revenue: 1.65,
    ebitda: 0.65,
  },
  {
    period: 'Year 2',
    revenue: 3.53,
    ebitda: 1.73,
  },
  {
    period: 'Year 3',
    revenue: 6.38,
    ebitda: 3.38,
  },
];

export const RevenueChart = () => {
  return (
    <div className="border border-slate-200 p-6 bg-white rounded-lg">
      <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900 mb-4">
        Revenue & EBITDA Growth Trajectory
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis
            dataKey="period"
            stroke="#64748b"
            style={{ fontSize: '12px' }}
          />
          <YAxis
            stroke="#64748b"
            style={{ fontSize: '12px' }}
            label={{ value: '$M', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1e293b',
              border: 'none',
              borderRadius: '8px',
              color: '#fff',
              fontSize: '12px',
            }}
            formatter={(value: number) => `$${value.toFixed(2)}M`}
          />
          <Legend
            wrapperStyle={{ fontSize: '12px' }}
          />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#1C7ED6"
            strokeWidth={3}
            name="Revenue"
            dot={{ fill: '#1C7ED6', r: 5 }}
            activeDot={{ r: 7 }}
          />
          <Line
            type="monotone"
            dataKey="ebitda"
            stroke="#51CF66"
            strokeWidth={3}
            name="EBITDA"
            dot={{ fill: '#51CF66', r: 5 }}
            activeDot={{ r: 7 }}
          />
        </LineChart>
      </ResponsiveContainer>
      <div className="mt-4 text-xs text-slate-500 italic">
        Base case scenario showing midpoint projections. Hover over data points for exact values.
      </div>
    </div>
  );
};
