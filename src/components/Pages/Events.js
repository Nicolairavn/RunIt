import React, {useState, useEffect, Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './main.css';
import {Row, Card, Button} from 'react-bootstrap';


function Events() {
    //class Home extends Component{


    const [event, setEvent] = useState({})

        useEffect(() => {
            (async () => {
                try {
                    let res = await axios.get('http://localhost:5021/runit/event/5f403f61dd832b22b486fa28');
                    let eventres = await res.data;
                    setEvent(eventres)
                } catch (err) {
                    console.log(err);
            }
        })()
        }, [])

        //let eventliste = <tr><td colSpan="5">Ingen events</td></tr> 

       // if (event.length > 0) {
         //   eventliste - event.map(e => {
                        
               // return (
                  //  <tr key={e.id}>
                    //    <td>{e.id}</td>
                       // <td>{e.titel}</td>
                      //  <td>{e.dato}</td>
                     //   <td>{e.beskrivelse}</td>
                     //   <td>{e.pris}</td>
                      //  <td>{e.billede}</td>
                    // </tr>
                //)
            //})
        //}


    return(
            <div className="container col-lg-12" style={{backgroundImage: `url(${process.env.PUBLIC_URL + '../images/events/foresttothebay.jpg'}` }}>
                <div className="row row-cols-2">
                    <div className="col-lg-9 mt-5" >
                        <h1><span id="runit_logo_top1">RUN'</span><span id="runit_logo_top2">IT</span></h1>
                            <div className="container col-lg-10 bg-white">
                                <div className="row row-cols-4">
                                    <div className="col-lg-3">
                                        <h6>Indkreds</h6>
                                        <p>Distance</p>
                                        <form action="">
                                           <p><input id="input_radio" type="radio"/> Over 10 KM</p> 
                                           <p><input id="input_radio" type="radio"/> Under 10 KM</p> 
                                        </form>
                                        <p>Hvor i landet</p>
                                        <p></p>
                                    </div>
                                    <div className="col-lg-3">
                                    <Card className="col-lg-12 bg-light">
                                        <Card.Img variant="top" src={process.env.PUBLIC_URL + '../images/events/foresttothebay.jpg'} />
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                            </Card.Text>
                                            <Button id="laesmere">LÆS MERE</Button>
                                        </Card.Body>
                                    </Card>
                                    </div>
                                    <div className="col-lg-3">
                                    <Card className="col-lg-12 bg-light">
                                        <Card.Img variant="top" src={process.env.PUBLIC_URL + '../images/events/foresttothebay.jpg'} />
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                            </Card.Text>
                                            <Button id="laesmere">LÆS MERE</Button>
                                        </Card.Body>
                                    </Card>
                                    </div>
                                    <div className="col-lg-3">
                                    <Card className="col-lg-12 bg-light">
                                        <Card.Img variant="top" src={process.env.PUBLIC_URL + '../images/events/foresttothebay.jpg'} />
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                            </Card.Text>
                                            <Button id="laesmere">LÆS MERE</Button>
                                        </Card.Body>
                                    </Card>
                                    </div>
                                </div>
                            </div>
                    </div>

                    <div id="event_ny" className="col-lg-3 bg-white">
                        <div className="col-lg-12"><p id="reminder">FÅ PLADSER TILBAGE</p></div>
                        <div className="col-lg-12"><h3>Ultraløbet Fyr til Fyr</h3></div>
                        <div className="col-lg-12"><p id="dato">2020-09-30 22:30</p></div>
                        <div className="col-lg-12"><p>Danmarks smukkeste ultraløb på langs af Bornholm går fra Dueodde Fyr i syd til målet ved Hammer Fyr på øens nordende. Undervejs kommer løberne forbi Svaneke Fyr og Hammerodde Fyr samt de to depoter i Svaneke og Gudhjem. Ruten på 60 km følger den gamle redningssti langs med østkysten.</p></div>
                        <div className="col-lg-12"><p id="pris">Pris: 350 kr</p></div>
                        <div className="col-lg-12"><Link to={"/laes_mere/"} id="knap" className="col-lg-12">LÆS MERE</Link>
                    </div>     

                    <div id="tilmeld" className="col-lg-12" >  
                        <img className="img-fluid" src={process.env.PUBLIC_URL + '../images/Tilmeld_logo.png'} alt="nyhedsbrev_icon"/>   
                        <p>Nyheds brev</p>
                        <form action="">
                            <input id="input_email" type="email"/>
                            <input id="input_submit" type="submit"/>
                        </form>
                    </div>

                    <div id="Sponsorebox" className="col-lg-12">
                        <p>Sponserer</p>
                        <img className="img-fluid" src={process.env.PUBLIC_URL + '../images/sponsorer/nike.png'} alt="Sponsorer"/>
                    </div>

                </div>
            </div>

            <Row>
                <div id="runit_footer" className="col-lg-12">
                    <p id="runit_logo_main"><span id="runit_logo_bottom1">RUN'</span><span id="runit_logo_bottom2">IT</span></p>
                </div>
            </Row>
        </div>
    )
}

export default Events