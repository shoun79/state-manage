import { useReducer } from "react";

const LongForm = () => {
    const initialState = {
        firstName: "",
        lastName: "",
        email: "",
        gender: "",
        education: "",
        pics: 0,
        address: "",
        terms: false
    }
    const reducer = (state, action) => {
        console.log(action);
        switch (action.type) {
            case 'INPUT':
                return {
                    ...state,
                    [action.payload.name]: action.payload.value
                }
            case 'increment':
                return {
                    ...state,
                    pics: state.pics + 1
                }
            case 'decrement':
                return {
                    ...state,
                    pics: state.pics - 1
                }
            case 'TOGGLE':
                return {
                    ...state,
                    terms: !state.terms
                }
            default:
                return state;

        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);


    const handleSubmit = e => {
        e.preventDefault();
        console.log(state);

    }
    return (
        <section className="mt-8 p-6 bg-gray-800 text-gray-50">
            <form onSubmit={handleSubmit} action="" className="container flex flex-col mx-auto space-y-12">
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium">Personal Inormation</p>
                        <p className="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!</p>
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="firstName" className="text-sm">First name</label>
                            <input
                                onBlur={(e) => dispatch({ type: 'INPUT', payload: { name: e.target.name, value: e.target.value } })}
                                name="firstName" id="firstName" type="text" placeholder="First name" className="text-black w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="lastName" className="text-sm">Last name</label>
                            <input
                                onBlur={(e) => dispatch({ type: 'INPUT', payload: { name: e.target.name, value: e.target.value } })}
                                id="lastName" type="text" name="lastName" placeholder="Last name" className="text-black w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="email" className="text-sm">Email</label>
                            <input
                                onBlur={(e) => dispatch({ type: 'INPUT', payload: { name: e.target.name, value: e.target.value } })}
                                id="email" type="email" name="email" placeholder="Email" className="w-full  text-black rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="gender" className="text-sm">Gender</label>
                            <div className="block pt-3 pb-2 space-x-4">
                                <label>
                                    <input
                                        onClick={(e) => dispatch({ type: 'INPUT', payload: { name: e.target.name, value: e.target.value } })}
                                        type="radio"
                                        name="gender"
                                        value="male"
                                        className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                                    />
                                    Male
                                </label>
                                <label>
                                    <input
                                        onClick={(e) => dispatch({ type: 'INPUT', payload: { name: e.target.name, value: e.target.value } })}
                                        type="radio"
                                        name="gender"
                                        value="female"
                                        className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                                    />
                                    Female
                                </label>
                                <label>
                                    <input
                                        onClick={(e) => dispatch({ type: 'INPUT', payload: { name: e.target.name, value: e.target.value } })}
                                        type="radio"
                                        name="gender"
                                        value="other"
                                        className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                                    />
                                    Other
                                </label>
                            </div>
                        </div>

                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="education" className="text-sm">Education</label>
                            <select
                                name="education"
                                id="education"
                                onChange={(e) => dispatch({ type: 'INPUT', payload: { name: e.target.name, value: e.target.value } })}



                                className=" block w-full px-0 mt-0  border-0 h-8
                                text-black
                                border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                            >
                                <option >Selected a option</option>
                                <option value="ssc">SSC</option>
                                <option value="hsc">HSC</option>
                                <option value="ma">MA</option>
                                <option value="bba">BBA</option>

                            </select>
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="pics" className="text-sm">Number of pics</label>
                            <div className="flex items-center justify-center  border-gray-100 text-black  w-full ">
                                <span onClick={() => dispatch({ type: 'decrement' })} className="cursor-pointer  bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                                <input name="pics" className="h-8 w-full border bg-white text-center text-xs outline-none" value={state.pics} type="number" min="1" />
                                <span onClick={() => dispatch({ type: 'increment' })} className="cursor-pointer  bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
                            </div>
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="address" className="text-sm">Address</label>
                            <textarea
                                onBlur={(e) => dispatch({ type: 'INPUT', payload: { name: e.target.name, value: e.target.value } })}
                                name="address" id="address" type="text" placeholder="" className="w-full rounded-md
                                text-black focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
                        </div>
                        <div className="col-span-full ">
                            <div className="flex">
                                <input onChange={() => dispatch({ type: 'TOGGLE' })} id="terms" type="checkbox" name="terms" placeholder="terms" className="mr-2 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
                                <label htmlFor="terms" className="text-sm">i agree with the terms and conditions</label>
                            </div>
                        </div>

                        <div>
                            <button disabled={!state.terms} type="submit" className="bg-white text-black  px-6 py-3 hover:font-bold">Submit</button>
                        </div>
                    </div>

                </fieldset>

            </form>
        </section>
    );
};

export default LongForm;