import React, { useEffect, useState, useTransition } from "react";
import parse from "html-react-parser";
import "./Convertor.css";

import { Input, Form, message } from "antd";
import { requestConversion } from "../../services/requests/conversion";

import { Button, Divider, List, Select } from "antd";
import {
  bases,
  content,
  explanation,
  form,
  main,
  numberContainer,
  numberSystem,
} from "./convertorStyle";

const { Option } = Select;

const { Item } = Form;

const digits = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function Convert() {
  const [from, setFrom] = useState(null);
  const [number, setNumber] = useState(null);

  const [toBase, setToBase] = useState(null);

  const [result, setResult] = useState(0);
  const [hasFromError, setHasFromError] = useState(true);
  const [hasToError, setHasToError] = useState(false);
  const [hasNumberError, setHasNumberError] = useState(true);
  const [hasNoErrors, setHasNoErrors] = useState(false);

  const [steps, setSteps] = useState([]);

  const options = [];

  for (let i = 2; i <= 62; i++) {
    options.push(
      <Option key={i} value={i}>
        base {i}
      </Option>
    );
  }
  useEffect(() => {
    setHasNoErrors(!(hasFromError || hasToError || hasNumberError));
  }, [setHasNoErrors, hasFromError, hasToError, hasNumberError]);

  useEffect(() => {
    {
      message.info(
        "Enter number and it base. The number will be displayed in new base and steps of conversion will be shown.",
        12
      );
    }
  }, []);

  let base10 = "";

  let ans = "";
  let reminder;

  let base10Num = 0;
  let ansNum = "";

  useEffect(() => {
    if (hasNoErrors) constructTheSteps(number);
  }, [hasNoErrors, number, toBase, from]);

  function constructTheSteps(number) {
    const upperLimit = number.length - 1;
    for (let i = 0; i <= upperLimit; i++) {
      const currentLetter = number[i];
      const numDigit = digits.findIndex((val, i) => {
        return val === currentLetter;
      });

      base10Num += Number(numDigit) * Math.pow(from, upperLimit - i);
      if (i === upperLimit)
        base10 += `${numDigit} x ${from}<sup>${
          upperLimit - i
        }  </sup>= ${base10Num}`;
      else base10 += ` ${numDigit} x ${from}<sup>${upperLimit - i}</sup> +  `;
    }
    reminder = Number(base10Num);
    while (true) {
      const quotient = Math.floor(reminder / toBase);
      const rem = digits[reminder % toBase];
      ans += `<br> ${reminder} / ${toBase},   quotient= ${quotient}, remainder= <strong>${rem}</strong> `;
      ansNum += rem;
      reminder = Math.floor(reminder / toBase);
      if (reminder === 0) break;
    }

    const stepResult = ansNum.split("").reverse().join("");

    let data = [
      `<div> First Convert to ${number}<sub>${from}</sub> to base 10 <strong>=</strong>  ${base10} </div>`,
      `<div> Repetitively divide ${base10Num}<sub>10</sub> by ${toBase} until quotient is 0  : ${ans} </div>`,
      `<div> Read all the remainders from bottom to top  which to get all converted number= <strong>${stepResult}</strong> `,
    ];
    setResult(stepResult);
    setSteps(data);
  }

  return (
    <div className="convertor">
      <h1 style={{ fontSize: "3rem" }}>The Conversion Calculator </h1>
      <div style={main}>
        <div style={content}>
          <Form style={form}>
            <div style={numberSystem}>
              <div style={bases}>
                <Item
                  name="from"
                  label="Source Base: "
                  style={{
                    fontWeight: "bolder",
                  }}
                  rules={[
                    {
                      required: true,
                      message: "Please Enter the From Base",
                    },
                    {
                      validator: (_, val) => {
                        if (val < 2 || val > 62)
                          return Promise.reject(
                            "Can only convert from base 2 to 62"
                          );
                        else return Promise.resolve();
                      },
                      message: "Can only convert from base 2 to base 62",
                    },
                  ]}
                  hasFeedback
                >
                  <Select
                    style={{
                      width: "12vw",
                    }}
                    onSelect={(i) => {
                      const base = Number(i);
                      if (validateBase(base)) {
                        setHasFromError(false);
                        setFrom(base);
                      } else setHasFromError(true);
                    }}
                  >
                    {options}
                  </Select>
                </Item>

                <Item>
                  <Item
                    name="toBase"
                    style={{
                      fontWeight: "bold",
                    }}
                    rules={[
                      {
                        required: true,
                        message: "Please Enter the To Base",
                      },
                      {
                        validator: (_, val) => {
                          if (val < 2 || val > 62)
                            return Promise.reject(
                              "Can only convert from base 2 to 62"
                            );
                          else return Promise.resolve();
                        },
                        message: "Can only convert from base 2 to base 62",
                      },
                    ]}
                    hasFeedback
                    label="Destination Base : "
                  >
                    <Select
                      style={{
                        width: "12vw",
                      }}
                      onSelect={(i) => {
                        const base = Number(i);
                        if (validateBase(base)) {
                          setHasToError(false);
                          setToBase(base);
                        } else setHasToError(true);
                      }}
                    >
                      {options}
                    </Select>
                  </Item>
                </Item>
              </div>

              <Item
                name="number"
                type="text"
                style={numberContainer}
                label="Number to convert"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please Enter the number to convert from",
                  },
                  {
                    whitespace: true,
                    message: "Number can not be a white space",
                  },
                ]}
              >
                <Input
                  name="number"
                  onChange={(e) => {
                    const number = e.target.value;
                    if (!hasNumberError) {
                      setNumber(number);
                    }
                  }}
                  onKeyPress={(e) => {
                    if (!from || !toBase) {
                      message.error(
                        "Please Enter the Source and the Destination Bases"
                      );
                      return false;
                    }
                    if (!validateNumber(e.key)) {
                      e.preventDefault();
                      message.error(
                        `Entering an invalid number for base ${from}. Base ${from} has the numbers from 0 to ${
                          digits[from - 1]
                        }`
                      );

                      setHasNumberError(true);
                      return false;
                    }
                    setHasNumberError(false);
                  }}
                  placeholder="Enter the number to convert"
                />
              </Item>
            </div>
            <Item label="Result">
              <Input value={result} />
            </Item>
          </Form>

          {hasNoErrors && (
            <div
              style={{
                marginTop: "2%",
              }}
            >
              <Divider orientation="middle">Steps</Divider>
              <List
                style={explanation}
                size="small"
                header={
                  <strong>
                    Steps for Conversion of {number}
                    <sub>{from}</sub> to base {toBase}
                  </strong>
                }
                footer={<div>The End</div>}
                bordered
                dataSource={steps}
                renderItem={(item) => <List.Item>{parse(item)}</List.Item>}
              />
            </div>
          )}
        </div>
        <></>
      </div>
    </div>
  );
  function validateNumber(digit) {
    const index = digits.findIndex((val) => {
      return val === digit;
    });
    const valid = index < from;
    setHasNumberError(!valid);
    return valid;
  }
  function validateBase(base) {
    const valid = base >= 2 && base <= 62;
    return valid;
  }
}

export default Convert;
<List
  style={{
    width: "25%",
  }}
  size="small"
  header={<strong>Latest Conversions</strong>}
  bordered
  dataSource={[
    "1001010 from base 2 to base 16",
    "10weretfrom base 36 to base 9",
    "1AXedrete from base 60 to base 32",
  ]}
  renderItem={(item) => <List.Item>{item}</List.Item>}
/>;
