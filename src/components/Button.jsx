
const Button = ( {text, clickAction, color} ) => {

    const handleClick = (clickAction) => {
        clickAction()
    }

    return (
        <>
            <button className={`border-2 border-${color} rounded-3xl
                            shadow-md shadow-${color} text-${color}
                            font-bold p-3`} 
                    onClick={() => handleClick(clickAction)}>
                {text}
            </button>
        </>
    );
}

export default Button;
