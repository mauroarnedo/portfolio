import React from "react";
import { Container, OverlayTrigger, Tooltip } from "react-bootstrap";
import htmlLogo from '../../Icons/Skills/html.png';
import cssLogo from '../../Icons/Skills/css.png';
import jsLogo from '../../Icons/Skills/javascript.png';
import tsLogo from '../../Icons/Skills/typescript.png';
import reactLogo from '../../Icons/Skills/react.png';
import reduxLogo from '../../Icons/Skills/redux.png';
import nodeLogo from '../../Icons/Skills/nodejs.png';
import goLogo from '../../Icons/Skills/go.png';
import pgLogo from '../../Icons/Skills/postgresql.png';
import mongoLogo from '../../Icons/Skills/mongodb.png';

function Skills() {
    return (
        <div id='skills' className="contain">
            <div className="d-flex flex-column align-items-center justify-content-center web p-0">
                <h1 className="subtitle">Skills</h1>
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
            <Container>
                <div className="d-flex flex-row flex-wrap justify-content-center skills">
                    <div>
                        <OverlayTrigger
                            placement="top"
                            delay={{ show:250, hide:200 }}
                            overlay={<Tooltip id="button-tooltip">Html</Tooltip>}
                        >
                            <img src={htmlLogo} alt="html" />
                        </OverlayTrigger>
                    </div>
                    <div>
                        <OverlayTrigger
                            placement="top"
                            delay={{ show:250, hide:200 }}
                            overlay={<Tooltip id="button-tooltip">Css</Tooltip>}
                        >
                            <img src={cssLogo} alt="css" />
                        </OverlayTrigger>
                    </div>
                    <div>
                        <OverlayTrigger
                            placement="top"
                            delay={{ show:250, hide:200 }}
                            overlay={<Tooltip id="button-tooltip">Javascript</Tooltip>}
                        >
                            <img src={jsLogo} alt="javascript" />
                        </OverlayTrigger>
                    </div>
                    <div>
                        <OverlayTrigger
                            placement="top"
                            delay={{ show:250, hide:200 }}
                            overlay={<Tooltip id="button-tooltip">Typescript</Tooltip>}
                        >
                            <img src={tsLogo} alt="typescript" />
                        </OverlayTrigger>
                    </div>
                    <div>
                        <OverlayTrigger
                            placement="top"
                            delay={{ show:250, hide:200 }}
                            overlay={<Tooltip id="button-tooltip">React</Tooltip>}
                        >
                            <img src={reactLogo} alt="react" />
                        </OverlayTrigger>
                    </div>
                    <div>
                        <OverlayTrigger
                            placement="top"
                            delay={{ show:250, hide:200 }}
                            overlay={<Tooltip id="button-tooltip">Redux</Tooltip>}
                        >
                            <img src={reduxLogo} alt="redux" />
                        </OverlayTrigger>
                    </div>
                    <div>
                        <OverlayTrigger
                            placement="top"
                            delay={{ show:250, hide:200 }}
                            overlay={<Tooltip id="button-tooltip">NodeJs</Tooltip>}
                        >
                            <img src={nodeLogo} alt="node" />
                        </OverlayTrigger>
                    </div>
                    <div>
                        <OverlayTrigger
                            placement="top"
                            delay={{ show:250, hide:200 }}
                            overlay={<Tooltip id="button-tooltip">Golang</Tooltip>}
                        >
                            <img src={goLogo} alt="Golang" />
                        </OverlayTrigger>
                    </div>
                    <div>
                        <OverlayTrigger
                            placement="top"
                            delay={{ show:250, hide:200 }}
                            overlay={<Tooltip id="button-tooltip">PostgreSQL</Tooltip>}
                        >
                            <img src={pgLogo} alt="postgres" />
                        </OverlayTrigger>
                    </div>
                    <div>
                        <OverlayTrigger
                            placement="top"
                            delay={{ show:250, hide:200 }}
                            overlay={<Tooltip id="button-tooltip">MongoDb</Tooltip>}
                        >
                            <img src={mongoLogo} alt="mongo" />
                        </OverlayTrigger>
                    </div>
                </div>
            </Container>    
        </div>
    );
}

export default Skills;