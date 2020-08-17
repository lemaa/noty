import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Select from 'react-select';
import { components } from 'react-select';
import { useForm } from 'react-hook-form';
import Utils from '../../utils';
import * as yup from "yup";
import '../../styles/FormNote.css';
import Button from '../buttons';


const SignupSchema = yup.object().shape({
    title: yup.string().required(),
    summary: yup.string().required(),
    link: yup.string().url()
  });

const tagOptions = [].concat(
    ...Object.keys(Utils.tagsType.tagsType).map((tags) => Utils.tagsType.tagsType[tags]),
  );

const tagOptionsArray = tagOptions.map(function(x) { 
    return { 
      value: x, 
      label: x ,
      labeltype: Object.keys(Utils.tagsType.tagsType).find((key) =>Utils.tagsType.tagsType[key].includes(x) ) 
    }; 
  });

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
        "borderColor": 'black',
        ':hover': {
            ...provided[':hover'],
            "borderColor": 'black',
          },
     }),
     indicatorSeparator: (provided, state) => ({
        ...provided,
          "backgroundColor": 'black',

       }),
       dropdownIndicator: (provided, state) => ({
        ...provided,
          "color": 'black',
          ':hover': {
            ...provided[':hover'],
            "color": 'black',
          },

       }),
       
  };


function NoteForm(props) {

    const [tags, setTagsSelectValue] = useState({ selectedTags: [] });
    const [color, setColorSelectValue] = useState({ selectedColor: [] });
    const { register, errors, handleSubmit, setValue  } = useForm({
        validationSchema: SignupSchema
      });

      const colorOption = props => {         
        return (
          <components.Option  {...props}> 
              <img className='select-icon' src={process.env.PUBLIC_URL + `assets/post-${props.data.imageLabelle}.png`} alt="color note"/>
              <span> {props.data.label}</span> 
            </components.Option>
        );
      };

    const tagsOption = props => {     
        return (
          <components.Option  {...props}> 
              <span className ={`badge badge-${props.data.labeltype}`}> {props.data.label}</span> 
            </components.Option>
        );
      };

      const handleTagsChange = selectedTags => {
        setValue("tagsSelect", selectedTags);
        setTagsSelectValue({ selectedTags });
      }
      const handleColorChange = selectedColor => {
        setValue("colorSelect", selectedColor);
        setColorSelectValue({ selectedColor });
      }

      React.useEffect(() => {
        register({ name: "tagsSelect" });  
        register({ name: "colorSelect" });  
      }, [register])

   return (
            <Form onSubmit={handleSubmit(props.submitClickHandler)}>
                <Form.Group as={Row} controlId="colorRow">
                        <Form.Label column sm={2} className="col-form-label">Color</Form.Label>
                        <Col sm={10}>
                            <Select 
                                value={color.selectedColor}
                                onChange={handleColorChange}
                                options={Utils.colorNoteImage.colorNoteImage} 
                                components={{ Option: colorOption }} 
                                styles={customStyles}
                                theme={theme => ({
                                    ...theme,
                                    borderRadius: 3,
                                    colors: {
                                      ...theme.colors,
                                       primary: 'black',
                                    },
                                  })} />
                        </Col>
                    </Form.Group>
                <Form.Group as={Row} controlId="titleRow">
                        <Form.Label column sm={2} className="col-form-label">Title</Form.Label>
                        <Col sm={10}>
                            <Form.Control name="title" type="text" className="note-input" placeholder="title" ref={register({ required: true })} />
                            {errors.title && <p className="errors">{errors.title.message}</p>}
                        </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="linkRow">
                        <Form.Label column sm={2} className="col-form-label">Link</Form.Label>
                        <Col sm={10}>
                            <Form.Control name="link" type="url" className="note-input" placeholder="link" ref={register({ required: true })} />
                            {errors.link && <p className="errors">{errors.link.message}</p>}
                        </Col>
                    </Form.Group>
                <Form.Group as={Row} controlId="summaryRow">
                        <Form.Label column sm={2} className="col-form-label">Summary</Form.Label>
                        <Col sm={10}>
                            <Form.Control name="summary" className="note-input" as="textarea" rows="3"  ref={register({ required: true })} />
                            {errors.summary && <p className="errors">{errors.summary.message}</p>}

                        </Col>
                    </Form.Group>
                <Form.Group as={Row} controlId="tagsRow">
                        <Form.Label column sm={2} className="col-form-label">Tags</Form.Label>
                        <Col sm={10}>
                            <Select 
                                    value={tags.selectedTags}
                                    options={tagOptionsArray} 
                                    components={{  Option: tagsOption }} 
                                    styles={customStyles}
                                    onChange={handleTagsChange}
                                    isMulti 
                                    isSearchable 
                                    theme={theme => ({
                                        ...theme,
                                        borderRadius: 3,
                                        colors: {
                                          ...theme.colors,
                                           primary: 'black',
                                        },
                                      })}/>
                        </Col>
                    </Form.Group>
                
                    <Button buttonType="submit" classIdentifier="float-right btn btn-dark">
                        save note
                    </Button>
                    <Button buttonType="button" classIdentifier="float-right btn btn-warning btn-cancel" onClick={props.cancelClickHandler}>
                        cancel
                    </Button>

            </Form>

  );
}

export default NoteForm;









