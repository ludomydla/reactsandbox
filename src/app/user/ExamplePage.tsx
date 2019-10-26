import React from "react";
import { Link } from "react-router-dom";
//import Input from "../_shared/components/Input";

type ExamplePageProps = {};
type ExamplePageState = {};

class ExamplePage extends React.Component<ExamplePageProps, ExamplePageState> {
  render() {
    //const paragraphContent = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis laborum perspiciatis nesciunt! Adipisci iusto, quis dolores ipsum sint debitis distinctio voluptatum, et sequi fugiat sapiente exercitationem harum nesciunt aliquam cupiditate laudantium facere voluptatem molestiae? Aut eum, eaque, in, sunt nostrum qui consequatur veritatis ipsam accusantium recusandae non. Ab, tempora nulla!";

    //const quote = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quisquam.";

    return (
      <div>
        <Link to='/'>Home</Link>
        <br />
        <h1>Lorem ipsum dolor sit amet.</h1>
        <h2>Lorem ipsum dolor sit amet.</h2>
        <h3>Lorem ipsum dolor sit amet.</h3>
        <h4>Lorem ipsum dolor sit amet.</h4>
        <h5>Lorem ipsum dolor sit amet.</h5>
        <h6>Lorem ipsum dolor sit amet.</h6>

        {/*<Paragaraph content={paragraphContent} />
        <Paragraph.Lead content={paragraphContent} />
        <Quote quote={quote} source={}/>
        <List />
        <Link />
        <Code />

        <Form>


        </Form>
        */}
      </div>
    );
  }
}

export default ExamplePage;
