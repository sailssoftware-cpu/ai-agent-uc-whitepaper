import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const fraudAmountData = [
  { name: '2020', value: 15 },
  { name: '2021', value: 36 },
  { name: '2022', value: 28 },
  { name: '2023', value: 22 },
  { name: '2024', value: 18 },
];

const detectionRateData = [
  { name: 'Manual', value: 35 },
  { name: 'Manual+', value: 42 },
  { name: 'Early AI', value: 58 },
  { name: 'AI Enhanced', value: 71 },
  { name: 'Advanced AI', value: 85 },
];


export const Figure2: React.FC = () => {
    return (
      <div className="my-8 p-6 bg-white border border-slate-200 rounded-lg shadow-sm">
        <h4 className="text-lg font-bold text-center text-slate-800 mb-6">
          FIGURE 2: Unemployment Fraud Trends 2020-2024
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
                 <h5 className="text-md font-semibold text-center text-slate-700 mb-4">Fraud Amount (Billions)</h5>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={fraudAmountData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis unit="B" domain={[0, 50]}/>
                        <Tooltip formatter={(value) => `$${value}B`} />
                        <Bar dataKey="value" fill="#064a70" name="Fraud Amount" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div>
                <h5 className="text-md font-semibold text-center text-slate-700 mb-4">Fraud Detection Rate</h5>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={detectionRateData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" angle={-20} textAnchor="end" height={50} />
                        <YAxis unit="%" domain={[0, 100]} />
                        <Tooltip formatter={(value) => `${value}%`} />
                        <Bar dataKey="value" fill="#00b9ff" name="Detection Rate" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
         <p className="text-center text-sm text-slate-500 mt-4 italic">
          Note: AI implementation shows dramatic improvement in fraud detection.
        </p>
      </div>
    );
};