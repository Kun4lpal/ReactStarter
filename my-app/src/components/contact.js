import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Kunal Paliwal</h2>
                        <img
                            src="https://occ-0-33-37.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABYQp33Z3D9uGJK0IZsYfvENQpSz4zoSrjb8v5CCl4UTiFDe7Z_yovhieDFhJtGm2Rh4LoleJfHwHdyRDMtezwqojkDXH.jpg?r=77f"
                            alt="avatar"
                            style={{ height: '250px' }}
                        />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
                            Preserved defective offending he daughters on or. Rejoiced prospect yet material servants out answered men admitted. Sportsmen certainty prevailed suspected am as.
                            Add stairs admire all answer the nearer yet length. Advantages prosperous remarkably my inhabiting so reasonably be if. Too any appearance announcing impossible one. Out mrs means heart ham tears shall power every.
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '15px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-phone-square" aria-hidden="true">
                                                315 876 8002
                                        </i>
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '15px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-fax" aria-hidden="true">
                                                315 876 8002
                                        </i>
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '15px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-envelope" aria-hidden="true">
                                                kupaliwa@syr.edu
                                        </i>
                                    </ListItemContent>
                                </ListItem>t>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '15px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-skype" aria-hidden="true">
                                                 Kunal Paliwal
                                        </i>
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Contact;