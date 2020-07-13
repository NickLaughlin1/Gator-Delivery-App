import React from 'react';

const Board = (props) => {


    return(
        
        <section>
            <h3>Community Board</h3>
            <textbox classname="register ask">Ask a question</textbox>
            <form action="" method="">
                <br></br><textarea rows="5" cols="36"></textarea>
            </form>
            <button className="register ask">Submit</button>
            <br></br><br></br><textbox classname="register answer">Answer a question</textbox>
            <form action="" method="">
                <br></br><textarea rows="5" cols="36"></textarea>
            </form>
            <button className="register ask">Submit</button>
        </section>
    );
};

export default Board;