import App from '../../App';

const AuthLayout = ({ children }) => {
    return (
        <App>
            <div className="text-black dark:text-white-dark min-h-screen">{children} </div>
        </App>
    );
};

export default AuthLayout;
