import React from 'react'

const Dashboard = ({todos}) => {

    const total = todos.length
    const completed = todos.filter(t => t.completed).length;
    const pending = total - completed;
    const percent = total ? Math.round((completed / total) * 100) : 0;

    const getColor = () => {
        if (percent < 30) return "bg-red-500"
        if (percent < 70) return "bg-yellow-500"
        return "bg-green-500"
    }

    return (
        <div className='h-[60%] my-12 py-3'>
            <h1 className='font-bold mb-4 text-xl'>Your Progress</h1>

            <h3 className='text-lg mb-2'>Total : </h3>
            <h3 className='text-lg mb-2'>Completed : </h3>
            <h3 className='text-lg mb-2'>Pending : </h3>

            <div className="w-70 bg-gray-200 rounded h-6 overflow-hidden">
                <div
                    className={`${getColor()} bg-green-500 h-6 transition-all duration-500`}
                    style={{ width: `${percent}%` }}
                ></div>
            </div>

            <p className="text-sm mt-2 text-gray-600">
                {completed} of {total} tasks completed ({percent}%)
            </p>
        </div>
    )
}

export default Dashboard
