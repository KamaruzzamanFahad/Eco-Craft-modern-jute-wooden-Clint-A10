import Rating from 'react-rating';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const MyArt = () => {
    const [data, setdata] = useState([])

    const {user} = useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:5000/craft/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setdata(data)
            })
    }, [])



    return (
        <div>
            my art
        </div>
    );
};

export default MyArt;