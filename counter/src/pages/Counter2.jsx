import { useContext } from "react";
import { COUNTER_CONTEXT } from "../App";

const Counter2 = () => {
    const { count, setCount } = useContext(COUNTER_CONTEXT);
    return (
        <div className="mt-20">
            <div>
                <h2>{count}</h2>
            </div>
            <div className='flex items-center justify-center  p-10'>
                <button onClick={() => setCount((pre) => pre - 1)} id="decrement-btn"
                    className="flex justify-center items-center w-10 h-10 rounded-full text-white focus:outline-none bg-gray-400 hover:bg-gray-500">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path>
                    </svg>
                </button>
                <span id="counter" className="text-4xl font-bold mx-4">1</span>
                <button onClick={() => setCount((pre) => pre + 1)} id="increment-btn"
                    className="flex justify-center items-center w-10 h-10 rounded-full text-white focus:outline-none bg-indigo-500 hover:bg-indigo-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v12M6 12h12"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Counter2;