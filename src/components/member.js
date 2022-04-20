import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

class Member extends Component {
    constructor(props) {
        super(props);
        this.state = {
            start: true,
        }
    }
    
    componentWillMount() {
      
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <>
                <section className='memberSection bgImg'>
                    <Container>
                        <div className="heading text-center">
                            <h2>TURF</h2>
                            <h4>Become a member !</h4>
                        </div>
                        <div className='memberBox_row'>
                            <div className='memberBox'>
                                <div className='memberShipPlan'>
                                    <h2>Annual Fee</h2>
                                    <h1>$ 95</h1>
                                </div>
                                <div className='memberShipContent'>
                                    <ul>
                                        <li>Lorem ipsum dolor sit amet</li>
                                        <li>consectetur adipiscing elit</li>
                                        <li>Morbi lacinia sagittis acum</li>
                                        <li>Proin lacinia vehicula amet</li>
                                    </ul>
                                </div>
                                <div className='memberShipBtn'>
                                    <button className='main_btn'>SUBSCRIBE</button>
                                </div>
                            </div>
                            <div className='memberBox center'>
                                <div className='memberShipPlan'>
                                    <h2>Monthly Access</h2>
                                    <h1>$ 134</h1>
                                </div>
                                <div className='memberShipContent'>
                                    <ul>
                                        <li>Proin lacinia vehicula amet</li>
                                        <li>Lorem ipsum dolor sit amet</li>
                                        <li>Morbi lacinia sagittis acum</li>
                                        <li>consectetur adipiscing elit</li>
                                        <li>Proin lacinia vehicula amet</li>
                                    </ul>
                                </div>
                                <div className='memberShipBtn'>
                                    <button className='main_btn'>SUBSCRIBE</button>
                                </div>
                            </div>
                            <div className='memberBox'>
                                <div className='memberShipPlan'>
                                    <h2>Child Fare</h2>
                                    <h1>$ 73</h1>
                                </div>
                                <div className='memberShipContent'>
                                    <ul>
                                        <li>Lorem ipsum dolor sit amet</li>
                                        <li>consectetur adipiscing elit</li>
                                        <li>Morbi lacinia sagittis acum</li>
                                        <li>Proin lacinia vehicula amet</li>
                                    </ul>
                                </div>
                                <div className='memberShipBtn'>
                                    <button className='main_btn'>SUBSCRIBE</button>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>
            </>
        );
    }
}

export default Member;