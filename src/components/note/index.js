import React , { useState } from 'react';
import Card from 'react-bootstrap/Card';
import '../../styles/Note.css';
import Utils from '../../utils';


function Note(props) { 

    const [color] = useState(props.color);
    const [title] = useState(props.title);
    const [text] = useState(props.text);
    const [tags] = useState(props.tags);
    const [createdAt] = useState(props.createdAt);

    const typeTag = (tag) => {
        return Object.keys(Utils.tagsType.tagsType).find((key) =>
            Utils.tagsType.tagsType[key].includes(tag),
        );
    };

 
  return (
       <Card className="notes-card col-sm-3 col-xs-10">
            <Card.Header>
                <img src={process.env.PUBLIC_URL + `/assets/post-${color}.png`} className="header-card-image mx-auto d-block img-fluid" alt="note"/>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text className="note-text">{text}</Card.Text>
            </Card.Body>
            <Card.Body className="note-tags">
                {tags && tags.map((tag, i) => (
                        <span key={i.toString()} className={'badge badge-pill badge-' + typeTag(tag)}>{tag}</span>
                    ))

                }
            </Card.Body>
            <Card.Body>
                <div className="float-right"><small>written  {createdAt} </small></div>
            </Card.Body>
      </Card>

  );
};

export default Note;