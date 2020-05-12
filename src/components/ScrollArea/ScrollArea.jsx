import React, {Component} from 'react';
import './ScrollArea.sass';
import { FullPage, Slide } from 'react-full-page';

class ScrollArea extends Component{
    render() {
        return (
            <div className="scrollArea">
                <FullPage controlsProps={{}}>
                    <Slide>
                        <div className="scrollArea__screen scrollArea__screen--first"></div>
                    </Slide>
                    <Slide>
                        <div className="scrollArea__screen scrollArea__screen--second"></div>
                    </Slide>
                    <Slide>
                        <div className="scrollArea__screen scrollArea__screen--third"></div>
                    </Slide>
                </FullPage>
            </div>
        );
    }
};

export default ScrollArea;