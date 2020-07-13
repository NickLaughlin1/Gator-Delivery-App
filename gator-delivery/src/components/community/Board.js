import React from 'react';

const Board = (props) => {


    return(
        // <section>
        //     <textbox classname="register ask">Ask a question</textbox>
        //     <form action="" method="">
        //         <br></br><textarea rows="5" cols="36"></textarea>
        //     </form>
        //     <button className="register ask">Submit</button>
        //     <br></br><br></br><textbox classname="register answer">Answer a question</textbox>
        //     <form action="" method="">
        //         <br></br><textarea rows="5" cols="36"></textarea>
        //     </form>
        //     <button className="register ask">Submit</button>
        // </section>
        <div>
            <div className="card existing-post">
                <div className="card-body">
                    Existing post
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Answer this question" aria-label="Answer" aria-describedby="button-addon2"></input>
                        <div className="input-group-append">
                            <button class="btn btn-secondary" type="button" id="button-addon2">Submit reply</button>
                        </div>
                    </div>
                </div>
            </div>
                
            <div className="card post-editor">
                <div className="card-body">
                    Ask a question
                    <textarea className="form-control post-editor-input"/>
                    <button className="btn btn-primary post-editor-submit">Submit Post</button>
                </div>
            </div>
        </div>



    );
};

export default Board;