import Square from "./Square";
import Button from "./Button";

const WinnerModal = ( {winner, resetGame}) => {
    if (winner === null) return null

    const winnerText = winner === false ?
    'La partida ha terminado en Empate' :
    'Enhorabuena!! 🎉🎉🎉 el Ganador es:'
    return (
        <section>
            <div
            className="justify-center items-center flex
                    overflow-x-hidden overflow-y-auto fixed 
                    inset-0 z-50"
            >
                <div className="relative w-auto my-6 mx-auto
                                max-w-sm text-center shadow-inner"
                >
                {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg 
                                    relative flex flex-col w-full 
                                    bg-color1"
                    >
                        {/*header*/}
                        <div className="flex items-center justify-center 
                                        p-6 border-b border-solid 
                                        border-slate-200 rounded-t"
                        >
                            <h3 className="text-3xl font-semibold"> 
                                { winnerText }
                            </h3>
                        </div>
                        {/*body*/}
                        <div className="relative py-7 flex justify-center">
                            {/* <p className="text-slate-500 text-lg 
                                        leading-relaxed flex justify-center"> */}
                                <Square> {winner} </Square> 
                            {/* </p> */}
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-center p-6 
                                        border-t border-solid border-slate-200 
                                        rounded-b"
                        >
                            <Button text='Volver a Jugar' 
                                    clickAction={resetGame}                               
                            >
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>          
        </section>
    );
}

export default WinnerModal;
