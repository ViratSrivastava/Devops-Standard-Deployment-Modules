// File: src/pages/Overview.js
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Data from 'src/formatted_results.js'

function Overview() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">Project Overview</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Model Structure</h2>
        {/* Add details about model structure */}
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Dataset</h2>
        {/* Add details about the dataset */}
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Training Process</h2>
        {/* Add details about the training process */}
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Evaluation Metrics</h2>
        <Dashboard />
      </section>
    </div>
  );
}

const ChartCard = ({ title, dataKeys, colors }) => (
  <div className="bg-white p-4 rounded shadow">
    <h2 className="text-lg font-semibold mb-2">{title}</h2>
    <ResponsiveContainer width="100%" height={500}>
      <LineChart data={Data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="epoch" />
        <YAxis />
        <Tooltip />
        <Legend />
        {dataKeys.map((key, index) => (
          <Line key={key} type="monotone" dataKey={key} stroke={colors[index]} name={key} />
        ))}
      </LineChart>
    </ResponsiveContainer>
  </div>
);

const Dashboard = () => (
  <div className="p-4">
    <h1 className="text-2xl font-bold mb-4">Comprehensive Training Metrics Dashboard</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ChartCard
        title="Training Losses"
        dataKeys={["train/box_loss", "train/cls_loss", "train/dfl_loss"]}
        colors={["#8884d8", "#82ca9d", "#ffc658"]}
      />
      <ChartCard
        title="Validation Losses"
        dataKeys={["val/box_loss", "val/cls_loss", "val/dfl_loss"]}
        colors={["#ff7300", "#ff4d4d", "#41b883"]}
      />
      <ChartCard
        title="Precision and Recall"
        dataKeys={["metrics/precision(B)", "metrics/recall(B)"]}
        colors={["#8884d8", "#82ca9d"]}
      />
      <ChartCard
        title="mAP Metrics"
        dataKeys={["metrics/mAP50(B)", "metrics/mAP50-95(B)"]}
        colors={["#ff7300", "#41b883"]}
      />
      <ChartCard
        title="Learning Rate"
        dataKeys={["lr/pg0"]}
        colors={["#8884d8"]}
      />
    </div>
  </div>
);

export { Overview, ChartCard, Dashboard };