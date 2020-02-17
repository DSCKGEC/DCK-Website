import React from "react";
import { Card, CardImg } from "react-bootstrap";
import { mdiWeb } from "@mdi/js";
import Icon from "@mdi/react";
import placeholder from "../../Assets/ml@2x.png";

function mambercard(props) {
  const member = props.member;
  return (
    <Card
      style={{
        padding: 20 + `px`,
        margin: 10 + `px ` + 10 + `px`,
        minWidth: 250 + `px`,
        maxWidth: 95 + "%"
      }}
    >
      <CardImg
        src={member.picture || placeholder}
        style={{
          display: `block`,
          width: 80 + `px`,
          margin: 10 + `px auto`,
          borderRadius: 100 + `px`
        }}
      ></CardImg>
      <div
        style={{
          textAlign: `center`
        }}
      >
        <h3>{member.name}</h3>
        <p>{member.post}</p>
        <div
          style={{
            display: `flex`,
            justifyContent: `center`
          }}
        >
          {member.links.map(link => {
            return (
              <a
                href={link.link}
                target=":blank"
                style={{
                  margin: 0 + `px ` + 10 + `px`,
                  cursor: "pointer"
                }}
              >
                <Icon
                  path={link.icon || mdiWeb}
                  size={1}
                  title={link.to}
                ></Icon>
              </a>
            );
          })}
        </div>
      </div>
    </Card>
  );
}

export default mambercard;
