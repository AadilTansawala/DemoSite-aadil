import React, { useState, useEffect } from 'react';


const SignUp = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const [users, setUsers] = useState([]);
    const [isLogin, setIsLogin] = useState(false);
    const [loggedInUser, setLoggedInUser] = useState(null);

    

    useEffect(() => {
        const savedUsers = JSON.parse(localStorage.getItem('users')) || [];
        setUsers(savedUsers);
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        if (isLogin) {
            const user = users.find(
                (u) => u.email === formData.email && u.password === formData.password
            );
            if (user) {
                setLoggedInUser(user);
                console.log("hurray");
                
              } else {
                console.log("valid");
                <h1 className="text-neutral-100 text-4xl font-bold absolute top-5 text-center">Enter valid credentials</h1>
              }
        } else {
            e.preventDefault();
            const updatedUsers = [...users, formData];
            localStorage.setItem('users', JSON.stringify(updatedUsers));
            setUsers(updatedUsers);
            console.log('Form submitted:', formData);
        }
    };

    const switchForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-orange-200 m-8 mt-0">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96" onSubmit={handleSubmit}>
                {!isLogin ? (
                    <>
                        <div className="mb-4">
                            <label className="block text-neutral-700 text-sm font-bold mb-2" htmlFor="firstName">
                                First Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-neutral-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="firstName"
                                type="text"
                                placeholder="First Name"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                                aria-label="First Name"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-neutral-700 text-sm font-bold mb-2" htmlFor="lastName">
                                Last Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-neutral-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="lastName"
                                type="text"
                                placeholder="Last Name"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                                aria-label="Last Name"
                            />
                        </div>
                    </>
                ) : null}
                <div className="mb-4">
                    <label className="block text-neutral-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-neutral-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        aria-label="Email"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-neutral-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-neutral-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        aria-label="Password"
                    />
                </div>
                <div className="flex items-center justify-center">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        {isLogin ? 'Log In' : 'Sign Up'}
                    </button>
                </div>
            </form>
            <p className="mt-4 text-neutral-700">
                {isLogin ? 'Don\'t have an account? ' : 'Already have an account? '}
                <button
                    className="text-blue-500 hover:underline focus:outline-none"
                    onClick={switchForm}
                >
                    {isLogin ? 'Sign Up' : 'Log In'}
                </button>
            </p>
        </div>
    );
};

export default SignUp;