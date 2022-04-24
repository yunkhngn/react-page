import React from "react";
import {Div, Text, Icon} from "atomize";
import { Template } from "../../components/TemplateWebsite";

export class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
      console.log(error);
      console.log(errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        return (
            <Div
            textAlign="center" p='2em' m={{b:'1em', r:"auto", l:'auto', t:'1em'}} w={{md:"40%", xs:"90%"}}
            >
              <Template>
                <Icon name="CloseSolid" size="5em"></Icon>
                <Text textSize="display3" textWeight="700"  m="auto">Oops!</Text>
                <Text textSize={{xs:"heading", md:"display1"}} textWeight="500" textColor="dark" m="auto">Something went wrong!</Text>
                <Text m={{t:'2em'}} textWeight="400">Brace yourself till we get the error fixed.<br/> You may also refresh the page or try again later.</Text>
              </Template>
            </Div>
        );
      }
      return this.props.children;
    }
  }

export default ErrorBoundary;