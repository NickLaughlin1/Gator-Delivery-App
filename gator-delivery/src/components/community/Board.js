import React from 'react';
import Post from './Post';
import Firebase from '../firebase/firebase'

const Board = (props) => {

    //var db = Firebase.database();
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
            <h1>
                Community Board
            </h1>
            <h3>
                Ask questions and get answers from experts in your area
            </h3>
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

            <Post/>

        </div>
            

    );
};

export default Board;