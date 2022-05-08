import "./Css/bootstrap.rtl.min.css";
import "./Css/App.css";
import Form from "./Components/Form";
import Lorem from "./Components/Lorem";
import { useState } from "react";
import data from "./Components/data";
function App() {
    const [number, setNumber] = useState(0);

    return (
        <div className="lorem-app text-center mt-4">
            <div className="container">
                <h1 className="title mb-4">Generate Lorem Paragraph</h1>
                <Form setNumber={setNumber} data={data} />
                <div className="row">
                    {number !== 0
                        ? data
                              .slice(0, number)
                              .map((item, index) => (
                                  <Lorem key={index} item={item} />
                              ))
                        : null}
                </div>
            </div>
        </div>
    );
}

export default App;
