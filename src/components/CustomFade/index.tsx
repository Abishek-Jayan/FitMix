import {Fade} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import "./fade.css";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const CustomFade = ({children, open, goto}) => {
    const navigate = useNavigate();
    return         <Fade in={open}  appear={true} onExited = {()=>navigate(goto)}>{children}</Fade>;
}

export default CustomFade;