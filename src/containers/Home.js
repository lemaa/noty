import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NoteModal from './../components/modal';
import Button from '../components/buttons';
import { ToastContainer, toast } from 'react-toastify';
import Note from './../components/note/index';
import allActions from './../actions';
import moment from 'moment';
import NoteForm from './../components/form/noteForm';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/Home.css';

const Home = () => {

    const [showNewForm, setShowNewForm] = useState(false);

    const handleCloseNewForm = () => {
        setShowNewForm(false);
    };
    const handleShowNewForm = () =>  setShowNewForm(true);


    const notes = useSelector(state => state.notes);
    const dispatch = useDispatch();
  
    useEffect(() => {
        dispatch(allActions.noteActions.fetchAllNotes());
    }, [dispatch]);
  
     
    const handleAddNote = (data) => {

        const dataNote =  { 
                color: data.colorSelect.imageLabelle,
                title: data.title,
                text: data.summary,
                link: data.link,
                tags:  data.tagsSelect.map(tagRow => tagRow.value)
            }; 

            dispatch(allActions.noteActions.createNote(dataNote));
            toast.success("Note has been created successfully");
            setShowNewForm(false);

      };
    return (
        <Container className="main-section" fluid>
            <Row className="top-bar-section">
                <Col className="button-container">
                     <Button buttonType="button" classIdentifier="note-add-button float-right btn btn-light" onClick={handleShowNewForm }>
                     <img src={process.env.PUBLIC_URL + `/assets/note-add.png`} className=" mx-auto d-block img-fluid" alt="note"/>
                    </Button>
                </Col>
            </Row>
            <Container className="notes-section" fluid>
                { notes[0] && 
                    notes[0].map((notesRow, i) => (
                        <Row key={i.toString()} className="justify-content-around notes-row">
                            {notesRow.map((note) => (
                                <Note key={note._id.toString()}
                                      color= {note.color} 
                                      title= {note.title}
                                      text= {note.text}  
                                      tags= {note.tags}     
                                      link= {note.link}     
                                      createdAt= {moment(note.createdAt).startOf('day').fromNow()} />
                                ))}
                        </Row>
                    ))
                } 
            </Container>
            
            <NoteModal showModal={showNewForm}  handleCloseModal ={handleCloseNewForm} animationModal={true} >
                <NoteForm submitClickHandler={handleAddNote} cancelClickHandler={handleCloseNewForm} ></NoteForm>
            </NoteModal>
            <ToastContainer />
        </Container>          
    );
  }
  
export default Home;
