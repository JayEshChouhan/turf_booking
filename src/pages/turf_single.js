import { useParams } from "react-router-dom";

export default function TurfSingle(porps){
    let id = useParams();
    console.log(id);
    return(
        <>
            {id.turf}
        </>
    );
}