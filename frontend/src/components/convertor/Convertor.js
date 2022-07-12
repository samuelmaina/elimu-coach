import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
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
    if (from && base)
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

  let base10 = "";

  let ans = "";
  let reminder;

  let base10Num = 0;
  let ansNum = "";

  if (number) {
    const upperLimit = number.length - 1;
    for (let i = 0; i <= upperLimit; i++) {
      if (i === upperLimit)
        base10 += `${number[i]} x ${from}<sup>${
          upperLimit - i
        }  </sup>= ${base10Num}`;
      else base10 += ` ${number[i]} x ${from}<sup>${upperLimit - i}</sup> +  `;
      base10Num += Number(number[i]) * Math.pow(from, upperLimit - i);
    }
    reminder = Number(base10Num);
    while (true) {
      ans += `<br> ${reminder}/${base},   quotient= ${Math.floor(
        reminder / base
      )}, reminder= <strong>${reminder % base}</strong> `;
      ansNum += reminder % base;
      reminder = Math.floor(reminder / base);
      if (reminder === 0) break;
    }
  }

  const data = [
    `<div> First Convert to ${number}<sub>${from}</sub> to base 10 <strong>=</strong>  ${base10} </div>`,
    `<div> Repetitively divide ${base10Num}<sub>10</sub> by ${base} until quotient is 0  : ${ans} </div>`,
    `<div> Read all the reminders from bottom to top  which to get all converted number= <strong>${ansNum
      .split("")
      .reverse()
      .join("")}</strong> `,
  ];

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div
        style={{
          width: "75%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Form
          style={{
            backgroundColor: "3a86ff",
            marginTop: "5%",
            maxHeight: "20%",
            width: "100%",
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
                const base = Number(e.target.value);
                if (validateBase(base)) setFrom(base);
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

        {from && (
          <div
            style={{
              marginTop: "2%",
            }}
          >
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
              renderItem={(item) => <List.Item>{parse(item)}</List.Item>}
            />
          </div>
        )}
      </div>
      <>
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
        />
      </>
    </div>
  );
  function validateNumber(vals = []) {
    const lastDigit = vals[vals.length - 1];
    const index = digits.findIndex((val) => {
      return val === lastDigit;
    });
    return index < from;
  }
  function validateBase(base) {
    return base >= 2 && base <= 62;
  }
}

export default Convert;
