import React, { useState } from "react";
import "./Header.css";
import logo from "./logo.svg";
import {
  FormHelperText,
  Button,
  FormControl,
  Input,
  InputLabel,
} from "@material-ui/core";
import Modal from "react-modal/lib/components/Modal";
function Header(props) {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [leftM, setleftM] = React.useState({ display: "flex" });
  const [rightM, setrightM] = React.useState({ display: "none" });
  const [leftB, setleftB] = React.useState({ borderBottom: "4px solid red" });
  const [rightB, setrightB] = React.useState({});
  
  var fname = "";
  var pword = "";  
  var lname = "";
  var uname = "";
  var number = "";


  var validateuname="";
  var validatepword="";  

  const [islogin, setislogin] = React.useState();

  const [username, setusername] = React.useState("");
  const [password, setpassword] = React.useState("");

  var database = {
    fname: "",
    lname: "",
    uname: "",
    pword: "",
    number: "",
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  return (
    <div className="header">
      <img src={logo} alt="My logo" className="logo" />

      <div className={props.btnType}>
        <Button variant="contained" color="primary">
          {props.buttonName}
        </Button>
      </div>

      <Button
        variant="contained"
        onClick={() => {
            if(!islogin){
                setModalIsOpen(true)
                }
            else{
                setislogin(false)
            }    
            }}
        className="loginbtn"
      >
        {islogin ? "LOGOUT" : "LOGIN"}
      </Button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="container">
          <button
            style={leftB}
            className="modalB"
            onClick={() => {
              setrightM({ display: "none" });
              setleftM({ display: "flex" });
              setrightB({ borderBottom: "none" });
              setleftB({ borderBottom: "4px solid red" });
            }}
            variant="contained"
          >
            <strong>LOGIN</strong>
          </button>
          <button
            style={rightB}
            className="modalB"
            onClick={() => {
              setleftM({ display: "none" });
              setrightM({ display: "flex" });
              setleftB({ borderBottom: "none" });
              setrightB({ borderBottom: "4px solid red" });
            }}
            variant="contained"
          >
            <strong>REGISTER</strong>
          </button>

          <div style={leftM} className="leftM">
            <FormControl style={{ margin: "8px", width: "60%" }}>
              <InputLabel htmlFor="input1">Username *</InputLabel>
              <Input
                onChange={(e) => {
                        validateuname=e.target.value;
                }}
                id="input1"
                aria-describedby="my-helper-text"
              />
              <FormHelperText>
                <span style={{ color: "red" }}>*required</span>
              </FormHelperText>
            </FormControl>
            <FormControl style={{ margin: "8px", width: "60%" }}>
              <InputLabel htmlFor="input2">Password *</InputLabel>
              <Input
                type="password"
                onChange={(e) => {
                        validatepword=e.target.value;
               }}
                id="input2"
                aria-describedby="my-helper-text"
              />
              <FormHelperText>
                <span style={{ color: "red" }}>*required</span>
              </FormHelperText>
            </FormControl>
            <Button
              style={{ margin: "20px" }}
              className="loginbtnfrommodal"
              variant="contained"
              color="primary"
              onClick={() => {
                    if(validatepword===password && validateuname===username){
                        setislogin(true);
                        setModalIsOpen(false);
                    }
              }}
            >
              LOGIN
            </Button>
          </div>

          <div style={rightM} className="rightM">
            <FormControl style={{ margin: "8px", width: "60%" }}>
              <InputLabel htmlFor="inputr1">First Name *</InputLabel>
              <Input
                onChange={(e) => {
                  fname = e.target.value;
                }}
                id="inputr1"
                aria-describedby="my-helper-text"
              />
              <FormHelperText>
                <span style={{ color: "red" }}>*required</span>
              </FormHelperText>
            </FormControl>
            <FormControl style={{ margin: "8px", width: "60%" }}>
              <InputLabel htmlFor="inputr2">Last Name *</InputLabel>
              <Input
                onChange={(e) => {
                  lname = e.target.value;
                }}
                id="inputr2"
                aria-describedby="my-helper-text"
              />{" "}
              <FormHelperText>
                <span style={{ color: "red" }}>*required</span>
              </FormHelperText>
            </FormControl>
            <FormControl style={{ margin: "8px", width: "60%" }}>
              <InputLabel htmlFor="inputr3">Email *</InputLabel>
              <Input
                type="email"
                onChange={(e) => {
                  uname = e.target.value;
                }}
                id="inputr3"
                aria-describedby="my-helper-text"
              />{" "}
              <FormHelperText>
                <span style={{ color: "red" }}>*required</span>
              </FormHelperText>
            </FormControl>
            <FormControl style={{ margin: "8px", width: "60%" }}>
              <InputLabel htmlFor="inputr4">Password *</InputLabel>
              <Input
                type="password"
                onChange={(e) => {
                  pword = e.target.value;
                }}
                id="inputr4"
                aria-describedby="my-helper-text"
              />{" "}
              <FormHelperText>
                <span style={{ color: "red" }}>*required</span>
              </FormHelperText>
            </FormControl>
            <FormControl style={{ margin: "8px", width: "60%" }}>
              <InputLabel htmlFor="inputr5">Contact No. *</InputLabel>
              <Input
                type="number"
                onChange={(e) => {
                  number = e.target.value;
                }}
                id="inputr5"
                aria-describedby="my-helper-text"
              />{" "}
              <FormHelperText>
                <span style={{ color: "red" }}>*required</span>
              </FormHelperText>
            </FormControl>
            <Button
              style={{ margin: "20px" }}
              variant="contained"
              color="primary"
              type="submit"
              onClick={() => {if(fname&&lname&&uname&&pword&&number){
                                console.log(print);
                                setusername(uname);
                                setpassword(pword);
                                document.getElementById("pforreg").style.display = "flex";
                            }
              }}
            >
              REGISTER
            </Button>

            <p id="pforreg" style={{ display: "none" }}>
              Registration Successful. Please Login!
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Header;
