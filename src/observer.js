import React from 'react';
import { Observable, fromEvent, timer  } from 'rxjs';
import {filter,map,debounceTime,buffer} from 'rxjs/operators';




const Observer = (props) => {
    const click$ = Observable.fromEvent(button, 'click');

    click$
        .buffer(click$.debounceTime(300))
        .map(a => a.length)
        .filter(x => x === 2)
        .subscribe(props => props.do);
    }

export default Observer;