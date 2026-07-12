const Footer = () => {
    return (
        <footer className="bg-white shadow mt-auto">
            <div className="px-6 py-4 text-center text-gray-600">
                © {new Date().getFullYear()} TransitOps • Fleet Management System
            </div>
        </footer>
    );
};

export default Footer;