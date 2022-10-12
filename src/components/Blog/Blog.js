import React from 'react';

const Blog = () => {
    return (
        <div className=" px-8 mx-auto mt-4 shadow sm:max-w-md md:max-w-md lg:max-w-md">
            <details className="p-4 rounded-lg">
                <summary className="font-semibold">What is the purpose of React Router?</summary>
                <div className="mt-3">
                    <p className="text-sm leading-6 text-gray-600">
                        React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL. <br />
                        React Router, and dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information. <br />
                        By preventing a page refresh, and using Router or Link, which is explained in more depth below, the flash of a white screen or blank page is prevented. This is one increasingly common way of having a more seamless user experience. React router also allows the user to utilize browser functionality like the back button and the refresh page while maintaining the correct view of the application.
                    </p>
                </div>
            </details>
            <details className="p-4 rounded-lg">
                <summary className="font-semibold">
                    How Context API works?
                </summary>
                <div className="mt-3">
                    <p className="text-sm leading-6 text-gray-600">
                        The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux. <br />
                        <code>react.createContext()</code> is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.
                    </p>
                </div>
            </details>
            <details className="p-4 rounded-lg">
                <summary className="font-semibold">
                    Concept of useRef.
                </summary>
                <div className="mt-3">
                    <p className="text-sm leading-6 text-gray-600">
                        The useRef hook is the new addition in React 16.8. Before proceeding to this article there is a prerequisite to know about the ref in react.
                        The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. <br />
                        <strong>Syntax:</strong> <br />
                        <code className='border-4 bg-black text-white'>const refContainer = useRef(initialValue);</code> <br />
                        The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialized to the passed argument initialValue e.g. <code>useRef(initialValue)</code>. The object can persist a value for a full lifetime of the component.
                    </p>
                </div>
            </details>
        </div>
    );
};

export default Blog;