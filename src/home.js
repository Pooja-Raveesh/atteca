import { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import ateeca from './image/ateeca.jpg';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Button";
import Figure from "react-bootstrap/Figure";
import work from './image/work.jpg';
import background from './image/background.jpg';
import welcome from './image/welcome.png';
import pro from './image/pro.png';
import pro2 from './image/pro2.png';
import certificate from './image/certificate.png';
import nmsdc from './image/nmsdc.png';
import CardGroup from "react-bootstrap/CardGroup";
import card from './image/card.png';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import fig from './image/fig.png';
import client from './image/clients.png';
import staffing from './image/staffing.jpg';
import payroll from './image/payroll.jpg';
import service from './image/services.jpg';


class Home extends Component{

    render(){
        return(
            <div className="container-fluid" style={{fontFamily:'revert'}}>
                <br/>
    <div>
    <Navbar bg="primary" className="mr-auto" variant="dark" className="justify-content-end">
    <Navbar.Brand href="#home">
      <div >Info@ateeca.com|+1908-668-1250</div>
    </Navbar.Brand>
  </Navbar>
  </div>

  <div className="container">
    <Navbar bg="default"  > 
    <div className="container" >
    <Navbar.Brand href="#home">
      <img
        src={ateeca}
        width="60"
        height="60"
      />
    </Navbar.Brand>
    </div>
    
  <div className="justify-content-end">
  <Nav  activeKey="/home">
    <Nav.Item>
      <Nav.Link href="/home" style={{ color: 'black' }}>Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link style={{ color: 'black' }} eventKey="#">AboutUs</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link style={{ color: 'black' }} eventKey="#">Services</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link style={{ color: 'black' }} eventKey="#">Industry</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link style={{ color: 'black' }} eventKey="#">Technology</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link style={{ color: 'black' }} eventKey="#">Careers</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link style={{ color: 'black' }} eventKey="#">Contact</Nav.Link>
    </Nav.Item>
  </Nav>
  </div>
  </Navbar>
   <hr/>
  </div>


  <div>
  <div class="row">
                <div class="col-1"></div>
                <div class="col-6">
    
 <b style={{color:"blue"}}> <h2>Get Your </h2><h1>Dream Job</h1></b>
 <br/>
      
    <p>Ateeca Inc started by womem entreprenuers in the state of New Jersy in the year2005 with core focus to provide exceptional information Technology, Engineering, Scientific/clinical, Admin/clerical &amp; Accounting/Finance, professionals to manage time sensitive, mission critical process across the Enterprise.</p>
      
      <br/>
      <br/>
      <Button variant="primary">Know More</Button>{' '}
      <Badge variant="light">Get In Touch</Badge>
      
  </div>
  <div class="col-5">
  <Figure>
  <Figure.Image
    width={400}
    height={580}
    src={work}
  />
</Figure>
  </div>
   </div>             
    

    <div>
    <Card className="bg-light text-white">
  <Card.Img src={background} />
  <Card.ImgOverlay>
  <div className="row">
                <div className="col-6">
                <img
        src={welcome}
        width="300"
        height="300"
      /> 
                </div>
        
                <div className="col-5" style={{textAlign:"right"}}>
    
    
    <Card.Title className="justify-content-end"><h3>WELCOME TO</h3><b><h1>ATEECA</h1></b></Card.Title>
    <Card.Text className="justify-content-end">
    Ateeca Inc was started by women entrepreneurs in the state of New Jersey in the year 2005 with core focus to provide exceptional Information Technology, Engineering, Scientific/Clinical, Admin/Clerical Accounting/Finance, professionals to manage time sensitive, mission critical process across the Enterprise.
    </Card.Text>
    <Card.Text className="justify-content-end">
  <Button variant="light">Read More</Button> 
    </Card.Text>
</div>
    </div>
    
    <br/>
    <center>***********************************************************************************</center>
    <br/>
    <br/>
    <div className="row">
        <div className="col-1"></div>
                <div className="col-5">
                <div className="card text-white bg-info mb-3" style={{ width: '20rem' }}>
   <div class="card-body">
   <div class="row g-0">
    <div class="col-md-4">
      <img src={staffing} width="100" height="100"/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
      <h5 class="card-title">STAFFING</h5>
    <p class="card-text">
<a href="#" style={{color:"white"}}>Read More {'>>>'}</a></p>
        
      </div>
    </div>
  </div>
    
  </div>
</div>

<div className="card text-dark bg-light mb-3" style={{ width: '20rem' }}>
  
  <div class="card-body">
  <div class="row g-0">
    <div class="col-md-4">
      <img src={payroll} width="100" height="100"/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">PAYROLLING</h5>
        <p class="card-text"><a href="#">Read More {">>>"}</a></p>
        
      </div>
    </div>
  </div>

  </div>
</div>

<div className="card text-light bg-primary mb-3" style={{ width: '20rem' }}>
  
  <div class="card-body">
  <div class="row g-0">
    <div class="col-md-4">
      <img src={service} width="100" height="100"/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
      <h5 class="card-title">IT SERVICES
</h5>
    <p class="card-text"><a href="#" style={{color:"white"}}>Read More {'>>>'}</a></p>
        
      </div>
    </div>
  </div>
    
  </div>
</div>

<div className="card text-dark bg-warning mb-3" style={{ width: '20rem' }}>
  
  <div class="card-body">
    <h5 class="card-title">RECRUITMENT PROCESS OUTSOURCING</h5>
    <p class="card-text">
Ateeca’s with its Core Competence in Recruitment & Professional Staffing
has acquired unique capabilities to locate, recruit and retain the right
talent and obtain the highest possible level of customer satisfaction. We
service a broad client base in the Finance, Insurance, Energy, Manufacturing,
pharmaceutical, retail, and services industries..
<a href="#" style={{color:'black'}}>Read More{'>>>'} </a></p>
  </div>
</div>
    </div>  
    <div className="col-1"></div>
                <div className="col-3">
                <img
        src={pro}
        width="300"
        height="300"
      />   
      <br/>
      <br/>
      <br/>
      <img
        src={pro2}
        width="300"
        height="300"
      /> 

                </div>
            </div>
    
<br/>
<br/>
    <div className="Container">
        <div className="row" >
            <div className="col-1"></div>
            <div className="col-5"><b><h3>INDUSTRIES</h3></b></div>
            <div className="col-5"></div>
        </div>
<br/>
        <div className="row" >
            <div className="col-1"></div>
            <div className="col-5"><b>INSURANCE</b><br/><br/>
Ateeca’s Insurance team combines in-depth industry knowledge
with proven methodologies and best practices to deliver
software services/solutions that meet the unique needs of
the Insurance industry to facilitate them accurately to assess
risk and manage customer relationships over time to achieve
financial success.
<br/>
<br/>
<Button variant="light">Read More</Button> </div>

            <div className="col-5"><b>BANKING & FINANCE</b><br/><br/>
Ateeca’s Financial Services team provides end to end and
cost-effective solutions for the Banking Industry to help them
comply with regulatory compliance requirements, facilitate
Mergers & Acquisitions, enhance business competitiveness
and retain promising customers.
<br/>
<br/>
<Button variant="light">Read More</Button> </div>
        </div>
<br/>
        <div className="row">
            <div className="col-1"></div>
            <div className="col-5"><b>PHARMA & LIFE SCIENCES</b><br/><br/>
Ateeca’s solutions for the pharmaceutical sector covers the
entire gamut of processes involving drug research, discovery
to development, clinical trials and development, production
and distribution, high-performance information infrastructure,
Compliance & Validation and e-business.
<br/>
<br/>
<Button variant="light">Read More</Button> </div>
            <div className="col-5"><b>ENERGY & UTILITIES</b><br/><br/>
Ateeca’s Energy & Utilities practice helps our energy clients in
adopting best business practices in operations & maintenance,
streamlining of internal processes and minimize overheads
to achieve quantum improvement in the energy sector.
<br/>
<br/>
<Button variant="light">Read More</Button> </div>
        </div>
<br/>
    </div>
  </Card.ImgOverlay>
</Card>
    </div>
  </div>
  <div>
  <Card>
    <Card.Img src={fig} />
  </Card>
  </div>
<br/>

  <div className="row">
    <div className="col-2"></div>
    <div className="col-8">
    <h2 style={{color:"darkblue"}}>CERTIFICATIONS</h2>
    <br/>
    <div className="row">
    
  <div className="col-sm-6">
    <div className="card text-dark bg-light mb-3">
      <div className="card-body">
      <div class="row g-0">
    <div class="col-md-3">
      <img src={certificate} width="100" height="130" />
    </div>
    <div class="col-md-9">
      <div class="card-body">
        <p class="card-text">Cretified as Business Enterprise by Women Business Enterpeise National Council (WBENC)</p>
      </div>
    </div>
  </div>

      </div>
    </div>
  </div>

  <div class="col-sm-6">
    <div class="card text-dark bg-light mb-3">
      <div class="card-body">
      <div class="row g-0">
    <div class="col-md-4">
      
      <img src={nmsdc} width="130" height="130"/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <p class="card-text">Certified by the NMSDC as a MBE
        (A Women Owned Minority Company)</p>
      </div>
    </div>
  </div>

      </div>
    </div>
  </div>
</div>
</div>
<div className="col-2"></div>
  </div>
<br/>
<br/>


<div>
<CardGroup>
  <Card style={{background:'blue'}}>
        <Card.Img src={client}/>
  </Card>
  <Card>
    
  <Card.Img  src={card} />
    
  </Card>
  
</CardGroup>
</div>
<br/>
<br/>

<div>
<CardGroup className="Container">
<Card className="row">
<div className="col-2"></div>
<div className="col-7">
<Card.Body>
      <Card.Title><h2>TESTIMONIALS</h2></Card.Title>
      <Card.Text>
      
    "With almost 15 years of excellence and
experience at Ateeca, we have been endeavouring
to acclimatize constantly to stay up to
date and meet the dynamic needs of the existing
market and gratifying our customers."
    
      </Card.Text>
    </Card.Body>
    </div>
  <div className="col-2"></div>
    </Card>
  
  <Card style={{background:'darkviolet'}}>
  <div className="card-body">
    <p className="card-text-light">
      <br/>
<b>"With almost 15 years of excellence and experience at Ateeca,
we have been endeavouring to acclimatize constantly to stay up
to date and meet the dynamic needs of the existing market and
gratifying ourcustomers."</b>
<br/><br/>
<b>
By-
Shafeek Abdul Salam
IT Manage
</b></p>
  </div>
  </Card>
 
  
</CardGroup>
</div>
<br/>
<br/>

<div className="Continer" >
<Card className="card text-white" style={{backgroundColor:"darkblue"}}>
  <br/>
  <br/>
<div className="row"> 
<div className="col-1"></div>
<div className="col-3">
  <div>
   <h2>GET IN TOUCH</h2>
  </div>
  <br/>
  <h6>CORPORATE ADDRESS:</h6>
  <hr/>
  <p>Ateeca Inc, 107 B-1, Corporate Blvd,
  NJ-07080, United States</p>
  <p>+1 908-668-1250</p>
  <p>FAX:(908) 755-9567</p>
  <p>info@ateeca.com</p>
  <br/>
  <b>Registered Address:</b><br/>
  <p>2445, Canterbury Lane, Hartland Commons,
  North Brunswick Township, NJ 08902, United States</p>
  <p>+1 908-668-1250</p>
</div>
<div className="col-4">
  <p><b>News</b></p>
  <hr/>
  <div>
  <div className="card mb-3" style={{width: "10"}}>
        <div className="card-body" >
        <h5 className="card-title" style={{color:"blue"}}>Pharma & Life Sciences</h5>
        <p className="card-text" style={{color:"black"}}>PHARMA & LIFE SCIENCES
Ateeca’s solutions for the
pharmaceutical sector
covers the entire gamut..{'>>'}</p>
<p style={{color:"blue"}}> <a href="#">Read More {'>>>'}</a></p>
      </div>
    </div>
  </div>
</div>
<div className="col-3" >
  <p><b>INDUSTRY FOCUS</b></p>
  <hr/>
  <p><a href="#"style={{color:"white"}} >Insurance</a></p>
<p><a href="#" style={{color:"white"}}>Banking & Finance</a></p>
<p><a href="#" style={{color:"white"}}>Pharma & Life Sciences</a></p>
<p><a href="#" style={{color:"white"}}>Energy & Utilities</a></p>
<p><a href="#" style={{color:"white"}}>Retail</a></p>
<p><a href="#" style={{color:"white"}}>Telecom</a></p>
<p><a href="#" style={{color:"white"}}>Media</a></p>
<br/>
<p><b>TECHNOLOGY FOCUS</b></p>
<hr/>
<p><a href="#" style={{color:"white"}}>Microsoft</a></p>
<p><a href="#" style={{color:"white"}}>Java Technologies</a></p>
<p><a href="#" style={{color:"white"}}>IBM AS/400</a></p>
<p><a href="#" style={{color:"white"}}>Database</a></p>
<p><a href="#" style={{color:"white"}}>Testing</a></p>
</div>
  

<div className="col-1"></div>
</div>
</Card>
</div>
<div><Card.Footer style={{backgroundColor:"orangered"}}><center>© Copyright 2021. Ateeca. All Rights Reserved. Designed By Honeycomb</center></Card.Footer></div>

    </div>
        )
    }
}
export default Home;