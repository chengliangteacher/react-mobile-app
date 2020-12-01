import React from 'react';
interface props {
    history: any;
}
interface stateTypes {
    loading: boolean;
    imgcode: string;
}
export default class Login extends React.Component<props, stateTypes> {
    render() {
        return (
            <div>
                login
            </div>
        );
    }
}
