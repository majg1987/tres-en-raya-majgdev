
const Square = ( { children, updateBoard, index }) => {
    
    const handleClick = () => {
        updateBoard(index)
    }
    
    return (       
            <div className="w-28 h-28  
                            border-4 border-color1
                            shadow-md shadow-color1 
                            rounded-3xl
                            text-color1 text-5xl
                            grid place-items-center
                            cursor-pointer" 
                onClick={handleClick}
            >
                { children }   
            </div>
    );
}

export default Square;
