import NavbarUser from './NavbarUser'
import NavbarAdmin from './NavbarAdmin'
import axios from './axiosConfig'
import { isTokenAvailable } from "./tokenConfig"

function Navbar() {
    const fetchData = async () => {
        try {
            if (isTokenAvailable()) {
                const token = localStorage.getItem('token');
                const response = await axios.get('/profile', { headers: { authorization: `${token}` } });
                
                if (response.status === 200) {
                    const role = response.data.role;
                    console.log(role);
                    if (role === 'Admin') {
                        return <NavbarAdmin />;
                    } else if (role === 'User') {
                        return <NavbarUser />;
                    }                    
                } else {
                    console.error('Error fetching profile data:', response.statusText);
                }
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData();
}

export default Navbar;