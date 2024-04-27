import { useLoaderData } from "react-router-dom";

const ViewDetils = () => {
    const data = useLoaderData();
    const {_id,name} = data[0];
    console.log(data[0])
    return (
        <div>
            detils
            <p>{name}</p>
        </div>
    );
};

export default ViewDetils;