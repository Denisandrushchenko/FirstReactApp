import s from './Button.module.css'

const Button = ({chiildren , ...props}) => {
    
    const { button } =  s ;
    
    return(
        <button className={button} {...props}>
            {chiildren}
        </button>
    )
};

export default Button;