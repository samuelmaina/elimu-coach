import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Divider, List, Typography } from "antd";

import { Input, Form, message } from "antd";
import { requestConversion } from "../../services/requests/conversion";

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
  const { base } = useParams();

  const [from, setFrom] = useState(null);
  const [number, setNumber] = useState(null);

  const [result, setResult] = useState(0);

  useEffect(() => {
    if (from > 62) {
      message.error("Can only convert upto base 62");
      setNumber(null);
      setFrom(null);
      setResult(null);
    }
    if ((from, number))
      requestConversion({
        from,
        to: Number(base),
        number,
      })
        .then((res) => {
          setResult(res);
        })
        .catch((err) => console.log(err));
  }, [from, base, number]);

  const data = [
    "First Convert to base 10",
    "Apply Continous division by the base",
    "which yields ans",
  ];

  return (
    <div>
      <Form
        style={{
          backgroundColor: "3a86ff",
          marginTop: "2%",
          marginLeft: "25%",
          maxHeight: "20%",
          width: "50%",
          paddingTop: "2rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Item
          name="from"
          label="Base to Convert from"
          rules={[
            {
              required: true,
              message: "Please Enter the From Base",
            },
            {
              validator: (_, val) => {
                if (val < 2 || val > 62)
                  return Promise.reject("Can only convert from base 2 to 62");
                else return Promise.resolve();
              },
              message: "Can only convert from base 2 to base 62",
            },
          ]}
          hasFeedback
        >
          <Input
            name="base"
            onChange={(e) => {
              setFrom(Number(e.target.value));
            }}
            placeholder="Type the base in which  of the number you want to convert"
          />
        </Item>

        <Item
          name="number"
          label="Number to convert"
          rules={[
            {
              required: true,
              message: "Please Enter the number to convert from",
            },
            { whitespace: true, message: "Name can not be a white space" },
            {
              validator: (_, vals) => {
                const valid = validateNumber(vals);
                if (valid) return Promise.resolve();
                else return Promise.reject("Invalid number");
              },
            },
          ]}
          hasFeedback
        >
          <Input
            name="number"
            onChange={(e) => {
              const number = e.target.value;
              if (validateNumber(number)) setNumber(number);
            }}
            placeholder="Enter the number to convert"
          />
        </Item>

        <Item label="Result">
          <Input value={result} />
        </Item>
      </Form>
      {from && from > 1 && (
        <>
          <Divider orientation="middle">Steps</Divider>
          <List
            style={{
              width: "50%",
              marginLeft: "20%",
            }}
            size="small"
            header={
              <strong>
                Conversion From base {from} to base {base}
              </strong>
            }
            footer={<div>Footer</div>}
            bordered
            dataSource={data}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
        </>
      )}
    </div>
  );
  function validateNumber(vals) {
    const lastDigit = vals[vals.length - 1];
    const index = digits.findIndex((val) => {
      return val === lastDigit;
    });
    return index < from;
  }
}

export default Convert;
