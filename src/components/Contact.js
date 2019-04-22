import React from "react";
import styled, { css } from "styled-components";
import { navigate } from "gatsby-link";
import HeadingThree from "./ui/HeadingThree";
import Container from "./ui/Container";
import Button from "./ui/Button";

const sharedFieldStyles = css`
  width: 100%;
  padding-left: 2px;
  font-size: 13px;
  color: ${props => props.theme.inputColour};
  border-top-width: 0;
  border-left-width: 0;
  border-right-width: 0;
  border-bottom-width: 1px;
  border-bottom-color: ${props => props.theme.inputColour};
  background: transparent;
`;

const ContactWrapper = styled.section`
  padding-bottom: 100px;
  @media (min-width: 768px) {
    padding-bottom: 120px;
  }
  @media (min-width: 992px) {
    padding-bottom: 140px;
  }
  @media (min-width: 1380px) {
    padding-bottom: 180px;
  }
`;

const Form = styled.form`
  margin-top: 40px;
  @media (min-width: 992px) {
    margin-top: 60px;
  }

  @media (min-width: 1380px) {
    margin-top: 86px;
  }
`;

const Field = styled.div`
  margin-top: ${props => (props.large ? `60px` : `25px`)};
  ${props => (props.hasbutton ? `text-align: center` : ``)};
  @media (min-width: 992px) {
    ${props => (props.isInput ? `flex-basis: 48%; margin: 0` : ``)};
    ${props => (props.isTextArea ? `margin-top: 30px` : ``)};
  }

  @media (min-width: 1380px) {
    ${props => (props.isTextArea ? `margin-top: 42px` : ``)};
    ${props => (props.large ? `margin-top: 74px` : ``)};
  }

  &:first-child {
    margin-top: 0;
  }
`;

const Input = styled.input`
  height: 36px;
  ${sharedFieldStyles}
  @media (min-width: 1380px) {
    height: 52px;
    font-size: 16px;
  }
`;

const TopFields = styled.div`
  @media (min-width: 992px) {
    display: flex;
    justify-content: space-between;
  }
`;

const TextArea = styled.textarea`
  height: 100px;
  resize: none;
  padding-top: 10px;
  ${sharedFieldStyles}
  :invalid {
    box-shadow: none;
  }
  @media (min-width: 1380px) {
    font-size: 16px;
    height: 110px;
  }
`;

const FormWrapper = styled.div`
  max-width: 420px;
  margin: 0 auto;
  @media (min-width: 992px) {
    max-width: 580px;
  }
  @media (min-width: 1380px) {
    max-width: 724px;
  }
`;

const ContactTitle = styled(HeadingThree)`
  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
  color: ${props => props.theme.white};
  text-align: center;
  &:after {
    margin-left: auto;
    margin-right: auto;
  }
`;

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    return (
      <ContactWrapper>
        <Container>
          <FormWrapper>
            <ContactTitle>Contact</ContactTitle>
            <Form
              name="contact"
              method="post"
              action="/thanks/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={this.handleSubmit}
            >
              {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
              <input type="hidden" name="form-name" value="contact" />
              <div hidden>
                <label>
                  Don’t fill this out:{" "}
                  <input name="bot-field" onChange={this.handleChange} />
                </label>
              </div>
              <TopFields>
                <Field isInput>
                  <Input
                    type={"text"}
                    name={"name"}
                    placeholder={`Name..`}
                    onChange={this.handleChange}
                    id={"name"}
                    required={true}
                  />
                </Field>
                <Field isInput>
                  <Input
                    type={"email"}
                    name={"email"}
                    placeholder={`Email..`}
                    onChange={this.handleChange}
                    id={"email"}
                    required={true}
                  />
                </Field>
              </TopFields>
              <Field isTextArea>
                <TextArea
                  name={"message"}
                  placeholder={`Your Message..`}
                  onChange={this.handleChange}
                  id={"message"}
                  required={true}
                />
              </Field>
              <Field large hasbutton>
                <Button type="submit">Submit</Button>
              </Field>
            </Form>
          </FormWrapper>
        </Container>
      </ContactWrapper>
    );
  }
}
