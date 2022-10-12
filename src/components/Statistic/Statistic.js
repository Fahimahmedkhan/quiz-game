import React from 'react';
import { useLoaderData } from 'react-router-dom';

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from "recharts";

const Statistic = () => {
    const loaderData = useLoaderData();
    const statistic = loaderData.data;

    return (
        <div className='flex justify-center items-center sm:m-0 lg:m-10'>
            <LineChart
                width={800}
                height={500}
                data={statistic}
            >

                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                    connectNulls
                    type="monotone"
                    dataKey="total"
                    stroke="#8884d8"
                    fill="#8884d8"
                />
            </LineChart>
        </div>
    );
};

export default Statistic;