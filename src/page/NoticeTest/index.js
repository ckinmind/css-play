import React from 'react';
import  NotificationSystem from '../../components/Notification/NotificationSystem';
import CustomElement from './CustomElement';
import Notification from '../../components/Notification2';
const notification = Notification.newInstance({});

class NoticeTest extends React.Component{
    constructor(props){
        super(props);
        this._notificationSystem = null;
        this.counter = 0;
        this.noticeCase = [
            {
                title: 'Hey, it\'s good to see you!',
                message: 'Now you can see how easy it is to use notifications in React!',
                level: 'success',
                position: 'tr',
                action: {
                    label: 'Awesome!',
                    callback: function() {
                        console.log('Clicked');
                    }
                }
            },
            {
                title: 'Hey, it\'s good to see you!',
                message: 'I come with custom content!',
                level: 'success',
                position: 'tr',
                children: (
                    <div>
                        <CustomElement name="I'm a prop"/>
                    </div>
                )
            },
            {
                title: 'I\'ll be here forever!',
                message: 'Just kidding, you can click me.',
                level: 'success',
                position: 'tr',
                autoDismiss: 0
            },
            {
                title: 'Bad things can happen too!',
                message: 'Four notification types: `success`, `error`, `warning` and `info`',
                level: 'error',
                position: 'tl'
            },
            {
                title: 'Advise!',
                message: 'Showing all possible notifications works better on a larger screen',
                level: 'info',
                position: 'tc'
            },
            {
                title: 'Warning!',
                message: 'It\'s not a good idea show all these notifications at the same time!',
                level: 'warning',
                position: 'bc',
                action: {
                    label: 'Got it!'
                }
            },
            {
                title: 'Success!',
                message: 'I\'m out of ideas',
                level: 'success',
                position: 'bl'
            },
            {
                title: 'I\'m here forever...',
                message: 'Until you click me.',
                autoDismiss: 0,
                level: 'error',
                position: 'br'
            }
        ]
    }

    showNotice(e) {
        e.preventDefault();
        if( this.counter == this.noticeCase.length-1){
            this.counter = 0;
        }
        this._notificationSystem.addNotification(this.noticeCase[this.counter]);
        this.counter ++;
    }

    showNotice2(){
        notification.notice({
            content: <span>simple show</span>,
            // duration: null,
            onClose: ()=>{console.log('simple close')},
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.showNotice.bind(this)}>Add notification1</button>
                <button onClick={this.showNotice2.bind(this)}>Add notification2</button>
                <NotificationSystem ref={node => this._notificationSystem = node} />
            </div>
        );
    }
}

export default NoticeTest;