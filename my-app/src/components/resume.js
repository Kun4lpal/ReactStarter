import React, { Component } from 'react';
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: 'center' }}>
                            <img
                                src="https://occ-0-33-37.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABYQp33Z3D9uGJK0IZsYfvENQpSz4zoSrjb8v5CCl4UTiFDe7Z_yovhieDFhJtGm2Rh4LoleJfHwHdyRDMtezwqojkDXH.jpg?r=77f"
                                alt="avatar"
                                style={{ height: '250px' }}
                            />
                        </div>
                        <h2 style={{ paddingTop: '2em' }}>Kunal Paliwal</h2>
                        <h4 style={{ color: 'grey' }}>Programmer</h4>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
                            Preserved defective offending he daughters on or. Rejoiced prospect yet material servants out answered men admitted. Sportsmen certainty prevailed suspected am as.
                            Add stairs admire all answer the nearer yet length. Advantages prosperous remarkably my inhabiting so reasonably be if. Too any appearance announcing impossible one. Out mrs means heart ham tears shall power every.
                        </p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <h5>Address</h5>
                        <p>9914 gable right</p>
                        <h5>Phone</h5>
                        <p>922@gmaul.com</p>
                        <h5>Web</h5>
                        <p>MyWebsite</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h1>Education</h1>
                        <Education
                            startYear={2010}
                            endYear={2014}
                            schoolName="Manipal University"
                            schoolDescription="Residence certainly elsewhere something she preferred cordially law. Age his surprise formerly mrs perceive few stanhill moderate. Of in power match on truth worse voice would. Large an it sense shall an match learn. By expect it result silent in formal of. Ask eat questions abilities described elsewhere assurance. Appetite in unlocked advanced breeding position concerns as. Cheerful get shutters yet for repeated screened. An no am cause hopes at three. Prevent behaved fertile he is mistake on. "
                        />
                        <Education
                            startYear={2016}
                            endYear={2018}
                            schoolName="Syracuse University"
                            schoolDescription="Residence certainly elsewhere something she preferred cordially law. Age his surprise formerly mrs perceive few stanhill moderate. Of in power match on truth worse voice would. Large an it sense shall an match learn. By expect it result silent in formal of. Ask eat questions abilities described elsewhere assurance. Appetite in unlocked advanced breeding position concerns as. Cheerful get shutters yet for repeated screened. An no am cause hopes at three. Prevent behaved fertile he is mistake on. "
                        />
                        <hr style={{ borderTop: '3px solid #e22947' }} />
                        <h1>Experience</h1>
                        <Experience
                            startYear={2018}
                            endYear={2019}
                            joblName="FINRA"
                            jobDescription="Residence certainly elsewhere something she preferred cordially law. Age his surprise formerly mrs perceive few stanhill moderate. Of in power match on truth worse voice would. Large an it sense shall an match learn. By expect it result silent in formal of. Ask eat questions abilities described elsewhere assurance. Appetite in unlocked advanced breeding position concerns as. Cheerful get shutters yet for repeated screened. An no am cause hopes at three. Prevent behaved fertile he is mistake on. "
                        />
                        <hr style={{ borderTop: '3px solid #e22947' }} />
                        <h1>Skills</h1>
                        <Skills
                            skill="javascript"
                            progress={100}
                        />
                        <Skills
                            skill="java"
                            progress={76}
                        />
                        <Skills
                            skill="C++"
                            progress={56}
                        />
                        <hr style={{ borderTop: '3px solid #e22947' }} />
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Resume;