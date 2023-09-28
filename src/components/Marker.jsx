
const Marker = ( { children, turn, activeTurn, classTurn }) => {

    return (
        <div className={activeTurn === turn ? `${classTurn} text-3xl 
                        shadow-md shadow-color1 
                        border-none  rounded-full p-3` : 'text-3xl shadow-md shadow-color1 border-none  rounded-full p-3'}> 
            { turn } {children} 
        </div> 
    );
}

export default Marker;
