import React from 'react';
import { withAuth } from '../hoc/withAuth';
import './style.css';
import vector from '../images/Vector.png'
import vector2 from '../images/Vector2.png'
import ellipse from '../images/Ellipse.png'
import ellipse1 from '../images/Ellipse1.png'
import ellipse2 from '../images/Ellipse2.png'
import union from '../images/union.png'
import bag from '../images/bag.png'
import list from '../images/list.png'
import rectangle from '../images/rectangle.png'
import face from '../images/face.png'
import face1 from '../images/face1.png'
import face2 from '../images/face2.png'
import twitter from '../images/twitter.png'
import instagram from '../images/instagram.png'
import facebook from '../images/facebook.png'


const Home = () => {
    return <div className="body-home">
        <div>
            <div>
                <div className='main'>
                    <h1>Global digital agency </h1>
                    <p>By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath.</p>  
                    <button>Learn more</button>
                </div>
                <div className='gradient-first'></div>
                <div className='gradient-second'></div>
                <div className='gradient-third'></div>
            </div>

            <div className="orange-button">
                <div>
                    <div className="arrow">
                        <div className="arrow-top"></div>
                        <div className="arrow-bottom"></div>
                    </div> 
                </div>
                <div className="box-arrow-2">
                    <div className="arrow-2">
                        <div className="arrow-2-top"></div>
                        <div className="arrow-2-bottom"></div>
                    </div>
                </div>
            </div>
            
            <div className='container col-8 box-img'>
                <div className='img'>
                    <span>
                        <h1>INTRO</h1>
                        <p>By the same illusion which lifts the horizon.</p>
                    </span>
                </div>
            </div>
            <div className="box-socila">
                <span>Facebook</span>
                <span>Twitter</span>
                <span>Instagram</span>
            </div>
        </div>

        <div className="container content">

            <div className="container col-6 description">
                <div><img src={vector}/> <span>WELCOM</span></div>
                <p>
                    By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, 
                    the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, 
                    whose upper half was strewn with silver.
                </p>
            </div>
            <div className="container box-do">
                <h1 className="text-center">What we do</h1>
                <div className="container">
                    <div className="row box-do-contant">
                        <div className="container col-3">
                            <img src={ellipse}/>
                            <h2>By the same illusion which lifts the horizon.</h2>
                            <p>By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.</p>
                        </div>
                        <div className="container col-3">
                            <img src={ellipse1}/>
                            <h2>By the same illusion which lifts the horizon.</h2>
                            <p>By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.</p>
                        </div>
                        <div className="container col-3">
                            <img src={ellipse2}/>
                            <h2>By the same illusion which lifts the horizon.</h2>
                            <p>By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container col-12 content2 process">
            <div className="container">
                <div className="row">
                    <div className="container col-5 text">
                        <div><img src={vector}/><span>PROCESS</span></div>
                        <h1>By the same illusion which lifts the horizon.</h1>
                        <p>By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside,</p>
                        <p>the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver.</p>
                    </div>
                    <div className="container col-7 list">
                        <div className="container col-7 list-contant">
                            <div className="rectangle"></div>
                            <div className="list__text">
                                <div className="circle"></div>
                                <div className="number">1</div>
                                <div className="text">By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside</div>  
                            </div>
                        </div>
                        <div className="container col-7 list-contant">
                            <div className="rectangle"></div>
                            <div className="list__text">
                                <div className="circle"></div>
                                <div className="number">2</div>
                                <div className="text">By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside</div>  
                            </div>
                        </div>
                        <div className="container col-7 list-contant">
                            <div className="rectangle"></div>
                            <div className="list__text">
                                <div className="circle"></div>
                                <div className="number">3</div>
                                <div className="text">By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside</div>  
                            </div>
                        </div>  
                        <div className="container col-7 list-contant">
                            <div className="rectangle"></div>
                            <div className="list__text">
                                <div className="circle"></div>
                                <div className="number">4</div>
                                <div className="text">By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside</div>  
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
        </div>
        <div className="container col-12 content3">
            <div className="container">
                <div className="row">
                    <div className="container col-4 block-text">
                        <div><img src={vector2}/><span>FEATURES</span></div>
                        <h1>By the same illusion which lifts the horizon.</h1>
                        <div className="box">
                            <div className="box-contant">
                                <div className="row">
                                    <div className="container col-3">
                                        <div className="circle">
                                            <img src={union}/>
                                        </div>
                                    </div>
                                    <div className="container col-9">
                                        By the same illusion which lifts the horizon of the sea to the level 
                                        of the spectator on a hillside, the sable cloud beneath was dished out.
                                    </div>
                                </div>
                            </div>
                            <div className="box-contant">
                                <div className="row">
                                    <div className="container col-3">
                                        <div className="circle">
                                            <img src={bag}/>
                                        </div>
                                    </div>
                                    <div className="container col-9">
                                        By the same illusion which lifts the horizon of the sea to the level 
                                        of the spectator on a hillside, the sable cloud beneath was dished out.
                                    </div>
                                </div>
                            </div>
                            <div className="box-contant">
                                <div className="row">
                                    <div className="container col-3">
                                        <div className="circle">
                                            <img src={list}/>
                                        </div>
                                    </div>
                                    <div className="container col-9">
                                        By the same illusion which lifts the horizon of the sea to the level 
                                        of the spectator on a hillside, the sable cloud beneath was dished out.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container col-7 box-img2">
                        <img src={rectangle}></img>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container col-12 content4">
            <div className="container">
                <div className="row">
                    <div className="container col-4 header">
                        <div><img src={vector}/><span>TESTIMONIALS</span></div>
                        <h1>By the same illusion which lifts the horizon.</h1>
                    </div>
                    <div className="container col-7"></div>
                </div>
            </div>
            <div className="container">
                <div className="row users">
                    <div className="container col-4 user">
                        <div className="container user-data">
                            <div className="back-image first-img"></div>
                            <img src={face}/>
                            <div className="container">   
                                <div className="users-text">
                                    <p>“By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.”</p>
                                    <p>John Wayne</p>
                                    <p>CEO</p>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className="container col-4 user">
                        <div className="container user-data">
                            <div className="back-image second-img"></div>
                            <img src={face1}/>
                            <div className="container">   
                                <div className="users-text">
                                    <p>“By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.”</p>
                                    <p>John Wayne</p>
                                    <p>CEO</p>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className="container col-4 user">
                        <div className="container user-data">
                            <div className="back-image third-img"></div>
                            <img src={face2}/>
                            <div className="container">   
                                <div className="users-text">
                                    <p>“By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.”</p>
                                    <p>John Wayne</p>
                                    <p>CEO</p>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="container col-12 vision">
                    <div className="container">
                        <h1>Vision, Passion, Results</h1>
                        <p>By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath.</p>
                        <div className="container">
                            <button className="btn btn-primary button-apply">Apply</button>
                        </div>
                    </div>
                    <div className="rect big-green1"></div>
                    <div className="rect big-green2"></div>
                    <div className="rect yellow1"></div>
                    <div className="rect yellow2"></div>
                    <div className="rect yellow3"></div>
                    <div className="rect red1"></div>
                    <div className="rect red2"></div>
                    <div className="rect blue1"></div>
                    <div className="rect violet1"></div>
                    <div className="rect violet2"></div>
                    <div className="rect violet3"></div>
                    <div className="rect violet4"></div>
                </div>
            </div>
        </div>
        <div className="container col-12 footer">
            <div className="container">
                <div className="row">
                    <div className="container col-7 email">
                        <div className="label"><img src={vector}/><span>SEND US A MESSAGE</span></div>
                        <form className="form-footer">
                            <div className="form-group row">
                                <div className="col-sm-10">
                                <input type="email" className="form-control" id="inputEmail3" placeholder="Your email"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-10">
                                <input type="password" className="form-control" id="inputPassword3" placeholder="Your name"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-10">
                                <input type="password" className="form-control" id="inputPassword3" placeholder="Your message"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-10">
                                <button type="submit" className="btn btn-primary button-email">Send</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="container col-5 footer-content">
                        <div className="label"><img src={vector}/><span>CONTACT US</span></div>
                        <h1>By the same illusion which lifts the horizon.</h1>
                        <div className="footer-text">
                            <p className="title">CALL US</p>
                            <p className="numbers">654 321 987</p>
                            <p className="title">VISIT US</p>
                            <p className="numbers">2905 WEST DRIVE, BUFFALO GROVE</p>
                            <div className="social">
                                <img src={twitter}/>
                                <img src={instagram}/>
                                <img src={facebook}/>
                            </div>
                        </div>   
                    </div>
                </div>
            </div>
            <div className="container col-12 footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="container col-7 footer-adress">
                            <h1>Design by @mariuszdaniel</h1>
                        </div>
                        <div className="container col-5 footer-menu">
                            <div className="row">
                                <span>Home</span>
                                <span>About us</span>
                                <span>Services</span>
                                <span>Work</span>
                                <span>Contact Us</span>     
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
}

export default withAuth(Home);
